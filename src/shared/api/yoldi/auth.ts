import type { AxiosPromise } from 'axios';

import { apiInstance } from './base';
import type { Response } from './models';

const BASE_URL = '/auth';

export type SignUpParams = {
    email?: string;
    name?: string;
    password?: string;
};

export const register = (params?: SignUpParams): AxiosPromise<Response> => {
    return apiInstance.post(`${BASE_URL}/sign-up`, params);
};
