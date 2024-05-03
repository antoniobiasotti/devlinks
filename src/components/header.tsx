import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <div className="border-2 border-slate-50 flex items-center justify-around p-4 font-bold text-2xl border-b-2 border-b-antoniobia">
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
                >
                </Image>
            </Link>
        </div>
    )
}