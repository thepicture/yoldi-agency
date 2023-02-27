import useNotification from 'antd/lib/notification/useNotification';
import { useRouter } from 'next/router';
import React from 'react';

import { Context } from '@/pages/_app';

import { deleteApiKey } from '@/shared/api/session';
import { ProfileDto } from '@/shared/api/yoldi/profile';

import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button';
import styles from './MainAccount.module.scss';

export interface MainAccountProps {
    profileDto: ProfileDto;
    hostname: string;
    isMe: boolean;

    onEdit: () => void;
}

export const MainAccount: React.FC<MainAccountProps> = ({
    profileDto,
    isMe,
    onEdit,
}) => {
    const [api, contextHolder] = useNotification();

    const notify = (text: string) => {
        api.info({
            message: `Фото`,
            description: <Context.Consumer>{() => text}</Context.Consumer>,
        });
    };

    const router = useRouter();

    const handleLogOut = () => {
        deleteApiKey();
        router.replace('/login');
    };

    return (
        <section className={styles.layout__main}>
            {contextHolder}
            <main className={styles.main}>
                <section className={styles.avatar}>
                    <Avatar
                        profileDto={profileDto}
                        onNotify={notify}
                        isMe={isMe}
                    />
                </section>
                <section className={styles.heading}>
                    <h2 className={styles.title}>{profileDto?.name}</h2>
                </section>
                <section className={styles.edit}>
                    {isMe && (
                        <Button
                            text="Редактировать"
                            onClick={onEdit}
                            beforeIcon={
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.6768 0.600586C15.8589 0.600586 15.041 0.917969 14.4062 1.55273L2.05273 13.9062L2.00391 14.1504L1.14941 18.4473L0.905273 19.5947L2.05273 19.3506L6.34961 18.4961L6.59375 18.4473L18.9473 6.09375C20.2168 4.82422 20.2168 2.82227 18.9473 1.55273C18.3125 0.917969 17.4946 0.600586 16.6768 0.600586ZM16.6768 2.08984C17.0704 2.08984 17.4672 2.2699 17.8486 2.65137C18.6085 3.41125 18.6085 4.23523 17.8486 4.99512L17.2871 5.53223L14.9678 3.21289L15.5049 2.65137C15.8864 2.2699 16.2831 2.08984 16.6768 2.08984ZM13.8691 4.31152L16.1885 6.63086L6.74023 16.0791C6.22754 15.0781 5.42188 14.2725 4.4209 13.7598L13.8691 4.31152ZM3.41992 15.0293C4.35681 15.4077 5.09229 16.1432 5.4707 17.0801L2.90723 17.5928L3.41992 15.0293Z"
                                        fill="black"
                                    />
                                </svg>
                            }
                        />
                    )}
                </section>
                <p className={styles.email}>{profileDto?.email}</p>
                <p className={styles.description}>{profileDto?.description}</p>
                <section className={styles.button}>
                    {isMe && (
                        <Button
                            text="Выйти"
                            onClick={handleLogOut}
                            beforeIcon={
                                <svg
                                    width="19"
                                    height="20"
                                    viewBox="0 0 19 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.5 0.625C4.33032 0.625 0.125 4.83032 0.125 10C0.125 15.1697 4.33032 19.375 9.5 19.375C12.6647 19.375 15.4692 17.8033 17.166 15.3955L15.8965 14.4922C14.4835 16.5002 12.1489 17.8125 9.5 17.8125C5.17566 17.8125 1.6875 14.3243 1.6875 10C1.6875 5.67566 5.17566 2.1875 9.5 2.1875C12.1489 2.1875 14.4805 3.49976 15.8965 5.50781L17.166 4.60449C15.4692 2.19666 12.6647 0.625 9.5 0.625ZM15.2373 6.31348L14.1143 7.43652L15.8965 9.21875H6.375V10.7812H15.8965L14.1143 12.5635L15.2373 13.6865L18.3623 10.5615L18.8994 10L18.3623 9.43848L15.2373 6.31348Z"
                                        fill="black"
                                    />
                                </svg>
                            }
                        />
                    )}
                </section>
            </main>
        </section>
    );
};
