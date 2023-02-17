import type { AppProps } from 'next/app';
import { createContext, useMemo } from 'react';

import '@/app/index.scss';

export const Context = createContext({ name: 'Default' });

export default function App({ Component, pageProps }: AppProps) {
    const contextValue = useMemo(() => ({ name: 'Notification' }), []);

    return (
        <Context.Provider value={contextValue}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}
