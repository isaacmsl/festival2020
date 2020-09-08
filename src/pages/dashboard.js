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
        <div className="flex">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard />

            <div 
                className={styles.scrollable + " w-full sm:overflow-y-scroll h-screen p-8"}
            >
                <header className="flex font-bold">
                    <img src="assets/dark-trello.svg" />
                    <h1 className="ml-4">Minhas oficinas</h1>
                </header>

                <main>
                    <OficinaCard oficina={oficina} />
                </main>
                 
            </div>
        </div>
    )
}
