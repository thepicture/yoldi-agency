import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { useNotificationLibrary } from '@/processes/notification';

import { saveApiKey } from '@/shared/api/session';
import { auth } from '@/shared/api/yoldi';
import { SignUpDto } from '@/shared/api/yoldi/auth';
import { EMAIL_REGEXP } from '@/shared/config';
import { EmailFieldIcon } from '@/shared/ui/Icons/EmailFieldIcon';
import { NameIcon } from '@/shared/ui/Icons/NameIcon';
import { PasswordIcon } from '@/shared/ui/Icons/PasswordIcon';
import { Input } from '@/shared/ui/Input';
import { ToggleButton } from '@/shared/ui/ToggleButton';

import styles from './styles.module.scss';

export const RegistrationForm: React.FC = () => {
    const [contextHolder, notify] = useNotificationLibrary('Регистрация');

    const router = useRouter();

    const [fields, setFields] = useState<SignUpDto>({
        email: '',
        name: '',
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

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await auth.register(fields);
            const message = response.data;

            if ('value' in message) {
                notify('Регистрация успешна!');

                saveApiKey(message.value);
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

    const canSignUpSucceed =
        Object.values(fields).every((value) => !!value) &&
        EMAIL_REGEXP.test(fields.email);

    return (
        <form className={styles.form} onSubmit={handleSignUp}>
            {contextHolder}
            <h2 className={styles.form__title}>Регистрация в Yoldi Agency</h2>
            <section className={styles.form__fieldset}>
                <Input
                    placeholder="Имя"
                    autocomplete="given-name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                >
                    <Input.Icon>
                        <NameIcon />
                    </Input.Icon>
                </Input>
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
                <ToggleButton isActive={canSignUpSucceed}>
                    Создать аккаунт
                </ToggleButton>
            </section>
        </form>
    );
};
