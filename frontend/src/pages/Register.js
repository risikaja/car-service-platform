import React, { useState } from 'react';
import axios from 'axios';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {

        try {

            await axios.post(

                'http://localhost:5000/auth/register',

                {
                    name,
                    email,
                    password
                }

            );

            alert('Registration successful');

            window.location.href = '/login';

        } catch(error){

            console.log(error);

            alert('Registration failed');

        }

    };

    return (

        <div className="auth-container">

            <h2>Register</h2>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={registerUser}>
                Register
            </button>

        </div>

    );

}

export default Register;