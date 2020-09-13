import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
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

export default function Esqueci() {
    const router = useRouter()
    const [displayCodigoRecuperacao, setDisplayCodigoRecuperacao] = useState('hidden')
    const [aguarde, setAguarde] = useState('')

    const [formData, setFormData] = useState({
        email: '',
        codigoRecuperacao: ''
    })

    function handleInputChange(e) {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const participanteRecuperacao = {
            email: formData.email,
            codigoRecuperacao: formData.codigoRecuperacao
        }
        

        setAguarde('Por favor, aguarde. Estamos verificando seu email...')
        try {
            const response = await axios.post('/api/esqueci', participanteRecuperacao)

            if (response.status === 200) {
                if (
                    participanteRecuperacao.codigoRecuperacao &&
                    participanteRecuperacao.codigoRecuperacao.length > 0
                ) {
                    router.replace(`/novaSenha/${response.data.idParticipante}`)
                } else {
                    alert('Um código de recuperação foi enviado para o seu email')
                    setDisplayCodigoRecuperacao('block')
                }
            } else {
                alert('Desculpe. Não foi possível fazer o enviar o código de recuperação. Por favor verifique seus dados')
            }
        } catch (e) {
            alert('Desculpe. Não foi possível fazer o enviar o código de recuperação. Por favor verifique seus dados')
        } finally {
            setAguarde('')
        }

    }
    return (
        <div
            className="relative bg-bgMain min-h-screen min-w-full flex flex-col items-center justify-center overflow-auto"
        >
            <Head>
                <title>Festival - Esqueci a senha</title>
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
                <div className="flex flex-col w-full">
                    <label className="mb-4" htmlFor="emailInput">E-mail</label>
                    <input
                        id="emailInput"
                        className="border-solid border-2 px-4 py-2 rounded"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className={displayCodigoRecuperacao + " flex flex-col mt-4 w-full"}>
                    <label className="mb-4" htmlFor="codigoRecuperacaoInput">Código de recuperação</label>
                    <input
                        id="codigoRecuperacaoInput"
                        className="border-solid border-2 px-4 py-2 rounded"
                        type="text"
                        name="codigoRecuperacao"
                        placeholder="Código de recuperação"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mt-10 flex items-center justify-between">
                    <input
                        className="bg-orange-500 px-6 py-4 rounded font-bold"
                        value="Enviar código de recuperação"
                        type="submit"
                    />
                </div>

            </form>

            <span className="mt-10">{aguarde}</span>

            <Link href="/inscricoes">
                <a className="bg-orange-500 w-56 font-bold px-6 py-4 mt-10 rounded text-center">
                    Quero me inscrever
				</a>
            </Link>

            <footer className="text-center mt-8 mb-64">
                © 2020. Assomusc. Todos os direitos reservados.
			</footer>
        </div>
    )
}

Esqueci.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = false
        await handleAuthentication(ctx, expectedAuthorization, '/dashboard')
    } finally {
        return {
            imFunny: true
        }
    }
}