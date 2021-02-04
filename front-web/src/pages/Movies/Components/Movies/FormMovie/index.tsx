import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../MovieDetails';
import './styles.scss';
import { ReactComponent as ImageTest } from 'core/assets/images/movietest.svg';
import AddReview from '../AddReview';
import { useForm } from 'react-hook-form';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';
import { useHistory, useParams } from 'react-router-dom';
import { NonceProvider } from 'react-select';
import { makePrivateRequest } from 'core/utils/request';
import {Movie, MoviesResponse} from 'core/types/Movie';
import { toast } from 'react-toastify';
import ReviewBox from '../ReviewCard';


type FormState = {
    review: string;
}

type ParamsType = {
    movieId: string;
}


const FormMovie = () => {

    const history = useHistory();

    const [movie, setMovie] = useState<Movie>();
    

    const { register, handleSubmit, errors } = useForm<FormState>();

    const [hasError, setHasError] = useState(false);

    const { movieId } = useParams<ParamsType>();

    const onSubmit = (data: FormState) => {
        console.log(data);
        makePrivateRequest({
            url: `/movies/${movieId}`,
            method: 'POST', 
            data: data
        })
        .then(() => {
            toast.info('Review salva com sucesso!');
            history.push('/movies');
        })
        .catch( () => {
            toast.error('Erro ao salvar a review!');
        })
    }
    

    useEffect(() => {
            makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => {
                    //setIsLoading(false);
            })
    }, [movieId]);


    return (
        <>
        <MovieDetails >
            <div className="col-6">

                <img src={movie?.imgUrl} alt="test" className="image-card-details"/>
            </div>
            <div className="col-6">
                <div className="movie-card-detail">
                    <h4>{movie?.title}</h4>
                    <h5>{movie?.year}</h5>
                    <p>{movie?.subTitle}</p>
                    <div className="card-detail-description">
                        {movie?.synopsis}
                    </div>

                </div>
            </div>

        </MovieDetails>

        
            
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}> 
            <AddReview>
                    <div className="margin-bottom-10">                                                                              

                        <textarea  
                            className={`form-control input-base ${errors.review && 'is-invalid'} `}
                            placeholder="Deixe a sua avaliação aqui"
                            name="review" 
                            
                            ref={register({
                                required: "Campo obrigatório",
                                
                                
                            })}
                            rows={3}
                        />
                        {errors.review && (
                            <div className="invalid-feedback d-block">
                                {errors.review.message} 
                            </div>
                        )}
                                            
                    </div>
                    </AddReview>
            </form>
            

            
        
        <div className="review-list">
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
        </div>


        </>


    );
}


export default FormMovie;