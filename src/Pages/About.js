import React, { Component } from 'react';
import { Col, Row, Nav, Container, Tab} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
           <Container>
                <Tab.Container id='ledt-tabs-example' defaultActivateKey='first'>
                    <Row>
                        <Col sm={3}> 
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyJEAIdmOUvM4LfN-JN6vQWVjbecUnJvj3w&usqp=CAU'/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src='https://hbr.org/resources/images/article_assets/2018/08/R1805D_CHIN.jpg'/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyJEAIdmOUvM4LfN-JN6vQWVjbecUnJvj3w&usqp=CAU'/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyJEAIdmOUvM4LfN-JN6vQWVjbecUnJvj3w&usqp=CAU'/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyJEAIdmOUvM4LfN-JN6vQWVjbecUnJvj3w&usqp=CAU'/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
           </Container>
        );
    }
}

export default About;