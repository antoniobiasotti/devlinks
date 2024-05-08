import { NavItem } from "./navItem";

export function NavBar() {
    return (
        <div className="flex justify-between gap-4">
            <NavItem title="Algoritmos"/>
            <NavItem title="APIs"/>
            <NavItem title="Animações"/>
            <NavItem title="Ícones"/>
            <NavItem title="Blogs"/>
            <NavItem title="Cores"/>
            <NavItem title="Ferramentas"/>
            <NavItem title="Fontes"/>
            <NavItem title="Ilustrações"/>
            <NavItem title="UI"/>
        </div>
    )
}