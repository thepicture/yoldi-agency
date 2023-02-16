import React from 'react';

import styles from './HeaderContentFooterGrid.module.scss';

export interface HeaderContentFooterGridProps {
    children: React.ReactNode;
}

export const HeaderContentFooterGrid: React.FC<
    HeaderContentFooterGridProps
> = ({ children }) => {
    return <section className={styles.grid}>{children}</section>;
};
