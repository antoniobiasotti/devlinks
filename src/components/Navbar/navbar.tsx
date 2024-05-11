'use client'

import { useState } from "react";
import { NavItem } from "./navItem";

export function NavBar() {

    const [currentTab, setCurrentTab] = useState('tab1')

    return (
        <div className="flex justify-around gap-4 px-4">
            <NavItem title="Algoritmos" isSelected={currentTab === 'tab1'} />
            <NavItem title="APIs" isSelected={currentTab === 'tab2'} />
            <NavItem title="Animações" isSelected={currentTab === 'tab3'} />
            <NavItem title="Ícones" isSelected={currentTab === 'tab4'} />
            <NavItem title="Blogs" isSelected={currentTab === 'tab5'} />
            <NavItem title="Cores" isSelected={currentTab === 'tab6'} />
            <NavItem title="Ferramentas" isSelected={currentTab === 'tab7'} />
            <NavItem title="Fontes" isSelected={currentTab === 'tab8'} />
            <NavItem title="Ilustrações" isSelected={currentTab === 'tab9'} />
            <NavItem title="UI" isSelected={currentTab === 'tab10'} />
        </div>
    )
}