package com.snigdha.rest.controller;
import org.springframework.web.bind.annotation.RestController;

import com.snigdha.rest.entities.Courses;
import com.snigdha.rest.services.CourseService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController 
@CrossOrigin("http://localhost:3000")
public class MyController {
	@Autowired
	private CourseService courseService;
	
	// get the course
	
	
	@GetMapping("/courses")
	public List<Courses> getCourses()
	{
		return this.courseService.getCourses();
	}
	//get single course
	@GetMapping("/courses/{courseId}")
	public Courses getCourses(@PathVariable String courseId)
	{
		return this.courseService.getCourses(Long.parseLong(courseId));
				
	}
	//course add
	@PostMapping("/courses")
	public Courses addCourses(@RequestBody Courses courses) {
		return this.courseService.addCourse(courses);
	}
	//update course using PUT request
	@PutMapping("/courses")
	public Courses updateCourse(@RequestBody Courses courses) {
		return this.courseService.updateCourse(courses);
		
	}
	//delete the course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
	try {
		this.courseService.deleteCourse(Long.parseLong(courseId));
		return new ResponseEntity<>(HttpStatus.OK);
	}
	catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
}
	
