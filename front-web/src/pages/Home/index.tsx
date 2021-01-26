import React from 'react';
import './styles.scss';
import { ReactComponent as HomeImage } from 'core/assets/images/home-image.svg';
import Card from 'core/components/Card';
import Login from 'core/components/Login';

const Home = () => {

    return (

        <div className="home-container">
            <div className="col-6 left-content">
                <h1 className="home-title">Avalie Filmes</h1>
                <p className="home-subtitle">Diga o que você achou do seu filme favorito</p>
            
                <HomeImage className="home-image"/>
              
            </div>

            <div className="col-6 right-content">
                <Login />
            </div>
        </div>

    );
}



export default Home;