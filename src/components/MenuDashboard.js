import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'


const Estatisticas = ({ autorizacao }) => {
    if (autorizacao && autorizacao > 1) {
        return (
            <Link href="/dashboard/estatisticas">
                <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 hidden sm:inline-flex">
                    <div className="flex flex-row items-center w-40">
                        <img src="/assets/trello.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Estatísticas</h2>
                    </div>
                </a>
            </Link>
        )
    }

    return <></>

}

const MenuDashboard = ({ autorizacao }) => {

    const router = useRouter()

    async function handleLogout() {
        await axios.post('/api/logout')
        router.replace('/login')
    }

    return (
        <header className="bg-redHeader sm:h-screen sm:w-64 flex flex-col sm:justify-between sm:items-center">
            <div className="">
                <Link href="/dashboard">
                    <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 hidden sm:inline-flex w-56">
                        <div className="flex flex-row items-center w-40">
                            <img src="/assets/trello.svg" className="" />
                            <h2 className="ml-4 text-white font-bold">Minhas oficinas</h2>
                        </div>
                    </a>
                </Link>
                {/* <Link href="/dashboard">
                <a className="bg-redHeader flex items-center justify-center py-4 px-6 hidden sm:inline-flex">
                    <div className="flex flex-row items-center w-40">
                        <img src="assets/user.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Meu perfil</h2>
                    </div>
                </a>
            </Link> */}
                <Estatisticas autorizacao={autorizacao} />
                <Link href="/mobile/menu">
                    <a
                        className={"p-4 sm:hidden flex justify-end cursor-pointer"}
                    >
                        <img src="/assets/menu.svg" />
                    </a>
                </Link>
            </div>
            
            <div>
                <a
                    className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 hidden sm:inline-flex cursor-pointer w-56"
                    onClick={handleLogout}
                >
                    <div className="flex flex-row items-center w-40">
                        <img src="/assets/x.svg" className="" />
                        <h2 className="ml-4 text-white font-bold">Sair</h2>
                    </div>
                </a>
            </div>
        </header>
    )
}
 
export default MenuDashboard