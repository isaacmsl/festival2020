import Head from 'next/head'

import HeaderDivulgacao from '../components/HeaderDivulgacao'
import FooterDivulgacao from '../components/FooterDivulgacao'

export default function Festival() {
    return (
        <div
            style={{
                background: 'url(https://drive.google.com/thumbnail?id=13IGZJCyDOE9mDglQYeYPcXEPXlY0nkvQ) no-repeat center',
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
                <article className="w-full bg-white p-8 sm:max-w-lg flex flex-col items-center rounded">
                    <h1 className="font-bold text-black text-xl">FESTIVAL</h1>
                    <p className="text-justify mt-6">
                        O Festival Maestro Felinto Lúcio Dantas é um encontro de bandas de música e filarmônicas, em caráter não competitivo, que congrega músicos e maestros do Rio Grande do Norte, e outros estados, através de um grande encontro feito em homenagem ao compositor e maestro Potiguar, Felinto Lúcio Dantas. Além do encontro, o festival oferece oficinas de instrumentos e regência, que são ofertados gratuitamente.
                    </p>
                    <div>
                        {/* fotos aqui */}
                    </div>
                </article>
            </main>


            <FooterDivulgacao />
        </div>
    )
}
