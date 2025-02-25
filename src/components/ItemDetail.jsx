import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import cartContext from "../context/cartContext";

const ItemDetail = (props) => {

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { id, price, name, imageUrl, stock, kg, measure } = props.product;
    const { addItem, handleShowCart } = useContext(cartContext);

    function onSubmitCount(count) {
        addItem({ id, price, name, count, imageUrl });
        
        setIsAddedToCart(true);
    }


    return (
        <Container fluid className="mt-4" style={{ width: 'calc(100% - 20rem)', maxWidth: '80rem' }}>
            <Row>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                    <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center p-4">
                    <Card.Body className="d-flex flex-column" style={{ border: 'none' }}>
                        <Card.Text align="center" style={{ height: '2rem' }}>
                            {name}
                        </Card.Text>
                        <Card.Text className="my-2">
                            ${price}
                        </Card.Text>
                        {kg && (
                            <Button variant="outline-info" className="mb-2">{kg} kg</Button>
                        )}
                        {measure && (
                            <Button variant="outline-info" className="mb-2">Medidas: {measure}</Button>
                        )}
                        <Card.Text className={`${stock > 0 ? 'text-success' : 'text-danger'} mb-2`} style={{ margin: '.3rem' }}>
                            {stock <= 0 ? "Agotado" : `Disponible ${stock} unid`}
                        </Card.Text>
                        {isAddedToCart && (
                            <Button variant="primary" onClick={handleShowCart}>Ver Carrito</Button>
                        )}
                        <ItemCount stock={stock} addToCart={onSubmitCount} />
                        {
                            //validar mejor el stock en la compra de productos en relacion con el carrito 
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;
