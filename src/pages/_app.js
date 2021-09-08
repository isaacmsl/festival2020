import '../../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.push("https://festivalfelintolucio.com.br/inscritos")
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
