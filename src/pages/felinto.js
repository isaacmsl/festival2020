import Head from 'next/head'
import HeaderDivulgacao from '../components/HeaderDivulgacao'
import FooterDivulgacao from '../components/FooterDivulgacao'

export default function Felinto() {
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
                <article className="w-full bg-white p-8 sm:max-w-lg flex flex-col items-center rounded">
                    <h1 className="font-bold text-black text-xl">FELINTO LÚCIO DANTAS</h1>
                    <p className="text-justify mt-10">
                        Nascido no Sertão do Seridó, compôs valsas, mazurcas, dobrados e peças sacras. Uma parte do seu repertório está registrada em partituras que se encontram em mãos da família, em arquivo pessoal. Em 1978, o Centro Cultural Mobral gravou em um LP duplo, algumas de suas obras, contando com a participação do maestro Radamés Gnattali. Em 1982 gravou depoimento para o programa "Memória viva", da TV Universitária. Em 1983, a Universidade Federal do Rio Grande do Norte (Ufrn) gravou outras de suas composições em um LP editado naquele ano. 
                    </p>
                    <div className="mt-6">
                        <img src="https://drive.google.com/thumbnail?id=1-qZEFNVaXWG-CeMjiMhH0AU3OIQruTQR" alt="Felinto Lúcio Dantas" />
                    </div>
                    <p className="text-justify mt-10">
                        Em 1997 teve a música sacra "A quinta novena", executada em missa na Catedral do Rio de Janeiro, com a presença do Papa João Paulo II. Em 1999, por ocasião das comemorações dos 400 anos da fundação da cidade de Natal, no Rio Grande do Norte, teve sua composição "Estréia", gravada pelo Quinteto Natal Metais no CD "Nação Potiguar". Aprendeu as primeiras lições musicais com um primo. Compôs sua primeira música aos 17 anos. Sempre trabalhou como agricultor
                    </p>
                </article>
            </main>


            <FooterDivulgacao />
        </div>
    )
}
