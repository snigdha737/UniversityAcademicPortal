import React, { useEffect } from "react";
import { Jumbotron,Container,Button } from "reactstrap";

const Home=()=>{
    useEffect(() => {
        document.title = "Home || Snigdha's app";
    }, []);
    return(
        <div className="jumbotron text-center ">
            
            
                <h1> Stay up to date with your class </h1>
                <p>This application helps you keep a tag on all of your courses so that you can ace the classes and keep a tag of your study schedule</p>
            
            <img src="/image/one.jumbo" width={250} height={250} alt=""/>
            <Container>
                <Button color="primary" outline>Start the journey</Button>
            </Container>

        </div>
    )
}
export default Home;