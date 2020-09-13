import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import handleAuthentication from '../../libs/handleAuthentication'
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

export default function Esqueci({ idParticipante }) {
    const router = useRouter()
    const [novaSenha, setNovaSenha] = useState('')
    const [aguarde, setAguarde] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const participante = {
            id: idParticipante,
            senha: novaSenha
        }

        if (novaSenha.length >= 8){
            try {
                const response = await axios.put('/api/participantes', participante)

                if (response.status === 200) {
                    alert('Sua senha foi atualizado com sucesso, agora é necessário realizar o login.')
                    router.replace('/login')
                } else {
                    alert('Desculpe. Não foi possível fazer o enviar o código de recuperação. Por favor verifique seus dados')
                }
            } catch (e) {
                alert('Desculpe. Não foi possível atualizar a sua senha. Por favor verifique seus dados')
            } finally {
                setAguarde('')
            }
        } else {
            alert('A sua nova senha deve conter no mínimo 8 caracteres.')
        }

    }
    return (
        <div
            className="relative bg-bgMain min-h-screen min-w-full flex flex-col items-center justify-center overflow-auto"
        >
            <Head>
                <title>Festival - Nova senha</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ImagensInstrumento />

            <header className="mt-56 px-10 sm:px-0 sm:mt-0 mb-10 text-4xl text-black">
                <span className="text-sm">11º FESTIVAL MAESTRO</span>
                <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
            </header>

            <form className="flex flex-col items-center bg-white w-screen sm:max-w-sm p-4 rounded" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                    <label className="mb-4" htmlFor="novaSenhaInput">Nova senha</label>
                    <input
                        id="novaSenhaInput"
                        className="border-solid border-2 px-4 py-2 rounded w-full"
                        type="password"
                        name="novaSenha"
                        placeholder="************"
                        minLength="8"
                        onChange={e => setNovaSenha(e.target.value)}
                        required
                    />
                </div>

                <div className="mt-10 flex items-center justify-between">
                    <input
                        className="bg-orange-500 px-6 py-4 rounded font-bold"
                        value="Atualizar senha"
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

        const { idParticipante } = ctx.query
        
        return {
            idParticipante
        }
    } catch(error) {
        return {
            idParticipante: undefined
        }
    }
}