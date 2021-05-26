import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SearchCard from './SearchCard';
import Button from '../../core/components/Button';
import { Profile } from '../../core/types/profile';
import { makeRequest } from '../../core/utils/request';
import './styles.scss';
import InfoLoader from './SearchCard/Loaders/InfoLoader';
import ImageLoader from './SearchCard/Loaders/ImageLoader';

const Search = () => {

    const [profile, setProfile] = useState<Profile>();
    const [repository, setRepository] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepository(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: `/${repository}` })
            .then(response => setProfile(response.data))
            .finally(() => {
                setIsLoading(false);
                setIsShow(true);
            });
    }

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
                                onChange={handleOnChange} />
                        </div>
                        <div className="base-form-actions">
                            <Button text="Encontrar" />
                        </div>
                    </div>

                </SearchCard>
            </form>
            <div className="card-base border-radius-10 detail-content">
                {isLoading && <ImageLoader />}
                {isLoading && <InfoLoader />}
                {isShow && (
                    <>
                        <div className="col-2">
                            <img src={profile?.avatar_url} alt={profile?.avatar_url} className="width-photo" />
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
                               <span>{dayjs(profile?.created_at).format('DD/MM/YYYY')}</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}


            </div>
        </div>
    )
}

export default Search;