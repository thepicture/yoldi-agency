import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            {text}
        </button>
    );
};
