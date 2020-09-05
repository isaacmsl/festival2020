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
                <div className="w-full bg-white p-4 sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-black text-xl">PARCERIAS</h2>
                    <div className="flex flex-col items-center mt-10">
                        <div>
                            <img src="https://drive.google.com/thumbnail?id=1SUq-Tx41xL17ocwRZ7DweBjFXxKojxwa" width={150} alt="Prefeitura de Santa Cruz - RN" />
                        </div>
                        <div className="mt-4">
                            <img src="https://drive.google.com/thumbnail?id=1zNk9OX-RNatZZn7PwEHDQiw5V8h9NBce" width={150} alt="Fecomércio RN Sesc Senac" />
                        </div>
                        <div className="mt-4">
                            <img src="https://drive.google.com/thumbnail?id=1E4QeZIsb0C0VapBWlVuHUJkxiWC2Awtj" width={150} alt="Sindivarejo Santa Cruz - RN" />
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white p-4 sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-black text-xl">PATROCÍNIOS</h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-10">
                        <div>
                            <img src="https://drive.google.com/thumbnail?id=159v6nKaaeYkOo-rGmyEChwL4qwnX9Zq6" width={150} alt="Topázio" />
                        </div>
                        <div>
                            <img src="https://drive.google.com/thumbnail?id=1vYUSQYyhrRLgGa4vC1h4wdkog7DHKGUo" width={150} alt="Léo Artes - Design e Serviços Gráficos" />
                        </div>
                        <div>
                            <img src="https://drive.google.com/thumbnail?id=1ZjMQnxs1y9Zy7e5HGR6zD_u9cI9l5Zmv" width={150} alt="Escola CEDAP - Santa Cruz - RN" />
                        </div>
                        <div>
                            <img src="https://drive.google.com/thumbnail?id=1seqkpAcjBTJzgW7g3WdLPaSQo9iwi0ze" width={150} alt="M4NET" />
                        </div>
                        <div>
                            <img src="https://drive.google.com/thumbnail?id=1n2YgC2p-wrIHEJEF_GyXk4_oxJ_LYNcm" width={150} alt="Emprotec - Santa Cruz - RN" />
                        </div>
                    </div>
                </div>
                <div className="w-screen bg-white p-4 sm:max-w-lg flex flex-col items-center rounded mb-10 p-8">
                    <h2 className="font-bold text-black text-xl">REALIZAÇÃO</h2>
                    <div className="mt-10">
                        <img src="https://drive.google.com/thumbnail?id=1upuxX19DDn--L0wpL5snrHXKotlYla2w" width={150} alt="Assomusc Santa Cruz RN"/>
                    </div>
                </div>
            </main>
        </div>
    )
}
