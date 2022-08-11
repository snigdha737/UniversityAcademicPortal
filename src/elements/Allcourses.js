import React,{useState,useEffect} from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call server
    const getAllCoursesFromServer=() => {
        axios.get(`http://localhost:9080/courses`).then(
            (Response) => {
                //success
                console.log(Response.data);
                toast.success("courses has been loaded")
                setCourses(Response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("uh oh! something went wrong!")
            }
            
        );
    };
    //calling loading course function

    useEffect(() =>{
        getAllCoursesFromServer();
    }, []);


    const [courses,setCourses] =useState([
            ]);
        const updateCourses=(id)=>{
            setCourses(courses.filter((c)=> c.id != id));
        };


    return(
        <div>
            <h1>All courses</h1>
            <p>List of courses are as follows</p>

            {
                courses.length>0
                ? courses.map((item)=><Course key={item.id} course={item} update={updateCourses} />)

                : "No courses"
            }
        </div>

    );
};
export default Allcourses;