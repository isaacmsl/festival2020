import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { ObjectID } from 'mongodb'
import { hash, hashSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { authenticated } from './authenticated'
import cookie from 'cookie'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.get(authenticated(async (req, res) => {
    const participantes = await req.db.collection(COLLECTION_NAME).find({}).toArray()
    
    const novosParticipantes = []
    
    participantes.forEach(participante => {
        delete participante.senha
        if(participante._id == req.participante.id) {
            novosParticipantes.unshift(participante)
        }
        else novosParticipantes.push(participante)
    })
    switch(novosParticipantes[0].autorizacao) {
        case 1:
            return res.status(200).json(novosParticipantes[0])
        case 2:
            const primeiraOficina = novosParticipantes[0].oficinas[0].toLowerCase()
            const participantesFiltrados = novosParticipantes.filter(participante => { 
                const indexOficina = participante.oficinas.findIndex(oficina => {
                   return oficina.toLowerCase() === primeiraOficina;
                })
                return indexOficina > -1
            })     
            return res.status(200).json(participantesFiltrados)       
        case 3:   
            return res.status(200).json(novosParticipantes)                
    }
    
}))

handler.post(async (req, res) => {
    
    const { 
        nomeCompleto,
        email,
        oficinas,
        endereco,
        contatoTelefonico,
        tipoMusico,
        tempoAtuacao,
        banda,
        senha
    } = req.body

    hash(senha, 10, async (error, senhaEncriptada) => {

        const newDocument = {
            nomeCompleto,
            email,
            oficinas,
            endereco,
            contatoTelefonico,
            tipoMusico,
            tempoAtuacao,
            banda,
            senha: senhaEncriptada,
            autorizacao: 1
        }

        const response = await req.db.collection(COLLECTION_NAME).insertOne(newDocument)
        
        const participante = response.ops[0]

        if (response.insertedCount) {  
            const conteudo = {
                id: participante._id
            }
            const jwt = sign(conteudo, process.env.SIGN, { expiresIn: '1h' })

            res.setHeader('Set-Cookie', cookie.serialize('authorization', jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/'
            }))

            return res.status(200).json({ mensagem: 'Participante inscrito com sucesso!'})
        }

        return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
    })  
})

handler.put(authenticated(async (req, res) => {

    const novosDados = req.body

    if (req.participante.id === novosDados.id) {
        const dadosAtuais = await req.db.collection(COLLECTION_NAME).findOne({ "_id": ObjectID(novosDados.id) })

        let participanteAtualizado = {}

        for (let chave in dadosAtuais) {
            if (novosDados.hasOwnProperty(chave)) participanteAtualizado[chave] = novosDados[chave]
            else participanteAtualizado[chave] = dadosAtuais[chave]
        }

        try {
            // se novos dados conter senha, encripte
            let senha = (novosDados.senha)
                ? hashSync(novosDados.senha, 10)
                : participanteAtualizado.senha

            const response = await req.db.collection(COLLECTION_NAME).updateOne(
                { "_id": ObjectID(novosDados.id) },
                {
                    $set: {
                        nomeCompleto: participanteAtualizado.nomeCompleto,
                        email: participanteAtualizado.email,
                        oficinas: participanteAtualizado.oficinas,
                        endereco: participanteAtualizado.endereco,
                        contatoTelefonico: participanteAtualizado.contatoTelefonico,
                        tipoMusico: participanteAtualizado.tipoMusico,
                        tempoAtuacao: participanteAtualizado.tempoAtuacao,
                        banda: participanteAtualizado.banda,
                        senha
                    }
                }
            )

            if (response.modifiedCount) {
                return res.status(200).json({ mensagem: 'Documento atualizado com sucesso' })
            }

            return res.status(404).json({ mensagem: 'Documento não foi encontrado. Por favor cheque os dados enviados' })
        } catch (e) {
            return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
        }
    }
    
    return res.status(401).json({ mensagem: "Você não tem autorização" })
}))

handler.delete(authenticated(async (req, res) => {
    const idToken = req.participante.id
    const idBody = req.body.id

    if (idToken === idBody) {
        const response = await req.db.collection(COLLECTION_NAME).deleteOne({ "_id": ObjectID(idBody) })

        if (response.deletedCount) {
            return res.status(200).json({ mensagem: 'Documento deletado com sucesso' })
        }

        return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
    } 

    return res.status(401).json({ mensagem: "Você não tem autorização" })    
}))

export default handler
