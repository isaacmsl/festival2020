import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'



export default function Dashboard() {
    return (
        <div
            className={styles.profileContainer}
        >
            <Head>
                <title>Festival - 2020</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.profileContainerHeader}>
                <span>Bem-vindo(a), Paulo.</span>
                <a className={styles.profileContainerHeaderLink} href="/">Sair</a>
            </header>

            <h1 className={styles.profileContainerH1}>Oficinas:</h1>

            <ul className={styles.profileContainerUl}>
                <li className={styles.profileContainerUlLi}>
                    <strong>Oficina:</strong>
                    <p>Saxofne</p>

                    <strong>Professor:</strong>
                    <p>Costinha</p>

                    <button className={styles.profileContainerUlLiButton}>*</button>
                </li>

                <li className={styles.profileContainerUlLi}>
                    <strong>Oficina:</strong>
                    <p>Saxofne</p>

                    <strong>Professor:</strong>
                    <p>Costinha</p>

                    <button className={styles.profileContainerUlLiButton}>*</button>
                </li>

                <li className={styles.profileContainerUlLi}>
                    <strong>Oficina:</strong>
                    <p>Saxofne</p>

                    <strong>Professor:</strong>
                    <p>Costinha</p>

                    <button className={styles.profileContainerUlLiButton}>*</button>
                </li>
            </ul>
           
        </div>
    )
}
