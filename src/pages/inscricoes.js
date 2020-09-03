import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'


import styles from '../../styles/Inscricoes.module.css'
import { useState, useEffect } from 'react'

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
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [aguarde, setAguarde] = useState('')

    const [contatoTelefonico, setContatoTelefonico] = useState('')
    const [selectedTipoMusico, setSelectedTipoMusico] = useState('1')
    const [selectedTempoAtuacao, setSelectedTempoAtuacao] = useState('1')
    const [selectedBanda, setSelectedBanda] = useState('Não sou integrante de banda')
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    const [selectedOficinas, setSelectedOficinas] = useState([]);

    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        senha: '',
        endereco: ''
    })

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);

            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        if(selectedUf === '0') return;
        
        axios
            .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => {
                const cityNames = response.data.map(city => city.nome);

                setCities(cityNames);
            });

    }, [selectedUf]);

    const router = useRouter()


    function handleInputChange(e) {
        const { name, value } = e.target
        
        setFormData({ ...formData, [name]: value })
    }
    function handleSelectUf(e) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }
    function handleSelectCity(e) {
        const city = event.target.value;

        setSelectedCity(city);
    }
    function handleSelectTipoMusico(e) {
        const tipoMusico = e.target.value
        setSelectedTipoMusico(tipoMusico);
    }
    function handleSelectTempoAtuacao(e) {
        const tempoAtuacao = e.target.value;
        setSelectedTempoAtuacao(tempoAtuacao);
    }
    function handleSelectBanda(e) {
        const banda = e.target.value;
        setSelectedBanda(banda);
    }
    function handleSelectOficina(e) {
        const oficina = e.target.value
       
        if(e.target.checked) {
            selectedOficinas.push(oficina)
            setSelectedOficinas(selectedOficinas)
        } else if(!e.target.checked && selectedOficinas.includes(oficina)) {
            selectedOficinas.splice(selectedOficinas.indexOf(oficina), 1)
        }
    }

    function handleContatoTelefonico(e) {
        let { value } = e.target
        setContatoTelefonico(value)
        if (value.length == 2 && !value.includes('(')) {
            setContatoTelefonico(`(${value})`)
        }
  
        /*const noPostalCodeRegex = new RegExp('^[1-9]{2}$')

        if (noPostalCodeRegex.test(value.trim())) {
            e.target.value = `(${value}) `
        }*/

    }

    async function handleSubmit(event) {
        event.preventDefault()
        const participante = {
            nomeCompleto: formData.nomeCompleto,
            email: formData.email,
            senha: formData.senha,
            tipoMusico: selectedTipoMusico,
            tempoAtuacao: selectedTempoAtuacao,
            banda: selectedBanda,
            oficinas: selectedOficinas,
            endereco: `${selectedCity}, ${selectedUf}. ${formData.endereco}`,    
            contatoTelefonico     
        }
        if(participante.oficinas.length === 0) {
            alert('É necessário escolher uma oficinas ou mais')
        } else {
            setAguarde('Estamos te inscrevendo, por favor aguarde...')
            try {
                await axios.post('/api/participantes', participante)
                alert('Participante cadastrado com sucesso')
                router.push('/')
            } catch (e) {
                alert('Desculpe. Esse email já foi cadastrado')
            }
        }

        setAguarde('')

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
                <header className="mb-10 mt-56 px-10 sm:px-0 sm:mt-10 text-4xl text-black">
                    <h2 className="text-sm">11º FESTIVAL MAESTRO</h2>
                    <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
                </header>
                <div>
                    <form 
                        className="flex flex-col text-xl max-w-lg items-center justify-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="bg-white rounded p-8">
                            <div className={tailStyles.InputContainer}>
                                <span className={tailStyles.Labels + " block mb-4"}>Oficinas (Uma ou mais)</span>
                                <div className="grid gap-2 grid-cols-2">
                                    <div>
                                        <label className={styles.checkboxContainer}>Clarinete
                                            <input 
                                                type="checkbox"
                                                value="Clarinete"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Flauta
                                            <input 
                                                type="checkbox"
                                                value="Flauta"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Saxofone
                                            <input 
                                                type="checkbox"
                                                value="Saxofone"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Trompa
                                            <input 
                                                type="checkbox"
                                                value="Trompa"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Trompete
                                            <input 
                                                type="checkbox"
                                                value="Trompete"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Trombone
                                            <input 
                                                type="checkbox"
                                                value="Trombone"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Tuba
                                            <input 
                                                type="checkbox"
                                                value="Tuba"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Percussão
                                            <input 
                                                type="checkbox"
                                                value="Percussão"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Regência
                                            <input 
                                                type="checkbox"
                                                value="Regência"
                                                onChange={handleSelectOficina}
                                            />
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className={styles.checkboxContainer}>Educação Musical
                                            <input 
                                                type="checkbox"
                                                value="Educação Musical"
                                                onChange={handleSelectOficina}
                                            />
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
                                        name="tipoMusico"
                                        className={tailStyles.Input}
                                        value={selectedTipoMusico}
                                        onChange={handleSelectTipoMusico}
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
                                        name="tempoAtuacao"
                                        className={tailStyles.Input}
                                        value={selectedTempoAtuacao}
                                        onChange={handleSelectTempoAtuacao}
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
                                    name="nomeCompleto"
                                    onChange={handleInputChange}
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
                                    name="email"
                                    onChange={handleInputChange}
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
                                    name="banda"
                                    className={tailStyles.Input}
                                    value={selectedBanda}
                                    onChange={handleSelectBanda}
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
                                    name="senha"
                                    onChange={handleInputChange}
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
                                    id="contatoTelefonicoInput"
                                    name="contatoTelefonico"
                                    value={contatoTelefonico}
                                    placeholder="(84) 995154184"
                                    pattern="^\([1-9]{2}\).[0-9]{8,9}$"
                                    onChange={handleContatoTelefonico}
                                    className={tailStyles.Input}
                                    required
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
                                <div className="flex flex-col sm:mr-4">
                                    <label htmlFor="estadoInput" className={tailStyles.Labels}>Estado *</label>
                                    <select
                                        id="estadoInput"
                                        name="estado"
                                        className={tailStyles.Input}
                                        value={selectedUf}
                                        onChange={handleSelectUf}
                                        defaultValue="1"
                                        required
                                    >
                                        <option value="0">Selecione um Estado</option>
                                        {ufs.map(uf => (
                                            <option key={uf} value={uf}>{uf}</option>
                                        ))};
                                    </select>
                                </div>
                                <div className="flex flex-col mt-4 sm:mt-0">
                                    <label htmlFor="cidadeInput" className={tailStyles.Labels}>Cidade *</label>
                                    <select
                                        id="cidadeInput"
                                        name="cidade"
                                        className={tailStyles.Input}
                                        value={selectedCity}
                                        onChange={handleSelectCity}
                                        defaultValue="1"
                                        required
                                    >
                                        <option value="0">Selecione uma cidade</option>
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))};
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <label htmlFor="enderecoInput" className={tailStyles.Labels}>Endereço (Rua, número) *</label>
                                <input 
                                    id="enderecoInput"
                                    name="endereco"
                                    onChange={handleInputChange}
                                    className={tailStyles.Input}
                                    type="text"
                                    placeholder="Rua Flores, 25"
                                    required 
                                />
                            </div>
                        </div>
                        <div className="mt-10 mb-10">
                            <input 
                                className="bg-strongOrange font-bold px-4 py-2 rounded" type="submit"
                                value="Me inscrever!" />
                        </div>
                        <span className="">{aguarde}</span>
                    </form>
                </div>
            </main>
            

            <footer className="mb-64 mt-20 text-center">
                © 2020. Assomusic. Todos os direitos reservados.
            </footer>
        </div>
    )
}

