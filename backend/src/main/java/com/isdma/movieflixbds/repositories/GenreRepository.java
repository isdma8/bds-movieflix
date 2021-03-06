package com.isdma.movieflixbds.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.isdma.movieflixbds.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

	//@Query("SELECT DISTINCT obj FROM Genre obj INNER JOIN obj.movies movs ORDER BY movs.title ASC")
	//@Query("SELECT DISTINCT obj FROM Genre obj JOIN FETCH obj.movies WHERE obj IN :genres")~
	@Query("SELECT DISTINCT obj FROM Genre obj INNER JOIN obj.movies movs")
	Page<Genre> findAllGenreMoviesByTitle(Pageable pageable);
}