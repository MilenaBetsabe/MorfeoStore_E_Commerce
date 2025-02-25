import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import cartContext from "../context/cartContext";


const CartWidget = () => {

    const { handleShowCart, countItemsInCart }= useContext(cartContext);

    return (
        <>
            <Button onClick={handleShowCart} variant="primary" className='position-relative me-2 ms-3' style={{ height: "35px",width: "50px" }}>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'> {countItemsInCart()} </span>
            </Button>
        </>
    );
}

export default CartWidget;