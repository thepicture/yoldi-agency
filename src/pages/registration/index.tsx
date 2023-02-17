import Head from 'next/head';
import { useRouter } from 'next/router';
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
    const router = useRouter();

    const handleNavigateToSignIn = () => {
        window.location.href = '/login';
    };

    return (
        <HeaderContentFooterGrid>
            <Header
                logo={<Logo />}
                text="Разрабатываем и запускаем сложные веб проекты"
                userGroup={
                    <Button
                        text="Войти"
                        onClick={() => handleNavigateToSignIn()}
                    />
                }
            />
            <section className={styles.background}>
                <RegistrationForm />
            </section>
            <Footer>
                <AlreadyHaveAccount />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export default RegistrationPage;
