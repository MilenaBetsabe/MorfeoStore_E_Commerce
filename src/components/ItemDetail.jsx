import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ product }) => {
    return (
        <Container fluid className="mt-4" style={{ width: 'calc(100% - 20rem)', maxWidth: '80rem' }}>
            <Row noGutters>
                <Col lg={6} className="d-flex align-items-center justify-content-center">
                    <Card.Img variant="top" src={product.imageUrl} style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center p-4">
                    <Card.Body className="d-flex flex-column" style={{ border: 'none' }}>
                        <Card.Text align="center" style={{ height: '2rem' }}>
                            {product.name}
                        </Card.Text>
                        <Card.Text className="my-2">
                            ${product.price}
                        </Card.Text>
                        {product.kg && (
                            <Button variant="outline-info" className="mb-2"> {product.kg} kg </Button>
                        )}
                        {product.measure && (
                            <Button variant="outline-info" className="mb-2">Medidas: {product.measure}</Button>
                        )}
                        <Card.Text className={`${product.stock > 0 ? 'text-success' : 'text-danger'} mb-2`} style={{ margin: '.3rem' }}>
                            {product.stock <= 0 ? "Agotado" : `Disponible ${product.stock} unid`}
                        </Card.Text>
                        <Button variant="primary" className="mt-auto">Agregar al Carrito</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetail;
