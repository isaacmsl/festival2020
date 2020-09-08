import Link from 'next/link'

const OficinaCard = ({ oficina }) => {
    
    const {
        nome,
        professor,
        qntAulasAssistidas
    } = oficina

    console.log(oficina)
    return (
        <div className="border border-solid inline-block p-4">
            <div>
                <h1 className="font-bold text-xl">{nome}</h1>
                <p className="mt-2">{professor}</p>
            </div>
            <p className="mt-4 italic text-sm">Próxima aula: Amanhã</p>
            <div className="mt-4">
                <h2 className="text-sm">Progresso: {qntAulasAssistidas} de 3</h2>
                <div className="relative mt-4 border border-solid rounded-full p-2">
                    <div className={`w-${qntAulasAssistidas}/3 bg-green-400 rounded-full h-full text-black font-bold text-center`}>
                        {((qntAulasAssistidas/3) * 100).toFixed(0) + '%'}
                    </div>
                </div>
            </div>
        </div>
    )
}
    


export default OficinaCard