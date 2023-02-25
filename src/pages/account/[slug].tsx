import useNotification from 'antd/lib/notification/useNotification';
import { GetServerSidePropsContext } from 'next';
import React, { useState } from 'react';

import { getAuthSideProps } from '@/shared/api/ssrprops';
import { ProfileDto } from '@/shared/api/yoldi/profile';
import { Cover } from '@/shared/ui/Cover';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';
import { MainAccount } from '@/shared/ui/MainAccount';
import { ProfileEditor } from '@/shared/ui/ProfileEditor';
import { UserBlock } from '@/shared/ui/UserBlock';

import { Context } from '../_app';
import styles from './index.module.scss';

export interface ProfilePageProps {
    authenticated: boolean;
    profileDto: ProfileDto;
    hostname: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profileDto, hostname }) => {
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

    return (
        <>
            {contextHolder}
            <ProfileEditor
                visible={isEditing}
                profileDto={profileDto}
                hostname={hostname}
                onClose={handleProfileEditorClose}
            />
            <HeaderContentFooterGrid>
                <Header
                    logo={<Logo />}
                    text="Разрабатываем и запускаем сложные веб проекты"
                    userGroup={<UserBlock name={profileDto.name} />}
                />
                <section className={styles.grid}>
                    <Cover profileDto={profileDto} onNotify={notify} />
                    <MainAccount
                        profileDto={profileDto}
                        onEdit={handleEdit}
                        hostname={hostname}
                    />
                </section>
            </HeaderContentFooterGrid>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await getAuthSideProps(context);
}

export default ProfilePage;
