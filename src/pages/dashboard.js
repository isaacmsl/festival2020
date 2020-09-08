import Head from 'next/head'

import styles from '../../styles/Dashboard.module.css'
import MenuDashboard from '../components/MenuDashboard'
import OficinaCard from '../components/OficinaCard'

export default function Dashboard() {
    
    const oficina = {
        nome: 'Flauta',
        professor: 'Professor Ivo Shin',
        qntAulasAssistidas: 3
    }

    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard />

            <div 
                className={styles.scrollable + " bg-bgMain w-full sm:overflow-y-scroll h-screen p-8"}
            >
                <header className="mb-10 flex font-bold">
                    <img src="assets/dark-trello.svg" />
                    <h1 className="ml-4">Minhas oficinas</h1>
                </header>

                <main className="flex flex-wrap gap-4">
                    <OficinaCard oficina={oficina} />
                    <OficinaCard oficina={oficina} />
                    <OficinaCard oficina={oficina} />
                </main>
                 
            </div>
        </div>
    )
}
