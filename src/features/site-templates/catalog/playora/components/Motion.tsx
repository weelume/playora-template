'use client'
import {useEffect,useRef,useState,type ReactNode} from 'react'
import {motion,useReducedMotion,type HTMLMotionProps} from 'framer-motion'
import {bi} from '../content'
export function Reveal({children,delay=0,kind='card',className=''}:{children:ReactNode;delay?:number;kind?:'card'|'title';className?:string}){
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:kind==='title'?-40:70,scale:kind==='title'?1:.88}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,amount:.15}} transition={{duration:.75,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
export function PlayButton({children,...props}:HTMLMotionProps<'button'>){const reduced=useReducedMotion();return <motion.button {...props} className={'po-button '+(props.className??'')} whileHover={reduced?undefined:{scale:1.05}} whileTap={reduced?undefined:{scale:.95,x:2,y:3}}>{children}</motion.button>}
/** 视频跟随可见性、系统动态设置及手动暂停开关；播放失败显式记录并展示状态。 */
export function LoopVideo({name,label,locale='zh',className=''}:{name:string;label:string;locale?:'zh'|'en';className?:string}){
 const ref=useRef<HTMLVideoElement>(null),reduced=useReducedMotion(),[paused,setPaused]=useState(false),[manual,setManual]=useState(false),[error,setError]=useState(false)
 const shouldPause=paused||Boolean(reduced&&!manual)
 useEffect(()=>{const video=ref.current;if(!video)return;let visible=false
  const sync=()=>{if(!visible||document.hidden||shouldPause){video.pause();return}void video.play().catch(()=>{console.error('[playora:video] playback failed',{asset:name});setError(true)})}
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:.05});observer.observe(video);document.addEventListener('visibilitychange',sync)
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);video.pause()}
 },[shouldPause,name])
 return <><video ref={ref} className={'po-video '+className} src={'/templates/playora/videos/'+name} muted loop playsInline preload="metadata" aria-label={label} onPlay={()=>console.debug('[playora:video]',{asset:name,state:'playing'})} onPause={()=>console.debug('[playora:video]',{asset:name,state:'paused'})} onError={()=>{console.error('[playora:video] asset load failed',{asset:name});setError(true)}}/><button className="po-video-toggle" onClick={()=>{setManual(true);setPaused(!shouldPause)}} aria-label={(shouldPause?bi('播放视频','Play video'):bi('暂停视频','Pause video'))[locale]}>{error?bi('视频不可用','Video unavailable')[locale]:shouldPause?'▶':'Ⅱ'}</button></>
}
