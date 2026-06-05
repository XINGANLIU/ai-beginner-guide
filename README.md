# AI 小白入门指南

> 让每个人都能用好 AI —— 从零开始，掌握人工智能的最新工具与实践技能

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![VitePress](https://img.shields.io/badge/VitePress-latest-green)

## 这是什么？

一个完全免费、面向零基础用户的 AI 学习网站。涵盖 28 个章节，从"AI 是什么"讲到"如何用 AI 赚钱"，帮你用最短的时间上手各种 AI 工具。

## 在线浏览

直接点击访问，无需安装任何软件：

**https://XINGANLIU.github.io/ai-beginner-guide/**

---

## 内容目录

| 章节 | 内容 |
|------|------|
| [第一章：AI 是什么](https://XINGANLIU.github.io/ai-beginner-guide/guide/what-is-ai) | 概念解析、术语对照、AI 能做什么 |
| [第二章：AI 工具大全](https://XINGANLIU.github.io/ai-beginner-guide/tools/) | 对话/绘画/视频/音乐/办公/编程工具 |
| [第三章：快速上手教程](https://XINGANLIU.github.io/ai-beginner-guide/tutorials/chatgpt-guide) | ChatGPT 注册、Prompt 工程、AI 写作办公、API 部署 |
| [第四章：避坑指南](https://XINGANLIU.github.io/ai-beginner-guide/pitfalls/ai-hallucination) | AI 幻觉、隐私安全、付费选择、常见骗局 |
| [第五章：进阶之路](https://XINGANLIU.github.io/ai-beginner-guide/advanced/ai-agent) | AI Agent、RAG 知识库、AI 变现、学习资源 |
| [附录](https://XINGANLIU.github.io/ai-beginner-guide/appendix/glossary) | 术语速查表、工具对比、FAQ |

**新手推荐阅读顺序：**

1. 先看 [学习路径图](https://XINGANLIU.github.io/ai-beginner-guide/guide/learning-path) — 了解整体学习路线
2. 跟着 [一周学习计划](https://XINGANLIU.github.io/ai-beginner-guide/guide/weekly-plan) — 每天 30 分钟，7 天入门
3. 遇到问题查 [FAQ](https://XINGANLIU.github.io/ai-beginner-guide/appendix/faq)

---

## 想在本地运行？

如果你想在电脑上离线查看或修改内容，按以下步骤操作：

### 前提条件

- 安装 [Node.js](https://nodejs.org/)（版本 18 以上，安装时一路"下一步"即可）
- 安装 [Git](https://git-scm.com/)（安装时一路"下一步"即可）

### 步骤

打开终端（Windows 搜索"PowerShell"，Mac 打开"终端"），依次输入以下命令：

```bash
# 第 1 步：下载项目到本地
git clone https://github.com/XINGANLIU/ai-beginner-guide.git
cd ai-beginner-guide

# 第 2 步：安装依赖（只需运行一次）
npm install

# 第 3 步：启动网站
npm run docs:dev
```

看到类似下面的输出就说明成功了：

```
  vitepress v1.6.4
  ➜  Local:   http://localhost:5173/ai-beginner-guide/
```

用浏览器打开 http://localhost:5173/ai-beginner-guide/ 即可查看网站。

> **提示**：按 `Ctrl + C` 可以停止网站运行。下次想看时，只需再执行 `npm run docs:dev`。

---

## 特色

- **零基础友好** — 不需要任何编程或技术背景
- **中文优先** — 优先推荐支持中文的 AI 工具（DeepSeek、Kimi、通义千问等）
- **步骤详细** — 每个工具都有手把手的注册和使用教程
- **持续更新** — AI 领域日新月异，本指南会持续跟进最新工具和方法
- **开源免费** — 完全免费，欢迎 Star、贡献内容

## 技术栈

- [VitePress](https://vitepress.dev/) — 基于 Vue 3 的静态文档框架
- 自动部署到 GitHub Pages（通过 GitHub Actions）

## 贡献

欢迎贡献内容！你可以：

1. **提交 Issue** — 报告错误、提出建议
2. **提交 PR** — 修正内容、添加新章节
3. **分享使用心得** — 让更多人受益

### 贡献步骤

1. Fork 本仓库
2. 创建你的分支 (`git checkout -b feature/新功能`)
3. 修改内容
4. 提交 Pull Request

## 许可证

本项目基于 [MIT 许可证](LICENSE) 开源

---

如果这个项目对你有帮助，请给一个 Star 支持！
