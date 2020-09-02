import nextConnect from 'next-connect'
import dbMiddleware from '../../middlewares/database'
import { ObjectID } from 'mongodb'
import { hash, hashSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'

const handler = nextConnect()

const COLLECTION_NAME = 'participantes'

handler.use(dbMiddleware)

handler.get(async (req, res) => {
    const response = await req.db.collection(COLLECTION_NAME).find({}).toArray()
    res.json(response)
})

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
                nomeCompleto: participante.nomeCompleto,
                email: participante.email,
                oficinas: participante.oficinas,
                endereco: participante.endereco,
                contatoTelefonico: participante.contatoTelefonico,
                tipoMusico: participante.tipoMusico,
                tempoAtuacao: participante.tempoAtuacao,
                banda: participante.banda,
                autorizacao: participante.autorizacao,
                id: participante._id
            }
            const jwt = sign(conteudo, process.env.SIGN, { expiresIn: '1h' })

            return res.status(200).json({
                authToken: jwt,
            })
        }

        return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
    })  
})

handler.put(async (req, res) => {

    const novosDados = req.body
    const dadosAtuais = await req.db.collection(COLLECTION_NAME).findOne({ "_id": ObjectID(novosDados._id) })
    
    let participanteAtualizado = {}

    for(let chave in dadosAtuais) {
        if (novosDados.hasOwnProperty(chave)) participanteAtualizado[chave] = novosDados[chave]
        else participanteAtualizado[chave] = dadosAtuais[chave] 
    }

    try {
        // se novos dados conter senha, encripte
        let senha = (novosDados.senha)
            ? hashSync(novosDados.senha, 10)
            : participanteAtualizado.senha

        const response = await req.db.collection(COLLECTION_NAME).updateOne(
            { "_id": ObjectID(novosDados._id) },
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

})

handler.delete(async (req, res) => {
    const { id } = req.body

    const response = await req.db.collection(COLLECTION_NAME).deleteOne({ "_id": ObjectID(id) })

    if (response.deletedCount) {
        return res.status(200).json({ mensagem: 'Documento deletado com sucesso' })
    }

    return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })
})

export default handler