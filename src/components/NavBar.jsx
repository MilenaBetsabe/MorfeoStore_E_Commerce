import { useState } from 'react';
import CartWidget from './CartWidget';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import morfeo_store from '../assets/img/Morfeo2.svg';

const NavBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        //agregar la lógica 
        console.log('Buscando:', searchTerm);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <Image src={morfeo_store} width="70" height="auto" alt="Morfeo Store Logo" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "200px" }}
                        navbarScroll
                    >
                        <NavDropdown title="Alimento" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/category/adulto">Adulto</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/cachorro">Cachorro</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/senior">Senior</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Higiene" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/category/accesorios">Accesorios Sanitarios</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/cepillos">Cepillos y Cardinas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/repelentes">Repelentes</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/category/diversion">Diversión Gatuna</Nav.Link>
                    </Nav>
                    <Form  className="d-flex" style={{ maxWidth: "500px" }}>
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
