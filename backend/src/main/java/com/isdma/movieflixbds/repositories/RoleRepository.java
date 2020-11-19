package com.isdma.movieflixbds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isdma.movieflixbds.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

	
}