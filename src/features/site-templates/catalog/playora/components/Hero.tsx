'use client'
import {motion,useReducedMotion} from 'framer-motion'
import type {SiteTemplatePageProps} from '../../../types'
import {Header} from '../Shell'
import {href} from '../routing'
import {bi,text,asset} from '../content'
import {LoopVideo} from './Motion'
import Link from 'next/link'
export function Hero({locale='zh',basePath}:SiteTemplatePageProps){const reduced=useReducedMotion()
 return <section className="po-hero"><LoopVideo locale={locale} name="kids-learning-through-playing-games-header-video.mp4" label={bi('孩子在玩耍中学习的循环背景','Children learning through play, looping background')[locale]}/><Header home locale={locale} basePath={basePath}/><div className="po-hero-copy"><motion.h1 initial={reduced?false:{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}>{text.hero[locale]}<motion.span animate={reduced?{}:{scale:[1,1.2,1]}} transition={{duration:1.5,repeat:Infinity}}> .</motion.span></motion.h1><h2 className="po-hero-word" aria-label={text.heroWord[locale]}>{[...text.heroWord[locale]].map((letter,index)=><motion.span aria-hidden key={index} initial={reduced?false:{y:100,opacity:0,rotate:-15}} animate={{y:0,opacity:1,rotate:0}} transition={{type:'spring',stiffness:160,damping:13,delay:.2+index*.07}} whileHover={reduced?undefined:{y:-18,rotate:index%2?12:-12,scale:1.12}} whileTap={reduced?undefined:{scale:.85}}>{letter}</motion.span>)}</h2><Link className="po-button" href={href(basePath,'features')}>{text.explore[locale]}<img src={asset('play-icon.svg')} alt="" width={26} height={26}/></Link></div><motion.a className="po-scroll" href="#aboutus" animate={reduced?{}:{y:[0,8,0]}} transition={{duration:2,repeat:Infinity}}><span>{bi('向下探索','Scroll down')[locale]}</span><span aria-hidden>↓</span></motion.a></section>
}
