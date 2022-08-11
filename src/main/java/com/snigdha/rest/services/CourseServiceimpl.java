package com.snigdha.rest.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.snigdha.rest.dao.CourseDao;
import com.snigdha.rest.entities.Courses;

@Service
public class CourseServiceimpl implements CourseService {
@Autowired
	private CourseDao courseDao;
	//List<Courses> list;
	public CourseServiceimpl() {
		//list=new ArrayList<>();
		//list.add(new Courses(145, "WT","this course is good"));
		//list.add(new Courses(343, "FSD", "Enter at your own risk"));
	}
	@Override
	public List<Courses> getCourses() {
		
		return courseDao.findAll();
	}
	@Override
	public Courses getCourses(long courseId) {
		//Courses c=null;
		//for(Courses courses:list )
		//{
		//	if(courses.getId()==courseId)
		//	{
		//		c=courses;
		//		break;
	//		}
	//	}
		return courseDao.getOne(courseId);
	}
@Override
public Courses addCourse(Courses course) {
	courseDao.save(course);
	return course;
}
@Override
public Courses updateCourse(Courses course) {
	courseDao.save(course);
	return course;
	
	}
@Override
public void deleteCourse(long parseLong) {
Courses entity=courseDao.getOne(parseLong);
courseDao.delete(entity);
}
}
