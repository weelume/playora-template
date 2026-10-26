import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {PageIntro} from './PageIntro'
import {policies} from '../policies'
import {bi} from '../content'
export function Policy({locale='zh',basePath,kind}:SiteTemplatePageProps&{kind:keyof typeof policies}){const policy=policies[kind];return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={bi('演示说明 · 2026-10-26','Demo notice · October 26, 2026')[locale]} title={policy.title[locale]}/><article className="po-article po-container">{policy.sections.map(([title,body])=><section key={title.en}><h2>{title[locale]}</h2><p>{body[locale]}</p></section>)}</article></Shell>}
