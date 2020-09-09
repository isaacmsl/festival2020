import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import handleAuthentication from '../libs/handleAuthentication'

const ImagensInstrumento = () => (
    <>
        <img 
            src="/assets/sax.png"
            alt="Saxofone"
            className="absolute top-0 left-0 w-64 hidden sm:w-1/4" 
        />
        <img
            src="/assets/trompete.png"
            alt="Trompete"
			className="absolute bottom-0 right-0 w-56 hidden sm:w-1/4"
        />
    </>
)

export default function Login() {
	const router = useRouter()

	useEffect(() => {
		router.prefetch('/dashboard')
	}, [])

	const [formData, setFormData] = useState({
		email: '',
		senha: ''
	})

	function handleInputChange(e) {
        const { name, value } = e.target
		
		setFormData({ ...formData, [name]: value })
	}
	
	async function handleSubmit(e) {
		e.preventDefault()
		
		const participanteLogin = {
			email: formData.email,
			senha: formData.senha
		}

		try {
			const response = await axios.post('/api/login', participanteLogin)

			if (response.status === 200) {
				router.push('/dashboard')
			} else {
				alert('Desculpe. Não foi possível fazer o login. Por favor verifique seus dados')
			}
		} catch (e) {
			alert('Desculpe. Não foi possível fazer o login. Por favor verifique seus dados')
		}
		
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
			
			<form className="bg-white w-screen sm:max-w-sm p-4 rounded" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label className="mb-4" htmlFor="emailInput">E-mail</label>
					<input 
						id="emailInput"
						className="border-solid border-2 px-4 py-2 rounded"
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleInputChange}
					  	required
					/>
				</div>
			  	
				<div className="flex flex-col mt-4">
					<label className="mb-4" htmlFor="senhaInput">Senha</label>
					<input 
						id="senhaInput"
					  	className="border-solid border-2 px-4 py-2 rounded"
						type="password"
						name="senha"
						placeholder="***********"
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="mt-4 flex items-center justify-between">
					<input 
						className="bg-orange-500 px-4 py-2 rounded font-bold" 
						value="Entrar" 
						type="submit"
					/>
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

Login.getInitialProps = (ctx) => {
	const expectedAuthorization = false
	handleAuthentication(ctx, expectedAuthorization, '/dashboard')
	return {}
}