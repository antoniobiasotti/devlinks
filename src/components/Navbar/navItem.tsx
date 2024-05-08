export interface NavItemProps {
     title: string,
}

export function NavItem({ title }: NavItemProps) {
     return (
          <a href="">
               <span>
                    {title}
               </span>
          </a>
     )
}