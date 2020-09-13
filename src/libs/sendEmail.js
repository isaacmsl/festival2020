import nodemailer from 'nodemailer'

export default async function sendEmail(email, body) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.RECUPERACAO_EMAIL,
            pass: process.env.RECUPERACAO_EMAIL_SENHA
        }
    })

    const info = await transporter.sendMail({
        from: process.env.RECUPERACAO_EMAIL,
        to: email,
        subject: "Festival 2020 | Código de recuperação de senha",
        html: `<h1>Por favor, não responda esta mensagem.</h1><span>Olá, me chamo Isaac Lourenço e faço parte da equipe de desenvolvimento do 11º Festival Maestro Felinto Lúcio Dantas.<br/> Ops! Parece que você esqueceu sua senha... Copie e cole o código abaixo lá no nosso site ;)<br/><br/></span><b>Código:</b> ${body.codigoRecuperacao}`,
    })
}
