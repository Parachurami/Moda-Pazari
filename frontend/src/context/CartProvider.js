import { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const addToCart = (product) =>{
        setCart((prevState) => [...prevState, product]);
    }

    const isInCart = (cartItem) =>{
        const duplicateItem = cart.find(item =>{
            return item.product.id === cartItem.product.id
        });
        console.log('duplicate item: ',duplicateItem)
        return duplicateItem ? true : false;
    }

    const removeFromCart = (id) =>{
        setCart(cart.filter(item => item.id !== id));
    }

    
    
    return(
        <CartContext.Provider value={{cart, addToCart, isInCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;