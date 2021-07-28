import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

library.add(fab, fas)

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>STORM</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
export default MyApp
