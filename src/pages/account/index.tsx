import { GetServerSidePropsContext } from 'next';

import { getAuthSideProps } from '@/shared/api/ssrprops';
import { ProfileDto } from '@/shared/api/yoldi/profile';

import ProfilePage from './[slug]';

export interface ProfilePageProps {
    authenticated: boolean;
    profileDto: ProfileDto;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await getAuthSideProps(context);
}

export default ProfilePage;
