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

const OficinaCard = ({ autorizacao, oficina }) => {
    
    const {
        nome,
        professor,
        qntAulasAssistidas
    } = oficina

    if (autorizacao !== 2) {
        return (
            <>
                <div className="bg-white border border-solid inline-block w-full max-w-xs p-4 cursor-pointer">
                    <div>
                        <h1 className="font-bold text-xl">{nome}</h1>
                        <p className="mt-2">{professor}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-sm">Progresso: {qntAulasAssistidas} de 3</h2>
                        <ProgressBar qntAulasAssistidas={qntAulasAssistidas} />
                    </div>

                    <div className="mt-6 px-6 py-4 bg-blue-600 text-white font-bold rounded text-center">Acessar aulas</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="bg-white border border-solid inline-block w-screen max-w-xs p-4 cursor-pointer">
                <div>
                    <h1 className="font-bold text-xl">{nome}</h1>
                    <p className="mt-2">{professor}</p>
                </div>
                <p className="mt-4 italic text-sm font-bold">Clique aqui para acessar as aulas</p>
            </div>
        </>
    )
    
}
    


export default OficinaCard