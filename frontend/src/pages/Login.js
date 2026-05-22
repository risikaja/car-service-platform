import React, { useState } from 'react';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {

        try {

            const response = await axios.post(

                'http://localhost:5000/auth/login',

                {
                    email,
                    password
                }

            );

            localStorage.setItem(
                'token',
                response.data.token
            );

            localStorage.setItem(
                'user',
                JSON.stringify(response.data.user)
            );

            alert('Login successful');

            if (response.data.user.role === 'admin') {

                window.location.href = '/admin';

            } else {

                window.location.href = '/';

            }

        } catch (error) {

            console.log(error);

            alert('Login failed');

        }

    };

    return (

        <div className="auth-container">

            <h2>Login</h2>

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

            <button onClick={loginUser}>
                Login
            </button>

        </div>

    );

}

export default Login;