import Head from 'next/head'

import styles from '../../styles/Dashboard.module.css'
import MenuDashboard from '../components/MenuDashboard'
import OficinaCard from '../components/OficinaCard'

import { myGet } from '../api/myGet'

export default function Dashboard({ participante }) {

    console.log(participante)
    const oficinas = []

    participante.professores.forEach(professor => {
        oficinas.push({
            nome: professor.oficinas[0],
            professor: professor.nomeCompleto,
            qntAulasAssistidas: 0
        })
    })

    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard />

            <div
                className={styles.scrollable + " bg-bgMain w-full sm:overflow-y-scroll h-full sm:h-screen p-8"}
            >
                <header className="mb-10 flex font-bold">
                    <img src="assets/dark-trello.svg" />
                    <h1 className="ml-4">Minhas oficinas</h1>
                </header>

                <main className="flex flex-wrap gap-4">
                    {oficinas.map(oficina => (
                        <OficinaCard oficina={oficina} />
                    ))}
                </main>

            </div>
        </div>
    )
}

Dashboard.getInitialProps = async (ctx) => {
    const participante = await myGet('http://localhost:3000/api/participantes', ctx)

    return {
        participante
    }
}
