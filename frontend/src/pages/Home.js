import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import '../App.css';
import Cart from '../components/Cart';

import PartsList from '../components/PartsList';

function Home() {

    const [km, setKm] = useState('');
    const [shippingCost, setShippingCost] = useState(null);

    const user = JSON.parse(
        localStorage.getItem('user')
    );

    const calculateShipping = async () => {

        if (!km) {
            return;
        }

        try {

            const response = await axios.get(
                `http://localhost:5000/shipping/${km}`
            );

            setShippingCost(
                response.data.shipping_cost
            );

        } catch (error) {

            console.log(error);

        }

    };

    const logout = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        window.location.href = '/login';

    };

    return (

        <div className="app">

            <header className="navbar">

                <h1>Car Service Hub</h1>

                <nav>

                    <a href="#parts">Parts</a>

                    <a href="#services">Services</a>

                    <a href="#contact">Contact</a>

                    {
                        user ? (

                            <>

                                <span className="welcome">
                                    Welcome, {user.name}
                                </span>

                                <button
                                    className="logout-btn"
                                    onClick={logout}
                                >
                                    Logout
                                </button>

                            </>

                        ) : (

                            <>

                                <Link to="/login">
                                    Login
                                </Link>

                                <Link to="/register">
                                    Register
                                </Link>

                            </>

                        )
                    }



                </nav>

            </header>


            <section className="hero">

                <div className="hero-content">

                    <h2>
                        Professional Car Service & Parts Management
                    </h2>

                    <p>
                        Cloud-based platform for managing
                        car services, spare parts,
                        orders and delivery costs.
                    </p>

                    <button

                        onClick={() =>

                            document
                                .getElementById('parts')
                                .scrollIntoView({

                                    behavior: 'smooth'

                                })

                        }

                    >

                        Explore Parts

                    </button>

                </div>

            </section>

            <Cart />


            <section
                id="parts"
                className="parts-section"
            >

                <h2>
                    Available Car Parts
                </h2>

                <PartsList />

            </section>


            <section className="shipping-section">

                <h2>
                    Shipping Cost Calculator
                </h2>

                <div className="shipping-box">

                    <input
                        type="number"
                        placeholder="Enter kilometers"
                        value={km}
                        onChange={(e) =>
                            setKm(e.target.value)
                        }
                    />

                    <button
                        onClick={calculateShipping}
                    >
                        Calculate
                    </button>

                </div>


                {
                    shippingCost !== null && (

                        <h3 className="shipping-result">

                            Shipping Cost:
                            ${shippingCost}

                        </h3>

                    )
                }

            </section>


            <section
                id="services"
                className="services-section"
            >

                <h2>Our Services</h2>

                <div className="services-grid">

                    <div className="service-card">

                        <h3>
                            Engine Diagnostics
                        </h3>

                        <p>
                            Complete engine diagnostics
                            and troubleshooting.
                        </p>

                    </div>


                    <div className="service-card">

                        <h3>
                            Oil Change
                        </h3>

                        <p>
                            Professional oil replacement
                            and maintenance.
                        </p>

                    </div>


                    <div className="service-card">

                        <h3>
                            Brake Service
                        </h3>

                        <p>
                            Brake inspection and
                            replacement services.
                        </p>

                    </div>

                </div>

            </section>


            <footer
                id="contact"
                className="footer"
            >

                <p>
                    © 2026 CarService Hub
                </p>

            </footer>

        </div>

    );

}

export default Home;