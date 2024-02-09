// Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChekLogin } from '../Config/Userslice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            password: password,
        };
        dispatch(ChekLogin({ loginData: loginData, navigate: navigate }));
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
