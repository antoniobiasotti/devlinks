import { Header } from '../../components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="justify-center min-h-screen bg-zinc-950 text-zinc-50 p-8 mx-auto">
            {children}
        </div>   
    ) 
}

