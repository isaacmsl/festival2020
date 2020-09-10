import redirect from "../libs/redirect"
import axios from 'axios'

const Logout = () => (<div />)

Logout.getInitialProps = async (ctx) => {
    try {
        await axios.post('/api/logout')
    } 
    catch (e){} 
    finally {
        redirect(ctx, '/login')
    }

    return {}
}

export default Logout