import Head from 'next/head'
import MenuDashboard from '../../components/MenuDashboard'
import handleAuthentication from '../../libs/handleAuthentication'
import redirect from '../../libs/redirect'
import myGet from '../../libs/myGet'

export default function Estatisticas() {
    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival - 2020</title>
            </Head>

            <MenuDashboard />
            
            <div
                className={"bg-bgMain w-full sm:overflow-y-scroll h-full sm:h-screen p-8"}
            >
                <header className="mb-10 flex font-bold">
                    <img src="/assets/dark-grid.svg" />
                    <h1 className="ml-4">Estatísticas</h1>
                </header>

                <main className="flex-grow">
                    <div className="mt-4 flex flex-wrap flex-col gap-4 justify-center lg:items-start gap-6">
                        <div>
                            <iframe className="bg-white border-solid border-2 border-gray-200 max-w-screen h-chartsHeight lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=dceaa6a9-2e08-4d2f-8633-93424c1d872f&autoRefresh=300&theme=light"></iframe>
                        </div>
                        <div className="lg:flex gap-16">
                            <div className="mb-4">
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=33895abf-1369-441a-83a6-f47af60c04c7&autoRefresh=300&theme=light"></iframe>
                            </div>

                            <div>
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=40108a9c-c8ce-45d7-801b-0794d87ea122&theme=light&autoRefresh=300"></iframe>
                            </div>
                        </div>
                        
                        <div className="gap-4 lg:flex gap-16">
                            <div className="mb-4">
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=11f3cc09-8d9f-4e31-ab76-8f2fdc2732b7&autoRefresh=300&theme=light"></iframe>
                            </div>

                            <div>
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=a5efd7a3-a01c-4133-81cd-f6c3a32f6904&autoRefresh=300&theme=light"></iframe>
                            </div> 
                        </div>

                        <div className="gap-4 lg:flex gap-16">
                            <div>
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=2f3f5151-272e-46f9-b8ff-cc21f2f5c24a&autoRefresh=300&theme=light"></iframe>
                            </div>

                            <div>
                                <iframe className="bg-white border-solid border-2 border-gray-200 h-chartsHeight max-w-screen lg:w-chartsWidth" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=bec7b83c-7f8c-4ad5-8d8a-2098ac91a54d&autoRefresh=300&theme=light"></iframe>
                            </div>
                        </div>
                    </div>
                        
                </main>
            </div>
        </div>
    )
}

Estatisticas.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = true
        await handleAuthentication(ctx, expectedAuthorization, '/login')

        const responseParticipantes = await myGet(ctx, expectedAuthorization, '/api/participantes')

        const { participante } = responseParticipantes
        const autorizacaoParticipante = participante.autorizacao

        if (autorizacaoParticipante === 1) {
            redirect(ctx, '/dashboard')
        }

    } finally {
        return {
            nextIsPower: true
        }
    }
    
}