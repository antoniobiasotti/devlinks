import Link from "next/link"

export interface NavItemProps {
     title: string,
}

export function NavItem({ title }: NavItemProps) {
     return (
          <div className="flex">
               <Link href="#" className="hover:text-slate-300">
                    <span className="">{title}</span>
               </Link>
          </div>
     )
}