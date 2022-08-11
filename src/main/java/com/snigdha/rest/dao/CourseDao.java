package com.snigdha.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.snigdha.rest.entities.Courses;

public interface CourseDao extends JpaRepository<Courses, Long>{

}
