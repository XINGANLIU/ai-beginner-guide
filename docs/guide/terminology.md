# AI 术语中英文对照

> 🎯 目标：掌握 AI 及科技领域最常见的术语，中英文对照，帮你无障碍阅读各类 AI 资讯和使用各类工具。

## 一、AI 基础术语

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| AI (Artificial Intelligence) | 人工智能 | 让机器模拟人类智能的技术 |
| ML (Machine Learning) | 机器学习 | AI 的一种实现方式，让机器从数据中自动学习规律 |
| DL (Deep Learning) | 深度学习 | 机器学习的一种，使用多层神经网络处理复杂数据 |
| Neural Network | 神经网络 | 模拟人脑神经连接的计算模型，是深度学习的核心 |
| LLM (Large Language Model) | 大语言模型 | 如 GPT、Claude 这类能理解和生成文本的超大规模 AI |
| NLP (Natural Language Processing) | 自然语言处理 | 让机器理解和生成人类语言的技术 |
| Computer Vision | 计算机视觉 | 让机器"看懂"图片和视频的技术 |
| Reinforcement Learning | 强化学习 | 让 AI 通过"试错-奖励"来学习的方法 |
| Supervised Learning | 监督学习 | 用标注好的数据来训练 AI（像有老师教） |
| Unsupervised Learning | 无监督学习 | 让 AI 自己从数据中发现规律（像自学） |
| Transfer Learning | 迁移学习 | 把在一个任务上学到的知识应用到另一个任务 |
| Generative AI | 生成式 AI | 能创造新内容（文字、图片、音乐等）的 AI |
| AGI (Artificial General Intelligence) | 通用人工智能 | 能像人一样处理任何任务的 AI（尚未实现） |
| ANI (Artificial Narrow Intelligence) | 弱人工智能 | 只能做特定任务的 AI（目前所有 AI 都是） |

## 二、大模型与对话 AI 相关

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| GPT (Generative Pre-trained Transformer) | 生成式预训练变换器 | OpenAI 推出的大模型系列 |
| Transformer | 变换器架构 | 当前几乎所有大模型的底层架构 |
| Token | 词元 | AI 处理文本的基本单位（1个汉字≈1-2个Token） |
| Prompt | 提示词 | 你给 AI 的指令或问题，决定 AI 输出质量的关键 |
| System Prompt | 系统提示词 | 预设的指令，定义 AI 的角色和行为规范 |
| Few-shot Prompting | 少样本提示 | 给 AI 几个示例，让它模仿着回答 |
| Chain of Thought (CoT) | 思维链 | 让 AI 一步步推理，而不是直接跳到答案 |
| Fine-tuning | 微调 | 在预训练模型基础上，用特定数据进一步训练 |
| Pre-training | 预训练 | 在海量数据上的初始训练，让模型学习通用知识 |
| Context Window | 上下文窗口 | AI 一次能处理的最大文本长度（如128K Token） |
| Context Length | 上下文长度 | 当前对话已经消耗的 Token 数 |
| Hallucination | 幻觉 | AI 编造虚假信息却表现得很自信 |
| Grounding | 接地 | 让 AI 的回答基于真实数据，减少幻觉 |
| Temperature | 温度 | 控制 AI 回答随机性的参数（低=严谨，高=创意） |
| Top-P | 核采样 | 另一种控制 AI 输出多样性的参数 |
| Embedding | 嵌入/向量表示 | 把文字转化为数字向量，便于 AI 计算相似度 |
| Inference | 推理 | AI 模型生成回答的过程（区别于训练） |
| Training | 训练 | 用数据教 AI 学习的过程 |
| Loss Function | 损失函数 | 衡量 AI 预测和真实值差距的指标 |
| Overfitting | 过拟合 | AI 把训练数据"背下来"了，遇到新数据反而不行 |
| Benchmark | 基准测试 | 用来评测 AI 能力的标准化测试集 |
| Multimodal | 多模态 | AI 能同时处理文字、图片、音频、视频等多种信息 |
| Alignment | 对齐 | 让 AI 的行为符合人类价值观和意图 |
| RLHF | 基于人类反馈的强化学习 | 用人类评价来训练 AI，让它回答得更好 |
| Jailbreak | 越狱 | 绕过 AI 安全限制的尝试 |
| Guardrails | 护栏/安全机制 | AI 系统内置的安全限制措施 |

## 三、AI Agent（智能体）相关

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| AI Agent | AI 智能体 | 能自主规划、使用工具并完成复杂任务的 AI 系统 |
| Agentic AI | 代理式 AI | 具有自主行动能力的 AI 范式 |
| Multi-Agent | 多智能体 | 多个 AI Agent 协作完成任务 |
| Tool Use / Function Calling | 工具调用 | AI 调用外部工具（搜索、计算器、API等）的能力 |
| Planning | 规划 | AI 把复杂任务拆解为多个步骤的能力 |
| Memory | 记忆 | AI 保存和回忆之前对话/操作的能力 |
| Workflow | 工作流 | 预设的任务执行流程 |
| Orchestration | 编排 | 协调多个 AI 组件或 Agent 协同工作 |
| Autonomous | 自主的 | AI 不需要人类干预就能完成任务 |
| MCP (Model Context Protocol) | 模型上下文协议 | Anthropic 提出的 AI 与外部工具通信的标准协议 |

