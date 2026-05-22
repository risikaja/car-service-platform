import React, {
    createContext,
    useState
} from 'react';


export const CartContext =
    createContext();


export const CartProvider = ({
    children
}) => {

    const [

        cartItems,

        setCartItems

    ] = useState([]);


    const addToCart = (part) => {

        const existingItem =
            cartItems.find(

                (item) =>

                    item.part_id ===
                    part.part_id

            );


        if (existingItem) {

            setCartItems(

                cartItems.map((item) =>

                    item.part_id ===
                    part.part_id

                        ? {

                            ...item,

                            quantity:
                                item.quantity + 1

                        }

                        : item

                )

            );

        } else {

            setCartItems([

                ...cartItems,

                {
                    ...part,
                    quantity: 1
                }

            ]);

        }

    };


    const removeFromCart =
        (partId) => {

            setCartItems(

                cartItems.filter(

                    (item) =>

                        item.part_id !==
                        partId

                )

            );

        };


    // CLEAR CART

    const clearCart = () => {

        setCartItems([]);

    };


    return (

        <CartContext.Provider

            value={{

                cartItems,

                addToCart,

                removeFromCart,

                clearCart

            }}

        >

            {children}

        </CartContext.Provider>

    );

};