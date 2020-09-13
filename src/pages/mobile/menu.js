import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import handleAuthentication from '../../libs/handleAuthentication'
import myGet from '../../libs/myGet'

const Estatisticas = ({ autorizacao }) => {
    if (autorizacao && autorizacao > 1) {
        return (
            <Link href="/dashboard/estatisticas">
                <a className="bg-redHeader flex items-center justify-center py-4 px-6 cursor-pointer">
                    <h2 className="text-white font-bold">Estatísticas</h2>
                </a>
            </Link>
        )
    }

    return <></>

}

export default function MenuMobile({ autorizacao }) {
    const router = useRouter()

    function handleMenuMobile() {
        router.back()
    }

    async function handleLogout() {
        await axios.post('/api/logout')
        router.replace('/login')
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
                    <Link href="/dashboard">
                        <a className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 cursor-pointer">
                            <h2 className="text-white font-bold">Minhas oficinas</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Estatisticas autorizacao={autorizacao} />
                </li>
                <li>
                    <a 
                        className="bg-redHeaderStrong flex items-center justify-center py-4 px-6 cursor-pointer"
                        onClick={handleLogout}
                    >
                        <h2 className="text-white font-bold">Sair</h2>
                    </a>
                </li>
            </ul>
        </div>
    )
}

MenuMobile.getInitialProps = async (ctx) => {
    const expectedAuthorization = true
    await handleAuthentication(ctx, expectedAuthorization, '/login')

    const responseParticipantes = await myGet(ctx, expectedAuthorization, '/api/participantes')
    const { autorizacao } = responseParticipantes.participante

    return {
        autorizacao
    }
}