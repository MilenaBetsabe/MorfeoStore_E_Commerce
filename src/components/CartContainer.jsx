import { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Row, Col, Card, ListGroup, Container, Form } from 'react-bootstrap';
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firebaseConf.js";

const CartContainer = () => {

    const { showCart, handleCloseCart, cartItems, removeItem, getTotalPrice } = useContext(cartContext);

    const [userData, setUserData] = useState({
        username: "",
        lastname: "",
    });

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = evt.target.value;
        setUserData(newUserData);
    }

    async function handleCheckout(evt) {
        evt.preventDefault();

        const orderData = {
            buyer: {
                username: userData.username,
                surname: userData.lastname,
            },
            items: cartItems,
            total: getTotalPrice(),
            date: new Date(),
        };

        const newOrderID = await createBuyOrder(orderData);
        console.log("Compra realizada", newOrderID);
    }

    return (
        <>
            <Offcanvas show={showCart} onHide={handleCloseCart}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.id}>
                                <Row>
                                    <Col md={4}>
                                        <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>Precio: ${item.price}</Card.Text>
                                            <Card.Text>Unidades: {item.count}</Card.Text>
                                            <Button variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Container>
                        <Form>
                            <Form.Group controlId="formUsername" className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    onChange={onInputChange}
                                    placeholder="Ingrese su nombre"
                                />
                            </Form.Group>

                            <Form.Group controlId="formSurname" className="mb-3">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    onChange={onInputChange}
                                    placeholder="Ingrese su apellido"
                                />
                            </Form.Group>
                            <p>Total: ${getTotalPrice()}</p>
                            <Button
                                variant="primary"
                                type="button"
                                disabled={
                                    !(userData.username !== "" && userData.lastname !== "")
                                }
                                onClick={handleCheckout}
                            >
                                Realizar Compra
                            </Button>
                        </Form>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CartContainer;
