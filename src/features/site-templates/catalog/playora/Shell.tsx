'use client'
import Link from 'next/link'
import {usePathname,useRouter} from 'next/navigation'
import {useState,type ReactNode} from 'react'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import type {SiteTemplatePageProps,TemplateLocale} from '../../types'
import {usePlayoraHost} from './host'
import {languageHref,href} from './routing'
import {bi,text} from './content'
import {DemoForm} from './components/Forms'
import './theme.css'

export function Header({locale,basePath,home=false}:{locale:TemplateLocale;basePath:string;home?:boolean}){
 const host=usePlayoraHost(),pathname=usePathname(),router=useRouter(),[open,setOpen]=useState(false),reduced=useReducedMotion()
 const links=[{label:text.learning,path:'features'},{label:text.about,path:'about'},{label:text.faq,path:'#faq'},{label:text.blog,path:'blog'}]
 const linkTo=(path:string)=>path==='#faq'?href(basePath)+'#faq':href(basePath,path)
 return <header className={'po-header '+(home?'po-header-home':'')}><Link className="po-brand" href={href(basePath)} aria-label={host.brandName[locale]}>{host.logo&&<img src={host.logo} alt=""/>}{host.marketplaceHref&&<span>{host.brandName[locale]}</span>}</Link>
 <nav aria-label={bi('主导航','Main navigation')[locale]} className="po-desktop-nav">{links.map(link=><Link key={link.path} href={linkTo(link.path)}><span>{link.label[locale]}</span></Link>)}</nav>
 <div className="po-header-actions"><Link className="po-language" href={languageHref(pathname,basePath,locale,'','')} onClick={e=>{e.preventDefault();router.push(languageHref(pathname,basePath,locale,window.location.search,window.location.hash));setOpen(false)}} lang={locale==='zh'?'en':'zh'}>{locale==='zh'?'EN':'中文'}</Link><Link className="po-button po-contact-link" href={href(basePath,'contact')}>{text.contact[locale]}</Link><button className="po-menu-button" aria-expanded={open} aria-controls="po-mobile-menu" aria-label={bi('切换导航菜单','Toggle navigation menu')[locale]} onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button></div>
 <AnimatePresence>{open&&<motion.nav id="po-mobile-menu" aria-label={bi('移动端导航','Mobile navigation')[locale]} className="po-mobile-menu" initial={reduced?false:{opacity:0,y:-18,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-18,scale:.96}} transition={{duration:.3}} onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{[...links,{label:text.contact,path:'contact'}].map((link,index)=><motion.div key={link.path} initial={reduced?false:{opacity:0,x:-15}} animate={{opacity:1,x:0}} transition={{delay:index*.05}}><Link onClick={()=>setOpen(false)} href={linkTo(link.path)}>{link.label[locale]}</Link></motion.div>)}</motion.nav>}</AnimatePresence></header>
}
function Footer({locale,basePath}:{locale:TemplateLocale;basePath:string}){
 const host=usePlayoraHost(),[notice,setNotice]=useState(false)
 return <footer className="po-footer"><div className="po-cta"><p>🎉 {bi('准备好快乐探索了吗？','Ready for playful learning?')[locale]}</p><h2>{bi('今天，开启一场\n快乐学习的冒险','Start your learning\nadventure today!')[locale]}</h2><p>{bi('每一次小小的发现，都值得大大的鼓励','Every little discovery deserves a big celebration.')[locale]}</p><div className="po-cta-actions"><button className="po-button" onClick={()=>setNotice(true)}>{bi('下载应用','Download app')[locale]}</button><Link className="po-button po-button-light" href={href(basePath,'features')}>{bi('探索学习活动','Explore activities')[locale]}</Link></div><p role="status">{notice?bi('应用下载仅为展示，当前没有外部下载。','App download is a display-only demo. No external download is available.')[locale]:''}</p></div>
 <div className="po-footer-grid"><div><Link href={href(basePath)} className="po-footer-brand">{host.brandName[locale]}</Link><p>{bi('让每一次玩耍\n都点亮成长的光','Making learning feel like playtime.')[locale]}</p><p>{bi('为 3–8 岁孩子和家长设计的趣味学习展示模板','A playful learning showcase for children aged 3–8 and their parents.')[locale]}</p></div><div><h3>{bi('一起探索','Explore')[locale]}</h3>{[['features',text.learning],['about',text.about],['blog',text.blog],['contact',text.contact]].map(([path,label])=><Link key={path as string} href={href(basePath,path as string)}>{(label as {zh:string;en:string})[locale]}</Link>)}<Link href={href(basePath)+'#faq'}>{text.faq[locale]}</Link></div><div><h3>{bi('给家长的指南','For parents')[locale]}</h3><Link href={href(basePath,'blog/learning-through-play')}>{bi('游戏中的成长','Learning through play')[locale]}</Link><Link href={href(basePath,'blog/reading-together')}>{bi('亲子共读','Reading together')[locale]}</Link><Link href={href(basePath,'privacy')}>{bi('安全与隐私','Safety & privacy')[locale]}</Link></div><div><h3>{bi('加入快乐俱乐部','Join the club')[locale]}</h3><p>{bi('了解活动与成长灵感。此处仅演示邮箱校验。','Discover activities and inspiration. Email validation demo only.')[locale]}</p><DemoForm locale={locale} compact/></div></div>
 <div className="po-footer-bottom"><p>© {new Date().getFullYear()} {host.brandName[locale]} · {bi('为孩子与家长，用心设计','Made with care for kids & parents')[locale]}</p><div><Link href={href(basePath,'privacy')}>{bi('隐私政策','Privacy policy')[locale]}</Link><Link href={href(basePath,'terms')}>{bi('服务条款','Terms of service')[locale]}</Link><Link href={href(basePath,'cookies')}>{bi('Cookie 说明','Cookies')[locale]}</Link></div>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></footer>
}
export default function Shell({children,locale='zh',basePath,home=false}:SiteTemplatePageProps&{children:ReactNode;home?:boolean}){
 const host=usePlayoraHost(),reduced=useReducedMotion()
 return <div className="po" lang={locale==='zh'?'zh-CN':'en'}><a href="#po-main" className="po-skip">{bi('跳到主要内容','Skip to content')[locale]}</a>{!home&&<Header locale={locale} basePath={basePath}/>}<motion.main id="po-main" initial={reduced?false:{opacity:0}} animate={{opacity:1}} transition={{duration:.35}}>{children}</motion.main><Footer locale={locale} basePath={basePath}/>{host.marketplaceHref&&<Link className="po-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{(host.lightLogo||host.logo)&&<img src={host.lightLogo||host.logo} alt=""/>}<span>{host.brandName[locale]}</span></Link>}</div>
}
