import React from 'react';

function PrimaryButton({ className, children }) {
    const baseClass = 'font-bold py-4 px-16 rounded-full text-lg min-w-max flex items-center gap-x-2 transition-all';
    const colorClass = `bg-primary-blue border-transparent text-white hover:bg-white hover:text-primary-blue hover:border-primary-blue ${className}`;

    return (
        <button 
            className={`${baseClass} ${colorClass}`}
        >
            {children}
        </button>
    );
}

export { PrimaryButton };
