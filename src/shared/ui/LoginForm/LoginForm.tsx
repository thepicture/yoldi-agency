import useNotification from 'antd/lib/notification/useNotification';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Context } from '@/pages/_app';

import { saveApiKey } from '@/shared/api/session';
import { auth } from '@/shared/api/yoldi';
import { LoginDto } from '@/shared/api/yoldi/auth';
import { EMAIL_REGEXP } from '@/shared/config';

import { EmailFieldIcon } from '../Icons/EmailFieldIcon';
import { PasswordIcon } from '../Icons/PasswordIcon';
import { Input } from '../Input';
import { ToggleButton } from '../ToggleButton';
import styles from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
    const [api, contextHolder] = useNotification();
    const router = useRouter();

    const notify = (text: string) => {
        api.info({
            message: `Вход`,
            description: <Context.Consumer>{() => text}</Context.Consumer>,
        });
    };

    const [fields, setFields] = useState<LoginDto>({
        email: '',
        password: '',
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const {
            target: { name, value },
        } = event;

        setFields({
            ...fields,
            [name]: value,
        });
    };

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await auth.signIn(fields);
            const message = response.data;

            if ('value' in message) {
                saveApiKey(message.value);

                notify('Вход успешен!');
                router.replace('/');
            } else {
                notify(message.message);
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

    const canSignInSucceed =
        Object.values(fields).every((value) => !!value) &&
        EMAIL_REGEXP.test(fields.email || '');

    return (
        <form className={styles.form} onSubmit={handleSignIn}>
            {contextHolder}
            <h2 className={styles.form__title}>Вход в Yoldi Agency</h2>
            <section className={styles.form__fieldset}>
                <Input
                    placeholder="E-mail"
                    autocomplete="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                >
                    <Input.Icon>
                        <EmailFieldIcon />
                    </Input.Icon>
                </Input>
                <Input
                    placeholder="Пароль"
                    autocomplete="new-password"
                    name="password"
                    isInputVisible={false}
                    value={fields.password}
                    onChange={handleChange}
                >
                    <Input.Icon>
                        <PasswordIcon />
                    </Input.Icon>
                </Input>
                <ToggleButton isActive={canSignInSucceed}>Войти</ToggleButton>
            </section>
        </form>
    );
};
