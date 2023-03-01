import useNotification from 'antd/lib/notification/useNotification';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';

import { Context } from '@/pages/_app';

import {
    ProfileDto,
    UpdateProfileDto,
    patchProfile,
} from '@/shared/api/yoldi/profile';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { ToggleButton } from '@/shared/ui/ToggleButton';

import styles from './styles.module.scss';

export interface ProfileEditorProps {
    visible: boolean;
    profileDto: ProfileDto;
    onClose: () => void;
    hostname: string;
}

export const ProfileEditor: React.FC<ProfileEditorProps> = ({
    visible,
    profileDto,
    onClose,
    hostname,
}) => {
    const [api, contextHolder] = useNotification();

    const notify = (text: string) => {
        api.info({
            message: `Аккаунт`,
            description: <Context.Consumer>{() => text}</Context.Consumer>,
        });
    };

    const [profile, setProfile] = useState<UpdateProfileDto>({
        name: profileDto.name,
        slug: profileDto.slug,
        description: profileDto.description || '',
    });

    const router = useRouter();

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await patchProfile(profile);

            if (response.status >= 200 && response.status < 300) {
                notify('Профиль обновлён!');
                onClose();
                router.replace(router.asPath);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error?.response?.data?.message) {
                    notify(error.response.data.message || error);
                } else {
                    notify(`Не удалось подключиться к серверу: ${error}`);
                }
            } else {
                notify(`Произошла неизвестная ошибка: ${error}`);
            }
        }
    };

    const canEditSucceed = !!profile.name && !!profile.slug;

    return (
        <form hidden={!visible} onSubmit={handleSubmit}>
            {contextHolder}
            <section className={styles.container}></section>
            <section className={styles.container__editor}>
                <h2 className={styles.container__title}>
                    Редактировать профиль
                </h2>
                <label className={styles.container__label} htmlFor="address">
                    Имя
                </label>
                <Input
                    onChange={handleChange}
                    name="name"
                    autocomplete="given-name"
                    value={profile.name}
                />
                <label className={styles.container__label} htmlFor="address">
                    Адрес профиля
                </label>
                <section className={styles.address}>
                    <section className={styles.address__prefix}>
                        <p className={styles.address__text}>{hostname}/</p>
                    </section>
                    <Input
                        onChange={handleChange}
                        name="slug"
                        value={profile.slug}
                    />
                </section>
                <label
                    className={styles.container__label}
                    htmlFor="description"
                >
                    Описание
                </label>
                <section className={styles.container__rows}>
                    <section className={styles.description}>
                        <Input
                            onChange={handleChange}
                            name="description"
                            isTextArea={true}
                            value={profile.description}
                        />
                    </section>
                    <section className={styles.container__buttons}>
                        <Button text="Отмена" onClick={() => onClose()} />
                        <ToggleButton isActive={canEditSucceed}>
                            Сохранить
                        </ToggleButton>
                    </section>
                </section>
            </section>
        </form>
    );
};
