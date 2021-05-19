import React from 'react';
import Button from '../../core/components/Button';
import SearchCard from './SearchCard';

const Search = () => (
    <div>
        <SearchCard title="Encontre um perfil Github">
            <div className="row">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Usuário Github"/>
                </div>
            </div>
        </SearchCard>
            
    </div>
)

export default Search;