package com.isdma.movieflixbds.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isdma.movieflixbds.dto.GenreDTO;
import com.isdma.movieflixbds.entities.Genre;
import com.isdma.movieflixbds.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	GenreRepository repository;
	
	@Transactional(readOnly = true) 
	public List<GenreDTO> findAll(){
		
		List<Genre> list = repository.findAll();
		
		return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true) 
	public Page<GenreDTO> findAllPaged(PageRequest pagerequest) {
		Page<Genre> list = repository.findAllGenreMoviesByTitle(pagerequest);
		
		return list.map(x -> new GenreDTO(x));
		
	}
	
	
}
