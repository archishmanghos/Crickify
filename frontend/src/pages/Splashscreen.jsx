import React from 'react';
import splashImage from '../../public/assets/splashImage.jpeg';

const Splashscreen = () => {
    return (
        <>
            <div
                className="flex h-screen flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${splashImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-4 text-5xl font-bold font-sans">Welcome to Cricket App</h1>
                    <p className="text-xl">Cricket for everyone!</p>
                </div>
            </div>
        </>
    );
};

export default Splashscreen;
