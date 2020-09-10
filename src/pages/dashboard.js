import Head from 'next/head'

import styles from '../../styles/Dashboard.module.css'
import MenuDashboard from '../components/MenuDashboard'
import OficinaCard from '../components/OficinaCard'
import handleAuthentication from '../libs/handleAuthentication'

export default function Dashboard({ participante }) {

    const oficinas = [
        {
            nome: 'Sax',
            professor: 'Costinha',
            qntAulasAssistidas: 0
        }
    ]

    // participante.professores.forEach(professor => {
    //     oficinas.push({
    //         nome: professor.oficinas[0],
    //         professor: professor.nomeCompleto,
    //         qntAulasAssistidas: 0
    //     })
    // })

    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard />

            <div
                className={styles.scrollable + " bg-bgMain w-full sm:overflow-y-scroll h-full min-h-screen sm:h-screen p-8"}
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

Dashboard.getInitialProps = (ctx) => {
    const expectedAuthorization = true
    handleAuthentication(ctx, expectedAuthorization, '/login')
    return {}
}