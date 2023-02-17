import React from 'react';

import styles from './NoAccountYet.module.scss';

export const NoAccountYet: React.FC = () => {
    return (
        <p className={styles.paragraph}>
            Еще нет аккаунта?{' '}
            <a className={styles.paragraph__link} href="/registration">
                Зарегистрироваться
            </a>
        </p>
    );
};
