import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <div className="flex flex-grow border-[0.5px] rounded-sm border-b-2 border-b-antoniobia border-slate-50 p-4 font-bold text-2xl">
            <Link
                href="#"
            >
                DevLinks
            </Link>
            <Link
                href="https://github.com/antoniobiasotti/devlinks"
                target='blank'
            >
                <Image
                    src="/github.svg" 
                    width={32} 
                    height={32} 
                    alt=""
                />
            </Link>
        </div>
    )
}