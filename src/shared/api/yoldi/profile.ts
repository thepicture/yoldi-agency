import { GetServerSidePropsContext } from 'next';

import { getApiKey, getApiKeyFromCookies } from '../session';
import { apiInstance } from './base';

const BASE_URL = '/profile';

export type ProfileDto = {
    name: string;
    email: string;
    slug: string;
    description?: string;
    image?: {
        id: string;
        url: string;
        width: string;
        height: string;
    };
    cover?: {
        id: string;
        url: string;
        width: string;
        height: string;
    };
};

export type UpdateProfileDto = {
    name: string;
    slug: string;
    description: string;
    coverId?: string | null;
};

export const getProfile = (context: GetServerSidePropsContext) => {
    return apiInstance.get<ProfileDto>(`${BASE_URL}`, {
        headers: {
            'X-API-KEY': getApiKey(context),
        },
    });
};

export const patchProfile = (profile: UpdateProfileDto) => {
    return apiInstance.patch(`${BASE_URL}`, profile, {
        headers: {
            'X-API-KEY': getApiKeyFromCookies(),
        },
    });
};
