import Link from 'next/link'
import { useState } from 'react'

const MenuDashboard = () => {
    const [mobibleMenuStatus, setMobileMenuStatus] = useState('hidden')
    const [mobileMenuBarStatus, setMobileMenuBarStatus] = useState('block')
    
    function handleMenuMobile() {
        if (mobibleMenuStatus === 'hidden') {
            setMobileMenuStatus('block')
            setMobileMenuBarStatus('hidden')
        } else {
            setMobileMenuStatus('hidden')
            setMobileMenuBarStatus('block')
        }
    }

    return (
        <header className="bg-redHeader sm:h-screen sm:w-64 flex flex-col">
            <Link href="/dashboard">
                <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 hidden sm:inline-flex">
                    <div className="flex flex-row items-center w-40">
                        <img src="assets/grid.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Dashboard</h2>
                    </div>
                </a>
            </Link>
            <Link href="/dashboard">
                <a className="bg-redHeader flex items-center justify-center py-4 px-6 hidden sm:inline-flex">
                    <div className="flex flex-row items-center w-40">
                        <img src="assets/user.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Meu perfil</h2>
                    </div>
                </a>
            </Link>
            <Link href="/dashboard">
                <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 hidden sm:inline-flex">
                    <div className="flex flex-row items-center w-40">
                        <img src="assets/trello.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Minhas oficinas</h2>
                    </div>
                </a>
            </Link>
            <a 
                className={mobileMenuBarStatus + " p-4 sm:hidden flex justify-end cursor-pointer"}
                onClick={handleMenuMobile}
            >
                <img src="assets/menu.svg"/>
            </a>
            <div className={mobibleMenuStatus + " bg-redHeader h-screen w-full"}>
                <a
                    className="p-4 sm:hidden flex justify-end cursor-pointer"
                    onClick={handleMenuMobile}
                >
                    <img src="assets/x.svg" />
                </a>
                <ul>
                    <li>
                        <Link href="/dashboard">
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
        </header>
    )
}
 
export default MenuDashboard