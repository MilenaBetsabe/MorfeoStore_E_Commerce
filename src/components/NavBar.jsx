import { useState } from 'react';
import CartWidget from './CartWidget';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        //agregar la lógica 
        console.log('Buscando:', searchTerm);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Morfeo Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "200px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Alimento" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action2">Adulto</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Cachorro</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Senior</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Light / Castrados</NavDropdown.Item>
                            <NavDropdown.Item href="#action6">Necesidades Especiales</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Higiene" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action7">Arena y Piedritas Sanitarias</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Bandejas y Accesorios Sanitarios</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Cepillos y Cardinas</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Repelentes</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action7">Diversión Gatuna</Nav.Link>
                    </Nav>
                    <Form inline className="d-flex" style={{ maxWidth: "500px" }}>
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Buscar" className="mr-sm-2" value={searchTerm} onChange={handleSearch} />
                        </InputGroup>
                        <CartWidget />
                    </Form>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
