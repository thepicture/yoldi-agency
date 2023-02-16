import React from 'react';

import { Input } from '../Input';
import { ToggleButton } from '../ToggleButton';
import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
    return (
        <form className={styles.form}>
            <h2 className={styles.form__title}>Регистрация в Yoldi Agency</h2>
            <section className={styles.form__fieldset}>
                <Input placeholder="Имя" autocomplete="given-name">
                    <Input.Icon>
                        <svg
                            width="21"
                            height="19"
                            viewBox="0 0 17 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.5 0.90625C5.48792 0.90625 3.03125 3.36291 3.03125 6.375C3.03125 8.25793 3.99255 9.9303 5.44824 10.916C2.66199 12.1123 0.6875 14.8772 0.6875 18.0938H2.25C2.25 14.6331 5.03931 11.8438 8.5 11.8438C11.9607 11.8438 14.75 14.6331 14.75 18.0938H16.3125C16.3125 14.8772 14.338 12.1123 11.5518 10.916C13.0074 9.9303 13.9688 8.25793 13.9688 6.375C13.9688 3.36291 11.5121 0.90625 8.5 0.90625ZM8.5 2.46875C10.6667 2.46875 12.4062 4.20825 12.4062 6.375C12.4062 8.54175 10.6667 10.2812 8.5 10.2812C6.33325 10.2812 4.59375 8.54175 4.59375 6.375C4.59375 4.20825 6.33325 2.46875 8.5 2.46875Z"
                                fill="black"
                            />
                        </svg>
                    </Input.Icon>
                </Input>
                <Input placeholder="E-mail" autocomplete="email">
                    <Input.Icon>
                        <svg
                            width="21"
                            height="15"
                            viewBox="0 0 21 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.34375 0.25V14.3125H20.6562V0.25H0.34375ZM3.71289 1.8125H17.2871L10.5 6.3291L3.71289 1.8125ZM1.90625 2.49609L10.0605 7.94043L10.5 8.20898L10.9395 7.94043L19.0938 2.49609V12.75H1.90625V2.49609Z"
                                fill="black"
                            />
                        </svg>
                    </Input.Icon>
                </Input>
                <Input
                    placeholder="Пароль"
                    autocomplete="new-password"
                    isInputVisible={false}
                >
                    <Input.Icon>
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 17 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.5 0.34375C5.49707 0.34375 3.03125 2.80957 3.03125 5.8125V8.15625H0.6875V20.6562H16.3125V8.15625H13.9688V5.8125C13.9688 2.80957 11.5029 0.34375 8.5 0.34375ZM8.5 1.90625C10.6515 1.90625 12.4062 3.66101 12.4062 5.8125V8.15625H4.59375V5.8125C4.59375 3.66101 6.34851 1.90625 8.5 1.90625ZM2.25 9.71875H14.75V19.0938H2.25V9.71875Z"
                                fill="black"
                            />
                        </svg>
                    </Input.Icon>
                </Input>
                <ToggleButton>Создать аккаунт</ToggleButton>
            </section>
        </form>
    );
};
