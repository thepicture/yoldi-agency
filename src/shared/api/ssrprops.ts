import { GetServerSidePropsContext } from 'next';

import { ProfileDto, getProfile } from './yoldi/profile';

export async function getAuthSideProps(context: GetServerSidePropsContext) {
    const apiKey = context.req.cookies.apiKey;

    if (apiKey) {
        try {
            const response = await getProfile(context);

            if (response.status === 200) {
                return signalAuthenticated(context, response.data);
            }
        } catch {}
    }

    return redirectTo('login');
}

export async function navigateFromLoginPageIfLoggedInProps(
    context: GetServerSidePropsContext,
) {
    const apiKey = context.req.cookies.apiKey;

    if (apiKey) {
        try {
            const response = await getProfile(context);

            if (response.status === 200 && context.req.url !== '/') {
                return redirectTo(response.data.slug);
            }
        } catch {}
    }

    if (context.req.url === '/') {
        return {
            redirect: {
                destination: `login`,
                statusCode: 302,
            },
        };
    }

    return {
        props: {
            authenticated: false,
        },
    };
}

function signalAuthenticated(
    context: GetServerSidePropsContext,
    profileDto: ProfileDto,
) {
    return {
        props: {
            authenticated: true,
            profileDto,
            hostname: context.req.headers.host,
        },
    };
}

function redirectTo(path: string) {
    return {
        redirect: {
            destination: `${path}`,
            statusCode: 302,
        },
    };
}
