# API + AI Agent 部署攻略

> 🎯 目标：学会用 API 接入 AI 模型，搭配 AI 编程工具（Claude Code、Trae、Cursor 等），打造自己的 AI Agent 工作流。

## 为什么你需要了解 API + Agent？

```
普通用户：在网页上打字聊天 → 一次只能做一件事
进阶用户：通过 API + Agent → AI 自动完成复杂任务、写代码、部署项目
```

掌握 API + Agent，你就能：
- 让 AI **在你的电脑上直接帮你写代码、改文件、运行命令**
- 用 **国产便宜 API**（如 DeepSeek）驱动国际顶级工具
- 搭建自己的 AI 自动化工作流

## 前置知识

| 概念 | 说明 | 你需要知道的 |
|------|------|------------|
| API | AI 模型的在线接口 | 通过 API Key 调用，按 Token 计费 |
| API Key | 调用 API 的密钥 | 在 AI 平台注册后获取，类似密码 |
| Agent | AI 智能体 | 能自主执行多步任务的 AI |
| 终端/Terminal | 命令行窗口 | 输入文字命令操作电脑 |
| IDE | 集成开发环境 | 写代码的工具（如 VS Code、Cursor） |

---

## 第一步：获取 API Key

### DeepSeek API（推荐，性价比最高）

**官网**：https://platform.deepseek.com

```
1. 访问 https://platform.deepseek.com
2. 用手机号注册/登录
3. 进入 "API Keys" 页面
4. 点击 "创建 API Key"
5. 复制保存好 Key（只显示一次！）
6. 充值少量余额（最低 10 元，可用很久）
```

**价格参考**（2026年）：

| 模型 | 输入价格 | 输出价格 | 说明 |
|------|---------|---------|------|
| deepseek-chat (V4) | ¥2/百万 Token | ¥8/百万 Token | 日常对话、写作 |
| deepseek-reasoner (R2) | ¥4/百万 Token | ¥16/百万 Token | 深度推理、数学 |
| deepseek-v4-pro | ¥8/百万 Token | ¥32/百万 Token | 最强能力 |
| deepseek-v4-flash | ¥0.5/百万 Token | ¥2/百万 Token | 快速+超便宜 |

> 💡 10 元充值用 deepseek-chat，大约可以处理 **500 万次**输入 Token，日常使用可以用几个月。

### 其他平台 API

| 平台 | 网址 | 特点 |
|------|------|------|
| 阿里百炼 (Qwen) | https://dashscope.aliyun.com | 免费额度多，Qwen3 模型强 |
| 智谱 BigModel | https://open.bigmodel.cn | GLM-5 模型，有免费额度 |
| OpenAI | https://platform.openai.com | GPT-5.5，需外币支付 |
| Anthropic | https://console.anthropic.com | Claude 4.x，需外币支付 |
| Google AI Studio | https://aistudio.google.com | Gemini 3.1，有免费额度 |

---

## 第二步：DeepSeek + Claude Code（最强组合）

**Claude Code** 是 Anthropic 推出的终端 AI 编程助手，它可以在你的电脑上直接帮你写代码、改文件、运行命令。最棒的是，你可以用 **DeepSeek 的便宜 API** 来驱动它！

### 安装 Claude Code

```bash
# 1. 先安装 Node.js 18+（如果没有的话）
# 访问 https://nodejs.org 下载安装

# 2. 安装 Claude Code
npm install -g @anthropic-ai/claude-code

# 3. 验证安装成功
claude --version
```

### 配置 DeepSeek API

**Windows (PowerShell)**：
```powershell
$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="你的DeepSeek API Key"
$env:ANTHROPIC_MODEL="deepseek-chat"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-chat"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
```

**Mac / Linux (Terminal)**：
```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN="你的DeepSeek API Key"
export ANTHROPIC_MODEL="deepseek-chat"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-chat"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"
```

### 开始使用

```bash
# 进入你的项目目录
cd /path/to/my-project

# 启动 Claude Code
claude

# 然后直接用中文对话：
> 帮我创建一个 React 项目，做一个待办事项应用
> 帮我看看这个代码有什么 Bug
> 帮我把这个函数优化一下
> 帮我写单元测试
```

### Claude Code 能做什么？

| 能力 | 说明 |
|------|------|
| 📝 写代码 | 根据你的描述自动生成完整代码 |
| 🔧 改文件 | 直接修改项目中的文件 |
| ▶️ 运行命令 | 执行终端命令（npm install 等） |
| 🐛 调试 | 发现并修复代码中的 Bug |
| 📖 理解项目 | 分析整个项目的代码结构 |
| 🧪 写测试 | 自动生成单元测试 |
| 📦 Git 操作 | 提交代码、创建分支等 |

---

## 第三步：Trae — 字节跳动的 AI IDE（中文友好）

**Trae** 是字节跳动推出的 AI 原生 IDE，基于 VS Code 内核，对中文开发者非常友好。

**官网**：https://www.trae.ai（国际版）/ https://www.trae.cn（国内版）

### 三种工作模式

| 模式 | 说明 | 适合 |
|------|------|------|
| Chat | 和 AI 对话，获取建议和解释 | 学习、问答 |
| Builder | AI 辅助编码，你来确认每步 | 日常开发 |
| **SOLO** | AI 自主完成整个任务 | 快速原型、简单项目 |

### 安装和使用

