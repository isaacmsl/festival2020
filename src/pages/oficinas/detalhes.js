import Head from 'next/head'

import styles from '../../../styles/Dashboard.module.css'
import styles1 from '../../../styles/Imagens.module.css'
import MenuDashboard from '../../components/MenuDashboard'
import handleAuthentication from '../../libs/handleAuthentication'

import Link from 'next/link'

export default function DetalhesOficina() {
    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard />

            <div
                className={styles.scrollable + " bg-bgMain w-full sm:overflow-y-scroll h-full sm:h-screen p-4 overflow-auto sm:p-8"}
            >
                <header className="mb-10 flex flex-col font-bold gap-6 items-start">
                    <header className="flex items-center font-bold">
                        <img src="/assets/dark-grid.svg" />
                        <h1 className="ml-4">Flauta</h1>
                    </header>
                    <Link href="/dashboard">
                        <a className="px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center">Materiais das aulas</a>
                    </Link>
                </header>

                <main className="flex flex-col flex-wrap gap-4">
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-xl">Aula 01</h2>
                                <p>Segunda Feira (14/09/20) às 09:00</p>
                            </div>
                            <Link href="/dashboard">
                                <a className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Assistir</a>
                            </Link>
                        </li>
                        <li className="flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-xl">Aula 01</h2>
                                <p>Segunda Feira (14/09/20) às 09:00</p>
                            </div>
                            <Link href="/dashboard">
                                <a className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Assistir</a>
                            </Link>
                        </li>
                        <li className="flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-xl">Aula 01</h2>
                                <p>Segunda Feira (14/09/20) às 09:00</p>
                            </div>
                            <Link href="/dashboard">
                                <a className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Assistir</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col md:flex-row p-6 gap-4 bg-white rounder border border-solid border-gray-200  max-w-2xl">
                        <img
                            className={styles1.imagens}
                            src="https://drive.google.com/thumbnail?id=1puJW-X9BWsBBr_Hcx4_Lu-8iyYRnRNv8"
                            alt="Heleno Feitosa (Costinha)" />
                        <div className="w-full gap-6 md:gap-0 flex flex-col justify-between">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-xl">
                                    Seu professor
                                </h2>
                                <p>
                                    Costinha
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="https://www.instagram.com/hfeitosa_costinha/" target="_blank">
                                    <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                                </a>
                                <a href="https://www.instagram.com/hfeitosa_costinha/" target="_blank">
                                    <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                                </a>
                                <a href="https://www.instagram.com/hfeitosa_costinha/" target="_blank">
                                    <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

DetalhesOficina.getInitialProps = (ctx) => {
    const expectedAuthorization = true
    handleAuthentication(ctx, expectedAuthorization, '/login')
    return {}
}