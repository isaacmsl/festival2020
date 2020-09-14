import Head from 'next/head'

import MenuDashboard from '../../components/MenuDashboard'


const tailStyles = {
    Labels: 'mb-2 font-bold',
    Input: 'p-2 border border-1 rounded bg-transparent max-w-xs md:max-w-full',
    Checkboxs: 'mr-2 checked:bg-black'
}

export default function GerarCodigo (autorizacaoParticipante) {
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

                <main>
                    <form className="max-w-lg p-4 bg-white border border-solid border-gray-200 grid grid-cols-1 grid-rows-2 gap-4 items-center justify-center sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <div className="mt-2 flex flex-col">
                                <label htmlFor="selectOficinas" className={tailStyles.Labels}>Oficinas</label>
                                <select 
                                    id="selectOficinas"
                                    name="selectOficinas"
                                    className={tailStyles.Input}
                                >
                                    <option value="1">Clarinete</option>
                                    <option value="2">Flauta</option>
                                    <option value="3">Saxofone</option>
                                    <option value="4">Trompa</option>
                                    <option value="5">Trompete</option>
                                    <option value="6">Trombone</option>
                                    <option value="7">Tuba</option>
                                    <option value="8">Percussão</option>
                                    <option value="9">Regência</option>
                                </select>
                            </div>
                            <div className="mt-2 flex flex-col">
                                <label htmlFor="selectDias" className={tailStyles.Labels}>Dias</label>
                                <select 
                                    id="selectDias"
                                    name="selectDias"
                                    className={tailStyles.Input}
                                >
                                    <option value="1">Dia 1</option>
                                    <option value="2">Dia 2</option>
                                    <option value="3">Dia 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="max-w-xs">
                            <input 
                                type="submit"
                                value="Gerar"
                                className="bg-blue-600 text-white font-bold w-full px-6 py-4 rounded text-center"
                            />
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
        
}

