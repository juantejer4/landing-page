import React, { useState } from 'react';

function Button({ bgColor, hoverColor, textColor, children , border}) {
    const baseClass = 'font-bold py-4 px-16 rounded-full text-lg min-w-max flex items-center gap-x-2 transition-all';
    const [isHovered, setIsHovered] = useState(false);
    const colorClass = `${bgColor} ${textColor} ${border} ${isHovered ? hoverColor : ''}`;

    return (
        <button 
            className={`${baseClass} ${colorClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {React.Children.map(children, child => {
                if (child.type && child.type.name === 'LandingIcon') {
                    return React.cloneElement(child, { fill: isHovered ? '#FFFFFF' : '#458FF6' });
                }
                return child;
            })}
        </button>
    );
}

export {Button};
