import Link from 'next/link'

const HeaderDivulgacao = () => (
    <Link href="/">
        <header className="flex flex-col lg:flex-row items-center mb-10">
            <div className="mb-10 mt-56 px-10 sm:px-0 sm:mt-10 text-4xl text-white">
                <h2 className="text-sm">11º FESTIVAL MAESTRO</h2>
                <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
            </div>
            <div className="hidden ml-10 sm:flex text-white uppercase font-bold">
                <Link href="/festival">
                    <a className="no-underline ml-4">FESTIVAL</a>
                </Link>
                <Link href="/felinto">
                    <a className="no-underline ml-4">FELINTO LÚCIO DANTAS</a>
                </Link>
                <Link href="/oficinas">
                    <a className="no-underline ml-4">OFICINAS</a>
                </Link>
                <Link href="/patrocinadores">
                    <a className="no-underline ml-4">PATROCINADORES</a>
                </Link>
            </div>
        </header>
    </Link>
)

export default HeaderDivulgacao