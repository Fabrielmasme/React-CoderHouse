import {createContext, useState, useEffect} from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Primero declaras la variable ANTES de usarla
    const cartInLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    
    // Ahora sí puedes usarla en el useState
    const [cart, setCart] = useState(cartInLocalStorage ? cartInLocalStorage : []);

    useEffect(() => {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
    }, [cart]);

    const addProduct = (newProduct) => {
        const indexProduct = cart.findIndex((productCart) => productCart.id === newProduct.id);

        if (indexProduct === -1) {
            setCart([...cart, newProduct]);
        } else {
            const newCart = [...cart];
            newCart[indexProduct].quantity = newCart[indexProduct].quantity + newProduct.quantity;
            setCart(newCart);
        }
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return quantity;
    }

    const totalPrice = () => {
        const total = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0);
        return total;
    }

    const deleteProductById = (productId) => {
        const productFiltered = cart.filter((productCart) => productCart.id !== productId);
        setCart(productFiltered);
    }

    const deleteCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };