import React from 'react';
import AuthForm from '../components/AuthForm';

const Registration = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        console.log('Register!');
    };

    return (
        <>
            <AuthForm mode="register" onSubmit={handleRegister} />
        </>
    );
};

export default Registration;
