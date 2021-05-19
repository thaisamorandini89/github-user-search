import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <button className="btn btn-primary btn-icon">
        <p className="btn-text">{text}</p>
    </button>
)

export default Button;