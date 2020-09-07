import Link from 'next/link'
import styles from '../../styles/MenuDashboard.module.css'

const MenuDashboard = () => (
    <>
        <header className="bg-redHeader h-screen w-56 flex flex-col">
            <div className="bg-redHeaderStrong items-center">
                <Link href="/dashboard">
                   <a className="flex flex-row justify-between mt-3 mb-3">
                       <img src="assets/grid.svg" className="inline ml-8"/>
                       <h2 className={styles.dashboard_h2}>Dashboard</h2>
                   </a>
                </Link>
            </div>
            <div className="bg-redHeader items-center">
                <Link href="/dashboard">
                   <a className="flex flex-row justify-between mt-3 mb-3">
                       <img src="assets/user.svg" className="inline ml-8"/>
                       <h2 className={styles.perfil_h2}>Perfil</h2>
                   </a>
                </Link>
            </div>
            <div className="bg-redHeaderStrong items-center">
                <Link href="/dashboard">
                   <a className="flex flex-row justify-between mt-3 mb-3">
                       <img src="assets/trello.svg" className="inline ml-8"/>
                       <h2 className={styles.oficinas_h2}>Minhas Oficinas</h2>
                   </a>
                </Link>
            </div>
            
        </header>
    </>
)
 
export default MenuDashboard