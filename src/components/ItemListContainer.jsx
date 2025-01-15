import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import getAllProducts, { getProductsByCategory } from '../getAsyncData.js'
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {

    let { categoryId } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getAllProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            },
            )
            .catch(error => {
                console.error('Error fetching products:', error);
            })
    }, [categoryId]);

    return (
        <>
            <Container>
                <h1 className="my-4"> {greeting} </h1>
                <Row>
                    <ItemList products={products}></ItemList>
                </Row>
            </Container>
        </>
    )
}
export default ItemListContainer;