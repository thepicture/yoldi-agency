import { useRouter } from 'next/router';
import React from 'react';

import { Button } from '@/shared/ui/Button';
import { CenteredWrapper } from '@/shared/ui/CenteredWrapper';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { LoginForm } from '@/shared/ui/LoginForm';
import { Logo } from '@/shared/ui/Logo';
import { NoAccountYet } from '@/shared/ui/NoAccountYet';

const LoginPage: React.FC = () => {
    const router = useRouter();

    const handleNavigateToLogin = () => {
        router.push('/login');
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
            <CenteredWrapper>
                <LoginForm />
            </CenteredWrapper>
            <Footer>
                <NoAccountYet />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export default LoginPage;
