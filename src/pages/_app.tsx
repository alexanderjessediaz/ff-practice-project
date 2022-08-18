import {useState} from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';

import {Provider} from 'react-redux';
import {wrapper} from '../store';
import {useStore} from 'react-redux';
import initAuth from '../lib/auth/initAuth';
import {AnyAction, Store} from 'redux';
import {PageLoader} from '@/components/shared/pageloader/';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor} from 'redux-persist/lib/types';
import {AnimatePresence} from 'framer-motion';


import { Toaster } from 'react-hot-toast';


import {DataLoader} from '@/components/dataLoader/DataLoader';
import {DataListener} from '@/components/dataLoader/DataListener';
import '../styles/global.css';

initAuth();

function MyApp({Component, pageProps, router}: AppProps) {
  const store: Store<any, AnyAction> & {
    __persistor?: Persistor;
  } = useStore();


  return (
    <>
      <PersistGate persistor={store.__persistor} loading={<PageLoader />}>
        <Head>
          <link rel="shortcut icon" href="/img/favicon.png" />
        </Head>
        <DataLoader>
          <DataListener>
            
              <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            
          </DataListener>
        </DataLoader>
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
