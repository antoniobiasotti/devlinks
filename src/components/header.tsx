import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <div className="flex justify-between bg-zinc-800 border border-zinc-700 rounded-lg px-6 py-4 font-semibold text-2xl">
            <Link
                href="#"
            >
                DevLinks
            </Link>
            <button>
               <Image src="/darkmode.svg" 
                    width={32} 
                    height={32} 
                    alt=""
                />
            </button>
        </div>
    )
}