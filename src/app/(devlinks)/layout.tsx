import { Header } from '../../components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="bg-zinc-950 text-zinc-50 p-8 mx-auto min-h-screen w-full">
            <Header />
            {children}
        </div>   
    ) 
}

