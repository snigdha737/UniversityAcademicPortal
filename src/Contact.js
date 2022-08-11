import React, { useEffect } from "react";
import { Jumbotron,Container,Button } from "reactstrap";

const Contact=()=>{
    useEffect(() => {
        document.title = "Contact|| Snigdha's app";
    }, []);
    return(
        <div className="jumbotron text-center ">

            

        <img src="/image/three.jpg" width={250} height={250} alt=""/>
            
            
            <h1>Dr.Debbie Downer</h1>
            <p>Mrs. Smith graduated from Harvard with excellent GPA and honors in web technologies.</p>
        <Container>
            <Button color="primary" outline>Contact</Button>
        </Container>

        <img src="/image/four.jpg" width={250} height={250} alt=""/>
            
            
            <h1>Dr.Jada pinkett</h1>
            <p>Mrs. Smith graduated from Harvard with excellent GPA and honors in web technologies.</p>
        <Container>
            <Button color="primary" outline>Contact</Button>
        </Container>
        <img src="/image/five.jpg" width={250} height={250} alt=""/>
            
            
            <h1>Mr.Anand Mahindra</h1>
            <p>Mrs. Smith graduated from Harvard with excellent GPA and honors in web technologies.</p>
        <Container>
            <Button color="primary" outline>Contact</Button>
        </Container>

        </div>
    )
}
export default Contact;