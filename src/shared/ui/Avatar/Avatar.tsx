import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import { postImage } from '@/shared/api/yoldi/image';
import { ProfileDto, patchProfile } from '@/shared/api/yoldi/profile';

import styles from './Avatar.module.scss';

export interface AvatarProps {
    profileDto: ProfileDto;
    onNotify: (message: string) => void;
}

export const Avatar: React.FC<AvatarProps> = ({ profileDto, onNotify }) => {
    const router = useRouter();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const openFilePicker = () => {
        inputRef.current?.click();
    };

    const handleImageChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        try {
            const imageDto = await postImage(event.target.files![0]);
            const payload = {
                imageId: imageDto.id,
                name: profileDto.name,
                slug: profileDto.slug,
                description: profileDto.description ?? '',
            };

            await patchProfile(payload);

            onNotify(`Фото обновлено!`);

            router.replace(router.asPath);
        } catch (error) {
            onNotify(`Не удалось обновить фото. ${error}`);
        } finally {
            inputRef.current!.value = '';
        }
    };

    return (
        <section className={styles.avatar}>
            <input
                className={styles.input}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
            />
            {profileDto.image ? (
                <img
                    className={styles.image}
                    src={profileDto.image.url}
                    alt={`profile image of ${profileDto.name}`}
                />
            ) : (
                <p className={styles.letter}>
                    {profileDto.name[0].toUpperCase()}
                </p>
            )}
            <button className={styles.hover} onClick={openFilePicker}>
                <svg
                    className={styles.icon}
                    width="42"
                    height="32"
                    viewBox="0 0 42 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.9688 0.375L13.4805 1.00977L11.625 3.5H0.6875V31.625H41.3125V3.5H30.375L28.5195 1.00977L28.0312 0.375H13.9688ZM15.5312 3.5H26.4688L28.3242 5.99023L28.8125 6.625H38.1875V28.5H3.8125V6.625H13.1875L13.6758 5.99023L15.5312 3.5ZM8.5 8.1875C7.6394 8.1875 6.9375 8.8894 6.9375 9.75C6.9375 10.6106 7.6394 11.3125 8.5 11.3125C9.3606 11.3125 10.0625 10.6106 10.0625 9.75C10.0625 8.8894 9.3606 8.1875 8.5 8.1875ZM21 8.1875C15.8425 8.1875 11.625 12.405 11.625 17.5625C11.625 22.72 15.8425 26.9375 21 26.9375C26.1575 26.9375 30.375 22.72 30.375 17.5625C30.375 12.405 26.1575 8.1875 21 8.1875ZM21 11.3125C24.4729 11.3125 27.25 14.0896 27.25 17.5625C27.25 21.0354 24.4729 23.8125 21 23.8125C17.5271 23.8125 14.75 21.0354 14.75 17.5625C14.75 14.0896 17.5271 11.3125 21 11.3125Z"
                        fill="white"
                    />
                </svg>
            </button>
        </section>
    );
};
