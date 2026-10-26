'use client'
import {useId,useRef} from 'react'
import {motion,useScroll,useTransform,useReducedMotion,type MotionStyle} from 'framer-motion'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {usePlayoraHost} from '../host'
import {text,bi} from '../content'
import {href} from '../routing'
import {LoopVideo} from './Motion'
/** 用原生 sticky 与滚动进度替代原站 GSAP pin，不引入新依赖；窗口与左右字组分段同步运动。 */
export function Story({locale='zh',basePath}:SiteTemplatePageProps){
 const target=useRef<HTMLDivElement>(null),id=useId().replace(/:/g,''),reduced=useReducedMotion(),host=usePlayoraHost()
 const {scrollYProgress:p}=useScroll({target,offset:['start start','end end']})
 const scale=useTransform(p,[0,.18,.75,1],[1,1,24,30]),left=useTransform(p,[0,.6],['0%','-180%']),right=useTransform(p,[0,.6],['0%','180%']),cover=useTransform(p,[.65,.82],[1,0]),opacity=useTransform(p,[.55,.85],[0,1]),y=useTransform(p,[.55,.85],[40,0])
 return <div ref={target} id="aboutus" className={'po-story '+(reduced?'po-story-reduced':'')}><div className="po-story-sticky"><div className="po-story-video"><LoopVideo locale={locale} name="story-bg-video.mp4" label={bi('学习故事循环背景','Learning story looping background')[locale]}/></div><motion.div initial={false} inherit={false} className="po-story-copy" style={reduced?{}:{"--story-opacity":opacity,y} as MotionStyle}><h2>{text.story[locale].replace('Playora',host.brandName[locale])}</h2><Link className="po-button" href={href(basePath,'about')}>{text.more[locale]}</Link></motion.div>{!reduced&&<motion.div initial={false} inherit={false} className="po-story-cover" style={{"--story-cover":cover} as MotionStyle}><svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden><defs><mask id={id}><rect width="1000" height="700" fill="white"/><motion.g style={{scale,transformOrigin:'500px 350px'}}><rect x="463" y="295" width="74" height="110" rx="18" fill="black"/></motion.g></mask></defs><rect width="1000" height="700" fill="#fcc222" mask={`url(#${id})`}/><motion.rect x="451" y="283" width="98" height="134" rx="30" fill="none" stroke="#fe444f" strokeWidth="24" style={{scale,transformOrigin:'500px 350px'}}/></svg><div className="po-story-word" aria-label={bi('成长故事','Story')[locale]}><motion.span style={{x:left}}>ST</motion.span><span className="po-story-o">O</span><motion.span style={{x:right}}>RY</motion.span></div></motion.div>}</div></div>
}
