import Head from 'next/head'
import MenuDashboard from '../../components/MenuDashboard'
import styles from '../../styles/Dashboard.module.css'
import handleAuthentication from '../../libs/handleAuthentication'

export default function Estatisticas() {
    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival - 2020</title>
            </Head>

            <MenuDashboard />
            
            <div
                className={styles.scrollable + " bg-bgMain w-full sm:overflow-y-scroll h-full sm:h-screen p-8"}
            >
                <header className="mb-10 flex font-bold">
                    <img src="assets/dark-grid.svg" />
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

Estatisticas.getInitialProps = (ctx) => {
    const expectedAuthorization = true
    handleAuthentication(ctx, expectedAuthorization, '/login')
    return {}
}