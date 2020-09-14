import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import handleAuthentication from '../libs/handleAuthentication'
import Link from 'next/link'


const ImagensInstrumento = () => (
    <>
        <img
            src="/assets/sax.png"
            alt="Saxofone"
            className="absolute top-0 left-0 w-64 sm:w-1/4"
        />
        <img
            src="/assets/trompete.png"
            alt="Trompete"
            className="absolute bottom-0 right-0 w-56 sm:w-1/4"
        />
    </>
)

export default function Chamada({ codigoPresenca }) {
    const router = useRouter()
    const [aguarde, setAguarde] = useState('')

    const [formData, setFormData] = useState({
        email: '',
        codigoRecuperacao: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        setAguarde('Por favor, aguarde. Estamos fazendo algumas verificações...')
        try {
            const response = await axios.get(`/api/chamada?codigoPresenca=${codigoPresenca}`)

            if (response.status === 200) {
                alert('A sua presença foi contabilizada')
            } else {
                alert('Desculpe. Não foi possível contabilizar a sua presença')
            }
        } catch (e) {
            alert('Desculpe. Algo inesperado aconteceu e não foi possível contabilizar a sua presença')
        } finally {
            setAguarde('')
        }

    }
    return (
        <div
            className="relative bg-bgMain min-h-screen min-w-full flex flex-col items-center justify-center overflow-auto"
        >
            <Head>
                <title>Festival - Chamada</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ImagensInstrumento />

            <Link href="/login">
                <header className="mt-56 px-10 sm:px-0 sm:mt-0 mb-10 text-4xl text-black">
                    <span className="text-sm">11º FESTIVAL MAESTRO</span>
                    <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
                </header>
            </Link>

            <form className="flex flex-col items-center bg-white w-screen sm:max-w-sm p-6 sm:p-4 rounded" onSubmit={handleSubmit}>

                <div className="bg-orange-200 p-4 border-solid border-1 mb-8 cursor-pointer">
                    <p className="text-justify">
                        <b>Atenção!</b> Para que você ganhe o certificado da oficina no final do festival, é necessário confirmar a presença em todas as <b>três aulas</b>. Portanto, fique atento quando os mediadores informarem os links.
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <input
                        className="bg-orange-500 px-6 py-4 rounded font-bold cursor-pointer"
                        value="Confirmar presença na aula de hoje"
                        type="submit"
                    />
                </div>

            </form>

            <span className="mt-10">{aguarde}</span>

            <footer className="text-center mt-8 mb-64">
                © 2020. Assomusc. Todos os direitos reservados.
			</footer>
        </div>
    )
}

Chamada.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = true
        await handleAuthentication(ctx, expectedAuthorization, '/login')

        return {
            codigoPresenca: ctx.query.codigoPresenca
        }
    } catch (error) {
        return {
            codigoPresenca: undefined
        }
    }
}