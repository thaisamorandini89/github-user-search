import react from 'react';
import dayjs from 'dayjs';
import { Profile } from '../../../../core/types/profile';
import './styles.scss';


type Props = {
    profile: Profile | undefined
}

const SearchInfo = ({ profile }: Props) => {

    return (
        <>
            <div className="card-base border-radius-10 detail-content">
                <div className="col-2">
                    <img src={profile?.avatar_url} alt={profile?.avatar_url} className="width-photo" />
                </div>
                <div className="col-9 profile-info-content">
                    <div className="statistic">
                        <span className="info-statistic">
                            Repositórios públicos:{profile?.public_repos}
                        </span>
                        <span className="info-statistic">
                            Seguidores:{profile?.followers}
                        </span>
                        <span className="info-statistic">
                            Seguindo:{profile?.following}
                        </span>
                    </div>
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
                                    <span>{dayjs(profile?.created_at).locale('pt-BR').format('DD/MM/YYYY')}</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchInfo;