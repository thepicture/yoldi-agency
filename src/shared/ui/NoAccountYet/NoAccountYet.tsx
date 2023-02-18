import Link from 'next/link';
import React from 'react';

import styles from './NoAccountYet.module.scss';

export const NoAccountYet: React.FC = () => {
    return (
        <p className={styles.paragraph}>
            Еще нет аккаунта?{' '}
            <Link className={styles.paragraph__link} href="/registration">
                Зарегистрироваться
            </Link>
        </p>
    );
};
