import Head from 'next/head'

import styles from '../../../../styles/Dashboard.module.css'
import styles1 from '../../../../styles/Imagens.module.css'
import MenuDashboard from '../../../components/MenuDashboard'
import handleAuthentication from '../../../libs/handleAuthentication'

import Link from 'next/link'
import { useEffect, useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


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

const RedesSociais = (redesSociais) => {
    let instagram
    let facebook
    
    if(redesSociais.instagram) {
        instagram = <Instagram />
    }

    if(redesSociais.facebook) {
        facebook = <Facebook />
    }

    return (instagram)
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

export default function DetalhesOficina({ oficinas }) {
    
    
    const router = useRouter()
    
    const oficina = oficinas.find(oficinaAtual => oficinaAtual.nome === router.query.oficina)
    

    return (
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuDashboard />

            <div
                className={styles.scrollable + " bg-bgMain w-full sm:overflow-y-scroll h-full sm:h-screen p-4 overflow-auto sm:p-8"}
            >
                <header className="mb-10 flex flex-col font-bold gap-6 items-start">
                    <header className="flex items-center font-bold">
                        <img src="/assets/dark-grid.svg" />
                        <h1 className="ml-4">{oficina.nome}</h1>
                    </header>
                    <Link href={oficina.linkMateriais}>
                        <a target="_blank" className="px-6 py-4 bg-blue-600 text-white font-bold rounded mb-4 text-center">Materiais das aulas</a>
                    </Link>
                </header>

                <main className="flex flex-col flex-wrap gap-4">
                    <ul className="flex flex-col gap-4">
                        {oficina.aulas.map((aula, index) => (
                            <li className="flex flex-wrap flex-col gap-4 md:flex-row md:gap-0 md:items-center bg-white p-6 justify-between rounded border border-solid border-gray-200 max-w-2xl">
                                <div className="flex flex-col gap-4">
                                    <h2 className="font-bold text-xl">Aula {index+1}</h2>
                                    <DataAula dataAula={aula.data} /> 
                                </div>
                                
                                <Link href={aula.link}>
                                    <a target="_blank" className="px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Assistir</a>
                                </Link>
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
                                    Seu professor
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
    const expectedAuthorization = true
    await handleAuthentication(ctx, expectedAuthorization, '/login')

    let oficinas

    if (ctx.req) {
        const { host, cookie } = ctx.req.headers;
        const response = await axios.get(`http://${host}/api/oficinas`, {
            headers: {
                cookie
            }
        })
        oficinas = response.data
    } else {
        const response = await axios.get('/api/oficinas')
        oficinas = response.data
    }

    return { oficinas }
}