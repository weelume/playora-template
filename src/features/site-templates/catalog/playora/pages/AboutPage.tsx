import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {Trust} from '../components/Trust'
import {PageIntro} from '../components/PageIntro'
import {LoopVideo} from '../components/Motion'
import {bi,text} from '../content'
export default function AboutPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={bi('关于我们','Our story')[locale]} title={bi('把快乐还给童年\n让成长自然发生','More play.\nMore possibilities.')[locale]}>{text.story[locale]}</PageIntro><div className="po-about-video"><LoopVideo locale={locale} name="story-bg-video.mp4" label={bi('趣味学习场景','Playful learning scene')[locale]}/></div><Trust locale={locale}/></Shell>}
