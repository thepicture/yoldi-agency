import React from 'react';

import styles from './CenteredWrapper.module.scss';

export interface CenteredWrapperProps {
    children: React.ReactNode;
}

export const CenteredWrapper: React.FC<CenteredWrapperProps> = ({
    children,
}) => {
    return <section className={styles.wrapper}>{children}</section>;
};
