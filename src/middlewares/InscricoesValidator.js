import axios from 'axios'

const nomeCompleto = function checkNomeCompleto(nomeCompleto) {
    const qntEspacosEntreNomes = nomeCompleto.split(' ').length
    
    console.log(qntEspacosEntreNomes)
    console.log(nomeCompleto)
    if (nomeCompleto.length < 1 || qntEspacosEntreNomes < 2) {
        return {
            alertMessage: 'Por favor, informe seu nome completo'
        }
    }

    return
}

const email = function checkEmail(email) {
    const validEmailRegex = /\S+@\S+\.\S+/
    if (email.length < 1 || !validEmailRegex.test(email)) {
        return {
            alertMessage: 'Por favor, informe seu email corretamente'
        }
    }
    
    return
}

const senha = function checkSenha(senha) {
    console.log(senha.length)
    if (senha.length < 8) {
        return {
            alertMessage: 'Sua senha deve conter no mínimo 8 caracteres'
        }
    }

    return
}

const tipoMusico = function checkTipoMusico(tipoMusico) {
    const validValues = ['1', '2', '3']
    if (!validValues[tipoMusico]) {
        return {
            alertMessage: 'Por favor, recarregue o formulário. O tipo de músico contém valores inválidos.'
        }
    }

    return
}

const tempoAtuacao = function checkTempoAtuacao(tempoAtuacao) {
    const validValues = ['1', '2', '3', '4']
    
    if (!validValues[tempoAtuacao]) {
        return {
            alertMessage: 'Por favor, recarregue o formulário. O tempo de atuação contém valores inválidos.'
        }
    }

    return
}

const contatoTelefonico = function checkContatoTelefonico(contatoTelefonico) {
    const numberPattern = /^\([1-9]{2}\).[0-9]{8,9}$/

    if (!numberPattern.test(contatoTelefonico)) {
        return {
            alertMessage: 'Por favor, informe o seu contato telefônico corretamente seguindo os padrões (99) 999999999'
        }
    }

    return
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

    oficinas.forEach(oficina => {
        if (!validValues[oficina]) {
            return {
                alertMessage: 'Uma das suas oficinas parece conter um valor inválido, por favor recarregue a página.'
            }
        }
    })

    return
}

const checkers = {
    nomeCompleto,
    email,
    senha,
    tipoMusico,
    tempoAtuacao,
    contatoTelefonico,
    oficinas
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