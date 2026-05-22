import React, {
    useEffect,
    useState
} from 'react';

import axios from 'axios';


function AdminOrders() {

    const [orders, setOrders] = useState([]);


    const fetchOrders = async () => {

        try {

            const response = await axios.get(

                'http://localhost:5000/orders'

            );

            setOrders(response.data);

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchOrders();

    }, []);


    const updateStatus = async (

        orderId,
        newStatus

    ) => {

        try {

            await axios.put(

                `http://localhost:5000/orders/${orderId}`,

                {
                    status: newStatus
                }

            );

            fetchOrders();

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="admin-orders">

            <h2>

                Order Management

            </h2>


            <div className="orders-grid">

                {

                    orders.map((order) => (

                        <div
                            key={order.order_id}
                            className="order-card"
                        >

                            <h3>

                                Order #
                                {order.order_id}

                            </h3>


                            <p>

                                User ID:
                                {' '}
                                {order.user_id}

                            </p>


                            <p>

                                Total:
                                {' '}
                                $
                                {order.total_price}

                            </p>


                            <p>

                                Shipping:
                                {' '}
                                $
                                {order.shipping_cost}

                            </p>


                            <p>

                                Status:
                                {' '}
                                <strong>

                                    {order.status}

                                </strong>

                            </p>


                            <select

                                onChange={(e) =>

                                    updateStatus(

                                        order.order_id,

                                        e.target.value

                                    )

                                }

                                value={order.status}

                            >

                                <option value="Pending">

                                    Pending

                                </option>

                                <option value="Shipped">

                                    Shipped

                                </option>

                                <option value="Delivered">

                                    Delivered

                                </option>

                                <option value="Cancelled">

                                    Cancelled

                                </option>

                            </select>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default AdminOrders;