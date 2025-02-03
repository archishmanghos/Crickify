import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import crickifyLogo from '../../public/assets/crickify_logo.svg';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <>
            <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <div className="flex">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="rounded-md bg-gray-200 p-1 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={crickifyLogo} className="h-8" alt="Flowbite Logo" />
                            <span className="self-center whitespace-nowrap font-sans text-2xl font-bold dark:text-white">
                                Crickify
                            </span>
                        </Link>
                    </div>

                    <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        {isAuthenticated ? (
                            <button
                                type="button"
                                className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </button>
                        )}
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="size-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                        id="navbar-sticky"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded-sm bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
