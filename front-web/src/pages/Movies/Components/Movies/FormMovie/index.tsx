import React, { useState } from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../MovieDetails';
import './styles.scss';
import { ReactComponent as ImageTest } from 'core/assets/images/movietest.svg';
import AddReview from '../AddReview';
import { useForm } from 'react-hook-form';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';
import { useHistory } from 'react-router-dom';


type FormState = {
    review: string;
}


const FormMovie = () => {

    const history = useHistory();

    const { register, handleSubmit, errors } = useForm<FormState>();

    const [hasError, setHasError] = useState(false);

    const onSubmit = (data: FormState) => {
        console.log(data);
        console.log(localStorage.length);

        /*makeLogin(data)
        .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/movies');
            //history.replace(from);
        })
        .catch(() => {
            setHasError(true);
        })*/
    }


    return (
        <>
        <MovieDetails >
            <div className="col-6">

                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" alt="test" className="image-card-details"/>
            </div>
            <div className="col-6">
                <div className="movie-card-detail">
                    <h4>O Retorno do Rei</h4>
                    <h5>2013</h5>
                    <p>O olho do inimigo está se movendo</p>
                    <div className="card-detail-description">
                        O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. 
                        Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para 
                        o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de 
                        deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                    
                    </div>

                </div>
            </div>

        </MovieDetails>

        <AddReview>

            <form className="review-form" onSubmit={handleSubmit(onSubmit)}> 
                    <div className="margin-bottom-10">

                        <textarea  
                            className={`form-control input-base ${errors.review && 'is-invalid'} `}
                            placeholder="Deixe a sua avaliação aqui"
                            name="review" 
                            ref={register({
                                required: "Campo obrigatório",
                                maxLength: 500,
                            })}
                            rows={2}
                        />
                        {errors.review && (
                            <div className="invalid-feedback d-block">
                                {errors.review.message} 
                            </div>
                        )}
                                            
                    </div>
            </form>

        </AddReview>
        </>
    );
}


export default FormMovie;