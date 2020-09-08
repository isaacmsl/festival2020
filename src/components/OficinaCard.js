const ProgressBar = ({ qntAulasAssistidas }) => {
    
    if (qntAulasAssistidas === 0) {
        return (
            <div className="relative mt-4 border border-solid rounded-full">
                <div className={`w-full rounded-full h-full text-black font-bold text-center text-sm py-1`}>
                    0%
                </div>
            </div>
        )
    }
    
    return (
        <div className="relative mt-4 border border-solid rounded-full">
            <div className={`w-${qntAulasAssistidas}/3 bg-green-400 rounded-full h-full text-black font-bold text-center text-sm py-1`}>
                {((qntAulasAssistidas / 3) * 100).toFixed(0) + '%'}
            </div>
        </div>
    )

}

const OficinaCard = ({ oficina }) => {
    
    const {
        nome,
        professor,
        qntAulasAssistidas
    } = oficina

    console.log(oficina)
    return (
        <div className="bg-white border border-solid inline-block w-full min-w-xs max-w-xs p-4">
            <div>
                <h1 className="font-bold text-xl">{nome}</h1>
                <p className="mt-2">{professor}</p>
            </div>
            <p className="mt-4 italic text-sm">Próxima aula: Amanhã</p>
            <div className="mt-4">
                <h2 className="text-sm">Progresso: {qntAulasAssistidas} de 3</h2>
                <ProgressBar qntAulasAssistidas={qntAulasAssistidas} />
            </div>
        </div>
    )
}
    


export default OficinaCard