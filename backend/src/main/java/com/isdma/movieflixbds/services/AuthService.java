package com.isdma.movieflixbds.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isdma.movieflixbds.entities.User;
import com.isdma.movieflixbds.repositories.UserRepository;
import com.isdma.movieflixbds.services.exceptions.ForbiddenException;
import com.isdma.movieflixbds.services.exceptions.UnauthorizedException;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public User authenticated() { //que user está autenticado?
		
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName(); //pega nome do user que foi reconecido pelo spring security
	
			return userRepository.findByEmail(username);
		}
		catch(Exception e) {
			throw new UnauthorizedException("Invalid User");
		}
		
	}
	
	
	public void validateSelfOrAdmin(Long userId) { //se for o próprio user  pesquisar por si ou um admin passa senao nao passa
		User user = authenticated();
		if(!user.getId().equals(userId) && !user.hasHole("ROLE_MEMBER")) {
			throw new ForbiddenException("Access denied");
		}
	}

}
