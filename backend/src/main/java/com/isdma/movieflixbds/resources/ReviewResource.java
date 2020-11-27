package com.isdma.movieflixbds.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
	
	@PreAuthorize("hasAnyRole('MEMBER')") //Opcional porque globalmente já definimos que so os MEMBER são barrados nas rotas reviews
	@PostMapping 
	public ResponseEntity<ReviewDTO> insert(@Valid @RequestBody ReviewDTO dto) {
		dto = service.insert(dto);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();

		return ResponseEntity.created(uri).body(dto);
	}
	
}
