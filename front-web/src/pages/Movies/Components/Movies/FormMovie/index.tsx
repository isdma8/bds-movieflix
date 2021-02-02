import React from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../MovieDetails';
import './styles.scss';
import { ReactComponent as ImageTest } from 'core/assets/images/movietest.svg';

const FormMovie = () => {

    return (
        <MovieDetails >
            <div className="col-6">
                <ImageTest />
            </div>
            <div className="col-6">
                <div className="movie-card-container">
                    <h4>O Retorno do Rei</h4>
                    <h5>2013</h5>
                    <p>O olho do inimigo está se movendo</p>
                    <p>O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. 
                        Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para 
                        o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de 
                        deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                    </p>

                </div>
            </div>

        </MovieDetails>
    );
}


export default FormMovie;