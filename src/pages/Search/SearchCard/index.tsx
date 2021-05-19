import React from 'react';
import Button from '../../../core/components/Button';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const SearchCard = ({ title, children }:Props) => (
    <div className="card-base border-radius-20 search-card">
        <p className="search-title">{title}</p>
        {children}
        <div className="base-form-actions">
            <Button text="Encontrar" />
        </div>
    </div>
);

export default SearchCard;