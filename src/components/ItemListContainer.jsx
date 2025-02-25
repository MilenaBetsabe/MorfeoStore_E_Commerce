import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
//uso de datos locales
//import getAllProducts, { getProductsByCategory } from '../getAsyncData.js';
//uso de datos remotos
import getAsyncProducts, { getAsyncItemsByCategory } from "../data/firebaseConf.js";
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {

    let { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    //uso de datos remotos
    useEffect(() => {
        if (categoryId === undefined) {
            const respuestaPromise = getAsyncProducts();
            respuestaPromise
                .then((respuesta) => setProducts(respuesta))
                .catch((error) => alert(error));
        } else {
            const respuestaPromise = getAsyncItemsByCategory(categoryId);

            respuestaPromise
                .then((respuesta) => setProducts(respuesta))
                .catch((error) => alert(error));
        }
        //uso de datos locales
        /*const asyncFunc = categoryId ? getProductsByCategory : getAllProducts;
            asyncFunc(categoryId)
                .then(response => {
                    if (response && response.length > 0) {
                        setProducts(response);
                    } else {
                        setProducts(null);
                        console.warn('Received empty or null response');
                    }
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });*/
    }, [categoryId]);
    if (!products || products.length == 0) {
        return <div>No product found.</div>;
    }
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