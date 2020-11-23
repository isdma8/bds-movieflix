package com.isdma.movieflixbds.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.isdma.movieflixbds.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long>{

	@Query("SELECT obj FROM Genre obj INNER JOIN obj.movies movs ORDER BY movs.title")
	Page<Genre> findAllGenreMoviesByTitle(Pageable pageable);
}
