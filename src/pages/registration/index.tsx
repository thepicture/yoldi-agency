import { useRouter } from 'next/router';
import React from 'react';

import { AlreadyHaveAccount } from '@/shared/ui/AlreadyHaveAccount';
import { Button } from '@/shared/ui/Button';
import { CenteredWrapper } from '@/shared/ui/CenteredWrapper';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';
import { RegistrationForm } from '@/shared/ui/RegistrationForm';

const RegistrationPage: React.FC = () => {
    const router = useRouter();

    const handleNavigateToSignIn = () => {
        router.push('/login');
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
            <CenteredWrapper>
                <RegistrationForm />
            </CenteredWrapper>
            <Footer>
                <AlreadyHaveAccount />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export default RegistrationPage;
