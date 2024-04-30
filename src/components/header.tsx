import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <div className="flex p-4 font-extrabold text-2xl border-b-2 border-b-antoniobia">
            DevLinks
            {/* <hr></hr> */}
            <Link
                href="https://github.com/antoniobiasotti/devlinks"
            >
                <Image
                    src="/github.svg" width={65} height={65} alt=""
                >
                </Image>
            </Link>
        </div>
    )
}