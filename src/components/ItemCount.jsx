import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(1);

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

    function handleClick() {
        props.addToCart(count);
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center mb-2">
                <button className="btn btn-secondary me-2" onClick={decrementCount}>-</button>
                <span className="btn btn-light">{count}</span>
                <button className="btn btn-secondary ms-2" onClick={incrementCount} disabled={count == props.stock}>+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" style={{ backgroundColor: '#00BFFF' }} onClick={handleClick} disabled={props.stock == 0}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
