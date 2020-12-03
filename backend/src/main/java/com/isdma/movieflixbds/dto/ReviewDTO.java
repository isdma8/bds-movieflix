package com.isdma.movieflixbds.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.isdma.movieflixbds.entities.Review;
import com.isdma.movieflixbds.entities.User;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message= "Campo de texto da avaliação não pode ser vazio!")
	private String text;

	private Long movieId;
	
	//private User user;
	private UserDTO userDTO;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text, Long movieId, UserDTO userDTO/*User user*/) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userDTO = userDTO;
	}
	
	public ReviewDTO(Review entity) {
		this.id = entity.getId();
		this.text = entity.getText();
		this.movieId = entity.getMovie().getId();
		this.userDTO = new UserDTO(entity.getUser());
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
	

	public UserDTO getUserDTO() {
		return userDTO;
	}

	public void setUserDTO(UserDTO userDTO) {
		this.userDTO = userDTO;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	
	
	
}
