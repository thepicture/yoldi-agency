import React from 'react';

import styles from './Header.module.scss';

export interface HeaderProps {
    logo: React.ReactNode;
    text: string;
    userGroup: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ logo, text, userGroup }) => {
    return (
        <header className={styles.header}>
            <>
                {logo}
                <p className={styles.header__title}>{text}</p>
                <section className={styles.header__usergroup}>
                    {userGroup}
                </section>
            </>
        </header>
    );
};
