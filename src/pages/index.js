import Head from 'next/head'

import HeaderDivulgacao from '../components/HeaderDivulgacao.js'
import FooterDivulgacao from '../components/FooterDivulgacao.js'

export default function Home() {
  return (
    <div 
      style={{
        background: 'url(https://drive.google.com/thumbnail?id=13IGZJCyDOE9mDglQYeYPcXEPXlY0nkvQ) no-repeat center',
        backgroundSize: 'cover'
      }}
      className="min-h-screen w-full flex flex-col items-center">
      <Head>
        <title>Festival - 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderDivulgacao />

      <main className="flex flex-col items-center">
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wxKJvoFAfJM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="mb-10 flex flex-col items-center text-white mt-20">
          <div className="flex flex-col items-center bg-black rounded-full w-48 p-6 border-solid border-8">
            <span>FALTAM</span>
            <span className="text-6xl">10</span>
            <span>DIAS</span>
          </div>
          <div className="border-solid border-l-2 h-20 opacity-75 rounded mt-4 mb-4"></div>
          <button className="w-full sm:max-w-md px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4">QUERO ME INSCREVER</button>
          <span>(Disponível em 04/09/2020 - 14/09/2020)</span>
        </div>
      </main>


      <FooterDivulgacao />
    </div>
  )
}
