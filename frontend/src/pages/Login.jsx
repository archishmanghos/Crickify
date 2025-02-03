import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login!');
    };

    return (
        <>
            <AuthForm mode="login" handleLogin={handleLogin} />
        </>
    );
};

export default Login;
