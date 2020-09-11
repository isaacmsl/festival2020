import Head from 'next/head'

import MenuDashboard from '../../components/MenuDashboard'
import handleAuthentication from '../../libs/handleAuthentication'
import styles from '../../../styles/Dashboard.module.css'

import Link from 'next/link'

export default function Perfil() {
    return(
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival - 2020</title>
                <link rel="icon" href="/favicon.ico" />
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
                    <div className="bg-white flex flex-col gap-6 p-10 max-w-xl border border-solid border-gray-200 rounded">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-black font-semibold text-2xl">Isaac Marlon da Silva Lourenço</h1>
                                <Link href="/nova-senha">
                                    <a><img src="/assets/edit.svg" className="mr-4"/></a>
                                </Link>
                            </div>
                            
                            <h2 className="text-base">Banda Mestre João Roberto Paz e União</h2>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-3">
                                <li className="flex flex-row">
                                    <h4 className="pr-1 font-semibold">Email: </h4>
                                    <span>Isaac@gmail.com</span>
                                </li>
                                <li className="flex flex-row">
                                    <h4 className="pr-1 font-semibold">Tipo de Músico: </h4>
                                    <span>Estudante</span>
                                </li>
                                <li className="flex flex-row pb-10">
                                    <h4 className="pr-1 font-semibold">Tempo de atuação: </h4>
                                    <span>2 anos ou mais</span>
                                </li>
                                <li>
                                    <Link href="/oficinas/nova-senha">
                                        <a className="px-6 py-4 bg-greenButton text-white font-semibold rounded text-center ">Alterar senha</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}