# 编程辅助 AI 工具

> 🎯 目标：了解 AI 编程工具，即使不会写代码也能借助 AI 做简单开发。

## 工具一览

| 工具 | 价格 | 最大特点 | 支持平台 | 零基础友好 |
|------|------|---------|-----------|----------|
| Claude Code | 按 API 计费 | 2026 年最强 AI 编程 Agent | 终端 (CLI) | ⭐⭐⭐ |
| Cursor | 免费版+Pro($20/月) | 最热门 AI 编程编辑器 | Windows/Mac/Linux | ⭐⭐⭐ |
| Trae | **完全免费** | 字节跳动 AI IDE，中文友好 | Windows/Mac | ⭐⭐⭐⭐ |
| Qoder | 免费+付费 | 阿里 Agentic 编程平台 | Windows/Mac/Linux | ⭐⭐⭐ |
| GitHub Copilot | $10/月（学生免费） | VS Code 深度集成 | VS Code、JetBrains | ⭐⭐ |
| Windsurf | 免费版+付费 | Cascade 多步推理 | Windows/Mac/Linux | ⭐⭐⭐ |
| Bolt.new | 免费试用 | 浏览器内直接生成应用 | 浏览器 | ⭐⭐⭐⭐⭐ |
| v0.dev | 免费+付费 | Vercel 出品，UI 生成 | 浏览器 | ⭐⭐⭐⭐ |
| Replit Agent | 付费 | 自动开发部署 | 浏览器 | ⭐⭐⭐⭐ |
| Codeium | 免费 | 免费替代 Copilot | 多编辑器 | ⭐⭐ |

## 零基础也能用 AI 写代码？

是的！现在有 **"Vibe Coding"（氛围编程）** 的概念：

> 你只需要用自然语言描述你想要什么，AI 帮你写代码。

```
你说：帮我做一个待办事项网页应用，可以添加、删除、标记完成，要好看
AI：自动生成 HTML/CSS/JS 代码，可以直接运行
```

## 各工具详细介绍

### Claude Code — 2026 年最强 AI 编程 Agent
**官网**：https://claude.com/product/claude-code

- **优势**：SWE-bench 测试第一名，多文件理解能力极强，支持 100 万 Token 上下文
- **使用方式**：在终端/命令行中运行，支持写代码、改文件、执行命令
- **价格**：按 API 计费，可用 DeepSeek API 大幅降低成本
- **适合**：追求最强 AI 编程能力的用户

**安装教程**：
```
1. 安装 Node.js 18+（https://nodejs.org）
2. 终端执行：npm install -g @anthropic-ai/claude-code
3. 配置 API Key（可用 DeepSeek/Anthropic）
4. 进入项目目录，执行 claude 命令
5. 直接用中文描述需求，AI 自动写代码
```

> 💡 **省钱秘籍**：用 DeepSeek API 驱动 Claude Code，费用仅为 Claude 官方 API 的 1/10。详见 [API + Agent 部署攻略](/tutorials/api-agent-deploy)。

### Trae — 字节跳动 AI IDE（中文首选）
**官网**：https://www.trae.ai（国际版）/ https://www.trae.cn（国内版）

- **优势**：完全免费、内置 DeepSeek+豆包模型、中文优化出色
- **三种模式**：Chat（问答）、Builder（辅助编码）、SOLO（AI 自主完成）
- **适合**：**中文用户首选**，尤其是零基础和想学编程的用户

**安装教程**：
```
1. 访问 https://www.trae.ai 或 https://www.trae.cn
2. 下载安装包（Windows/Mac）
3. 安装后打开（界面类似 VS Code）
4. 内置 AI 模型，无需额外配置
5. 按 Ctrl+L 打开 AI 聊天
6. 选择 SOLO 模式，用中文描述需求
```

### Qoder — 阿里 Agentic 编程平台
**官网**：https://qoder.com

- **优势**：Agent 模式、智能代码检索、自动测试和文档生成
- **价格**：免费版可用
- **适合**：追求全流程 AI 开发的用户

### Cursor — 最热门的 AI 编程编辑器
**官网**：https://cursor.com

- **优势**：基于 VS Code，上手快；AI 对话式编程；理解整个项目上下文
- **价格**：免费版（2000次补全+50次高级请求/月），Pro $20/月
- **适合**：有一定编程基础或想学编程的用户

**安装教程**：
```
1. 访问 https://cursor.com 下载安装包
2. 安装后打开（界面类似 VS Code）
3. 如果你之前用 VS Code，可以一键导入设置和插件
4. 按 Cmd+L (Mac) / Ctrl+L (Windows) 打开 AI 聊天面板
5. 用自然语言描述你想做什么，AI 帮你写代码
6. 按 Tab 接受 AI 的代码建议
```

### Bolt.new —— 浏览器里做应用（最适合小白）
**官网**：https://bolt.new

- **优势**：完全在浏览器中运行，不需要安装任何东西
- **使用方式**：直接描述你要做什么，AI 自动创建完整应用
- **适合**：**零基础用户首选**

**使用教程**：
```
1. 访问 https://bolt.new
2. 在对话框描述你想要的应用：
   "帮我做一个番茄钟网页，25分钟倒计时，有开始/暂停/重置按钮"
3. AI 自动生成完整代码
4. 右侧实时预览效果
5. 可以继续对话修改："把按钮改成圆形的，加个好看的渐变背景"
6. 满意后点击 Deploy 部署到线上
```

### v0.dev —— UI 界面生成
**官网**：https://v0.dev

- **优势**：Vercel 出品，专攻 UI 界面生成
- **适合**：快速生成漂亮的前端页面

### Windsurf —— 智能编程新势力
**官网**：https://codeium.com/windsurf

- **优势**：Cascade 功能可以自动理解代码流程，多步骤推理
- **价格**：免费版可用，Pro $15/月
- **适合**：追求更智能编程体验的用户

## 推荐的零基础编程工作流

```
方式一（最简单）：
Bolt.new → 描述需求 → 自动生成 → 一键部署

方式二（免费+强大）：
Trae SOLO → 描述需求 → AI 自主完成 → 实时预览

方式三（最强组合）：
Claude Code + DeepSeek API → 终端中 AI 帮你写代码 → 自动部署

方式四（学编程）：
Cursor → 边写边学 → AI 解释每行代码 → 逐步提升编程能力
```

## 免费部署你的应用

| 平台 | 说明 | 适合 |
|------|------|------|
| Vercel | 一键部署前端项目，免费 | 网页应用 |
| Netlify | 类似 Vercel，免费 | 静态网站 |
| GitHub Pages | 免费托管静态网页 | 文档/博客 |
| Cloudflare Pages | 免费，全球 CDN | 网页应用 |
| Railway | 免费额度部署后端 | API 服务 |

---

[← 上一篇：办公类工具](/tools/office-tools) | [前往第三章：快速上手教程 →](/tutorials/chatgpt-guide)
