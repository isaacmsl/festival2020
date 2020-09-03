import Head from 'next/head'

export default function Login() {
  return (
    <div className="bg-bgMain h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<header className="w-472 h-122">
				<div className="mb-10 mt-10 text-4xl text-black">
        	<span className="text-sm">11º FESTIVAL MAESTRO</span>
          <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
      	</div>
			</header>
			
			<form className="w-359 h-359 bg-white rounded">
				<div className="w-286 h-86">
					<label className="mb-4"htmlFor="email">Email</label>
					<div></div>
					<input className="border-solid border-2 rounded w-full h-45"type="email" placeholder="Email"/>
				</div>
				<div className="w-286 h-86">
					<label className="mb-4" htmlFor="senha">Senha</label>
					<div></div>
					<input className="border-solid border-2 rounded w-full h-45" type="password" placeholder="***********"/>
				</div>

				<button className="bg-strongOrange rounded">Entrar</button>
				<a className="text-strongOrange"href="#">Esqueceu?</a>
			</form>

			<button className="bg-strongOrange rounded">Quero me inscrever</button>
	
			<footer className="text-strongOrange">© 2020 Associação Musical de Santa Cruz. Todos os direitos reservados.</footer>
    </div>
  )
}
