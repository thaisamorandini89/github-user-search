import React from 'react';
import SearchCard from './SearchCard';
import { ReactComponent as ImageProfile} from '../../core/assets/images/profile.svg';
import './styles.scss';

const Search = () => (
    <div>
        <SearchCard title="Encontre um perfil Github">
            <div className="row">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Usuário Github"/>
                </div>
            </div>
        </SearchCard>
        <div className="card-base border-radius-10 detail-content">
            <div className="col-2">
                <ImageProfile className="tamanho-imagem"/>
            </div>
            <div className="col-9 profile-info-content">
                <p className="profile-info-title">Informações</p>
                <div >
                    <ul>
                        <li className="profile-info-box">
                            <p className="title-box">Empresa:
                               <span>@ZupIT</span> 
                            </p>
                        </li>
                        <li className="profile-info-box">
                            <p className="title-box">Website/blog:
                               <span>https://thewashington.dev</span> 
                            </p>
                        </li>
                        <li className="profile-info-box">
                            <p className="title-box">Localidade:
                               <span>Uberlândia</span> 
                            </p>
                        </li>
                        <li className="profile-info-box">
                            <p className="title-box">Membro desde:
                               <span>19/10/2013</span> 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
    </div>
)

export default Search;