import Head from 'next/head'
import FooterDivulgacao from '../components/FooterDivulgacao'
import HeaderDivulgacao from '../components/HeaderDivulgacao'

import styles from '../../styles/Oficinas.module.css'

export default function Oficinas() {
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

            <main className="grid gap-10 grid-cols-1 md:grid-cols-2">
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/costinha-saxofone.jpeg"
                        alt="Heleno Feitosa (Costinha)" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Saxofone</h2>
                            <p className="mt-4">Heleno Feitosa (Costinha)</p>
                        </div>
                
                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/hfeitosa_costinha/" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/eugenio-graca-regencia.jpeg"
                        width={160}
                        alt="Eugênio Graça" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Regência</h2>
                            <p className="mt-4">Eugênio Graça</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/maestroeugeniograca/" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/eugenio.saxofone" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/ivo-shin-flauta.jpeg"
                        width={160}
                        alt="Ivo Shin" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Flauta</h2>
                            <p className="mt-4">Ivo Shin</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/ivo_shin/" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/ivo.shin" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/gilvando-silva-trombone.jpeg"
                        width={160}
                        alt="Gilvando Silva (Azeitona)" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Trombone</h2>
                            <p className="mt-4">Gilvando Silva (Azeitona)</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/azeitonadotromboneoficial" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/germanna-cunha-percussao.jpeg"
                        width={160}
                        alt="Germanna Cunha" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Percussão</h2>
                            <p className="mt-4">Germanna Cunha</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.facebook.com/germanna.cunha" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/jotape-clarinete.jpeg"
                        width={160}
                        alt="Jotapê" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Clarinete</h2>
                            <p className="mt-4">Jotapê</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/jpnatalsopros" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/ranilson-farias-trompete.jpeg"
                        width={160}
                        alt="Ranilson Farias" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Trompete</h2>
                            <p className="mt-4">Ranilson Farias</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/gilvan-silva-tuba.jpeg"
                        width={160}
                        alt="Ranilson Farias" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Tuba</h2>
                            <p className="mt-4">Gilva Silva</p>
                        </div>

                            
                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/gilvannovotuba87935" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>

                            <a href="https://www.facebook.com/gilvannovo.tuba" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="/assets/professores/dayanderson-dantas-trompa.jpeg"
                        width={160}
                        alt="Ranilson Farias" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Trompa</h2>
                            <p className="mt-4">Dayanderson Dantas</p>
                        </div>


                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/daday_dantas" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>


            <FooterDivulgacao />
        </div>
    )
}
