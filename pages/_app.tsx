import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
      </>
  )
}

library.add(fas);

export default MyApp
