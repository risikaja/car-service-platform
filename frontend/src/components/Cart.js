import React, {
    useContext,
    useState
} from 'react';

import axios from 'axios';

import {
    CartContext
} from '../context/CartContext';


function Cart() {

    const {

        cartItems,
        removeFromCart,
        clearCart

    } = useContext(CartContext);


    const [open, setOpen] = useState(false);


    const user = JSON.parse(
        localStorage.getItem('user')
    );


    const discount =
        user ? user.discount : 0;


    const subtotal = cartItems.reduce(

        (total, item) =>

            total + (
                item.price * item.quantity
            ),

        0

    );


    const discountAmount =
        subtotal * discount / 100;


    const finalTotal =
        subtotal - discountAmount;


    const totalItems = cartItems.reduce(

        (total, item) =>

            total + item.quantity,

        0

    );


    const handleCheckout = async () => {

        console.log('CHECKOUT STARTED');

        if (!user) {

            alert('Please login first');

            return;

        }


        if (cartItems.length === 0) {

            alert('Cart is empty');

            return;

        }


        try {

            const orderData = {

                user_id: user.user_id,

                total_price: finalTotal,

                shipping_cost: 20,

                status: 'Pending',

                items: cartItems

            };

            console.log(orderData);

            console.log(cartItems);


            const response = await axios.post(

                'http://localhost:5000/orders',

                orderData

            );

            console.log(response.data);


            alert('Order placed successfully!');


            clearCart();

            setOpen(false);

        } catch (error) {

            console.log(error);

            alert('Checkout failed');

        }

    };


    return (

        <>

            <div

                className="cart-icon"

                onClick={() =>
                    setOpen(!open)
                }

            >

                🛒

                {
                    totalItems > 0 && (

                        <span className="cart-badge">

                            {totalItems}

                        </span>

                    )
                }

            </div>



            {
                open && (

                    <div className="cart">


                        <div className="cart-header">

                            <h2>

                                Shopping Cart

                            </h2>


                            <button

                                className="close-cart"

                                onClick={() =>
                                    setOpen(false)
                                }

                            >

                                ✕

                            </button>

                        </div>



                        {
                            cartItems.length === 0 && (

                                <p className="cart-empty">

                                    Your cart is empty

                                </p>

                            )
                        }



                        {
                            cartItems.map((item) => (

                                <div

                                    key={item.part_id}

                                    className="cart-item"

                                >

                                    <h4>

                                        {item.name}

                                    </h4>


                                    <p>

                                        Quantity:
                                        {' '}
                                        {item.quantity}

                                    </p>


                                    <p>

                                        $
                                        {item.price}

                                    </p>


                                    <button

                                        onClick={() =>

                                            removeFromCart(
                                                item.part_id
                                            )

                                        }

                                    >

                                        Remove

                                    </button>

                                </div>

                            ))
                        }



                        {
                            cartItems.length > 0 && (

                                <>

                                    <hr />


                                    <h3>

                                        Subtotal:
                                        {' '}
                                        $
                                        {subtotal.toFixed(2)}

                                    </h3>


                                    <h3>

                                        Discount:
                                        {' '}
                                        -$
                                        {discountAmount.toFixed(2)}

                                    </h3>


                                    <h2>

                                        Total:
                                        {' '}
                                        $
                                        {finalTotal.toFixed(2)}

                                    </h2>



                                    <button

                                        className="checkout-btn"

                                        onClick={
                                            handleCheckout
                                        }

                                    >

                                        Checkout

                                    </button>

                                </>

                            )
                        }

                    </div>

                )
            }

        </>

    );

}

export default Cart;