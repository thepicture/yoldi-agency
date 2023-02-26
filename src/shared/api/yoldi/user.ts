import { apiInstance } from './base';
import { ProfileDto } from './profile';

const BASE_URL = '/user';

export const getUser = async (slug: string): Promise<ProfileDto> =>
    (await apiInstance.get<ProfileDto>(`${BASE_URL}/${slug}`)).data;
