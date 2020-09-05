import Link from 'next/link'

const ButtonInscricoes = (props) => {
    const { diasRestantes } = props

    if (diasRestantes === 0) {
        return (
            <a className="w-full sm:max-w-md px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center opacity-25" disabled>QUERO ME INSCREVER</a>
        )
    }

    return (
        <Link href="/inscricoes">
            <a className="w-full sm:max-w-md px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center">QUERO ME INSCREVER</a>
        </Link>
    )
}

export default ButtonInscricoes