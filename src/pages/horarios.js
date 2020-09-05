import Head from 'next/head'

import Link from 'next/link'

import HeaderDivulgacao from '../components/HeaderDivulgacao'
import FooterDivulgacao from '../components/FooterDivulgacao'

export default function Horarios() {
    return (
        <div
            style={{
                background: 'url(/assets/background.png) no-repeat center',
                backgroundSize: 'cover'
            }}
            className="min-h-screen w-full flex flex-col items-center"
        >
            <Head>
                <title>Festival - 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderDivulgacao />

            <main className="grid gap-10 grid-cols-1">
                <div className="bg-white w-screen sm:max-w-md flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">SEGUNDA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        FLAUTA
                                    </li>
                                    <li>
                                        SAX
                                    </li>
                                    <li>
                                        TUBA
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        CLARINETE
                                    </li>
                                    <li>
                                        TROMBONE
                                    </li>
                                    <li>
                                        TROMPETE
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">TERCA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        CLARINETE
                                    </li>
                                    <li>
                                        TROMBONE
                                    </li>
                                    <li>
                                        TROMPETE
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        FLAUTA
                                    </li>
                                    <li>
                                        SAX
                                    </li>
                                    <li>
                                        TUBA
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">QUARTA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        CLARINETE
                                    </li>
                                    <li>
                                        PERCUSSÃO
                                    </li>
                                    <li>
                                        TROMBONE
                                    </li>
                                    <li>
                                        TROMPETE
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        FLAUTA
                                    </li>
                                    <li>
                                        SAX
                                    </li>
                                    <li>
                                        TUBA
                                    </li>
                                    <li>
                                        TROMPA
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">20:00 às 21:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        REGÊNCIA
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">QUINTA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        PERCUSSÃO
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        TROMPA
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">20:00 às 21:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        REGÊNCIA
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">SEXTA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        PERCUSSÃO
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        TROMPA
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">20:00 às 21:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        REGÊNCIA
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link href="/inscricoes">
                    <a className="w-full sm:max-w-md px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center">QUERO ME INSCREVER</a>
                </Link>
            </main>

            <FooterDivulgacao />
        </div>
    )
}
