# Playora 趣味学习

中英双语的响应式趣味学习品牌展示。包含视频首屏、滚动故事窗口、纸片堆叠、步骤、翻卡、评价、FAQ、功能、关于、博客、3 篇文章、联系及政策页面，共 22 条语言路由。

Node 24.16.0 / pnpm 9.15.4；运行素材均本地托管。

准备：pnpm install --frozen-lockfile
启动：pnpm dev（http://127.0.0.1:43626），Ctrl+C 停止。
验证：pnpm typecheck、pnpm lint、pnpm test、pnpm build；生产预览 pnpm start。
打包：pnpm bundle。

品牌在 host.tsx，双语内容在 content.ts/policies.ts，样式在 theme.css，页面在 pages/。修改前阅读 .tpl/README.md、.tpl/template.json、.tpl/project.json 和 .tpl/docs。

表单仅本地校验，不发送、不保存；没有真实课程、儿童账户、学习追踪、订阅或客服服务。政策为示例，正式使用前需替换。素材许可限制见 .tpl/docs/LICENSE.md，不能因源码公开推断素材商业授权。
