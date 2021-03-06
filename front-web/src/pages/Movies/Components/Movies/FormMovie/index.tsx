import React, { useEffect, useState } from 'react';
import MovieDetails from '../MovieDetails';
import './styles.scss';
import AddReview from '../AddReview';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { makePrivateRequest } from 'core/utils/request';
import { Movie } from 'core/types/Movie';
import { toast } from 'react-toastify';
import ReviewBox from '../ReviewBox';

import { isAllowedByRole } from 'core/utils/auth';
import MovieDetailLoader from '../../Loaders/MovieDetailLoader';
import AddReviewLoader from '../../Loaders/AddReviewLoader';


type FormState = {
    text: string;
    movieId: number;
}

type ParamsType = {
    movieId: string;
}

const FormMovie = () => {

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    const [movie, setMovie] = useState<Movie>();

    const { register, handleSubmit, errors } = useForm<FormState>();

    const { movieId } = useParams<ParamsType>();

    const onSubmit = (data: FormState) => {
        data.movieId = Number(movieId);
        console.log(data);


        makePrivateRequest({
            url: `/reviews`,
            method: 'POST',
            data: data

        })
            .then(() => {
                toast.info('Review salva com sucesso!');
                history.push('/movies');
            })
            .catch(() => {
                toast.error('Erro ao salvar a review!');
            })
    }


    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [movieId]);


    return (
        <>
            {isLoading ? <div className="movie-details-container"><MovieDetailLoader /></div> : (

                <MovieDetails >
                    <div className="col-6">

                        <img src={movie?.imgUrl} alt="test" className="image-card-details" />
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
            )}

            {isAllowedByRole(['ROLE_MEMBER']) ? (

                <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                    {isLoading ? <div className="movie-details-container"><AddReviewLoader /></div> : (
                        <AddReview>
                            <div className="margin-bottom-10">

                                <textarea
                                    className={`form-control input-base ${errors.text && 'is-invalid'} `}
                                    placeholder="Deixe a sua avaliação aqui"
                                    name="text"

                                    ref={register({
                                        required: "Campo obrigatório",

                                    })}
                                    rows={3}
                                />
                                {errors.text && (
                                    <div className="invalid-feedback d-block">
                                        {errors.text.message}
                                    </div>
                                )}

                            </div>

                        </AddReview>)}
                </form>)
                : null}


            {movie?.reviews.length !== 0  ? (
                <div className="review-list">

                    {isLoading ? <AddReviewLoader /> : (
                        movie?.reviews.map(review => (<ReviewBox review={review} />))
                    )
                    }

                </div>
            ) : null
            }

        </>


    );
}


export default FormMovie;