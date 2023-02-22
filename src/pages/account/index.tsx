import { GetServerSidePropsContext } from 'next';
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

import ProfilePage from './[slug]';
import styles from './index.module.scss';

export interface ProfilePageProps {
    authenticated: boolean;
    profileDto: ProfileDto;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await getAuthSideProps(context);
}

export default ProfilePage;
