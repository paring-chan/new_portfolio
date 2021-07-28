import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import 'swiper/swiper.scss'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation, Pagination])

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
