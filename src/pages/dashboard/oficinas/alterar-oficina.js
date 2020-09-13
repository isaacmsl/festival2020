import Head from 'next/head'

import MenuDashboard from '../../../components/MenuDashboard'
import styles from '../../../../styles/Inscricoes.module.css'
import Link from 'next/link'

export default function NovaSenha() {
    return(
        <div className="flex flex-col sm:flex-row">
            <Head>
                <title>Festival - 2020</title>
            </Head>

            <MenuDashboard />
            
            <div
                className={"bg-bgMain w-full h-screen sm:overflow-y-scroll h-full sm:h-screen p-8"}
            >
                <header className="mb-10 flex font-bold">
                    <img src="/assets/dark-grid.svg" />
                    <h1 className="ml-4">Alterar oficinas</h1>
                </header>

                <main className="flex-grow">
                    <form className="p-6 flex flex-col items-center justify-center gap-6 bg-white border boder-solid boder-gray-200 max-w-lg">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 items-center gap-x-20">
                            <div>
                                <label htmlFor="clarinete" className={styles.checkboxContainer + " font-bold"}>Clarinete
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="clarinete"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="flauta" className={styles.checkboxContainer + " font-bold"}>Flauta
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="flauta"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="saxofone" className={styles.checkboxContainer + " font-bold"}>Saxofone
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="saxofone"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="trompa" className={styles.checkboxContainer + " font-bold"}>Trompa
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="trompa"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="trompete" className={styles.checkboxContainer + " font-bold"}>Trompete
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="trompete"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="trombone" className={styles.checkboxContainer + " font-bold"}>Trombone
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="trombone"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="tuba" className={styles.checkboxContainer + " font-bold"}>Tuba
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="tuba"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="percussao" className={styles.checkboxContainer + " font-bold"}>Percussão
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="percussao"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="regencia" className={styles.checkboxContainer + " font-bold"}>Regência
                                    <input
                                        type="checkbox"
                                        value="clarinete"
                                        id="regencia"
                                    />
                                    <span className={styles.checkmark}></span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col w-full items-center gap-4 sm:mt-2 sm:flex-row justify-center gap-x-10">
                            <div>
                                <input
                                    type="reset"
                                    value="Cancelar"
                                    className="bg-greenButton font-semibold text-white text-center rounded px-4 py-2 w-48 sm:w-40 hover:bg-greenButtonStrong"
                                />
                            </div>
                            <div>
                                <input  
                                    type="submit"
                                    value="Alterar"
                                    className="bg-greenButton font-semibold text-white text-center rounded px-4 py-2 w-48 sm:w-40 hover:bg-greenButtonStrong" 
                                />
                            </div>
                        </div>
                    </form>
                    
                </main>
            </div>

        </div>
    )
}