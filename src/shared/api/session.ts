import { GetServerSidePropsContext } from 'next';

const API_KEY_EXTRACTOR = /apiKey=([^;]+)/;
const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const saveApiKey = (apiKey: string) => {
    document.cookie = `apiKey=${apiKey}; SameSite=Scrict; Secure; max-age: ${ONE_YEAR}; Path=/`;
};

export const deleteApiKey = () => {
    document.cookie = `apiKey=; SameSite=Scrict; Secure; max-age: 0; Path=/`;
};

export const getApiKey = (context: GetServerSidePropsContext) =>
    context.req.cookies['apiKey'];

export const getApiKeyFromCookies = () =>
    document.cookie.match(API_KEY_EXTRACTOR)![1];
