import React, { useEffect, useState } from 'react';
import SearchCard from './SearchCard';
import Button from '../../core/components/Button';
import { Profile } from '../../core/types/profile';
import { makeRequest } from '../../core/utils/request';
import './styles.scss';
import InfoLoader from './SearchCard/Loaders/InfoLoader';
import ImageLoader from './SearchCard/Loaders/ImageLoader';
import SearchInfo from './SearchCard/SearchInfo';

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
            {isLoading && (
                <div className="loading-position">
                    <ImageLoader />
                    <InfoLoader />
                </div>
            )}
            {isShow && <SearchInfo profile={profile} />}

        </div>
    )
}

export default Search;