## 四、RAG 与知识库相关

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| RAG (Retrieval-Augmented Generation) | 检索增强生成 | 让 AI 先查资料再回答，减少幻觉 |
| Vector Database | 向量数据库 | 存储文本向量表示的数据库，用于语义搜索 |
| Knowledge Base | 知识库 | 存储结构化/非结构化知识的系统 |
| Chunking | 分块 | 把长文档切成小段，便于检索和处理 |
| Semantic Search | 语义搜索 | 根据意思而非关键词匹配来搜索 |
| Document Indexing | 文档索引 | 把文档处理成可快速检索的格式 |
| Retrieval | 检索 | 从知识库中找到相关信息的过程 |
| Pipeline | 管道/流水线 | 数据处理的一系列自动化步骤 |

## 五、开发与编程相关

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| API (Application Programming Interface) | 应用程序接口 | 让不同软件之间通信的接口，调用 AI 能力的入口 |
| SDK (Software Development Kit) | 软件开发工具包 | 帮助开发者使用某项技术的工具集合 |
| Git | 分布式版本控制系统 | 程序员用来管理代码修改历史的工具 |
| GitHub | GitHub 代码托管平台 | 全球最大的代码托管网站，微软旗下 |
| Repo (Repository) | 代码仓库 | 存放项目代码和历史的文件夹（Git/GitHub 中的概念） |
| Fork | 复刻 | 复制别人的代码仓库到自己的账号下进行修改 |
| Pull Request (PR) | 拉取请求 | 请求把自己的修改合并到原项目中 |
| Commit | 提交 | 保存一次代码修改的记录 |
| Branch | 分支 | 代码的独立副本，可以在不影响主线的情况下开发 |
| Clone | 克隆 | 把远程仓库完整下载到本地 |
| Open Source | 开源 | 代码公开，任何人都可以使用、查看和修改 |
| Star | 星标 | GitHub 上给项目"点赞"收藏，类似收藏功能 |
| Issue | 议题 | 在 GitHub 上给项目提问题或建议的功能 |
| Vibe Coding | 氛围编程 | 用自然语言描述需求，让 AI 自动写代码的新范式 |
| Copilot | 副驾驶/助手 | 辅助人类工作的 AI 工具（如 GitHub Copilot） |
| Claude Code | Claude 编程工具 | Anthropic 推出的终端 AI 编程 Agent，2026 年最强 |
| Trae | Trae AI IDE | 字节跳动推出的 AI 原生 IDE，免费+中文友好 |
| Qoder | Qoder 编程平台 | 阿里推出的 Agentic 编程平台 |
| FLUX | FLUX 图像模型 | Black Forest Labs 推出的开源图像生成模型，2026 年新王者 |
| Debug | 调试 | 查找和修复代码中错误的过程 |
| Deploy / Deployment | 部署 | 把应用发布到服务器上让用户可以访问 |
| Framework | 框架 | 提供基础结构的代码库，加速开发 |
| Library | 库 | 一组预先写好的代码，可以被其他程序调用 |
| Plugin | 插件 | 为软件添加额外功能的小程序 |
| Extension | 扩展 | 为浏览器或编辑器添加功能的组件 |
| CLI (Command Line Interface) | 命令行界面 | 用文字命令操作电脑的方式（区别于图形界面） |
| Terminal | 终端 | 输入命令行工具的窗口程序 |
| Docker | 容器化工具 | 把应用打包成容器，保证在任何环境都能运行 |
| Cloud | 云计算 | 通过网络提供计算资源（存储、算力等） |
| Server | 服务器 | 运行程序并为其他电脑提供服务的计算机 |
| Local / Localhost | 本地 | 在你自己的电脑上运行（区别于云端） |
| Endpoint | 端点 | API 的具体访问地址 |
| Key / API Key | 密钥 | 调用 API 时的身份验证凭证（要保密！） |
| Latency | 延迟 | 从发送请求到收到回应的时间 |
| Throughput | 吞吐量 | 系统在单位时间内能处理的请求数量 |

