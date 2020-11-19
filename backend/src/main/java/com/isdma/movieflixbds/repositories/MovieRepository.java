package com.isdma.movieflixbds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isdma.movieflixbds.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{

	
}
