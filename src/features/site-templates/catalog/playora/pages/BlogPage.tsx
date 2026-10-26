import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {href} from '../routing'
import {PageIntro} from '../components/PageIntro'
import {articles,bi,asset} from '../content'
import {Reveal} from '../components/Motion'
export default function BlogPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={bi('成长博客','The play journal')[locale]} title={bi('小小灵感\n点亮每一天','Little ideas.\nEveryday discoveries.')[locale]}>{bi('让亲子陪伴更有趣，让每一次玩耍多一点发现。','Make family time more playful, one little discovery at a time.')[locale]}</PageIntro><div className="po-blog-grid po-container">{articles.map((article,index)=><Reveal key={article.slug} delay={index*.12}><article className="po-blog-card"><Link href={href(basePath,'blog/'+article.slug)}><img src={asset(article.image)} alt={article.title[locale]}/><span className="po-eyebrow">{article.category[locale]}</span><h2>{article.title[locale]}</h2><p>{article.intro[locale]}</p><span>{bi('阅读故事','Read story')[locale]}</span></Link></article></Reveal>)}</div></Shell>}
