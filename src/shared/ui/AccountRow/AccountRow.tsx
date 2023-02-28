import { useRouter } from 'next/router';
import React from 'react';

import { ProfileDto } from '@/shared/api/yoldi/profile';

import { Avatar } from '../Avatar/Avatar';
import { UserBlock } from '../UserBlock';
import styles from './AccountRow.module.scss';

export type AccountRowProps = {
    profileDto: ProfileDto;
};

export const AccountRow: React.FC<AccountRowProps> = ({ profileDto }) => {
    const router = useRouter();

    const handleNavigateToAccount = () => {
        router.push(`/${profileDto.slug}`);
    };

    return (
        <article className={styles.container} onClick={handleNavigateToAccount}>
            <section className={styles.avatar}>
                <UserBlock me={profileDto} onlyAvatar={true} />
            </section>
            <section className={styles.credentials}>
                <h3 className={styles.name}>{profileDto.name}</h3>
                <section className={styles.container__email}>
                    <p className={styles.email}>{profileDto.email}</p>
                </section>
            </section>
        </article>
    );
};
