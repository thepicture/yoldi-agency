import React from 'react';

import styles from './UserBlock.module.scss';

export interface UserBlockProps {
    name: string;
}

export const UserBlock: React.FC<UserBlockProps> = ({ name }) => {
    return (
        <section className={styles.block}>
            <p className={styles.block__name}>{name}</p>
            <section className={styles.block__avatar}>
                <p className={styles.letter}>{name[0].toUpperCase()}</p>
            </section>
        </section>
    );
};
