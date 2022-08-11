import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Col} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify'
import Home from './elements/Home';
import Course from './elements/Course';
import Allcourses from './elements/Allcourses';
import AddCourse from './elements/AddCourse';
import Header from './elements/Header';
import Menu from './elements/Menu';
import {
  BrowserRouter as Router, Route,Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';

function App() {
  const btnHandle = () => {
toast.success("wowza");
  };
  return(
  <div>
    <Router>
    <ToastContainer />
     <Container>
       <Header/>
       <Row>
         <Col md={4}> 

         <Menu/>
         </Col>
         
         <Col md={8}>
          <Routes>
          
         <Route path="/" element={<Home/>} exact />
         <Route path="/add-course" element={<AddCourse/>} exact />
         <Route path="/view-courses" element={<Allcourses/>} exact />
         <Route path="/About" element={<About/>} exact />
         <Route path="/Contact" element={<Contact/>} exact />
         
         </Routes>
         </Col>
       </Row>
     </Container>
    
  
    </Router>
</div>
  );
}

export default App;
