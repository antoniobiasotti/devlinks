import Link from "next/link"

export interface NavItemProps {
     title: string,
}

export function NavItem({ title }: NavItemProps) {
     return (
          <div className="flex">
               <Link href="#" className="relative hover:text-slate-300">
                    {title}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full transition duration-300"></span>
               </Link>
          </div>
     )
}