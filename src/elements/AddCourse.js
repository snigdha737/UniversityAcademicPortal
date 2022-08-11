import { Button } from "reactstrap";
import React, { Fragment,useEffect, useState} from "react";
import { Container, Form, FormGroup } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(() => {
        document.title = "Add Course || Snigdha's app";
    }, []);

    const [course,setCourses]=useState({});
    //form handler 
    const handleForm=(e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();

    };

    //function to call server to post data

    const postDatatoServer =(data) =>{
        axios.post(`http://localhost:9080/courses`,data).then(
            (Response) => {
                console.log(Response);
                console.log("success")
                toast.success("course added successfully");
                setCourses({id: "", title: "", description: ""})
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Something's fishy");
            }
        );
        
    };


    return(
        <Fragment>
            <h1 className="text-center my-3">Fill course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="Userid">Course Id</label>
                <input
                 type="text" 
                 placeholder="Enter here" 
                 name="Userid" 
                 id="Userid"
                 onChange={(e)=>{
                   setCourses({...course,id: e.target.value}); 
                 }}
                 />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="title">Course title</label>
                <input
                 type="text" 
                 placeholder="Enter title here" 
                 
                 id="title"
                 onChange={(e)=>{
                    setCourses({...course,title: e.target.value}); 
                  }}
                 />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Course description</label>
                <input
                 type="textarea" 
                 placeholder="    Enter description here" 
                 id="description"
                 style={{height: 100}}
                 onChange={(e)=>{
                    setCourses({...course,description: e.target.value}); 
                  }}
                 />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color = "success">
                        Add Course</Button>
                    <Button type="reset" onClick={()=>{
                        setCourses({id: "", title: "", description: ""});
                    }} color="warning ml-2"
                    
                    >
                        Clear </Button>
                </Container>

            
                
            </Form>
            
            

        </Fragment>
        
    );
};
export default AddCourse;