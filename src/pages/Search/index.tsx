import React, { useEffect, useState } from 'react';
import SearchCard from './SearchCard';
import './styles.scss';
import { Profile } from '../../core/types/profile';
import { makeRequest } from '../../core/utils/request';

const Search = () => {

    const [profile, setProfile] = useState<Profile>();
    const [repository, setRepository] = useState('');
    let INIT_URL;
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepository(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        makeRequest({url: `/${repository}`})
        .then(response => setProfile(response.data));
    }
    
    

    /*useEffect(() => {
        makeRequest({ url: '/thaisamorandini89'})
        .then(response => setProfile(response.data));
    }, [])*/

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SearchCard title="Encontre um perfil Github">

                    <div className="row">
                        <div className="col-12">
                            <input 
                                value={repository}
                                type="text" 
                                className="form-control" 
                                placeholder="Usuário Github" 
                                onChange={handleOnChange}/>
                        </div>
                        <div className="base-form-actions">
                            <button className="btn btn-primary btn-icon btn-text">
                                Encontrar
                            </button>
                        </div>
                    </div>

                </SearchCard>
            </form>
            <div className="card-base border-radius-10 detail-content">
                <div className="col-2">
                   <img src={profile?.avatar_url} alt={profile?.avatar_url} className="tamanho-imagem"/> 
                </div>
                <div className="col-9 profile-info-content">
                    <p className="profile-info-title">Informações</p>
                    <div >
                        <ul>
                            <li className="profile-info-box">
                                <p className="title-box">Empresa:
                               <span>{profile?.company}</span>
                                </p>
                            </li>
                            <li className="profile-info-box">
                                <p className="title-box">Website/blog:
                               <span>{profile?.blog}</span>
                                </p>
                            </li>
                            <li className="profile-info-box">
                                <p className="title-box">Localidade:
                               <span>{profile?.location}</span>
                                </p>
                            </li>
                            <li className="profile-info-box">
                                <p className="title-box">Membro desde:
                               <span>{profile?.created_at}</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;