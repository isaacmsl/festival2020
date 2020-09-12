import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

import styles from '../../../styles/Dashboard.module.css'
import MenuDashboard from '../../components/MenuDashboard'
import OficinaCard from '../../components/OficinaCard'
import handleAuthentication from '../../libs/handleAuthentication'

export default function Dashboard() {
    const [oficinas, setOficinas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/participantes')
            const { participante, professores } = response.data

            const partOficinas = []
            professores.forEach(professor => {
                let qntAulasAssistidas = 0

                const oficinaProfessor = professor.oficinas[0]
                const { presencaOficinas } = participante

                if (
                    presencaOficinas &&
                    presencaOficinas[oficinaProfessor]
                ) {
                    qntAulasAssistidas = presencaOficinas[oficinaProfessor]
                }

                partOficinas.push({
                    nome: professor.oficinas[0],
                    professor: professor.nomeCompleto,
                    qntAulasAssistidas
                })
            })

            setOficinas(partOficinas)
        }   
        
        fetchData()
    }, [])

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
                        <Link as={`/dashboard/oficinas/${oficina.nome}`} href="/dashboard/oficinas/[oficina]">
                            <a>
                                <OficinaCard oficina={oficina} key={oficina.nome} />
                            </a>
                        </Link>
                    ))}
                </main>

            </div>
        </div>
    )
}

Dashboard.getInitialProps = async (ctx) => {
    const expectedAuthorization = true
    handleAuthentication(ctx, expectedAuthorization, '/login')
    return {}
}