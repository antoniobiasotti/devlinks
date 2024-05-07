import { Header } from '../../components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="justify-center min-h-screen bg-slate-900 text-zinc-50 px-8 py-6 mx-auto">
            {children}
        </div>   
    ) 
}

