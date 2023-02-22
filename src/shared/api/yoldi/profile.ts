import type { AxiosPromise } from 'axios';
import { GetServerSidePropsContext } from 'next';

import { getApiKey } from '../session';
import { apiInstance } from './base';
import type { Response } from './models';

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

export const getProfile = (context: GetServerSidePropsContext) => {
    return apiInstance.get<ProfileDto>(`${BASE_URL}`, {
        headers: {
            'X-API-KEY': getApiKey(context),
        },
    });
};
