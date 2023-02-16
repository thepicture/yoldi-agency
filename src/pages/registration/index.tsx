import Head from 'next/head';
import React from 'react';

import '@/app/index.scss';

import { AlreadyHaveAccount } from '@/shared/ui/AlreadyHaveAccount';
import { Button } from '@/shared/ui/Button';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';
import { RegistrationForm } from '@/shared/ui/RegistrationForm';

import styles from './index.module.scss';

const RegistrationPage: React.FC = () => {
    const handleNavigateToLogin = () => {};
    return (
        <>
            <Head>
                <link
                    href="https://fonts.cdnfonts.com/css/inter"
                    rel="stylesheet"
                />
            </Head>
            <HeaderContentFooterGrid>
                <Header
                    logo={<Logo />}
                    text="Разрабатываем и запускаем сложные веб проекты"
                    userGroup={
                        <Button text="Войти" onClick={handleNavigateToLogin} />
                    }
                />
                <section className={styles.background}>
                    <RegistrationForm />
                </section>
                <Footer>
                    <AlreadyHaveAccount onSignIn={handleNavigateToLogin} />
                </Footer>
            </HeaderContentFooterGrid>
        </>
    );
};

export default RegistrationPage;
