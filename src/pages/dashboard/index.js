import Head from 'next/head'
import Link from 'next/link'

import MenuDashboard from '../../components/MenuDashboard'
import OficinaCard from '../../components/OficinaCard'
import handleAuthentication from '../../libs/handleAuthentication'
import myGet from '../../libs/myGet'

export default function Dashboard({participante, professores}) {
    let oficinas

    const partOficinas = []
    
    if (participante.autorizacao !== 2) {
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
    } else {
        partOficinas.push({
            nome: participante.oficinas[0],
            professor: participante.nomeCompleto
        })
    }

    oficinas = partOficinas
         

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

            <MenuDashboard autorizacao={participante.autorizacao} />

            <div
                className={"bg-bgMain w-full sm:overflow-y-scroll h-full min-h-screen sm:h-screen p-8"}
            >
                <header className="mb-10 flex font-bold">
                    <img src="assets/dark-trello.svg" />
                    <h1 className="ml-4">Minhas oficinas</h1>
                </header>

                <main className="flex flex-wrap gap-4">
                    {oficinas.map((oficina, index) => (
                        <Link as={`/dashboard/oficinas/${oficina.nome}`} href="/dashboard/oficinas/[oficina]" key={index}>
                            <a>
                                <OficinaCard autorizacao={participante.autorizacao} oficina={oficina}  />
                            </a>
                        </Link>
                    ))}
                </main>

            </div>
        </div>
    )
}

Dashboard.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = true
        await handleAuthentication(ctx, expectedAuthorization, '/login')
        
        const { participante, professores } = await myGet(ctx, expectedAuthorization, '/api/participantes')
        
        return { participante, professores }
    } catch (error) {
        return { participante: undefined, professores: undefined }
    }
}