import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
//uso de datos locales
//import getAllProducts, { getItemById } from '../data/getAsyncData.js';
//uso de datos remotos
import { getAsyncItemById } from "../data/firebaseConf.js";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {

    let { id } = useParams();
    const [product, setProduct] = useState([]);

    //uso de datos remotos
    useEffect(() => {
        async function getProduct() {
            const data = await getAsyncItemById(id);
            setProduct({ id, ...data});
        }
        getProduct();
    }, [id]);

    //uso de datos locales
    /*useEffect(() => {
        const asyncFunc = id ? getItemById : getAllProducts

        asyncFunc(id)
            .then(response => {
                if (response) {
                    setProduct(response);
                } else {
                    setProduct(null);
                    console.warn('Received empty or null response');
                }
            },)
            .catch(error => {
                console.error('Error fetching products:', error);
            })
    }, [id]);*/

    if (!product || product.length == 0) {
        return <div>No product found.</div>;
    }

    return (
        <div>
            <ItemDetail product={product}> </ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;
