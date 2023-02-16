import React from 'react';

import styles from './AlreadyHaveAccount.module.scss';

export interface AlreadyHaveAccountProps {
    onSignIn: () => void;
}

export const AlreadyHaveAccount: React.FC<AlreadyHaveAccountProps> = ({
    onSignIn,
}) => {
    return (
        <p className={styles.paragraph}>
            Уже есть аккаунт?{' '}
            <a
                className={styles.paragraph__link}
                href="/login"
                onClick={onSignIn}
            >
                Войти
            </a>
        </p>
    );
};
