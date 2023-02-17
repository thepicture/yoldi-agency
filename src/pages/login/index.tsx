import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import '@/app/index.scss';

import { Button } from '@/shared/ui/Button';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { LoginForm } from '@/shared/ui/LoginForm';
import { Logo } from '@/shared/ui/Logo';
import { NoAccountYet } from '@/shared/ui/NoAccountYet';

import styles from './index.module.scss';

const LoginPage: React.FC = () => {
    const router = useRouter();

    const handleNavigateToLogin = () => {
        window.location.href = '/login';
    };

    return (
        <HeaderContentFooterGrid>
            <Header
                logo={<Logo />}
                text="Разрабатываем и запускаем сложные веб проекты"
                userGroup={
                    <Button text="Войти" onClick={handleNavigateToLogin} />
                }
            />
            <section className={styles.background}>
                <LoginForm />
            </section>
            <Footer>
                <NoAccountYet />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export default LoginPage;
