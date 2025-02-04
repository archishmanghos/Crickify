import React from 'react';
import { Link } from 'react-router-dom';

import Input from './Input';

const AuthForm = ({ mode, onSubmit }) => {
    const isRegister = mode === 'register';

    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="mb-16 mt-32 w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        {isRegister ? 'Create an Account' : 'Login to Your Account'}
                    </h1>
                </div>

                <form className="mt-4 space-y-4 md:space-y-6" onSubmit={onSubmit}>
                    {isRegister && (
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Profile Picture (Optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                name="profilePicture"
                                className="focus:ring-primary-500 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                            />
                        </div>
                    )}

                    {isRegister && (
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="First Name" type="text" placeholder="Hritika" name="firstName" />
                            <Input label="Last Name" type="text" placeholder="Agarwal" name="lastName" />
                        </div>
                    )}

                    <Input label="Your Email" type="email" placeholder="hritikaa9@gmail.com" name="email" />
                    <Input label="Password" type="password" placeholder="••••••••" name="password" />

                    {isRegister && (
                        <Input label="Confirm Password" type="password" placeholder="••••••••" name="confirmPassword" />
                    )}

                    {isRegister && (
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Contact No. (Optional)" type="tel" placeholder="+1234567890" name="contactNo" />
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {isRegister && (
                        <div className="flex items-start">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="focus:ring-primary-300 size-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm font-light text-gray-500 dark:text-gray-300">
                                I accept the{' '}
                                <a
                                    href="#"
                                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 w-full rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
                    >
                        {isRegister ? 'Create an Account' : 'Login'}
                    </button>

                    <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <Link
                            to={isRegister ? '/login' : '/register'}
                            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                        >
                            {isRegister ? 'Login here' : 'Register here'}
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default AuthForm;
