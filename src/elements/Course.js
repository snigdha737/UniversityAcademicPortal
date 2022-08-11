import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,

} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
const Course=({ course, update})=>{


    const DeleteCourse=(id) => {
axios.delete(`http://localhost:9080/courses/${"id"}`).then(
    (Response) => {
       console.log(Response.data);
        toast.success("course deleted")
       update("id");
    },
    (error) => {
        console.log(error);
        toast.error("uh oh! something went wrong!")
    }
    
);

    }
    return(
        <card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger"onClick={()=>
                {
                    DeleteCourse()
                }}>Delete</Button>
                <Button color="warning ml-3">Update</Button>
            </Container>
            </CardBody>
        </card>
    )

}
export default Course;