import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <div className="flex justify-between border-[2px] rounded-sm border-slate-50 p-4 font-bold text-2xl">
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
            {/* <Link
                href="https://github.com/antoniobiasotti/devlinks"
                target='blank'
            >
                <Image
                    src="/github.svg" 
                    width={32} 
                    height={32} 
                    alt=""
                />
            </Link> */}
        </div>
    )
}