import { ReactNode } from 'react'
import { Header } from "@/components/header";

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="h-screen bg-slate-800 text-zinc-50 px-8 py-8 selection:bg-slate-800">
            <main className="h-full flex flex-col gap-8 bg-zinc-950 rounded-lg py-6 px-6 border border-slate-500"> 
                <Header />
                {children}
            </main>
        </div>   
    ) 
}

