import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

    beforeIcon?: React.ReactNode;
    afterIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    beforeIcon,
    afterIcon,
}) => {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            {beforeIcon && (
                <span className={[styles.icon, styles.icon__before].join(' ')}>
                    {beforeIcon}
                </span>
            )}
            {text}
            {afterIcon && (
                <span className={[styles.icon, styles.icon__after].join(' ')}>
                    {afterIcon}
                </span>
            )}
        </button>
    );
};
