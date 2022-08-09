import type {AppProps} from 'next/app';
import Head from 'next/head';

import {Provider} from 'react-redux';

import {DataLoader} from '@/components/dataLoader/DataLoader';

import {store} from '@/store/store';

import { Toaster } from 'react-hot-toast';

import '../styles/global.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="icon" href="/logo.jpg" />
        </Head>
        <DataLoader>
          <Component {...pageProps} />
          <Toaster />
        </DataLoader>
      </Provider>
    </>
  );
}

export default MyApp;
