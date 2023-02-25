import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import { postImage } from '@/shared/api/yoldi/image';
import { ProfileDto, patchProfile } from '@/shared/api/yoldi/profile';

import { Button } from '../Button';
import styles from './Cover.module.scss';

const DELETE = null;

export interface CoverProps {
    profileDto: ProfileDto;
    onNotify: (message: string) => void;
}

export const Cover: React.FC<CoverProps> = ({ profileDto, onNotify }) => {
    const router = useRouter();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleCoverUpload = () => {
        inputRef.current?.click();
    };

    const handleCoverDelete = async () => {
        try {
            const payload = {
                coverId: DELETE,
                name: profileDto.name,
                slug: profileDto.slug,
                description: profileDto.description ?? '',
            };

            await patchProfile(payload);

            onNotify(`Обложка удалена!`);

            router.replace(router.asPath);
        } catch (error) {
            onNotify(`Не удалось удалить обложку. ${error}`);
        }
    };

    const handleCoverChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        try {
            const imageDto = await postImage(event.target.files![0]);
            const payload = {
                coverId: imageDto.id,
                name: profileDto.name,
                slug: profileDto.slug,
                description: profileDto.description ?? '',
            };

            await patchProfile(payload);

            onNotify(`Обложка обновлена!`);

            router.replace(router.asPath);
        } catch (error) {
            onNotify(`Не удалось изменить обложку. ${error}`);
        } finally {
            inputRef.current!.value = '';
        }
    };

    const imageIcon = (
        <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.5625 0.40625V17.5938H22.4375V0.40625H0.5625ZM2.125 1.96875H20.875V12.833L16.749 8.68262L16.1875 8.12109L12.6475 11.6611L8.15527 7.12012L7.59375 6.55859L2.125 12.0273V1.96875ZM17.75 3.53125C16.8864 3.53125 16.1875 4.2301 16.1875 5.09375C16.1875 5.9574 16.8864 6.65625 17.75 6.65625C18.6136 6.65625 19.3125 5.9574 19.3125 5.09375C19.3125 4.2301 18.6136 3.53125 17.75 3.53125ZM7.59375 8.78027L14.7715 16.0312H2.125V14.249L7.59375 8.78027ZM16.1875 10.3428L20.875 15.0303V16.0312H16.9932L13.7461 12.7598L16.1875 10.3428Z"
                fill="black"
            />
        </svg>
    );

    return (
        <>
            {profileDto.cover?.url ? (
                <img
                    className={styles.cover}
                    src={profileDto.cover.url}
                    alt={`cover image of ${profileDto.name}`}
                />
            ) : (
                <section className={styles.empty} />
            )}
            <section className={styles.container}>
                <input
                    className={styles.hidden_input}
                    type="file"
                    accept="image/*"
                    onChange={handleCoverChange}
                    ref={inputRef}
                />
                {profileDto.cover ? (
                    <Button
                        text="Удалить"
                        beforeIcon={
                            <svg
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.4375 0.625C7.02856 0.625 6.61047 0.768433 6.31445 1.06445C6.01843 1.36047 5.875 1.77856 5.875 2.1875V2.96875H0.40625V4.53125H1.26074L2.75 18.667L2.82324 19.375H15.1768L15.25 18.667L16.7393 4.53125H17.5938V2.96875H12.125V2.1875C12.125 1.77856 11.9816 1.36047 11.6855 1.06445C11.3895 0.768433 10.9714 0.625 10.5625 0.625H7.4375ZM7.4375 2.1875H10.5625V2.96875H7.4375V2.1875ZM2.84766 4.53125H15.1523L13.7607 17.8125H4.23926L2.84766 4.53125ZM5.875 6.875V15.4688H7.4375V6.875H5.875ZM8.21875 6.875V15.4688H9.78125V6.875H8.21875ZM10.5625 6.875V15.4688H12.125V6.875H10.5625Z"
                                    fill="black"
                                />
                            </svg>
                        }
                        afterIcon={imageIcon}
                        onClick={handleCoverDelete}
                    />
                ) : (
                    <Button
                        text="Загрузить"
                        beforeIcon={
                            <svg
                                width="15"
                                height="20"
                                viewBox="0 0 15 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5 0.307617L6.93848 0.844727L1.46973 6.31348L2.59277 7.43652L6.71875 3.31055V16.25H8.28125V3.31055L12.4072 7.43652L13.5303 6.31348L8.06152 0.844727L7.5 0.307617ZM0.46875 17.8125V19.375H14.5312V17.8125H0.46875Z"
                                    fill="black"
                                />
                            </svg>
                        }
                        afterIcon={imageIcon}
                        onClick={handleCoverUpload}
                    />
                )}
            </section>
        </>
    );
};
