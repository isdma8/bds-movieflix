package com.isdma.movieflixbds.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.isdma.movieflixbds.entities.Movie;
import com.isdma.movieflixbds.entities.Review;
import com.isdma.movieflixbds.entities.User;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message= "Campo de texto da avaliação não pode ser vazio")
	private String text;

	private Movie movie;

	private User user;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, Movie movie, User user) {
		this.id = id;
		this.text = text;
		this.movie = movie;
		this.user = user;
	}
	
	public ReviewDTO(Review entity) {
		this.id = entity.getId();
		this.text = entity.getText();
		this.movie = entity.getMovie();
		this.user = entity.getUser();
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

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}
