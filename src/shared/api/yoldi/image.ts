import { getApiKeyFromCookies } from '../session';
import { apiInstance } from './base';

const BASE_URL = '/image';

export type ImageDto = {
    id: string;
    url: string;
    width: string;
    height: string;
};

export const postImage = async (image: File): Promise<ImageDto> => {
    const form = new FormData();
    form.append('file', image, image.name);

    const response = await apiInstance.post(`${BASE_URL}`, form, {
        headers: {
            'X-API-KEY': getApiKeyFromCookies(),
        },
    });

    return response.data;
};
