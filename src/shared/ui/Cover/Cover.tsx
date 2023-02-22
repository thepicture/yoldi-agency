import React from 'react';

import styles from './Cover.module.scss';

export interface CoverProps {
    url: string | undefined;
}

export const Cover: React.FC<CoverProps> = ({ url }) => {
    return url ? (
        <img className={styles.cover} />
    ) : (
        <section className={styles.empty} />
    );
};
