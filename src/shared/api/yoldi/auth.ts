import type { AxiosPromise } from 'axios';

import { apiInstance } from './base';
import type { Response } from './models';

const BASE_URL = '/auth';

export type SignInParams = {
    email?: string;
    password?: string;
};

export type LoginDto = {
    email: string;
    password: string;
};

export type SignUpDto = LoginDto & {
    name: string;
};

export type SignUpParams = SignInParams & {
    name?: string;
};

export const register = (params?: SignUpParams): AxiosPromise<Response> => {
    return apiInstance.post(`${BASE_URL}/sign-up`, params);
};

export const signIn = (params?: SignInParams): AxiosPromise<Response> => {
    return apiInstance.post(`${BASE_URL}/login`, params);
};
