import { Header } from '../../components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="grid min-h-screen grid-cols bg-zinc-950 text-zinc-50 p-8 mx-auto">
            <Header />
            {children}
        </div>   
    ) 
}

