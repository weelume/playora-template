import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {DemoForm} from '../components/Forms'
import {PageIntro} from '../components/PageIntro'
import {bi,asset} from '../content'
export default function ContactPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={bi('一起聊聊','Let’s talk')[locale]} title={bi('你的好奇\n我们认真倾听','Big questions.\nFriendly answers.')[locale]}>{bi('无论是活动建议还是亲子陪伴，都欢迎来聊聊。','Questions about activities or family play? We would love to hear your ideas.')[locale]}</PageIntro><div className="po-contact po-container"><aside><img src={asset('image-335.png')} alt={bi('一起快乐成长','Growing happily together')[locale]}/><h2>{bi('每一个问题\n都值得被听见','Every question\nmatters')[locale]}</h2><p>{bi('本页面不提供真实客服或消息发送。请不要填写儿童身份、健康等敏感信息。','This page is a demonstration, without live support or message delivery. Do not enter children’s identities, health details or other sensitive information.')[locale]}</p></aside><DemoForm locale={locale}/></div></Shell>}
