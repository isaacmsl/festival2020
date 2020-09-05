import Head from 'next/head'

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
      className="min-h-screen w-full flex flex-col items-center">
      <Head>
        <title>Festival - 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderDivulgacao />

      <main className="flex flex-col items-center">
        <div className="w-screen sm:max-w-lg">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/CINitoglzTg?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="mb-10 flex flex-col items-center text-white mt-20">
          <div className="flex flex-col items-center bg-black rounded-full w-48 p-6 border-solid border-8">
            <span>FALTA(M)</span>
            <span className="text-6xl">{diasRestantes}</span>
            <span>DIA(S)</span>
          </div>
          <div className="border-solid border-l-2 h-20 opacity-75 rounded mt-4 mb-4"></div>
          <a className="w-full sm:max-w-md px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center opacity-25" disabled>LOGIN</a>
          <ButtonInscricoes diasRestantes={diasRestantes} />
          <span>(Disponível em 04/09/2020 - 13/09/2020)</span>
        </div>
      </main>


      <FooterDivulgacao />
    </div>
  )
}

Home.getInitialProps = () => {
  const dataAtual = new Date()
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