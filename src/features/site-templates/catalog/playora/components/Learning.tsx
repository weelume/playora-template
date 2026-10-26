'use client'
import Link from 'next/link'
import {useState,type CSSProperties} from 'react'
import {motion,useReducedMotion} from 'framer-motion'
import type {TemplateLocale} from '../../../types'
import {games,asset,text,bi} from '../content'
import {Reveal} from './Motion'
import {href} from '../routing'
export function Learning({locale,basePath,compact=false}:{locale:TemplateLocale;basePath:string;compact?:boolean}){
 const reduced=useReducedMotion(),[eye,setEye]=useState({x:0,y:0})
 return <section id="learning" className={'po-learning '+(compact?'po-learning-compact':'')} onPointerMove={e=>{if(!reduced){const r=e.currentTarget.getBoundingClientRect();setEye({x:(e.clientX-r.left-r.width/2)/70,y:Math.max(-14,Math.min(14,(e.clientY-r.top-150)/70))})}}} onPointerLeave={()=>setEye({x:0,y:0})}>
 <svg className="po-learning-face" viewBox="0 0 1000 230" aria-hidden><rect width="1000" height="230" fill="#ffc2d5"/><rect width="150" height="230" fill="#7fe092"/><rect x="850" width="150" height="230" fill="#7fe092"/><path d="M-80 230A115 150 0 0 1 150 230ZM850 230A115 150 0 0 1 1080 230ZM100 230C100 10 900 10 900 230Z" fill="#aefbff"/><g style={{transform:`translate(${eye.x}px,${eye.y}px)`}}><circle cx="455" cy="135" r="28" fill="#fcc222"/><circle cx="545" cy="135" r="28" fill="#fcc222"/><path d="M470 165A30 30 0 0 0 530 165Z" fill="#fcc222"/></g></svg>
 <Reveal kind="title"><h2 className="po-section-title">{text.games[locale]}</h2></Reveal><div className="po-paper-stack">{games.map((game,index)=><motion.article key={game.id} className="po-paper" style={{'--paper':game.color,'--tilt':`${[-4,3,-3][index]}deg`,'--stack-top':`${80+index*40}px`,zIndex:index+1} as CSSProperties} whileHover={reduced?{}:{scale:1.02}}><div className="po-cloud"><img src={asset(game.image)} alt={game.name[locale]}/></div><h3>{game.name[locale]}</h3>{compact&&<><p>{game.description[locale]}</p><Link href={href(basePath,'contact')}>{bi('了解更多活动','Ask about activities')[locale]}</Link></>}</motion.article>)}</div></section>
}
