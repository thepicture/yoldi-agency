import React from 'react';

import styles from './ToggleButton.module.scss';

export interface ToggleButtonProps {
    children: React.ReactNode;
    isActive?: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    children,
    isActive = true,
}) => {
    return (
        <button className={styles.button} disabled={!isActive}>
            {children}
        </button>
    );
};
