package com.isdma.movieflixbds.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.isdma.movieflixbds.dto.ReviewDTO;
import com.isdma.movieflixbds.services.ReviewService;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewResource {

	@Autowired 
	private ReviewService service;
	
	@PostMapping // Post para inserir
	public ResponseEntity<ReviewDTO> insert(@Valid @RequestBody ReviewDTO dto) {
		dto = service.insert(dto);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();

		return ResponseEntity.created(uri).body(dto);
	}
	
	/*
	@GetMapping
	public ResponseEntity<Page<ReviewDTO>> findAllByMovieId(
			@RequestParam(value = "movieId", defaultValue = "0") Long movieId,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "6") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "text") String orderBy
			){
		
		//Declarar objeto especial do Spring e instancio com um metodo de builder delel com os parametros que queremos definidos acima
		PageRequest pagerequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);		
		
		//name.trim para lhe tirar os espações em branco ociosos, à esquerda e direita s senao houver letras a seguir porque se meterem ele nao encontra nada 
		
		Page<ReviewDTO> list = service.findAllByMovieId(movieId, pagerequest);
		
		return ResponseEntity.ok(list);
		
	}*/
}
