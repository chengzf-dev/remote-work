const { execSync } = require("node:child_process");
const fs = require("node:fs");

function loadEnvFromDotenv() {
  const envPath = ".env";
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, "utf8");
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFromDotenv();

const { DEEPSEEK_API_KEY, GH_TOKEN } = process.env;

if (!DEEPSEEK_API_KEY) {
  console.error("DEEPSEEK_API_KEY 未设置，跳过 DeepSeek 监听。");
  process.exit(0);
}

if (!GH_TOKEN) {
  console.error("GH_TOKEN 未设置，跳过 GitHub 访问。");
  process.exit(0);
}

function getRepoInfo() {
  try {
    const url = execSync("git remote get-url origin", {
      encoding: "utf8",
    }).trim();

    const httpsMatch = url.match(/github.com[:/](.+)\/(.+?)(\.git)?$/);
    if (httpsMatch) {
      const owner = httpsMatch[1];
      const repo = httpsMatch[2];
      return { owner, repo };
    }
    throw new Error("无法解析仓库地址: " + url);
  } catch (err) {
    console.error("获取 GitHub 仓库信息失败，请先配置 git remote origin。");
    console.error(String(err));
    process.exit(0);
  }
}

async function callGitHub(path, options = {}) {
  const base = "https://api.github.com";
  const res = await fetch(base + path, {
    method: options.method || "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GH_TOKEN}`,
      "User-Agent": "deepseek-codex-listener",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `GitHub API 请求失败: ${res.status} ${res.statusText} - ${text}`
    );
  }

  return res.json();
}

async function callDeepSeek(diffText) {
  const url = "https://api.deepseek.com/v1/chat/completions";

  const prompt =
    "你是一个严格的代码审查助手，专门审查 Codex 自动生成的 LeetCode 题目解法。" +
    "请基于下面的 Pull Request diff，检查：\n" +
    "1）算法是否正确；2）时间和空间复杂度是否满足要求；3）测试用例是否充分且期望值正确；" +
    "4）是否有明显的边界情况漏洞。\n\n" +
    "请返回一个简洁的审查结果：\n" +
    "- 一段总体评价\n" +
    "- 必要时列出问题点和改进建议\n\n" +
    "下面是 diff：\n\n" +
    diffText.slice(0, 12000);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `DeepSeek API 请求失败: ${res.status} ${res.statusText} - ${text}`
    );
  }

  const data = await res.json();
  const text =
    data.choices &&
    data.choices[0] &&
    data.choices[0].message &&
    data.choices[0].message.content;

  return text || "DeepSeek 未返回可用文本。";
}

async function getOpenCodexPRs(owner, repo) {
  const prs = await callGitHub(
    `/repos/${owner}/${repo}/pulls?state=open&sort=created&direction=desc`
  );

  return prs.filter((pr) =>
    Array.isArray(pr.labels)
      ? pr.labels.some((label) => label.name === "codex-submission")
      : false
  );
}

async function getPRDiff(owner, repo, number) {
  const files = await callGitHub(
    `/repos/${owner}/${repo}/pulls/${number}/files`
  );

  const patches = files
    .map((f) => {
      const header = `--- ${f.filename}\n+++ ${f.filename}\n`;
      return header + (f.patch || "");
    })
    .join("\n\n");

  return patches || "此 PR 没有可用 diff（可能是空 PR）。";
}

async function commentOnPR(owner, repo, number, body) {
  await callGitHub(`/repos/${owner}/${repo}/issues/${number}/comments`, {
    method: "POST",
    body: { body },
  });
}

async function main() {
  const { owner, repo } = getRepoInfo();
  console.log(`当前仓库: ${owner}/${repo}`);

  const prs = await getOpenCodexPRs(owner, repo);

  if (!prs.length) {
    console.log("当前没有带 codex-submission 标签的打开 PR。");
    return;
  }

  for (const pr of prs) {
    console.log(`处理 PR #${pr.number}: ${pr.title}`);

    const diff = await getPRDiff(owner, repo, pr.number);
    const review = await callDeepSeek(diff);

    const body =
      "🤖 **DeepSeek 自动审查报告**\n\n" +
      review +
      "\n\n---\n" +
      "_本评论由 DeepSeek 依据 Codex 提交的 diff 自动生成，请在合并前进行人工复核。_";

    await commentOnPR(owner, repo, pr.number, body);
    console.log(`已为 PR #${pr.number} 添加 DeepSeek 审查评论。`);
  }
}

main().catch((err) => {
  console.error("运行 deepseek 监听脚本失败：", err);
  process.exit(1);
});
