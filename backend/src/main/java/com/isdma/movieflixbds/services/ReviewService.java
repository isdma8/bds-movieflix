package com.isdma.movieflixbds.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isdma.movieflixbds.dto.ReviewDTO;
import com.isdma.movieflixbds.entities.Movie;
import com.isdma.movieflixbds.entities.Review;
import com.isdma.movieflixbds.repositories.MovieRepository;
import com.isdma.movieflixbds.repositories.ReviewRepository;

@Service
public class ReviewService {

	/*@Autowired
	ReviewRepository reviewRepository;
	
	@Autowired
	MovieRepository movieRepository;
	
	@Transactional(readOnly = true) 
	public Page<ReviewDTO> findAllByMovieId(Long movieId, PageRequest pagerequest) {
		Movie mov = movieId == 0 ? null : movieRepository.getOne(movieId);

		//Page<Movie> list = movieRepository.findAllPagedByGenre(genre, pagerequest) ;
		
		Page<Review> list = reviewRepository.findAllByMovieId(mov, pagerequest);
		
		return list.map(x -> new ReviewDTO(x));
		
	}*/
}
