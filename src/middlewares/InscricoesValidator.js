const nomeCompleto = function checkNomeCompleto(nomeCompleto) {
    const qntEspacosEntreNomes = nomeCompleto.split(' ').length
    
    if (nomeCompleto.length < 1 || qntEspacosEntreNomes < 2) {
        return {
            alertMessage: 'Por favor, informe seu nome completo'
        }
    }
}

const email = function checkEmail(email) {
    const validEmailRegex = /\S+@\S+\.\S+/
    if (email.length < 1 || !validEmailRegex.test(email)) {
        return {
            alertMessage: 'Por favor, informe seu email corretamente'
        }
    }
}

const senha = function checkSenha(senha) {
    if (senha.length < 8) {
        return {
            alertMessage: 'Sua senha deve conter no mínimo 8 caracteres'
        }
    }
}

const tipoMusico = function checkTipoMusico(tipoMusico) {
    const validValues = ['1', '2', '3']
    if (!validValues.includes(tipoMusico)) {
        return {
            alertMessage: 'Por favor, recarregue o formulário. O tipo de músico contém valores inválidos.'
        }
    }
}

const tempoAtuacao = function checkTempoAtuacao(tempoAtuacao) {
    const validValues = ['1', '2', '3', '4']
    
    if (!validValues.includes(tempoAtuacao)) {
        return {
            alertMessage: 'Por favor, recarregue o formulário. O tempo de atuação contém valores inválidos.'
        }
    }
}

const contatoTelefonico = function checkContatoTelefonico(contatoTelefonico) {
    const numberPattern = /^\([1-9]{2}\).[0-9]{8,9}$/

    if (!numberPattern.test(contatoTelefonico)) {
        return {
            alertMessage: 'Por favor, informe o seu contato telefônico corretamente seguindo os padrões (99) 999999999'
        }
    }
}

const oficinas = function checkOficinas(oficinas) {
    const validValues = [
        'Clarinete',
        'Flauta',
        'Saxofone',
        'Trompa',
        'Trompete',
        'Trombone',
        'Tuba',
        'Percussão',
        'Regência'
    ]

    if (oficinas.length < 1 ) {
        return {
            alertMessage: 'Você precisa escolher uma ou mais oficinas'
        }
    }

    for (let i = 0; i < oficinas.length; i++) {
        if (!validValues.includes(oficinas[i])) {
            return {
                alertMessage: 'Uma das suas oficinas parece conter um valor inválido, por favor recarregue a página.'
            }
        }
    }
}

const banda = function checkBanda(banda) {
    const validValues = [
        'Não sou integrante de banda',
        'FILARMÔNICA MAESTRO FELINTO LÚCIO DANTAS',
        'FILARMÔNICA ELINO JULIÃO',
        'FILARMÔNICA ONZE DE DEZEMBRO',
        'FILARMÔNICA 24 DE OUTUBRO',
        'FILARMÔNICA JOVENS MÚSICOS',
        'BANDA DE MÚSICA MESTRE JOÃO ROBERTO PAZ E UNIÃO',
        'BANDA DE MÚSICA TRAMPOLIM DA VITÓRIA',
        'BANDA DE MÚSICA DA POLÍCIA MILITAR DO RN',
        'BANDA DE MÚSICA MAESTRO SANTA ROSA',
        'BANDA DE MÚSICA DA BASE AÉREA DE NATAL',
        'FILARMÔNICA DE SÃO TOMÉ',
        'FILARMÔNICA DE SÃO PEDRO DO POTENGI',
        'EUTERPE JARDINENSE',
        'FILARMÔNICA JIMMY BRITO',
        'BAMUSGA',
        'FILARMÔNICA DE MÃE LUIZA',
        'BANDA DE MÚSICA INFANTO-JUVENIL DE BREJINHO',
        'FILARMÔNICA DE MONTE ALEGRE',
        'FILARMÔNICA DE SANTANA DO MATOS',
        'FILARMÔNICA DE SÃO FERNANDO',
        'FILARMÔNICA DE SERRA NEGRA DO NORTE' ,
        'BANDA DE MÚSICA DE NOVA FLORESTA ',
        'SOCIEDADE MUSICAL NOVO SÉCULO',
        'BANDA DE MÚSICA DUARTE MACHADO',
        'FILARMÔNICA MONSENHOR HONÓRIO',
        'FILARMÔNICA DE FLORÂNIA',
        'Outra'
    ]

    if (!validValues.includes(banda)) {
        return {
            alertMessage: 'Por favor, recarregue o formulário. Parece que a banda selecionada contém o valor inválido.'
        }
    }
}

const endereco = function checkEndereco(endereco) {
    const ruaNumero = endereco.split(/[A-Z]{2}\. /)[1]
    const qntEspacosEntreNomes = ruaNumero.split(' ').length

    if (endereco.length < 1 || qntEspacosEntreNomes < 2) {
        return {
            alertMessage: 'Por favor, informa sua rua corretamente. Exemplo: Rua Luz, 21'
        }
    }
}

const checkers = {
    nomeCompleto,
    email,
    senha,
    tipoMusico,
    tempoAtuacao,
    contatoTelefonico,
    oficinas,
    banda,
    endereco
}

module.exports = {
    isValidParticipante: (participante) => {
        for (const key in participante) {
            const keyChecker = checkers[key]

            if (keyChecker) {
                const isInvalid = keyChecker(participante[key])
                if (isInvalid) {
                    alert(isInvalid.alertMessage)
                    return false
                }
            }
        }

        return true
    }
}