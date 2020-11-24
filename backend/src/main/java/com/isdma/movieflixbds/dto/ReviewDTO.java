package com.isdma.movieflixbds.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.isdma.movieflixbds.entities.Movie;
import com.isdma.movieflixbds.entities.Review;
import com.isdma.movieflixbds.entities.User;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message= "Campo de texto da avaliação não pode ser vazio!")
	private String text;

	private Long movieId;
	
	private Long userId;

	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
	}
	
	public ReviewDTO(Review entity) {
		this.id = entity.getId();
		this.text = entity.getText();
		this.movieId = entity.getMovie().getId();
		this.userId = entity.getUser().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}


	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}


	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}
