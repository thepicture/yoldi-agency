import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { getAuthSideProps } from '@/shared/api/ssrprops';
import { ProfileDto } from '@/shared/api/yoldi/profile';
import { Cover } from '@/shared/ui/Cover';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header/Header';
import { HeaderContentFooterGrid } from '@/shared/ui/HeaderContentFooterGrid';
import { Logo } from '@/shared/ui/Logo';
import { MainAccount } from '@/shared/ui/MainAccount';
import { NoAccountYet } from '@/shared/ui/NoAccountYet';
import { UserBlock } from '@/shared/ui/UserBlock';

import styles from './index.module.scss';

export interface ProfilePageProps {
    authenticated: boolean;
    profileDto: ProfileDto;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profileDto }) => {
    return (
        <HeaderContentFooterGrid>
            <Header
                logo={<Logo />}
                text="Разрабатываем и запускаем сложные веб проекты"
                userGroup={<UserBlock name={profileDto.name} />}
            />
            <section className={styles.grid}>
                <Cover url={profileDto.cover?.url} />
                <MainAccount profileDto={profileDto} />
            </section>
            <Footer>
                <NoAccountYet />
            </Footer>
        </HeaderContentFooterGrid>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await getAuthSideProps(context);
}

export default ProfilePage;
