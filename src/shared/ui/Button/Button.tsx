import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, icon }) => {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {text}
        </button>
    );
};
