import React from 'react';

function Logo({ bgColor, tColor, textColor }) {
    const baseClassCircle = 'rounded-full w-11 h-11 font-bold text-3xl flex justify-center items-center';
    const colorClassCircle = `${bgColor} ${tColor}`;

    const baseClassText = 'font-bold text-2xl ml-2 mr-6';
    const colorClassText = `${textColor}`;

    return (
        <div className="flex items-center">
            <div className={`${baseClassCircle} ${colorClassCircle}`}>
                T
            </div>
            <div className={`${baseClassText} ${colorClassText}`}>
                Trafalgar
            </div>
        </div>
    );
}

export {Logo};
