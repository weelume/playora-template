'use client'
import {useState} from 'react'
import {motion,useReducedMotion} from 'framer-motion'
import type {TemplateLocale} from '../../../types'
import {trust,text,asset,bi} from '../content'
import {usePlayoraHost} from '../host'
export function Trust({locale}:{locale:TemplateLocale}){
 const [flipped,setFlipped]=useState<number[]>([]),reduced=useReducedMotion(),host=usePlayoraHost()
 return <section className="po-trust" id="why-choose-us"><h2 className="po-section-title">{text.trust[locale]}{locale==='en'?' '+host.brandName.en:''}</h2><div className="po-trust-grid">{trust.map((card,index)=>{const flip=flipped.includes(index);return <div className="po-flip" key={index}><motion.div className="po-flip-inner" animate={{rotateY:flip?180:0}} transition={{duration:reduced?0:.65,ease:[.22,1,.36,1]}}>{[false,true].map(back=><div key={String(back)} className={'po-flip-face '+(back?'po-flip-back':'')} aria-hidden={back?!flip:flip}><svg viewBox="0 0 300 360" preserveAspectRatio="none" aria-hidden><path d="M10 28L290 0L268 278L196 278L212 358L116 278L28 278Z" fill={card.color}/></svg><div>{back?<p>{card.body[locale]}</p>:<h3>{card.title[locale]}</h3>}<button tabIndex={back===flip?0:-1} aria-label={bi(back?'返回卡片标题':'查看'+card.title.zh.replace('\n',''),back?'Back to card title':'Read '+card.title.en.replace('\n',' '))[locale]} aria-pressed={flip} onClick={()=>setFlipped(flip?flipped.filter(i=>i!==index):[...flipped,index])}>{back?'−':'+'}</button></div></div>)}</motion.div></div>})}</div><img className="po-train" src={asset('traine.svg')} alt={bi('快乐学习小火车','Playful learning train')[locale]}/></section>
}
