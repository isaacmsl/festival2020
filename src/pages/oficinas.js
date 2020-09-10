import Head from 'next/head'
import FooterDivulgacao from '../components/FooterDivulgacao'
import HeaderDivulgacao from '../components/HeaderDivulgacao'

import styles from '../../styles/Imagens.module.css'

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
                        src="https://drive.google.com/thumbnail?id=1puJW-X9BWsBBr_Hcx4_Lu-8iyYRnRNv8"
                        alt="Heleno Feitosa (Costinha)" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Saxofone</h2>
                            <p className="mt-4">Heleno Feitosa (Costinha)</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Segunda (14/9) 15:00 às 16:30</li>
                                    <li>Terça (15/9) 15:00 às 16:30</li>
                                    <li>Quarta (16/9) 15:00 às 16:30</li>
                                </ul>
                            </div>
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
                        src="https://drive.google.com/thumbnail?id=1ldNmtYJZYI4tshdyk6FjMcnRnS1VO6O9"
                        alt="Eugénio Graça" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Regência</h2>
                            <p className="mt-4">Eugénio Graça</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Quarta (16/9) 20:00 às 21:30</li>
                                    <li>Quinta (17/9) 20:00 às 21:30</li>
                                    <li>Sexta (18/9) 20:00 às 21:30</li>
                                </ul>
                            </div>
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
                        src="https://drive.google.com/thumbnail?id=1FiCpvY_8lq4a735-5ILJXZQt3JTIWhty"
                        alt="Ivo Shin" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Flauta</h2>
                            <p className="mt-4">Ivo Shin</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Segunda (14/9) 15:00 às 16:30</li>
                                    <li>Terça (15/9) 15:00 às 16:30</li>
                                    <li>Quarta (16/9) 15:00 às 16:30</li>
                                </ul>
                            </div>
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
                        src="https://drive.google.com/thumbnail?id=1T1orv_ksxN64UTHoXAiphn17iMmvfE6p"
                        alt="Gilvando Silva (Azeitona)" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Trombone</h2>
                            <p className="mt-4">Gilvando Silva (Azeitona)</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Segunda (14/9) 09:00 às 10:30</li>
                                    <li>Terça (15/9) 09:00 às 10:30</li>
                                    <li>Quarta (16/9) 09:00 às 10:30</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/azeitonadotromboneoficial" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>

                            <a href="https://www.facebook.com/gilvando.silva.731135" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="https://drive.google.com/thumbnail?id=13DcC2CZtZYjFuoSuTTujn2101hjAPJtE"
                        alt="Germanna Cunha" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Percussão</h2>
                            <p className="mt-4">Germanna Cunha</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Quarta (16/9) 09:00 às 10:30</li>
                                    <li>Quinta (17/9) 09:00 às 10:30</li>
                                    <li>Sexta (18/9) 09:00 às 10:30</li>
                                </ul>
                            </div>
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
                        src="https://drive.google.com/thumbnail?id=1KSHn2Q6jP0w_44gIueP1x74vmQRQrLVF"
                        alt="Jotapê" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Clarinete</h2>
                            <p className="mt-4">Jotapê</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Segunda (14/9) 09:00 às 10:30</li>
                                    <li>Terça (15/9) 09:00 às 10:30</li>
                                    <li>Quarta (16/9) 09:00 às 10:30</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/jpnatalsopros" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=1779379036" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="https://drive.google.com/thumbnail?id=1dDJ-r8g2H6qjMwi757PJlnSk_m5axoed"
                        alt="Ranilson Farias" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Trompete</h2>
                            <p className="mt-4">Ranilson Farias</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Segunda (14/9) 09:00 às 10:30</li>
                                    <li>Terça (15/9) 09:00 às 10:30</li>
                                    <li>Quarta (16/9) 09:00 às 10:30</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://www.facebook.com/ranilson.bezerradefarias" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-strech">
                    <img
                        className={styles.imagens}
                        src="https://drive.google.com/thumbnail?id=1J0BFHHeRVL9aXjyUv0pXorc2xQTZ7wfD"
                        alt="Ranilson Farias" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Tuba</h2>
                            <p className="mt-4">Gilvan Silva</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Segunda (14/9) 15:00 às 16:30</li>
                                    <li>Terça (15/9) 15:00 às 16:30</li>
                                    <li>Quarta (16/9) 15:00 às 16:30</li>
                                </ul>
                            </div>
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
                        src="https://drive.google.com/thumbnail?id=1xIw4QlyakD8-koZ7hIhMWq89t4eFRmRc"
                        alt="Ranilson Farias" />
                    <div className="bg-white w-full sm:max-w-sm rounded flex flex-col justify-between p-4 ml-4">
                        <div>
                            <h2 className="font-bold text-black text-xl">Trompa</h2>
                            <p className="mt-4">Dayanderson Dantas</p>
                            <div className="sm: mb-2">
                                <p className="pt-2 mb-1 text-black font-medium text-base">Horário das aulas</p>
                                <ul className="text-sm font-medium text-gray-700 ">
                                    <li>Quarta (16/9) 15:00 às 16:30</li>
                                    <li>Quinta (17/9) 15:00 às 16:30</li>
                                    <li>Sexta (18/9) 15:00 às 16:30</li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex items-center justify-between">
                            <a href="https://www.instagram.com/daday_dantas" target="_blank">
                                <img src="/assets/instagram.svg" width={30} alt="Instagram" />
                            </a>

                            <a href="https://www.facebook.com/dayanderson.tayronne" target="_blank">
                                <img src="/assets/facebook.svg" width={30} alt="Facebook" />
                            </a>
                        </div>

                    </div>
                </div>
            </main>


            <FooterDivulgacao />
        </div>
    )
}
