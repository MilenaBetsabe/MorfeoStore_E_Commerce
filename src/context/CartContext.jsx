import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    function getTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.count * item.price;
        });
        return totalPrice;
    }

    function removeItem(id) {
        const newCartState = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartState);
    }

    function addItem({ price, id, name, imageUrl, count }) {
        const itemIndex = cartItems.findIndex((item) => item.id === id);
        let copyCartItems = [...cartItems];
    
        if (itemIndex !== -1) {
            // Si el item ya existe en el carrito, actualiza la cantidad
            copyCartItems[itemIndex].count += count;
        } else {
            // Si el item no existe en el carrito, agrégalo
            copyCartItems.push({
                id: id,
                price: price,
                name: name,
                count: count,
                imageUrl: imageUrl,
            });
        }
    
        setCartItems(copyCartItems);
    }
    

    function countItemsInCart() {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    function handleCloseCart() {
        setShowCart(false);
    }

    function handleShowCart() {
        setShowCart(true);
    }

    return (
        <cartContext.Provider
            value={{
                cartItems,
                countItemsInCart,
                addItem,
                removeItem,
                getTotalPrice,
                showCart,
                handleCloseCart,
                handleShowCart
            }}
        >
            {props.children}
        </cartContext.Provider>
    );
}

export default cartContext;
