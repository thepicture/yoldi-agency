import React, { useEffect, useState } from 'react';

import { ProfileDto } from '@/shared/api/yoldi/profile';
import { getAccounts } from '@/shared/api/yoldi/user';

import { AccountRow } from '../AccountRow';
import { Divider } from '../Divider';
import styles from './Accounts.module.scss';

export const Accounts = () => {
    const [accounts, setAccounts] = useState<ProfileDto[]>([]);

    useEffect(() => {
        getAccounts().then((fetchedAccounts) => setAccounts(fetchedAccounts));
    });

    return (
        <section>
            <h2 className={styles.header}>Список аккаунтов</h2>
            <Divider />
            {accounts.map((account) => {
                return (
                    <>
                        <AccountRow profileDto={account} />
                        <Divider />
                    </>
                );
            })}
            <Divider />
        </section>
    );
};
