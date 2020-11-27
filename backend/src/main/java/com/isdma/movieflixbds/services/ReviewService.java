package com.isdma.movieflixbds.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isdma.movieflixbds.dto.ReviewDTO;
import com.isdma.movieflixbds.entities.Movie;
import com.isdma.movieflixbds.entities.Review;
import com.isdma.movieflixbds.entities.User;
import com.isdma.movieflixbds.repositories.MovieRepository;
import com.isdma.movieflixbds.repositories.ReviewRepository;
import com.isdma.movieflixbds.services.exceptions.DatabaseException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		
		copyDtoToEntity(dto, entity);

		try {

			entity = reviewRepository.save(entity);
														
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity Violation"); 
		}
		return new ReviewDTO(entity);
	}
	
	private void copyDtoToEntity(ReviewDTO dto, Review entity) {
		entity.setText(dto.getText());
		
		Movie mov = dto.getMovieId() == 0 ? null : movieRepository.getOne(dto.getMovieId());
		
		entity.setMovie(mov);
		
		User user = authService.authenticated();
		
		entity.setUser(user);
	}
	
}
