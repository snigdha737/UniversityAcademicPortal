package com.snigdha.rest.services;
import java.util.List;

import com.snigdha.rest.entities.Courses;

public interface CourseService {
	public Courses getCourses(long courseid);
	public List<Courses> getCourses();
	public Courses addCourse(Courses courses);
	public Courses updateCourse(Courses courses);
	public void deleteCourse(long parseLong);


}
