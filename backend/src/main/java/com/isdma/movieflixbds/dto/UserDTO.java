package com.isdma.movieflixbds.dto;

import java.io.Serializable;

import com.isdma.movieflixbds.entities.User;

public class UserDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String email;
	
	//private Set<RoleDTO> roles = new HashSet<>();
	
	//private List<ReviewDTO> reviews = new ArrayList<>();
	
	public UserDTO() {
		
	}

	public UserDTO(Long id, String name, String email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}
	
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		
		//entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
		//entity.getReviews().forEach(rev -> this.reviews.add(new ReviewDTO(rev)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
/*
	public Set<RoleDTO> getRoles() {
		return roles;
	}

	public List<ReviewDTO> getReviews() {
		return reviews;
	}*/
	
	
	

}
