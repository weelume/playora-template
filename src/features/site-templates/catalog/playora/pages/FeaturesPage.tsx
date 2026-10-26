import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {Learning} from '../components/Learning'
import {Steps} from '../components/Steps'
import {PageIntro} from '../components/PageIntro'
import {bi} from '../content'
export default function FeaturesPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={bi('小小探索家','For little explorers')[locale]} title={bi('每一种好奇\n都有快乐的回应','A playful answer\nfor every curiosity')[locale]}>{bi('数字、阅读与逻辑，让学习从兴趣出发。以下为活动介绍，未接入真实游戏服务。','Numbers, reading and logic, guided by curiosity. Activity descriptions only; no live game service is connected.')[locale]}</PageIntro><Learning compact locale={locale} basePath={basePath}/><Steps locale={locale}/></Shell>}
