import type { AppProps } from 'next/app';
import { createContext } from 'react';

import '@/app/index.scss';

import { useNotificationContext } from '@/processes/notification';

export const Context = createContext({ name: 'Default' });

export default function App({ Component, pageProps }: AppProps) {
    const contextValue = useNotificationContext();

    return (
        <Context.Provider value={contextValue}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}
