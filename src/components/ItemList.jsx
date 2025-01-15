import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const CardProduct = ({ products }) => {
    return (
        <>
            {
                products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
                        <Card bg="dark" data-bs-theme="dark" style={{ width: '17rem', minHeight: '32rem' }}>
                            <Link to={`/item/${product.id}`}>
                                <Card.Img variant="top" src={product.imageUrl} />
                            </Link>
                            <Card.Body>
                                <Card.Text align="center" style={{ height: '2rem' }}>
                                    {product.name}
                                </Card.Text>
                                <Card.Text >
                                    ${product.price}
                                </Card.Text>
                                {product.kg && (
                                    <Button variant="outline-info" className="mb-2"> {product.kg} kg </Button>
                                )}
                                {product.measure && (
                                    <Button variant="outline-info" className="mb-2">Medidas: {product.measure}</Button>
                                )}
                                <Card.Text style={{ margin: '.3rem' }} className={product.stock > 0 ? 'text-success' : 'text-danger'}>
                                    {product.stock < 0 ? "Agotado" : `Disponible ${product.stock} unid`}
                                </Card.Text>
                                <Button variant="primary">Agregar al Carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </>
    );
}

export default CardProduct;
