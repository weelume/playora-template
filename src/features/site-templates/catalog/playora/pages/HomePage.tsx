import type {SiteTemplatePageProps} from '../../../types'
import Shell from '../Shell'
import {Hero} from '../components/Hero'
import {Story} from '../components/Story'
import {Learning} from '../components/Learning'
import {Steps} from '../components/Steps'
import {Trust} from '../components/Trust'
import {Reviews,Faq} from '../components/ReviewsFaq'
export default function HomePage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath} home><Hero locale={locale} basePath={basePath}/><Story locale={locale} basePath={basePath}/><Learning locale={locale} basePath={basePath}/><Steps locale={locale}/><Trust locale={locale}/><Reviews locale={locale}/><Faq locale={locale}/></Shell>}
