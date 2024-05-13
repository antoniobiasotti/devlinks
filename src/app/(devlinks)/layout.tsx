import { ReactNode } from 'react'

import { Header } from "@/components/header";
import { MainNavigationBar } from "@/components/Navbar";
import { SettingsTabs } from "@/components/SettingsTabs";

export default function HomeLayout({ children } : { children: ReactNode }) {
    return (
        <div className="h-screen bg-slate-800 text-zinc-50 px-8 py-8 selection:bg-slate-800">
            <main className="h-full bg-zinc-950 rounded-lg justify-center py-6 px-6 border border-slate-500"> 
                <Header />
                <SettingsTabs/>
                {children}
            </main>
        </div>   
    ) 
}

