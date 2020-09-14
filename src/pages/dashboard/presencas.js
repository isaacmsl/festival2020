import Head from 'next/head'

import MenuDashboard from '../../components/MenuDashboard'
import handleAuthentication from '../../libs/handleAuthentication'
import myGet from '../../libs/myGet'
import { useState, useEffect } from 'react'
import axios from 'axios'


const tailStyles = {
    Labels: 'mb-2 font-bold',
    Input: 'p-2 border border-1 rounded bg-transparent',
    Checkboxs: 'mr-2 checked:bg-black'
}

export default function Presencas({ autorizacaoParticipante, allParticipantes }) {
    const [oficina, setOficina] = useState('Clarinete')
    const [dia, setDia] = useState('1')
    const [qntPresencas, setQntPresencas] = useState(0)
    const [matchParticipantes, setMatchParticipantes] = useState([])


    async function updateQntPresencas() {
        setQntPresencas('Atualizando...')

        const response = await axios('/api/participantes')
        allParticipantes = response.data.allParticipantes

        const newMatchParticipantes = allParticipantes.filter(participante => {
            return participante.oficinas.includes(oficina)
                && participante.presencaOficinas
                && participante.presencaOficinas[oficina]
                && participante.presencaOficinas[oficina].includes(Number(dia))
        })

        setMatchParticipantes(newMatchParticipantes)

        if (matchParticipantes) {
            setQntPresencas(newMatchParticipantes.length)
        } else {
            setQntPresencas(0)
        }
    }
    useEffect(() => {
        updateQntPresencas()
    }, [dia, oficina])

    async function handleChangeDia(e) {
        setDia(e.target.value)
    }

    async function handleChangeOficina(e) {
        setOficina(e.target.value)
    }

    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard autorizacao={autorizacaoParticipante} />

            <div
                className={"bg-bgMain w-full h-screen sm:overflow-y-scroll h-full sm:h-screen p-4 overflow-auto sm:p-8"}
            >
                <header className="mb-10 flex flex-col font-bold gap-6 items-start">
                    <div className="flex items-center font-bold">
                        <img src="/assets/check-circle.svg" />
                        <h1 className="ml-3">Presenças</h1>
                    </div>

                </header>

                <main className="flex flex-col gap-6">
                    <form className="max-w-2xl p-6 bg-white border border-solid border-gray-200 gap-4 justify-center flex flex-col">
                        <div className="sm:col-span-2">
                            <div className="mt-2 flex flex-col w-full">
                                <label htmlFor="selectOficinas" className={tailStyles.Labels}>Oficinas</label>
                                <select
                                    id="inputSelectOficinas"
                                    name="selectOficinas"
                                    className={tailStyles.Input + " w-full"}
                                    onChange={handleChangeOficina}
                                    defaultValue="Clarinete"
                                >
                                    <option value="Clarinete">Clarinete</option>
                                    <option value="Flauta">Flauta</option>
                                    <option value="Saxofone">Saxofone</option>
                                    <option value="Trompa">Trompa</option>
                                    <option value="Trompete">Trompete</option>
                                    <option value="Trombone">Trombone</option>
                                    <option value="Tuba">Tuba</option>
                                    <option value="Percussão">Percussão</option>
                                    <option value="Regência">Regência</option>
                                </select>
                            </div>
                            <div className="mt-2 flex flex-col">
                                <label htmlFor="selectDias" className={tailStyles.Labels}>Dias</label>
                                <select
                                    id="inputSelectDias"
                                    name="selectDias"
                                    className={tailStyles.Input}
                                    onChange={handleChangeDia}
                                    defaultValue="0"
                                >
                                    <option value="1">Dia 1</option>
                                    <option value="2">Dia 2</option>
                                    <option value="3">Dia 3</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div className={"flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl "} >
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-xl">Aula {Number(dia)} - {oficina}</h2>
                            <p id="codigoPresenca">Presenças: {qntPresencas}</p>
                        </div>
                        <a onClick={updateQntPresencas} className={"cursor-pointer"}>
                            <img src="/assets/refresh.svg" />
                        </a>
                    </div>

                    <div className={"flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl "} >
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-xl">Participantes presentes</h2>
                            <ul className="flex flex-col gap-4">
                                {matchParticipantes.map(participante => (
                                    <li>
                                        {participante.nomeCompleto}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a onClick={updateQntPresencas} className={"cursor-pointer"}>
                            <img src="/assets/refresh.svg" />
                        </a>
                    </div>
                </main>
            </div>
        </div>
    )

}

Presencas.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = true
        await handleAuthentication(ctx, expectedAuthorization, '/login')

        const responseParticipantes = await myGet(ctx, expectedAuthorization, '/api/participantes')

        const { participante } = responseParticipantes
        const autorizacaoParticipante = participante.autorizacao

        if (autorizacaoParticipante !== 3) {
            redirect(ctx, '/dashboard')
        }

        const { allParticipantes }  = await myGet(ctx, expectedAuthorization, '/api/participantes')

        return {
            autorizacaoParticipante,
            allParticipantes
        }
    } catch (error) {
        return {
            autorizacaoParticipante: undefined,
            allParticipantes: undefined
        }
    }

}

