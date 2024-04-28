import { Header } from '../../components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="bg-zinc-950 text-zinc-50 mx-auto grid min-h-screen w-full max-w-[1680px] grid-rows-app gap-5 p-8 ">
            <Header />
            {children}
        </div>   
    ) 
}

