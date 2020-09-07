import Link from 'next/link'

const MenuDashboard = () => (
    <Link href="/">
        <header className=" fixed bg-redHeader h-screen w-56 flex flex-col items-center">
            <Link href="/dashboard">
                <a className="bg-redHeaderStrong w-56 h-12 text-white flex flex-row">
                    <img src="assets/grid.svg"/>
                    <p className="h">Dashboard</p> 
                </a>
            </Link>
            <Link href="/dashboard">
                <a className="bg-redHeader w-56 h-12 text-white flex flex-row">
                    <img src="assets/user.svg"/>
                    <p>Perfil</p>
                </a>
            </Link>
            <Link href="/dashboard">
                <a className="bg-redHeaderStrong w-56 h-12 text-white flex flex-row">
                    <img src="assets/trello.svg"/>
                    <p>Minhas Oficinas</p>
                </a>
            </Link>
        </header>
    </Link>
)
 
export default MenuDashboard