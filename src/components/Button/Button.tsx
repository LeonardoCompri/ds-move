import React, { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    label?: string
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button>{props.label}</button>
        </div>
    );
}

export default Button;