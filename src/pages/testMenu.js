import Head from 'next/head'
import MenuDashboard from '../components/MenuDashboard'

export default function testMenu () {
    return (
        <div>
            <Head>
                <title>Festival - 2020</title>
            </Head>

            <MenuDashboard />

        </div>
    )
}