# 绘画类 AI 工具

> 🎯 目标：了解主流 AI 绘画工具，学会用 AI 生成你想要的图片。

## 工具一览

| 工具 | 公司 | 价格 | 最大特点 | 中文支持 | 上手难度 |
|------|------|------|---------|---------|----------|
| Midjourney V8 Alpha | Midjourney | $10/月起 | 画质最高，V8 Alpha 5倍渲染速度 | 弱 | ⭐⭐ |
| GPT Image 2 | OpenAI | Plus用户可用 | 文字渲染最准确，对话式生成 | 中 | ⭐ |
| FLUX 2 | Black Forest Labs | 免费开源 | 2026 年开源新王者，写实极强 | 中 | ⭐⭐⭐ |
| Imagen 4 (Nano Banana Pro) | Google | 免费+付费 | 4K输出，多语言文字渲染，物理感知 | 中 | ⭐⭐ |
| Stable Diffusion 4 | Stability AI | 免费开源 | 可本地部署，社区生态丰富 | 中 | ⭐⭐⭐⭐ |
| 可灵 (Kling) 3.0 | 快手 | 免费+付费 | 国产领先，图片+视频 | 强 | ⭐⭐ |
| 通义万相 | 阿里巴巴 | 免费 | 中文提示词友好 | 强 | ⭐ |
| 即梦 (Dreamina) | 字节跳动 | 免费 | 抖音生态，使用简单 | 强 | ⭐ |
| Ideogram V3 | Ideogram | 免费+付费 | 文字渲染行业领先（90-95%准确率） | 弱 | ⭐⭐ |
| Leonardo AI | Leonardo | 免费+付费 | 游戏/概念设计 | 弱 | ⭐⭐ |

## 各工具详细介绍

### Midjourney V8 Alpha
**官网**：https://www.midjourney.com

- **优势**：V8 Alpha 全新引擎，渲染速度提升 5 倍，原生 2K 输出，V7 美学评分 9.3/10
- **使用方式**：通过 Discord 或官网网页版使用
- **价格**：Basic $10/月（约200张）、Standard $30/月、Pro $60/月
- **适合**：追求高质量艺术图片的设计师、创作者、自媒体人

**注册与使用**：
```
1. 访问 https://www.midjourney.com
2. 注册账号（需 Discord 或邮箱）
3. 选择付费方案（无免费试用）
4. 在网页版输入 /imagine + 你的描述
5. 等待 30-60 秒生成 4 张候选图
6. 选择喜欢的方案，可放大或变体
```

### GPT Image 2（原 DALL-E）
- **优势**：对文字描述的理解非常准确，能在图中渲染清晰的文字，多语言支持更好
- **使用方式**：通过 ChatGPT Plus 对话直接生成
- **价格**：包含在 ChatGPT Plus 订阅中
- **适合**：需要精确控制图片内容和图中文字的用户

### FLUX 2 — 2026 年开源新王者
**官网**：https://blackforestlabs.ai

- **优势**：写实风格极强，完全开源免费，可本地运行，社区生态活跃
- **使用方式**：本地安装（需显卡）或使用在线服务（如 Replicate）
- **价格**：开源免费
- **适合**：追求写实效果和自由度的用户

### Imagen 4 (Nano Banana Pro) — Google 新旗舰
**官网**：https://aistudio.google.com

- **优势**：基于 Gemini 3，4K 输出 10 秒内完成，多语言文字渲染，物理感知生成，复杂多主体场景评分 9.0/10
- **使用方式**：通过 Google AI Studio 或 Gemini 应用使用
- **价格**：免费（水印）/ 付费
- **适合**：追求写实效果和文字渲染的用户

### Stable Diffusion 4
- **优势**：完全开源免费，可本地运行，有丰富的社区模型（Civitai）
- **使用方式**：本地安装（需显卡）或使用在线服务
- **价格**：开源免费（在线服务可能收费）
- **适合**：有一定技术基础、追求自由度的用户

**本地安装教程**：
```
1. 准备：NVIDIA 显卡（建议 8GB 以上显存）
2. 安装 Python 3.10+ 和 Git
3. 克隆仓库：git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui
4. 运行 webui.bat (Windows) 或 webui.sh (Mac/Linux)
5. 下载模型（推荐从 Civitai 下载）
6. 在网页界面输入 Prompt 生成图片
```

### 可灵 (Kling)
**官网**：https://klingai.kuaishou.com

- **优势**：国产图片+视频生成标杆，中文理解好
- **使用方式**：网页端直接使用
- **价格**：每日有免费额度，付费更多
- **适合**：国内用户，不想折腾的用户

### 通义万相
**官网**：https://tongyi.aliyun.com/wanxiang

- **优势**：完全免费，中文提示词友好
- **适合**：国内用户日常使用

---

## AI 绘画提示词（Prompt）完整指南

### 基础公式

```
[主体描述] + [动作/状态] + [环境/背景] + [风格] + [光线/色彩] + [画质] + [构图]
```

### 详细示例

```
写实风格：
A portrait photo of a young woman with freckles, 
golden hour lighting, bokeh background, 
shot on Canon EOS R5, 85mm lens, f/1.8, 
ultra detailed, 8K resolution

水彩风格：
A cozy cafe scene on a rainy day, 
watercolor style, soft pastel colors, 
loose brush strokes, artistic, dreamy atmosphere

动漫风格：
A school girl running on a rooftop at sunset, 
anime style, vibrant colors, dynamic pose, 
Studio Ghibli inspired, detailed background

赛博朋克：
A neon-lit street in a futuristic city, 
cyberpunk style, rain reflecting neon lights, 
dark atmosphere, cinematic composition, 
ultra wide angle, 8K
```

### 常用风格关键词

| 风格 | 关键词 |
|------|--------|
| 写实摄影 | photorealistic, ultra detailed, 8K, DSLR, natural lighting |
| 水彩画 | watercolor, soft colors, artistic, loose brush strokes |
| 油画 | oil painting, textured, classical, rich colors |
| 动漫 | anime style, vibrant colors, cel shading |
| 像素艺术 | pixel art, retro, 8-bit, game style |
| 赛博朋克 | cyberpunk, neon lights, futuristic, dark |
| 极简 | minimalist, clean, simple, modern |
| 3D渲染 | 3D render, octane render, cinema 4D, isometric |
| 概念艺术 | concept art, matte painting, cinematic |
| 插画 | illustration, digital art, whimsical |

### 常用画质增强词

```
高质量：masterpiece, best quality, ultra detailed, highres
光线：dramatic lighting, golden hour, soft light, volumetric lighting
构图：wide angle, close-up, bird's eye view, low angle
后期：color grading, film grain, HDR, depth of field
```

### 负面提示词（不想出现的内容）

```
常用的 Negative Prompt：
low quality, blurry, deformed, ugly, bad anatomy, 
bad proportions, extra limbs, watermark, text, 
cropped, out of frame, duplicate
```

---

[← 返回工具总览](/tools/) | [下一篇：视频类工具 →](/tools/video-tools)
