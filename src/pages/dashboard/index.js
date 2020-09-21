import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import MenuDashboard from '../../components/MenuDashboard'
import OficinaCard from '../../components/OficinaCard'
import handleAuthentication from '../../libs/handleAuthentication'
import myGet from '../../libs/myGet'

const ButtonCertificados = ({ linkCertificados }) => {
    if (linkCertificados) {
        return (
            <a  href={linkCertificados} target="_blank">
                <div className="cursor-pointer px-6 py-4 bg-blue-600 text-white font-bold rounded text-center max-w-2xl animate-pulse">
                    <div>Acessar certificados obtidos</div>
                    <div>(Desativado para manutenção)</div>
                </div>
            </a>
        )
    }

    return <></>
} 

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
                feedback: feedback.trim()
            }
            
            try {

                const response = await axios.post('/api/feedbacks', newFeedback)

                if (response.status === 200) {
                    setFeedback('')
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
        <div className="flex flex-col sm:flex-row overflow-auto">
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

                <ButtonCertificados linkCertificados={participante.linkCertificados} />

                <div className="font-normal bg-orange-200 p-4 border border-solid mb-8 max-w-2xl border-gray-200 rounded mt-6">
                    <p className="text-justify">
                        <b>Os certificados já estão disponíveis:</b> se você possui no mínimo 67% de presença em uma oficina mas não conseguiu acessar o certificado, por favor nos envie um feedback relatando o problema.
                        </p>
                </div>

                <div className="font-normal bg-orange-200 p-4 border border-solid mb-8 max-w-2xl border-gray-200 rounded flex flex-col gap-4">
                    <h2 className="font-bold">
                        Por favor, nos ajude a melhorar o festival enviando seu feedback
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li>Alguma ideia para melhorarmos as aulas, plataforma ou o festival em geral?</li>
                        <li>Estás passando por algum problema?</li>
                        <li>Alguma dúvida sobre como usar a plataforma?</li>
                        <li>Alguma informação parece incorreta?</li>
                    </ul>
                    <form className="w-full rounded" onSubmit={handleFeedback}>
                        <div className="flex flex-col mt-4">
                            <label className="mb-4 font-bold" htmlFor="feedbackInput">Feedback</label>
                            <textarea
                                id="feedbackInput"
                                className="w-full border-solid border-2 px-4 py-2 rounded"
                                name="feedback"
                                placeholder="Seu feedback é muito importante..."
                                rows="4"
                                cols="50"
                                value={feedback}
                                maxLength={300}
                                onChange={e => setFeedback(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <input
                                className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center w-full"
                                value="Enviar feedback"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>

                <main className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                    {oficinas.map((oficina, index) => (
                        <Link as={`/dashboard/oficinas/${oficina.nome}`} href="/dashboard/oficinas/[oficina]" key={index}>
                            <a className="cursor-pointer">
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