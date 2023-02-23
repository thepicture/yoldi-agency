import { useRouter } from 'next/router';
import React from 'react';

import { deleteApiKey } from '@/shared/api/session';
import { ProfileDto } from '@/shared/api/yoldi/profile';

import { Button } from '../Button';
import styles from './MainAccount.module.scss';

export interface MainAccountProps {
    profileDto: ProfileDto;
    onEdit: () => void;
}

export const MainAccount: React.FC<MainAccountProps> = ({
    profileDto,
    onEdit,
}) => {
    const router = useRouter();

    const handleLogOut = () => {
        deleteApiKey();
        router.replace('/login');
    };

    return (
        <main className={styles.main}>
            <section className={styles.avatar}>
                <p className={styles.letter}>
                    {profileDto.name[0].toUpperCase()}
                </p>
            </section>
            <section className={styles.heading}>
                <h2 className={styles.title}>{profileDto.name}</h2>
                <section className={styles.edit}>
                    <Button text="Редактировать" onClick={() => onEdit()} />
                </section>
            </section>
            <section>
                <p className={styles.email}>{profileDto.email}</p>
                <p className={styles.description}>{profileDto.description}</p>
                <section className={styles.button}>
                    <Button text="Выйти" onClick={handleLogOut} />
                </section>
            </section>
        </main>
    );
};
