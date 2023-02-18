import Link from 'next/link';
import React from 'react';

import styles from './AlreadyHaveAccount.module.scss';

export const AlreadyHaveAccount: React.FC = () => {
    return (
        <p className={styles.paragraph}>
            Уже есть аккаунт?{' '}
            <Link className={styles.paragraph__link} href="/login">
                Войти
            </Link>
        </p>
    );
};
