import React from 'react';

function SecondaryButton({ className, children }) {
    const baseClass = 'group font-bold py-4 px-16 rounded-full text-lg min-w-max flex items-center gap-x-2 transition-all';
    const colorClass = `bg-white text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-white ${className}`;

    return (
        <button 
            className={`${baseClass} ${colorClass}`}
        >
            {React.Children.map(children, child => {
                if (child.type && child.type.name === 'LandingIcon') {
                    return React.cloneElement(child, { fill: 'currentColor' });
                }
                return child;
            })}
        </button>
    );
}

export { SecondaryButton };
