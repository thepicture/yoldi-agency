import useNotification from 'antd/lib/notification/useNotification';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { getAuthSideProps } from '@/shared/api/ssrprops';
import { ProfileDto } from '@/shared/api/yoldi/profile';
import { getUser } from '@/shared/api/yoldi/user';
import { Button } from '@/shared/ui/Button';
import { Cover } from '@/shared/ui/Cover';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';
import { MainAccount } from '@/shared/ui/MainAccount';
import { ProfileEditor } from '@/shared/ui/ProfileEditor';
import { UserBlock } from '@/shared/ui/UserBlock';

import { Context } from './_app';
import styles from './index.module.scss';

export interface ProfilePageProps {
    authenticated: boolean;
    profileDto: ProfileDto;
    hostname: string;
    slug: string;
    isMe: boolean;
    me: ProfileDto;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
    profileDto,
    hostname,
    isMe,
    me,
    slug,
}) => {
    const router = useRouter();

    const [api, contextHolder] = useNotification();

    const notify = (text: string) => {
        api.info({
            message: `Аккаунт`,
            description: <Context.Consumer>{() => text}</Context.Consumer>,
        });
    };
    const [isEditing, setIsEditing] = useState(false);

    const handleProfileEditorClose = () => {
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleNavigateToLogin = () => {
        router.push('/login');
    };

    return (
        <>
            {contextHolder}
            {isMe && (
                <ProfileEditor
                    visible={isEditing}
                    profileDto={profileDto}
                    hostname={hostname}
                    onClose={handleProfileEditorClose}
                />
            )}
            <HeaderContentFooterGrid>
                <Header
                    logo={<Logo />}
                    text="Разрабатываем и запускаем сложные веб проекты"
                    userGroup={
                        me ? (
                            <UserBlock me={me} />
                        ) : (
                            <Button
                                text="Войти"
                                onClick={handleNavigateToLogin}
                            />
                        )
                    }
                />
                <section className={styles.grid}>
                    <Cover
                        profileDto={profileDto}
                        onNotify={notify}
                        isMe={isMe}
                    />
                    <MainAccount
                        profileDto={profileDto}
                        onEdit={handleEdit}
                        hostname={hostname}
                        isMe={isMe}
                    />
                </section>
            </HeaderContentFooterGrid>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const props = await getAuthSideProps(context);

    const { slug } = context.query;

    try {
        const user = await getUser(slug as string);

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

export default ProfilePage;
