import React from 'react';

import { ProfileDto } from '@/shared/api/yoldi/profile';

import styles from './UserBlock.module.scss';

export interface UserBlockProps {
    me: ProfileDto;
}

export const UserBlock: React.FC<UserBlockProps> = ({ me }) => {
    return (
        <section className={styles.block}>
            <p className={styles.block__name}>{me.name}</p>
            <section className={styles.block__avatar}>
                <p className={styles.letter}>{me.name[0].toUpperCase()}</p>
            </section>
        </section>
    );
};
