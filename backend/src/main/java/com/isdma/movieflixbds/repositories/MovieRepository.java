package com.isdma.movieflixbds.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.isdma.movieflixbds.entities.Genre;
import com.isdma.movieflixbds.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

	@Query("SELECT obj FROM Movie obj WHERE "
			+ ":genre IS NULL OR obj.genre = :genre")
	Page<Movie> findAllPagedByGenre(Genre genre, Pageable pageable);
	
}
