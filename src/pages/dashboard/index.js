import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import MenuDashboard from '../../components/MenuDashboard'
import OficinaCard from '../../components/OficinaCard'
import handleAuthentication from '../../libs/handleAuthentication'
import myGet from '../../libs/myGet'

export default function Dashboard({participante, professores}) {
    const [feedback, setFeedback] = useState('')
    
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
                qntAulasAssistidas = presencaOficinas[oficinaProfessor].length
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
    

    async function handleFeedback(e) {
        e.preventDefault()

        if (feedback && feedback.length > 0) {
            const newFeedback = {
                nomeParticipante: participante.nomeCompleto,
                emailParticipante: participante.email,
                feedback
            }
            
            try {

                const response = await axios.post('/api/feedbacks', newFeedback)

                if (response.status === 200) {
                    alert('Obrigado pelo seu feedback. Agradecemos muito o seu carinho!')
                } else {
                    alert('Desculpe, não foi possível enviar o feedback, por favor tente novamente.')
                }
            } catch (error) {
                alert('Desculpe, não foi possível enviar o feedback, por favor tente novamente.')
            }


        } else {
            alert('Desculpe, não foi possível enviar o feedback, por favor tente novamente.')
        }
    }

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

                <div className="font-normal bg-orange-200 p-4 border border-solid mb-8 max-w-2xl border-gray-200 rounded">
                    <p>
                        <b>CERTIFICADOS:</b> os participantes deverão possuir 100% de presença nas oficinas para poderem ganhar os certificados. A previsão de disponibilidade é até o dia de domingo (20/09).
                        </p>
                </div>

                <div className="font-normal bg-orange-200 p-4 border border-solid mb-8 max-w-2xl border-gray-200 rounded">
                    <p>
                        <b>Por favor, nos ajude a melhorar o nosso festival enviando seu feedback</b>
                        <ul>
                            <li>Alguma ideia para melhorarmos as aulas, plataforma ou o festival em sí?</li>
                            <li>Estás passando por algum problema?</li>
                            <li>Alguma dúvida sobre como usar a plataforma?</li>
                            <li>Alguma informação parece incorreta?</li>
                        </ul>
                    </p>
                    <form className="bg-white w-screen sm:max-w-sm p-4 rounded" onSubmit={handleFeedback}>
                        <div className="flex flex-col mt-4">
                            <label className="mb-4" htmlFor="feedbackInput">Feedback</label>
                            <textarea
                                id="feedbackInput"
                                className="border-solid border-2 px-4 py-2 rounded"
                                name="feedback"
                                placeholder="Seu feedback é muito importante..."
                                rows="4"
                                cols="50"
                                onChange={e => setFeedback(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <input
                                className="bg-orange-500 px-6 py-4 rounded font-bold"
                                value="Enviar feedback"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>

                <main className="flex flex-wrap gap-4">

                    {oficinas.map((oficina, index) => (
                        <Link as={`/dashboard/oficinas/${oficina.nome}`} href="/dashboard/oficinas/[oficina]" key={index}>
                            <a className="w-full">
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