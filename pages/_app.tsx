import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <div className='flex-grow md:mb-24 mb-0' />
        <Footer />
      </>
  )
}

library.add(fas, fab);

export default MyApp
