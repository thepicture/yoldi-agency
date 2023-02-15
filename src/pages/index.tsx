import Head from 'next/head';

import '@/app/index.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Yoldi Agency</title>
                <meta
                    name="description"
                    content="A Yoldi Agency profile app "
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>yoldi agency</h1>
                <p>Here be dragons...</p>
            </main>
        </>
    );
}
