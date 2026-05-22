import React, {
    useEffect,
    useState,
    useContext
} from 'react';

import axios from 'axios';

import {
    CartContext
} from '../context/CartContext';


function PartsList() {

    const [parts, setParts] = useState([]);

    const {
        addToCart
    } = useContext(CartContext);


    const user = JSON.parse(
        localStorage.getItem('user')
    );


    useEffect(() => {

        axios.get(
            'http://localhost:5000/parts'
        )

        .then((response) => {

            setParts(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    }, []);


    return (

        <div className="parts-grid">

            {
                parts.map((part) => {

                    const discount =
                        user ? user.discount : 0;


                    const finalPrice =

                        part.price -

                        (
                            part.price *
                            discount / 100
                        );


                    const savings =
                        part.price - finalPrice;


                    return (

                        <div

                            key={part.part_id}

                            className="part-card"

                        >

                            {
                                user && (

                                    <div className="discount-badge">

                                        VIP
                                        {' '}
                                        {discount}% OFF

                                    </div>

                                )
                            }


                            <h3>
                                {part.name}
                            </h3>


                            <p>

                                <strong>
                                    Brand:
                                </strong>

                                {' '}
                                {part.brand}

                            </p>


                            <p>

                                <strong>
                                    Model:
                                </strong>

                                {' '}
                                {part.model}

                            </p>


                            <p>

                                <strong>
                                    Stock:
                                </strong>

                                {' '}
                                {part.stock}

                            </p>


                            {
                                user ? (

                                    <>

                                        <div className="old-price">

                                            $
                                            {part.price}

                                        </div>


                                        <div className="price">

                                            $
                                            {finalPrice.toFixed(2)}

                                        </div>


                                        <div className="savings">

                                            You save
                                            {' '}
                                            $
                                            {savings.toFixed(2)}

                                        </div>

                                    </>

                                ) : (

                                    <div className="price">

                                        $
                                        {part.price}

                                    </div>

                                )
                            }


                            <button

                                onClick={() =>
                                    addToCart(part)
                                }

                            >

                                Add to Cart

                            </button>

                        </div>

                    );

                })
            }

        </div>

    );

}

export default PartsList;