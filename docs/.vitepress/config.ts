import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 小白入门指南',
  description: '从零开始，掌握人工智能的最新工具与实践技能',
  lang: 'zh-CN',

  // GitHub Pages 部署时修改为 '/仓库名/'
  base: '/ai-beginner-guide/',

  themeConfig: {
    // logo: '/logo.svg',  // 如有logo文件可取消注释
    siteTitle: 'AI 小白入门指南',

    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 是什么', link: '/guide/what-is-ai' },
      { text: 'AI 工具大全', link: '/tools/' },
      { text: '快速上手', link: '/tutorials/chatgpt-guide' },
      { text: '避坑指南', link: '/pitfalls/ai-hallucination' },
      { text: '进阶之路', link: '/advanced/ai-agent' },
      { text: '附录', link: '/appendix/glossary' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '第一章：AI 是什么？',
          collapsed: false,
          items: [
            { text: '什么是人工智能', link: '/guide/what-is-ai' },
            { text: '术语中英文对照', link: '/guide/terminology' },
            { text: '核心概念解析', link: '/guide/core-concepts' },
            { text: 'AI 能做什么', link: '/guide/ai-capabilities' },
            { text: '学习路径图', link: '/guide/learning-path' },
            { text: '一周学习计划', link: '/guide/weekly-plan' },
          ],
        },
      ],
      '/tools/': [
        {
          text: '第二章：AI 工具大全',
          collapsed: false,
          items: [
            { text: '工具总览', link: '/tools/' },
            { text: '对话类工具', link: '/tools/chat-tools' },
            { text: '绘画类工具', link: '/tools/image-tools' },
            { text: '视频类工具', link: '/tools/video-tools' },
            { text: '音乐类工具', link: '/tools/music-tools' },
            { text: '办公类工具', link: '/tools/office-tools' },
            { text: '编程辅助工具', link: '/tools/coding-tools' },
          ],
        },
      ],
      '/tutorials/': [
        {
          text: '第三章：快速上手教程',
          collapsed: false,
          items: [
            { text: 'ChatGPT 注册与使用', link: '/tutorials/chatgpt-guide' },
            { text: 'Prompt 提示词工程', link: '/tutorials/prompt-engineering' },
            { text: 'AI 写作与办公', link: '/tutorials/ai-writing-ppt' },
            { text: 'AI 生成图片', link: '/tutorials/ai-image-generation' },
            { text: 'AI 辅助学习工作', link: '/tutorials/ai-learning-work' },
            { text: 'API + Agent 部署攻略', link: '/tutorials/api-agent-deploy' },
          ],
        },
      ],
      '/pitfalls/': [
        {
          text: '第四章：避坑指南',
          collapsed: false,
          items: [
            { text: 'AI 幻觉识别', link: '/pitfalls/ai-hallucination' },
            { text: '隐私与数据安全', link: '/pitfalls/privacy-security' },
            { text: '付费 vs 免费怎么选', link: '/pitfalls/paid-vs-free' },
            { text: '常见骗局与误区', link: '/pitfalls/scams-and-myths' },
          ],
        },
      ],
      '/advanced/': [
        {
          text: '第五章：进阶之路',
          collapsed: false,
          items: [
            { text: 'AI Agent 智能体', link: '/advanced/ai-agent' },
            { text: 'RAG 与知识库', link: '/advanced/rag-knowledge' },
            { text: 'AI 副业与变现', link: '/advanced/ai-monetization' },
            { text: '推荐学习资源', link: '/advanced/learning-resources' },
          ],
        },
      ],
      '/appendix/': [
        {
          text: '附录',
          collapsed: false,
          items: [
            { text: '术语速查表', link: '/appendix/glossary' },
            { text: '工具对比推荐', link: '/appendix/tool-comparison' },
            { text: '常见问题 FAQ', link: '/appendix/faq' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XINGANLIU/ai-beginner-guide' },
    ],

    footer: {
      message: 'AI 小白入门指南 — 让每个人都能用好 AI',
      copyright: 'Copyright © 2025-2026 | Released under the MIT License',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: '页面导航',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
