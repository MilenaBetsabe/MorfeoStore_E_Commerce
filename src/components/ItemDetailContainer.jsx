import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import getAllProducts, { getItemById } from '../getAsyncData.js';
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {

    let { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const asyncFunc = id ? getItemById : getAllProducts
        asyncFunc(id)
            .then(response => {
                setProduct(response)
            },
            )
            .catch(error => {
                console.error('Error fetching products:', error);
            })
    }, [id]);
    
    return (
        <div>
            <ItemDetail product={product}> </ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;
