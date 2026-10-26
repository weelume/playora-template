'use client'
import {createContext,useContext,type ReactNode} from 'react'
export type Bilingual={zh:string;en:string}
export interface PlayoraHostConfig {brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<PlayoraHostConfig>({brandName:{zh:'Playora',en:'Playora'},logo:'/templates/playora/images/logo.png'})
export function PlayoraHostProvider({children,...config}:PlayoraHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const usePlayoraHost=()=>useContext(Context)
