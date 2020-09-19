import Head from 'next/head'

import Link from 'next/link'

import HeaderDivulgacao from '../components/HeaderDivulgacao.js'
import FooterDivulgacao from '../components/FooterDivulgacao.js'
import ButtonInscricoes from '../components/ButtonInscricoes'

export default function Home({ diasRestantes }) {

  return (
    <div 
      style={{
        background: 'url(/assets/background.png) no-repeat center',
        backgroundSize: 'cover'
      }}
      className="min-h-screen flex flex-col items-center overflow-auto">
      <Head>
        <title>Festival - 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderDivulgacao />

      <main className="flex flex-col items-center">
        <div className="w-screen sm:max-w-lg">
          <div className="flex gap-4 flex-wrap bg-red-600 text-white items-center justify-evenly p-4 rounded">
            <img src="/assets/youtube.svg" alt="Youtube" width={50} className="animate-pulse" />
            <div className="text-center">
              <h2 className="text-xl font-bold">
                Estamos ao vivo!
              </h2>
              <p>
                Live Tributo 10 Anos - 1ª Noite
              </p>
            </div>
          </div>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/FB11EX74ZQM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="mb-10 flex flex-col items-center text-white mt-20">
          {/* <div className="flex flex-col items-center bg-black rounded-full w-48 p-6 border-solid border-8">
            <span>FALTA(M)</span>
            <span className="text-6xl">{diasRestantes}</span>
            <span>DIA(S)</span>
          </div> */}
          <h2 className="text-4xl text-center font-bold px-10">
            Área para participantes
          </h2>
          <div className="border-solid border-l-2 h-20 opacity-25 rounded mt-4 mb-4"></div>
          <Link href="/login">
            <a className="w-full sm:max-w-md px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center">LOGIN</a>
          </Link>
          <ButtonInscricoes diasRestantes={diasRestantes} />
          <span>(Inscrições finalizadas no dia 13/09/2020)</span>
        </div>
        <article className="w-full bg-white p-8 sm:max-w-lg flex flex-col items-center rounded mb-20 mt-10">
          <h1 className="font-bold text-black text-xl">SOBRE O FESTIVAL</h1>
          <p className="text-justify mt-6">
            O Festival Maestro Felinto Lúcio Dantas é um encontro de bandas de música e filarmônicas, em caráter não competitivo, que congrega músicos e maestros do Rio Grande do Norte, e outros estados, através de um grande encontro feito em homenagem ao compositor e maestro Potiguar, Felinto Lúcio Dantas. Além do encontro, o festival oferece oficinas de instrumentos e regência, que são ofertados gratuitamente.
          </p>
          <article className="mt-4">
            <h2 className="font-bold text-lg text-justify mb-2">Como será o festival desse ano em tempos de Corona Vírus?</h2>
            <p>
              Na sua 11º edição, devido ao <b>COVID-19</b>, o festival ocorrerá em sua forma virtual, com oficinas, mesas redondas e apresentações ao vivo. 
              <Link href="/horarios">
                <b className="cursor-pointer">(Horários)</b>
              </Link>
            </p>
          </article>
          <article className="mt-4">
            <h2 className="font-bold text-lg text-justify mb-2">
              As bandas se apresentarão no Teatro Mun. Candinha Bezerra?</h2>
            <p>
              Infelizmente, não. Mas nos dias 19 e 20 de setembro de 2020 serão realizadas lives com os melhores momentos de todas as edições anteriores.
            </p>
          </article>
          
          <div>
            {/* fotos aqui */}
          </div>
        </article>
      </main>


      <FooterDivulgacao />
    </div>
  )
}

Home.getInitialProps = () => {
  const dataAtual = new Date(2020, 9, 14)
  const dataFinalInscricoes = new Date(2020, 9, 14)

  if (dataAtual < dataFinalInscricoes) {
    const diaAtual = dataAtual.getDate()
    const diaFinal = dataFinalInscricoes.getDate()

    const diasRestantes = diaFinal - diaAtual

    return {
      diasRestantes
    }
  }

  return{
    diasRestantes: 0
  }
}