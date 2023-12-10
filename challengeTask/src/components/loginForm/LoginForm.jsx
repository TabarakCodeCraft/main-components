"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import './style.css';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        email: '',
    });
    const router = useRouter();
    const handleInputChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', credentials);
            const token = response.data.token;

            console.log('Token:', token);
            router.push("/home")
        } catch (error) {
            alert('Invalid username or password');  
        }
    };

    return (
        <div className="login-form">
            <input type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleInputChange} />

            <input type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleInputChange} />

            <input type="text"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleInputChange}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;