export interface NavItemProps {
     title: string,
}

export function NavItem({ title }: NavItemProps) {
     return (
          <a href="#" className="hover:text-slate-300">
               <span>
                    {title}
               </span>
          </a>
     )
}