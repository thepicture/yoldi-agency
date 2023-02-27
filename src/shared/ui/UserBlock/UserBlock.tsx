import React from 'react';

import { ProfileDto } from '@/shared/api/yoldi/profile';

import styles from './UserBlock.module.scss';

export interface UserBlockProps {
    me: ProfileDto;
    onlyAvatar?: boolean;
}

export const UserBlock: React.FC<UserBlockProps> = ({
    me,
    onlyAvatar = false,
}) => {
    return onlyAvatar ? (
        me.image ? (
            <img
                className={styles.image}
                src={me?.image?.url}
                alt={`profile image of ${me.name}`}
                loading="lazy"
            />
        ) : (
            <section className={styles.block__avatar}>
                <p className={styles.letter}>{me.name[0].toUpperCase()}</p>
            </section>
        )
    ) : (
        <section className={styles.block}>
            <p className={styles.block__name}>{me.name}</p>
            {me.image ? (
                <img
                    className={styles.image}
                    src={me?.image?.url}
                    alt={`profile image of ${me.name}`}
                    loading="lazy"
                />
            ) : (
                <section className={styles.block__avatar}>
                    <p className={styles.letter}>{me.name[0].toUpperCase()}</p>
                </section>
            )}
        </section>
    );
};
