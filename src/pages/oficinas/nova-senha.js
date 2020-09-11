import Head from 'next/head'
import MenuDashboard from '../../components/MenuDashboard'
import styles from '../../../styles/Dashboard.module.css'
import Link from 'next/link'

export default function NovaSenha() {
    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival - 2020</title>
            </Head>

            <MenuDashboard />
            
            <div
                className={styles.scrollable + " bg-bgMain w-full h-screen sm:overflow-y-scroll h-full sm:h-screen p-4 overflow-auto sm:p-8"}
            >
                 <header className="mb-10 flex flex-col font-bold gap-6 items-start">
                    <div className="flex items-center font-bold">
                        <img src="/assets/dark-grid.svg" />
                        <h1 className="ml-4">Perfil</h1>
                    </div>
                </header>

                <main>
                    <form className="flex flex-col gap-6 p-10 bg-white border border-solid border-gray-200 rounded max-w-xl justify-center">
                        <div className="mt-3 flex flex-col gap-4 max-w-lg">
                            <label htmlFor="senhaAtual" className="text-brownText font-semibold">Qual é sua senha atual ?</label>

                            <input 
                            type="password" 
                            id="senhaAtual" 
                            className="border border-solid border-gray-300 rounded px-4 py-2 max-w-lg"

                            />
                        </div>
                        <div className="mt-3 flex flex-col gap-4 max-w-lg">
                            <label htmlFor="novaSenha" className="text-brownText font-semibold">Nova Senha</label>
                            <input 
                            type="password" 
                            id="novaSenha"
                            className="border border-solid border-gray-300 rounded px-4 py-2 max-w-lg"
                            
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-between max-w-lg py-2 sm:py-0">
                            <Link href="/dashboard">
                                <a className="px-6 py-4 bg-greenButton text-white font-bold rounded text-center ">Cancelar</a>
                            </Link>
                            <Link href="/dashboard">
                                <a className="px-6 py-4 bg-greenButton text-white font-bold rounded text-center ">Atualizar</a>
                            </Link>
                        </div>
                    </form>
                </main>

            </div>
        </div>
    )
}

