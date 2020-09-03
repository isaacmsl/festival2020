import Link from 'next/link'

const HeaderDivulgacao = () => (
    <Link href="/">
        <header className="flex flex-col lg:flex-row items-center mb-10">
            <div className="mb-10 px-10 tex-center sm:text-left sm:px-0 mt-10 text-4xl text-white">
                <h2 className="text-sm">11º FESTIVAL MAESTRO</h2>
                <h1 className="font-extrabold">FELINTO LÚCIO DANTAS</h1>
            </div>
            <div className="flex flex-col items-center sm:ml-10 sm:flex-row text-white uppercase font-bold">
                <Link href="/festival">
                    <a className="mb-4 sm:mb-0 w-full sm:w-auto mx-auto px-4 py-2 sm:p-0 rounded no-underline sm:ml-4 bg-blue-600 text-center sm:bg-transparent sm:text-left">FESTIVAL</a>
                </Link>
                <Link href="/felinto">
                    <a className="mb-4 sm:mb-0 w-full sm:w-auto mx-auto px-4 py-2 sm:p-0 rounded no-underline sm:ml-4 bg-blue-600 text-center sm:bg-transparent sm:text-left">FELINTO LÚCIO DANTAS</a>
                </Link>
                <Link href="/oficinas">
                    <a className="mb-4 sm:mb-0 w-full sm:w-auto mx-auto px-4 py-2 sm:p-0 rounded no-underline sm:ml-4 bg-blue-600 text-center sm:bg-transparent sm:text-left">OFICINAS</a>
                </Link>
                <Link href="/patrocinadores">
                    <a className="mb-4 sm:mb-0 w-full sm:w-auto mx-auto px-4 py-2 sm:p-0 rounded no-underline sm:ml-4 bg-blue-600 text-center sm:bg-transparent sm:text-left">PATROCINADORES</a>
                </Link>
            </div>
        </header>
    </Link>
)

export default HeaderDivulgacao