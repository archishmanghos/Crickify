import React from 'react';

const Input = ({ label, type, placeholder, name }) => {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input
                type={type}
                name={name}
                required
                className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
