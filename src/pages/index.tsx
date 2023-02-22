import { GetServerSidePropsContext } from 'next';

import { navigateFromLoginPageIfLoggedInProps } from '@/shared/api/ssrprops';

import RegistrationPage from './registration';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await navigateFromLoginPageIfLoggedInProps(context);
}

export default RegistrationPage;
