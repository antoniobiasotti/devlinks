import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="h-screen bg-slate-800 text-zinc-50 px-8 py-8">
            {children}
        </div>   
    ) 
}

