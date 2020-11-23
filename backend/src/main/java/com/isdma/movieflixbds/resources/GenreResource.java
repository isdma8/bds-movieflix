package com.isdma.movieflixbds.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isdma.movieflixbds.dto.GenreDTO;
import com.isdma.movieflixbds.services.GenreService;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {

	@Autowired
	private GenreService service;
	
	@GetMapping 
	public ResponseEntity<Page<GenreDTO>> findAll(
		@RequestParam(value = "page", defaultValue = "0") Integer page,
		@RequestParam(value = "linesPerPage", defaultValue = "6") Integer linesPerPage
		){
	
		//Declarar objeto especial do Spring e instancio com um metodo de builder delel com os parametros que queremos definidos acima
			PageRequest pagerequest = PageRequest.of(page, linesPerPage);		
		
			Page<GenreDTO> list = service.findAllPaged(pagerequest);
	
			return ResponseEntity.ok(list);
	
	}
}
