import nextConnect from 'next-connect'
import dbMiddleware from '../../../middlewares/database'
import { isAuthenticated } from '../../../middlewares/isAuthenticated'
import crypto from 'crypto'

const handler = nextConnect()

const COLLECTION_NAME = 'oficinas'

handler.use(dbMiddleware)

handler.get(isAuthenticated(async (req, res) => {
    const oficinas = await req.db.collection(COLLECTION_NAME).find({}).toArray()
    return res.status(200).json(oficinas)
}))

/*handler.put(isAuthenticated(async (req, res) => {
    const { nome, nomeProfessor, redesSociais, imgUrl } = req.body
    const response = await req.db.collection(COLLECTION_NAME).updateOne(
        { "nome": nome },
        {
            $set: {
                professor: {
                    nome: nomeProfessor,
                    redesSociais,
                    imgUrl
                }
            }
        }
    )

    if (response.modifiedCount) {
        return res.status(200).json({ mensagem: 'Documento atualizado com sucesso' })
    }
    return res.status(404).json({ mensagem: 'Documento não foi encontrado. Por favor cheque os dados enviados' })
}))*/

/*handler.put(isAuthenticated(async (req, res) => {
    const { nome, aulas, linkMateriais } = req.body
    for(let i = 0; i < 3; i++) {
        aulas[i].codigoPresenca = crypto.randomBytes(4).toString('HEX')
    }
    const response = await req.db.collection(COLLECTION_NAME).updateOne(
        { "nome": nome },
        {
            $set: {
                aulas,
                linkMateriais
            }
        }
    )

    if (response.modifiedCount) {
        return res.status(200).json({ mensagem: 'Documento atualizado com sucesso' })
    }
    return res.status(404).json({ mensagem: 'Documento não foi encontrado. Por favor cheque os dados enviados' })
}))*/
handler.put(isAuthenticated(async (req, res) => {
    const { nome, data } = req.body

    const {aulas} = await req.db.collection(COLLECTION_NAME).findOne({nome})
    
    for(let i = 0; i < 3; i++) {
        aulas[i].data = new Date(data[i])
    }
    const response = await req.db.collection(COLLECTION_NAME).updateOne(
        { "nome": nome },
        {
            $set: {
                aulas
            }
        }
    )

    if (response.modifiedCount) {
        return res.status(200).json({ mensagem: 'Documento atualizado com sucesso' })
    }
    return res.status(404).json({ mensagem: 'Documento não foi encontrado. Por favor cheque os dados enviados' })
}))

// handler.post(async (req, res) => {

//     const { nome } = req.body

//     const newDocument = {
//         nome,
//         isOnline: false, 
//         linkMateriais: 'https://img.quizur.com/f/img5d0d8cc29b1c52.81059338.jpg?lastEdited=1561169101',
//         aulas: [
//             {
//                 date: new Date(),
//                 codigoPresenca: '7e1485c4-1f89-455d-9b62-13e56f7e99da',
// 			    link: 'https://image.freepik.com/vetores-gratis/estudantes-em-modernos-sala-aula-ilustracao_1308-27136.jpg'
//             },
//             {
//                 date: new Date(),
//                 codigoPresenca: '7e1485c4-1f89-455d-9b62-13e56f7e99da',
//                 link: 'https://image.freepik.com/vetores-gratis/estudantes-em-modernos-sala-aula-ilustracao_1308-27136.jpg'
//             },
//             {
//                 date: new Date(),
//                 codigoPresenca: '7e1485c4-1f89-455d-9b62-13e56f7e99da',
//                 link: 'https://image.freepik.com/vetores-gratis/estudantes-em-modernos-sala-aula-ilustracao_1308-27136.jpg'
//             }
//         ],
//     }

//     const response = await req.db.collection(COLLECTION_NAME).insertOne(newDocument)

//     if (response.insertedCount) {
//         return res.status(200).json({ mensagem: 'Oficina inserida com sucesso!' })
//     }

//     return res.status(500).json({ mensagem: 'Desculpa, algo inesperado aconteceu. Por favor, cheque os dados enviados' })

// })

export default handler
