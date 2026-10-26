import type {ReactNode} from 'react'
export function PageIntro({eyebrow,title,children}:{eyebrow:string;title:string;children?:ReactNode}){return <div className="po-page-intro po-container"><span className="po-eyebrow">{eyebrow}</span><h1>{title}</h1>{children&&<p>{children}</p>}</div>}
