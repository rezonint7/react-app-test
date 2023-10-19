import React, { Component } from "react";
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";

export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-line-block align-top"
                            alt="Logo"
                        />{" "}
                        ReactSite
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About Us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className="d-flex ms-auto">
                            <FormControl 
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info" className="ms-2 text-uppercase">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </Router>
            </>
        )
    }
}