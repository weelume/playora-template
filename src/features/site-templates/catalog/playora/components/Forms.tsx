'use client'
import {useState,type FormEvent} from 'react'
import type {TemplateLocale} from '../../../types'
import {text,bi} from '../content'
import {PlayButton} from './Motion'
export function DemoForm({locale,compact=false}:{locale:TemplateLocale;compact?:boolean}){
 const [submitted,setSubmitted]=useState(false)
 const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();setSubmitted(true);console.debug('[playora:form]',{form:compact?'newsletter':'contact',validation:'passed',sent:false,saved:false})}
 return <form onSubmit={submit} className={'po-form '+(compact?'po-newsletter':'')} onChange={()=>setSubmitted(false)}>
 {!compact&&<><label>{bi('称呼','Your name')[locale]}<input name="name" autoComplete="name" required maxLength={80}/></label><label>{bi('咨询主题','Topic')[locale]}<select name="topic"><option>{bi('学习活动','Learning activities')[locale]}</option><option>{bi('家长陪伴','Guidance for parents')[locale]}</option><option>{bi('其他问题','Other questions')[locale]}</option></select></label></>}
 <label>{bi('电子邮箱','Email address')[locale]}<input name="email" type="email" required maxLength={254} autoComplete="email" placeholder={bi('请输入家长邮箱','Parent’s email address')[locale]}/></label>
 {!compact&&<label>{bi('想和我们聊什么？','How can we help?')[locale]}<textarea name="message" rows={5} required minLength={5} maxLength={2000}/></label>}
 <p className="po-note">{text.demo[locale]}</p><PlayButton type="submit">{bi(compact?'校验订阅邮箱':'校验留言',compact?'Check email':'Validate message')[locale]}</PlayButton>
 <p role="status" aria-live="polite">{submitted?text.done[locale]:''}</p></form>
}
