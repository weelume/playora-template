/** 切换语言只替换基路径，当前内页、查询参数和锚点均保留。 */
export function languageHref(pathname:string,basePath:string,locale:'zh'|'en',search:string,hash:string):string {
 const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
 const suffix=basePath?pathname.slice(basePath.length):pathname
 return (((locale==='en'?root:root+'/en')+'/'+suffix.replace(/^\//,'')).replace(/\/$/,'')||'/')+search+hash
}

export const href=(base:string,path='')=>(base+'/'+path).replace(/\/$/,'')||'/'
