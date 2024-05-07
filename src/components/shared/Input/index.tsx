import React from 'react';
import './style.css';

interface InputProps {
    type: string;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
}

const Input: React.FC<InputProps> = ({ type, className, children, ...rest }) => {
    return (
        <div className='wrap'>
            <label className='title' htmlFor={rest.id}>{children}</label>
            <input type={type} className={`${className} input`} {...rest} />
        </div>
    );
}

export default Input;
