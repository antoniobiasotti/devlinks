import { ReactNode } from 'react'

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-800 text-zinc-50 px-8 py-6 selection:bg-neutral-400 selection:text-zinc-950">
            {children}
        </div>   
    ) 
}

