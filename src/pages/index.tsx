import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { useNavigateToLogin } from '@/features/login';

import { getAuthSideProps } from '@/shared/api/ssrprops';
import { ProfileDto } from '@/shared/api/yoldi/profile';
import { getUser } from '@/shared/api/yoldi/user';
import { Accounts } from '@/shared/ui/Accounts';
import { Button } from '@/shared/ui/Button';
import { Header } from '@/shared/ui/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';

import { UserBlock } from '@/widgets/user-block';

import styles from './index.module.scss';

export type AccountPageProps = {
    isMe: boolean;
    me: ProfileDto;
};

const AccountsPage: React.FC<AccountPageProps> = ({ me, isMe }) => {
    const navigateToLogin = useNavigateToLogin();

    return (
        <HeaderContentFooterGrid>
            <Header
                logo={<Logo />}
                text="Разрабатываем и запускаем сложные веб проекты"
                userGroup={
                    me ? (
                        <UserBlock me={me} />
                    ) : (
                        <Button text="Войти" onClick={navigateToLogin} />
                    )
                }
            />
            <section className={styles.account}>
                <Accounts />
            </section>
        </HeaderContentFooterGrid>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const props = await getAuthSideProps(context);

    const slug = 'props' in props ? props.props.profileDto.slug : '';

    try {
        const user = await getUser(slug);

        return {
            props: {
                ...props,
                profileDto: user,
                isMe:
                    'props' in props &&
                    props.props.profileDto.email === user.email,
                me: 'props' in props && props.props.profileDto,
            },
        };
    } catch {
        return {
            props: {
                ...props,
                isMe: false,
                me: 'props' in props && props.props.profileDto,
            },
        };
    }
}

export default AccountsPage;
