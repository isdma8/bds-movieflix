package com.isdma.movieflixbds.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isdma.movieflixbds.dto.MovieDTO;
import com.isdma.movieflixbds.entities.Genre;
import com.isdma.movieflixbds.entities.Movie;
import com.isdma.movieflixbds.repositories.GenreRepository;
import com.isdma.movieflixbds.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	GenreRepository genreRepository;
	
	@Transactional(readOnly = true) 
	public Page<MovieDTO> findAllPagedByGenre(Long genreId, PageRequest pagerequest) {
		Genre genre = genreId == 0 ? null : genreRepository.getOne(genreId);
		System.out.println(genre);
		Page<Movie> list = movieRepository.findAllPagedByGenre(genre, pagerequest) ;
		
		return list.map(x -> new MovieDTO(x));
		
	}

}
