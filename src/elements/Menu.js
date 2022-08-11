import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menu=({value})=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action
            " tag="a" to ="/" action={value ? 1 : 0}>
                Home
                </Link>
                <Link  className="list-group-item list-group-item-action
                "tag="a" to ="/add-course" action={value ? 1 : 0}>
                Add Course
                </Link>
                <Link className="list-group-item list-group-item-action
                " tag="a" to ="/view-courses" action={value ? 1 : 0}>
                View Courses
                </Link>
                <Link className="list-group-item list-group-item-action
                " tag="a" to ="/about" action={value ? 1 : 0}>
                About
                </Link>
                <Link className="list-group-item list-group-item-action
                " tag="a" to ="/contact" action={value ? 1 : 0}>
                Contact
                </Link>
        </ListGroup>

    );
};
export default Menu;