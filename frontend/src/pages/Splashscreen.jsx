import React from 'react';
import splashImage from '../../public/assets/splashImage.jpeg'

const Splashscreen = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
                style={{backgroundImage: `url(${splashImage})`}}
            >
                <h1 className="text-5xl font-bold mb-4">Welcome to Cricket App</h1>
                <p className="text-xl">Cricket for everyone!</p>
            </div>
        </>
    );
};

export default Splashscreen;
