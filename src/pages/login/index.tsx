import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { LoginForm } from '@/features/login';

import { navigateFromLoginPageIfLoggedInProps } from '@/shared/api/ssrprops';
import { Button } from '@/shared/ui/Button';
import { CenteredWrapper } from '@/shared/ui/CenteredWrapper';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';
import { NoAccountYet } from '@/shared/ui/NoAccountYet';

import { useNavigateToLogin } from '../../features/login/lib';

const LoginPage: React.FC = () => {
    const navigateToLogin = useNavigateToLogin();

    return (
        <HeaderContentFooterGrid>
            <Header
                logo={<Logo />}
                text="Разрабатываем и запускаем сложные веб проекты"
                userGroup={<Button text="Войти" onClick={navigateToLogin} />}
            />
            <CenteredWrapper>
                <LoginForm />
            </CenteredWrapper>
            <Footer>
                <NoAccountYet />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await navigateFromLoginPageIfLoggedInProps(context);
}

export default LoginPage;
