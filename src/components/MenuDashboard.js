import Link from 'next/link'

const MenuDashboard = () => {
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
            <Link href="/logout">
                <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 hidden sm:inline-flex">
                    <div className="flex flex-row items-center w-40">
                        <img src="assets/x.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Sair</h2>
                    </div>
                </a>
            </Link>
            <Link href="/mobile/menu">
                <a
                    className={"p-4 sm:hidden flex justify-end cursor-pointer"}
                >
                    <img src="assets/menu.svg" />
                </a>
            </Link>
        </header>
    )
}
 
export default MenuDashboard