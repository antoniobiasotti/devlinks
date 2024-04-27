import { ReactNode } from 'react'

export default function StoreLayout({ children } : { children: ReactNode }) {
    return (
        <div className="mx-auto grid min-h-screen w-full max-w-[1680px] grid-rows-app gap-5 p-8 ">
            {children}
        </div>   
    ) 
}
