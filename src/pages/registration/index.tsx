import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { useNavigateToLogin } from '@/features/login';
import { RegistrationForm } from '@/features/registration';

import { navigateFromLoginPageIfLoggedInProps } from '@/shared/api/ssrprops';
import { AlreadyHaveAccount } from '@/shared/ui/AlreadyHaveAccount';
import { Button } from '@/shared/ui/Button';
import { CenteredWrapper } from '@/shared/ui/CenteredWrapper';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';

const RegistrationPage: React.FC = () => {
    const navigateToLogin = useNavigateToLogin();

    return (
        <HeaderContentFooterGrid>
            <Header
                logo={<Logo />}
                text="Разрабатываем и запускаем сложные веб проекты"
                userGroup={<Button text="Войти" onClick={navigateToLogin} />}
            />
            <CenteredWrapper>
                <RegistrationForm />
            </CenteredWrapper>
            <Footer>
                <AlreadyHaveAccount />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await navigateFromLoginPageIfLoggedInProps(context);
}

export default RegistrationPage;
