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

export default function GerarCodigo ({autorizacaoParticipante, responseCodigos}) {
    const [oficina, setOficina] = useState('Clarinete')
    const [dia, setDia] = useState('0')
    const [codigo, setCodigo] = useState('')

    useEffect(() => {
        const matchOficina = responseCodigos.find(oficinaResponse => oficinaResponse.nome === oficina)

        setCodigo(matchOficina.codigo[dia])
    }, [dia, oficina])

    function copiar() {
        let from = document.getElementById("codigoPresenca");
        let range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(from);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        alert('Código copiado')
    }

    async function handleChangeDia(e) {        
        setDia(e.target.value)
    }

    async function handleChangeOficina(e) {
        setOficina(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await axios.get('/api/oficinas/codigos-presenca')
        
        
        setCodigo(matchOficina.codigo[Number(dia)])
        setDisplayCodigo('block')
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
                        <img src="/assets/dark-grid.svg" />
                        <h1 className="ml-3">Gerar Código</h1>
                    </div>
                    
                </header>

                <main className="flex flex-col gap-6">
                    <form onSubmit={handleSubmit}className="max-w-2xl p-6 bg-white border border-solid border-gray-200 gap-4 justify-center flex flex-col">
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
                                    <option value="0">Dia 1</option>
                                    <option value="1">Dia 2</option>
                                    <option value="2">Dia 3</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <div className={"flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl "} >
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-xl">Aula {Number(dia)+1} - {oficina}</h2>
                            <p id="codigoPresenca">{codigo}</p>
                        </div>     

                        <a onClick={copiar} target="_blank" className="cursor-pointer px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Copiar</a>
                        
                    </div>
                </main>
            </div>
        </div>
    )
        
}

GerarCodigo.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = true
        await handleAuthentication(ctx, expectedAuthorization, '/login')

        const responseParticipantes = await myGet(ctx, expectedAuthorization, '/api/participantes')

        const { participante } = responseParticipantes
        const autorizacaoParticipante = participante.autorizacao

        if (autorizacaoParticipante < 3) {
            redirect(ctx, '/dashboard')
        }

        const responseCodigos = await myGet(ctx, expectedAuthorization, '/api/oficinas/codigos-presenca')
      
        return {
            autorizacaoParticipante,
            responseCodigos
        }
    } catch(error) {
        return {
            autorizacaoParticipante: undefined,
            responseCodigos: undefined
        }
    }
    
}

