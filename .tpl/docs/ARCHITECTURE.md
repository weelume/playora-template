# 架构

React + Next.js + TypeScript strict，沿用既有 framer-motion。feature-based 源码位于 src/features/site-templates/catalog/playora。host.tsx 为品牌配置与可选宿主注入；content.ts、policies.ts 管理双语内容；components 为公共区块及交互；pages 负责页面组合；meta.ts 注册页面。src/app 的 catch-all 只负责语言与路由。所有运行素材位于 public/templates/playora，展示截图在 .tpl/assets。没有后端和数据存储。
