import Head from 'next/head'
import { useState } from 'react'

const ImagensInstrumento = () => (
    <>
        <img 
            src="/assets/sax.png"
            alt="Saxofone"
            className="absolute top-0 left-0 w-64 sm:w-1/4" 
        />
        <img
            src="/assets/trompete.png"
            alt="Trompete"
            className="absolute bottom-0 right-0 w-56 sm:w-1/4"
        />
    </>
)

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		senha: ''
	})

	function handleInputChange(e) {
        const { name, value } = e.target
        
        setFormData({ ...formData, [name]: value })
	}
	
	function handleSubmit(e) {
		e.preventDefault()
	}
  return (
	<div 
		className="bg-bgMain p-4 min-h-screen min-w-full flex flex-col items-center justify-center"
	>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
		<ImagensInstrumento/>
			<header className="mb-10 text-4xl text-black">
				<span className="text-sm">11º FESTIVAL MAESTRO</span>
				<h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
			</header>
			
			<form className="bg-white w-screen sm:max-w-sm p-4 rounded">
				<div className="flex flex-col">
					<label className="mb-4" htmlFor="email">Email</label>
					<input 
						className="border-solid border-2 px-4 py-2 rounded"
						type="email"
						placeholder="Email"
						onChange={handleInputChange}
					  	required
					/>
				</div>
			  	
				<div className="flex flex-col mt-4">
					<label className="mb-4" htmlFor="senha">Senha</label>
					<input 
					  	className="border-solid border-2 px-4 py-2 rounded"
						type="password"
						placeholder="***********"
						required
					/>
				</div>

				<div className="mt-4 flex items-center justify-between">
					<input className="bg-orange-500 px-4 py-2 rounded font-bold" value="Entrar" type="submit">
						
					</input>
				  	<a className="text-orange-700" href="#">Esqueceu?</a>
				</div>

			</form>
		
			<button className="bg-orange-500 w-full sm:max-w-sm font-bold px-4 py-2 mt-10 rounded">Quero me inscrever</button>
	
			<footer className="text-orange-700 text-center mt-8">
				© 2020 Associação Musical de Santa Cruz. Todos os direitos reservados.
			</footer>
    </div>
  )
}
