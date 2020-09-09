import Head from 'next/head'
import MenuDashboard from '../components/MenuDashboard'

export default function estatisticas () {
    return (
        <div>
            <Head>
                <title>Festival - 2020</title>
            </Head>

            <div className="bg-bgMain flex w-full overflow-auto">
                <MenuDashboard />

                <main className="p-3 flex-grow lg:p-6">
                    <div className="flex flex-row mt-3">
                        <img src="assets/dark-grid.svg"></img>
                        <p className="text-black font-semibold pl-3">Dashboard</p>
                    </div>
                    <div className="mt-4 mb-6 p-3 bg-colorCard flex flex-col items-center justify-center max-w-lg">
                        <p className="text-black text-base"><strong>Olá, Isaac.</strong> No formulário de inscrição você escolheu “Outra” como sua banda. Por favor, você poderia informar o nome de sua banda?</p>
                        <div className="mt-6">
                            <form className="flex flex-col gap-2 items-start">
                                <label for="bandName" className="font-semibold">Nome da banda *</label>
                                <input type="text" id="bandName" className="border border-solid border-gray-300 w-48 h-6 rounded lg:w-64"></input>
                                <div className="flex items-center justify-center w-48 lg:w-64">
                                    <input type="submit" value="Entrar" className="w-24 h-5 rounded text-white font-medium bg-greenButton"></input>
                                </div>
                                
                            </form>
                            
                        </div>   
                    </div>

                    <div className="mt-4 flex flex-wrap flex-col gap-4 items-center justify-center lg:items-start gap-6">
                        <div>
                            <iframe className="bg-white border-solid border-2 border-gray-200 max-w-screen h-chartsHeight lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=dceaa6a9-2e08-4d2f-8633-93424c1d872f&autoRefresh=300&theme=light"></iframe>
                        </div>
                        <div className="lg:flex gap-16">
                            <div className="mb-4">
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=33895abf-1369-441a-83a6-f47af60c04c7&autoRefresh=300&theme=light"></iframe>
                            </div>

                            <div>
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=33895abf-1369-441a-83a6-f47af60c04c7&autoRefresh=300&theme=light"></iframe>
                            </div>
                        </div>
                        
                        <div className="gap-4 lg:flex gap-16">
                            <div className="mb-4">
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=33895abf-1369-441a-83a6-f47af60c04c7&autoRefresh=300&theme=light"></iframe>
                            </div>

                            <div>
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=33895abf-1369-441a-83a6-f47af60c04c7&autoRefresh=300&theme=light"></iframe>
                            </div> 
                        </div>
                                
                            
                        <div className="mb-4">
                            <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=33895abf-1369-441a-83a6-f47af60c04c7&autoRefresh=300&theme=light"></iframe>
                        </div>
                    </div>
                        
                </main>
            </div>
        </div>
    )
}