## 六、GitHub / 社区常用术语

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| README | 自述文件 | 项目的说明文档，介绍项目是什么、怎么用 |
| License | 许可证 | 规定代码可以被如何使用和分发的法律文件 |
| Contributing | 贡献指南 | 告诉别人如何参与项目开发的文档 |
| Changelog | 更新日志 | 记录每个版本改了什么内容的文件 |
| Roadmap | 路线图 | 项目未来的发展计划和目标 |
| Maintainer | 维护者 | 负责维护和更新项目的人 |
| Contributor | 贡献者 | 为项目贡献过代码或内容的人 |
| Documentation | 文档 | 项目的说明和使用指南 |
| Wiki | 维基 | 项目附带的知识库页面 |
| Release | 发布 | 项目的一个正式版本 |
| Tag / Version | 标签/版本 | 标记某个特定版本的标识符（如 v1.0.0） |
| CI/CD | 持续集成/持续部署 | 自动测试和部署代码的流程 |
| Markdown | 标记语言 | 一种简单的文本格式化语法（.md 文件） |
| YAML | 数据序列化格式 | 常用于配置文件的格式（.yml/.yaml） |
| JSON | 数据交换格式 | 常用于数据传输和配置的文件格式（.json） |

## 七、AI 产品与生态术语

| 英文 | 中文 | 一句话解释 |
|------|------|-----------|
| SaaS (Software as a Service) | 软件即服务 | 通过网页使用的在线软件（如 ChatGPT） |
| PaaS (Platform as a Service) | 平台即服务 | 提供开发运行环境的云服务 |
| Chatbot | 聊天机器人 | 能与人类对话的 AI 程序 |
| Virtual Assistant | 虚拟助手 | 帮用户完成任务的 AI（如 Siri、小爱同学） |
| Voice Cloning | 语音克隆 | 用 AI 复制某人声音的技术 |
| TTS (Text-to-Speech) | 文字转语音 | 把文字变成语音的技术 |
| ASR (Automatic Speech Recognition) | 自动语音识别 | 把语音变成文字的技术（语音转写） |
| OCR (Optical Character Recognition) | 光学字符识别 | 从图片中识别文字的技术 |
| Deepfake | 深度伪造 | 用 AI 生成逼真但虚假的视频/音频 |
| Watermark | 水印 | 标记内容由 AI 生成的隐藏标识 |
| Copyright | 版权 | AI 生成内容的版权归属问题 |
| Freemium | 免费增值模式 | 基础功能免费，高级功能付费的商业模式 |
| Subscription | 订阅 | 按月/年付费使用服务的模式 |
| Paywall | 付费墙 | 需要付费才能访问的内容限制 |
| GPTs / GPT Store | 自定义 GPT / GPT 商店 | OpenAI 的自定义 AI 助手和应用市场 |
| Skill | 技能 | AI Agent 能执行的特定能力或操作 |
| Plugin / Action | 插件/动作 | 扩展 AI 能力的第三方工具 |
| Webhook | 网络钩子 | 当某事件发生时自动通知另一个系统 |
| Automation | 自动化 | 让流程自动运行，不需要人工干预 |
| Integration | 集成 | 让不同软件系统协同工作 |

## 八、AI 公司与主流产品对照

| 名称 | 所属公司 | 简介 |
|------|---------|------|
| ChatGPT / GPT-5.5 / o3 | OpenAI | 全球最知名的 AI 对话工具 |
| Claude (4.x Sonnet / Opus) | Anthropic | OpenAI 前团队创建，编程+推理能力第一 |
| Gemini (3.1 Pro / Ultra) | Google DeepMind | 谷歌的多模态 AI，与 Google 生态深度集成 |
| LLaMA (4) | Meta | Meta 开源的大模型系列，推动了开源生态 |
| Mistral | Mistral AI | 法国 AI 公司，开源模型性能出色 |
| Grok | xAI（马斯克） | X（Twitter）内置的 AI 助手 |
| Copilot | Microsoft | 微软旗下，深度集成 Office/GitHub/Windows |
| 通义千问 / Qwen | 阿里巴巴 | 阿里推出的大模型，开源版本表现优秀 |
| 文心一言 / ERNIE Bot | 百度 | 百度推出的大模型 |
| DeepSeek (V4 / R2) | 深度求索 (DeepSeek) | 国产高性能开源大模型，性价比之王 |
| Kimi | 月之暗面 (Moonshot AI) | 擅长超长文本的国产 AI（200万字上下文） |
| 豆包 | 字节跳动 | 字节推出的 AI 助手 |
| 智谱清言 / GLM | 智谱 AI | 清华系 AI 公司推出的大模型 |
| 天工 | 昆仑万维 | 国产 AI 对话和搜索工具 |
| 可灵 (Kling) 3.0 | 快手 | 国产视频生成工具标杆 |
| Suno | Suno AI | 最流行的 AI 音乐生成工具 |
| Midjourney | Midjourney | 画质最高的 AI 绘画工具 |
| Cursor | Anysphere | 最热门的 AI 编程编辑器 |

---

> 💡 **小提示**：不需要一次性记住所有术语，遇到不懂的回来查就行。随着你使用 AI 工具越来越多，这些名词自然会变得熟悉。

[← 上一篇：什么是人工智能](/guide/what-is-ai) | [下一篇：核心概念解析 →](/guide/core-concepts)
