import type {ReactNode} from 'react'
import './globals.css'
export const metadata={title:'Playora · 趣味学习',description:'中英双语儿童趣味学习展示模板'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>}
