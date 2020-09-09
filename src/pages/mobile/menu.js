import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MenuMobile() {
    const router = useRouter()

    function handleMenuMobile() {
        router.back()
    }

    return (
        <div className="bg-redHeader h-screen w-full">
            <a
                className="p-4 flex justify-end cursor-pointer"
                onClick={handleMenuMobile}
            >
                <img src="/assets/x.svg" />
            </a>
            <ul>
                <li>
                    <Link href="/estatisticas">
                        <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 cursor-pointer">
                            <h2 className="text-white font-bold">Dashboard</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        <a className="bg-redHeader flex items-center justify-center py-4 px-6 cursor-pointer">
                            <h2 className="text-white font-bold">Perfil</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 cursor-pointer">
                            <h2 className="text-white font-bold">Minhas oficinas</h2>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}