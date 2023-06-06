// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { createContext,useReducer} from 'react';


// export const StoreContext= createContext();



import '@/styles/globals.css'

import StoreProvider from '../store/store-context'
//import { AppProps } from 'next/app';
export default function App({ Component, pageProps }) {
  return (
  <><StoreProvider>
    <Component {...pageProps} />

  </StoreProvider>
  </>
  );
}




