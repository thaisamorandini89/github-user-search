import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
    <div className="row home-container">
        <div className="col-11">
            <h1 className="text-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/><br/>
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br/><br/>
                Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
            </p>
            <Link to="/search">
                <Button text="Começar" />
            </Link>
        </div>
    </div>
)

export default Home;