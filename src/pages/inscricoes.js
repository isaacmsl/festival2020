import Head from 'next/head'

import styles from '../../styles/Inscricoes.module.css'

const tailStyles = {
    Labels: 'mb-2 font-bold',
    Input: 'p-2 border border-1 rounded bg-transparent',
    Checkboxs: 'mr-2 checked:bg-black'
}

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

export default function Inscricoes() {

    function handleContatoTelefonico(e) {
        const { value } = e.target

        const noPostalCodeRegex = new RegExp('^[1-9]{2}$')

        if (noPostalCodeRegex.test(value.trim())) {
            e.target.value = `(${value}) `
        }

    }

    return (
        <div id="inscricoesContainer" className="relative bg-bgMain min-h-full w-full flex flex-col items-center justify-center">
            <Head>
                <title>Festival - Inscrições</title>
                <meta charSet="UTF-8 " />
                <meta name="author" content="Isaac Lourenço, Paulo Borges, Tiago Rodrigues" />
                <meta name="description" content="Projeto desenvolvido para o 11º Festival Maestro Felinto Lúcio Dantas, evento realizado entre os dias 14 e 18 em setembro de 2020" />
                <meta name="keywords" content="festival, felinto lúcio dantas, santa cruz rn" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="content-language" content="pt-br" />
            </Head>

            <ImagensInstrumento />

            <main>
                <div className="mb-10 mt-56 px-10 sm:px-0 sm:mt-10 text-4xl text-black">
                    <span className="text-sm">11º FESTIVAL MAESTRO</span>
                    <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
                </div>
                <div>
                    <form className="flex flex-col text-xl max-w-lg items-center justify-center">
                        <div className="bg-white rounded p-8">
                            <div className={tailStyles.InputContainer}>
                                <span className={tailStyles.Labels + " block mb-4"}>Oficinas (Uma ou mais)</span>
                                <div className="grid gap-2 grid-cols-2">
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input type="checkbox"/>
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
                                <div className="flex flex-col sm:mr-4">
                                    <label htmlFor="tipoMusicoInput" className={tailStyles.Labels}>Tipo de Músico *</label>
                                    <select
                                        id="tipoMusicoInput"
                                        className={tailStyles.Input}
                                        defaultValue="1"
                                        required
                                    >
                                        <option value="1">Estudante</option>
                                        <option value="2">Profissional</option>
                                        <option value="3">Professor</option>
                                    </select>
                                </div>
                                <div className="flex flex-col mt-4 sm:mt-0">
                                    <label htmlFor="tempoAtuacaoInput" className={tailStyles.Labels}>Tempo de atuação musical *</label>
                                    <select
                                        id="tempoAtuacaoInput"
                                        className={tailStyles.Input}
                                        defaultValue="1"
                                        required
                                    >
                                        <option value="1">Menos de 1 ano</option>
                                        <option value="2">1 ano</option>
                                        <option value="3">2 anos ou menos</option>
                                        <option value="4">Mais de 2 anos</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="nomeCompletoInput" className={tailStyles.Labels}>Nome completo *</label>
                                <input
                                    id="nomeCompletoInput"
                                    className={tailStyles.Input}
                                    type="text"
                                    placeholder="Felinto Lúcio Dantas"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="emailInput" className={tailStyles.Labels}>E-mail *</label>
                                <input 
                                    id="emailInput"
                                    className={tailStyles.Input}
                                    type="email"
                                    placeholder="felinto20@gmail.com"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="bandaInput" className={tailStyles.Labels}>Banda *</label>
                                <select 
                                    id="bandaInput"
                                    className={tailStyles.Input}
                                    defaultValue="1"
                                    required
                                >
                                    <option value="Sem banda">Não sou integrante de banda</option>
                                    <option value="BMMJRPU">BMMJRPU</option>
                                    <option value="Cruzeta">Cruzeta</option>
                                    <option value="Outra">Outra</option>
                                </select>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="senhaInput" className={tailStyles.Labels}>Senha *</label>
                                <input 
                                    id="senhaInput"
                                    className={tailStyles.Input}
                                    type="password"
                                    placeholder="***********"
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="contatoTelefonico" className={tailStyles.Labels}>Contato telefônico *</label>
                                <input 
                                    type="tel"
                                    id="contatoTelefonico"
                                    name="phone"
                                    placeholder="(84) 995154184"
                                    pattern="^\([1-9]{2}\).[0-9]{8,9}$"
                                    onChange={e => handleContatoTelefonico(e)}
                                    className={tailStyles.Input}
                                    required
                                />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="enderecoInput" className={tailStyles.Labels}>Endereço (Rua, número, cidade e estado) *</label>
                                <input 
                                    id="enderecoInput"
                                    className={tailStyles.Input}
                                    type="text"
                                    placeholder="Rua Flores, 25, Carnaúba dos Dantas, RN"
                                    required 
                                />
                            </div>
                        </div>
                        <div className="mt-10 mb-10">
                            <input 
                                className="bg-strongOrange font-bold px-4 py-2 rounded" type="submit"
                                value="Me inscrever!" />
                        </div>
                    </form>
                </div>
            </main>
            

            <footer className="mb-64 mt-20 text-center">
                © 2020. Assomusic. Todos os direitos reservados.
            </footer>
        </div>
    )
}
