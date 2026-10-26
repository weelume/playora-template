import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {href} from '../routing'
import {PageIntro} from './PageIntro'
import {articles,bi,asset} from '../content'
export function Article({locale='zh',basePath,index}:SiteTemplatePageProps&{index:number}){const article=articles[index];return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={article.category[locale]} title={article.title[locale]}>{article.intro[locale]}</PageIntro><article className="po-article po-container"><img className="po-article-cover" src={asset(article.image)} alt={article.title[locale]}/><p className="po-note">{bi('亲子活动灵感 · 约 3 分钟阅读 · 示例文章','Family activity inspiration · 3 minute read · Sample article')[locale]}</p>{article.sections.map(([title,body])=><section key={title.en}><h2>{title[locale]}</h2><p>{body[locale]}</p></section>)}<p className="po-note">{bi('本文为一般活动灵感，不替代教育、医疗或发展方面的专业建议。','These are general activity ideas, not a substitute for professional educational, medical or developmental advice.')[locale]}</p><Link className="po-button" href={href(basePath,'blog')}>{bi('返回成长博客','Back to journal')[locale]}</Link></article></Shell>}
