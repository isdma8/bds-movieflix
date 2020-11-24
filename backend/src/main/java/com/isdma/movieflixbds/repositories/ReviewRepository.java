package com.isdma.movieflixbds.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.isdma.movieflixbds.entities.Movie;
import com.isdma.movieflixbds.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{

	
	/*@Query("SELECT obj FROM Review obj INNER JOIN Movie")
			//+ "obj.movie = :mov")
	Page<Review> findAllByMovieId(Movie mov, Pageable pageable);*/
	
}
