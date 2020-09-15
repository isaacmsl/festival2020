import Head from 'next/head'

import HeaderDivulgacao from '../components/HeaderDivulgacao'
import FooterDivulgacao from '../components/FooterDivulgacao'
import ButtonInscricoes from '../components/ButtonInscricoes'

export default function Horarios({ diasRestantes }) {
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

            <main className="text-center flex flex-col items-center">
                <div className="bg-white w-screen sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">SEGUNDA-FEIRA (14/9)</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Clarinete
                                    </li>
                                    <li>
                                        Oficina de Trompete
                                    </li>
                                    <li>
                                        Oficina de Trombone
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Saxofone
                                    </li>
                                    <li>
                                        Oficina de Tuba
                                    </li>
                                    <li>
                                        Oficina de Flauta
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">19:00</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Mesa-redonda: 
                                    </li>
                                    <li>"Educação musical, uma realidade virtual ?"</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white w-screen sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">TERCA-FEIRA (15/9)</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Clarinete
                                    </li>
                                    <li>
                                        Oficinad de Trombone
                                    </li>
                                    <li>
                                        Oficina de Trompete
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Saxofone
                                    </li>
                                    <li>
                                        Oficina de Tuba
                                    </li>
                                    <li>
                                        Oficina de Flauta
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">19:00</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Mesa-redonda: 
                                    </li>
                                    <li>"O protagonismo das mulheres nas bandas de música"</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white w-screen sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">QUARTA-FEIRA (16/9)</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Clarinete
                                    </li>
                                    <li>
                                        Oficina de Percussão
                                    </li>
                                    <li>
                                        Oficina de Trombone
                                    </li>
                                    <li>
                                        Oficina de Trompete
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Flauta
                                    </li>
                                    <li>
                                        Oficina de Saxofone
                                    </li>
                                    <li>
                                        Oficina de Tuba
                                    </li>
                                    <li>
                                        Oficina de Trompa
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">20:00 às 21:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Regência
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">19:00</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Mesa-redonda: 
                                    </li>
                                    <li>"As bandas de música no contexto social e na formação cidadã"</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white w-screen sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">QUINTA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Percussão
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Trompa
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">20:00 às 21:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Regência
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-white w-screen sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-xl">SEXTA-FEIRA</h2>
                    <ul>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">09:00 às 10:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Percussão
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">15:00 às 16:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Trompa
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mt-8">
                            <div>
                                <h3 className="font-bold">20:00 às 21:30</h3>
                                <ul className="text-center mt-4">
                                    <li>
                                        Oficina de Regência
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <ButtonInscricoes diasRestantes={diasRestantes}/> */}
            </main>

            <FooterDivulgacao />
        </div>
    )
}

Horarios.getInitialProps = () => {
    const dataAtual = new Date()
    const dataFinalInscricoes = new Date(2020, 9, 14)

    if (dataAtual < dataFinalInscricoes) {
        const diaAtual = dataAtual.getDate()
        const diaFinal = dataFinalInscricoes.getDate()

        const diasRestantes = diaFinal - diaAtual

        return {
            diasRestantes
        }
    }

    return {
        diasRestantes: 0
    }
}