```
1. 访问 https://www.trae.ai 或 https://www.trae.cn
2. 下载安装包（支持 Windows / Mac）
3. 安装后打开（界面类似 VS Code）
4. 内置 DeepSeek 和豆包模型，无需额外配置
5. 按 Ctrl+L 打开 AI 聊天面板
6. 选择模式（Chat / Builder / SOLO）
7. 用中文描述你要做什么
```

### Trae 的优势

- **完全免费**：内置 AI 模型，无需付费
- **中文优化**：对中文 Prompt 理解准确
- **SOLO 模式**：AI 自主完成从需求到代码的全流程
- **实时预览**：前端项目可以实时看到效果
- **基于 VS Code**：支持 VS Code 所有插件

---

## 第四步：Cursor — 最热门的 AI 编程编辑器

**官网**：https://cursor.com

### 安装和配置

```
1. 访问 https://cursor.com 下载
2. 安装后打开（基于 VS Code，一键导入设置）
3. 免费版可用（2000 次补全 + 50 次高级请求/月）
4. 按 Ctrl+L 打开 AI 聊天
5. 按 Tab 接受 AI 代码建议
```

### 接入 DeepSeek API（省钱方案）

```
1. 打开 Cursor → Settings → Models
2. 添加 OpenAI Compatible 模型
3. Base URL: https://api.deepseek.com
4. API Key: 你的 DeepSeek Key
5. Model: deepseek-chat
6. 保存后即可使用 DeepSeek 驱动 Cursor
```

> 💡 这样你既有 Cursor 优秀的 IDE 体验，又享受 DeepSeek 的低价 API。

---

## 第五步：Qoder — 阿里的 Agentic 编程平台

**官网**：https://qoder.com

**Qoder** 是阿里巴巴 2025 年推出的 Agentic 编程平台，特点是 AI 主导开发流程：

| 特点 | 说明 |
|------|------|
| 智能代码检索 | 自动理解整个项目的代码结构 |
| Agent 模式 | AI 自主完成需求分析→编码→测试的全流程 |
| 多模型支持 | 支持通义千问、DeepSeek 等多种模型 |
| 自动化测试 | 自动编写和运行测试用例 |
| 文档生成 | 自动生成代码文档和注释 |

### 使用方式

```
1. 访问 https://qoder.com 下载
2. 安装后打开项目
3. 使用 AI 聊天面板描述需求
4. Qoder 自动生成代码并提交
```

---

## 工具选择决策树

```
你的编程需求是什么？
├── 完全零基础，想做个小项目
│   ├── 最简单 → Bolt.new（浏览器里做）
│   ├── 想学编程 → Trae SOLO 模式（免费+中文友好）
│   └── 想做网站 → v0.dev + Vercel 部署
│
├── 有一定基础，想提效
│   ├── 要最强 AI → Claude Code + DeepSeek API
│   ├── 要最好用的 IDE → Cursor + DeepSeek API
│   ├── 要免费方案 → Trae（内置 AI 完全免费）
│   └── 要全流程 Agent → Qoder / Trae SOLO
│
└── 团队协作 / 企业级
    ├── GitHub Copilot（团队标配）
    ├── Cursor Pro（最强 IDE 体验）
    └── Qoder（阿里生态整合）
```

## 推荐的学习路径

```
第 1 天：安装 Trae，用 SOLO 模式做一个简单网页
第 2 天：注册 DeepSeek API，了解 API Key 和计费
第 3 天：安装 Claude Code，配置 DeepSeek API
第 4 天：用 Claude Code 完成一个小项目（如个人博客）
第 5 天：尝试 Cursor，对比不同工具的体验
第 6 天+：选择一个最顺手的工具，深入学习
```

## 费用对比

| 方案 | 月费用 | AI 能力 | 上手难度 |
|------|--------|--------|---------|
| Trae（内置模型） | **¥0** | ⭐⭐⭐⭐ | ⭐ 简单 |
| Claude Code + DeepSeek API | **¥10-50** | ⭐⭐⭐⭐⭐ | ⭐⭐ 中等 |
| Cursor 免费版 + DeepSeek API | **¥10-30** | ⭐⭐⭐⭐⭐ | ⭐⭐ 中等 |
| Cursor Pro | **¥145** ($20) | ⭐⭐⭐⭐⭐ | ⭐⭐ 中等 |
| Claude Pro + Claude Code | **¥145** ($20) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ 较难 |
| GitHub Copilot | **¥72** ($10) | ⭐⭐⭐⭐ | ⭐⭐ 中等 |

> 💡 **新手推荐**：先用 **Trae（免费）** 入门，熟悉后再用 **Claude Code + DeepSeek API** 获得最强体验。

---

## 常见问题

### Q: 我完全不会编程，能用这些工具吗？
**A**: 可以！Trae SOLO 模式和 Bolt.new 都不需要编程基础，用中文描述需求即可。Claude Code 也可以帮你从零开始写代码。

### Q: API 费用贵吗？
**A**: DeepSeek API 非常便宜。10 元充值，日常编程使用可以用 1-3 个月。比订阅 ChatGPT Plus（¥145/月）便宜得多。

### Q: Claude Code 和 Cursor 哪个好？
**A**: 各有所长。Claude Code 在终端中运行，适合喜欢命令行的用户，多文件理解能力更强；Cursor 是图形界面 IDE，操作更直观，适合大多数用户。

### Q: 这些工具能在 Windows 上用吗？
**A**: 都可以。Trae、Cursor、Qoder 都有 Windows 版本。Claude Code 需要安装 Git for Windows 后在终端中使用。

---

[← 上一篇：AI 辅助学习工作](/tutorials/ai-learning-work) | [前往第四章：避坑指南 →](/pitfalls/ai-hallucination)
