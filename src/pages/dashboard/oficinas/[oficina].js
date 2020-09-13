import Head from 'next/head'

import styles1 from '../../../../styles/Imagens.module.css'
import MenuDashboard from '../../../components/MenuDashboard'
import handleAuthentication from '../../../libs/handleAuthentication'
import myGet from '../../../libs/myGet'

import Link from 'next/link'
import { useRouter } from 'next/router'
import redirect from '../../../libs/redirect'


const DataAula = (dataAula) => {
    const dias = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ]
    const newDate = new Date(dataAula.dataAula)
    
    return <p>{dias[newDate.getDay()]} ({newDate.getDate()}/{newDate.getMonth()}) das {newDate.getHours()}:{newDate.getMinutes()} às {newDate.getHours()+1}:{newDate.getMinutes()+30}</p>
} 

const Instagram = ({redeSocial}) => {
    if(redeSocial) {
        return (
            <a href={redeSocial} target="_blank">
                 <img src="/assets/instagram.svg" width={30} alt="Instagram" />
            </a>
        )
    }

    return <></>
}

const Facebook = ({redeSocial}) => {
    if(redeSocial) {
        return (
            <a href={redeSocial} target="_blank">
                 <img src="/assets/facebook.svg" width={30} alt="Facebook" />
            </a>
        )
    }

    return <></>
}

const AvisoProfessor = ({ autorizacao }) => {
    if (autorizacao === 2) {
        return (
            <Link href="/dashboard/estatisticas">
                <div className="font-normal bg-orange-200 p-4 border border-solid mb-8 cursor-pointer max-w-2xl border-gray-200 rounded">
                    <p>
                        <b>Atenção, professor(a):</b> em breve será possível visualizar a relação com os seus alunos.
                        Apesar disso, você ainda pode ver as estatísticas relacionadas ao Festival <b>clicando aqui.</b>
                    </p>
                </div>
            </Link>
        )
    }

    return <></>
}

const ButtonAula = ({ autorizacao, link }) => {
    if (autorizacao !== 2) {
        return (
            <Link href={link}>
                <a target="_blank" className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Assistir</a>
            </Link>
        )
    }

    return (
        <Link href={link}>
            <a target="_blank" className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Dar aula</a>
        </Link>
    )
}

export default function DetalhesOficina({ autorizacaoParticipante, oficinas }) {
    
    const router = useRouter()    
    const oficina = oficinas.find(oficinaAtual => oficinaAtual.nome === router.query.oficina)


    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard autorizacao={autorizacaoParticipante} />

            <div
                className={"bg-bgMain w-full sm:overflow-y-scroll h-full sm:h-screen p-4 overflow-auto sm:p-8"}
            >
                <header className="mb-10 flex flex-col font-bold gap-6 items-start">
                    <header className="flex items-center font-bold">
                        <img src="/assets/dark-grid.svg" />
                        <h1 className="ml-4">{oficina.nome}</h1>
                    </header>
                    <Link href={oficina.linkMateriais}>
                        <a target="_blank" className="px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center">Materiais das aulas</a>
                    </Link>
                    <AvisoProfessor autorizacao={autorizacaoParticipante} />
                </header>

                <main className="flex flex-col flex-wrap gap-4">
                    <ul className="flex flex-col gap-4">
                        {oficina.aulas.map((aula, index) => (
                            <li className="flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl" key={index}>
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold text-xl">Aula {index+1}</h2>
                                    <DataAula dataAula={aula.data} /> 
                                </div>
                                
                                <ButtonAula autorizacao={autorizacaoParticipante} link={aula.link}/>
                            </li>
                        ))}   
                    </ul>
                    <div className="flex flex-col md:flex-row p-6 gap-4 bg-white rounder border border-solid border-gray-200  max-w-2xl">
                        <img
                            className={styles1.imagens}
                            src={oficina.professor.imgUrl}
                            alt={oficina.professor.nome} />
                        <div className="w-full gap-6 md:gap-0 flex flex-col justify-between">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-bold text-xl">
                                    Professor(a)
                                </h2>
                                <p>
                                    {oficina.professor.nome}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <Instagram redeSocial={oficina.professor.redesSociais.instagram} />
                                <Facebook redeSocial={oficina.professor.redesSociais.facebook} />
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

DetalhesOficina.getInitialProps = async (ctx) => {
    try {
        const expectedAuthorization = true
        await handleAuthentication(ctx, expectedAuthorization, '/login')

        const oficinas = await myGet(ctx, expectedAuthorization, '/api/oficinas')

        const responseParticipantes = await myGet(ctx, expectedAuthorization, '/api/participantes')

        const { participante } = responseParticipantes
        const participanteOficinas = participante.oficinas
        const autorizacaoParticipante = participante.autorizacao


        const queryOficina = ctx.query.oficina

        if (!participanteOficinas.includes(queryOficina)) {
            redirect(ctx, '/dashboard')
        }

        return {
            autorizacaoParticipante,
            oficinas
        }
    } catch {
        return {
            expectedAuthorization: undefined,
            oficinas: undefined
        }
    }
    
}