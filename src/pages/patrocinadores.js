import Head from 'next/head'
import HeaderDivulgacao from '../components/HeaderDivulgacao'

export default function Oficinas() {
    return (
        <div
            style={{
                background: 'url(/assets/background.png) no-repeat center',
                backgroundSize: 'cover'
            }}
            className="min-h-screen w-full flex flex-col items-center"
        >
            <Head>
                <title>Festival - 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderDivulgacao />

            <main>
                <div className="bg-white p-4 max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-black text-xl">PARCERIAS</h2>
                    <div className="flex flex-col items-center mt-10">
                        <div>
                            <img src="/assets/prefeitura-logo.png" width={150} alt="Prefeitura de Santa Cruz - RN" />
                        </div>
                        <div className="mt-4">
                            <img src="/assets/fecomercio-sesc-logo.png" width={150} alt="Fecomércio RN Sesc Senac" />
                        </div>
                        <div className="mt-4">
                            <img src="/assets/sindivarejo-logo.png" width={150} alt="Sindivarejo Santa Cruz - RN" />
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white p-4 sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-black text-xl">PATROCÍNIOS</h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-10">
                        <div>
                            <img src="/assets/topazio-logo.png" width={150} alt="Topázio" />
                        </div>
                        <div>
                            <img src="/assets/leo-artes-logo.png" width={150} alt="Léo Artes - Design e Serviços Gráficos" />
                        </div>
                        <div>
                            <img src="/assets/cedap-logo.png" width={150} alt="Escola CEDAP - Santa Cruz - RN" />
                        </div>
                        <div>
                            <img src="/assets/m4net-logo.png" width={150} alt="M4NET" />
                        </div>
                        <div>
                            <img src="/assets/emprotec-logo.png" width={150} alt="Emprotec - Santa Cruz - RN" />
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white p-4 sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-black text-xl">REALIZAÇÃO</h2>
                    <div className="mt-10">
                        <img src="/assets/assomusc-logo.png" width={150} alt="Assomusc Santa Cruz RN"/>
                    </div>
                </div>
            </main>
        </div>
    )
}
