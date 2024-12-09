import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='position-relative me-2 ms-3' style={{ height: "35px",width: "50px" }}>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'> 0 </span>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CartWidget;