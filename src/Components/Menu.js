import React from 'react';
import { LandingIcon } from './LandingIcon';

function Menu({ items }) {
    return (
        <>
        <ul className='hidden justify-end gap-8 w-full min-w-fit lg:flex'>
            {items.map((item, index) => (
                <li key={index} className={`text-lg ${item.bold ? 'font-bold' : 'font-normal opacity-50'} min-w-max`}>
                    {item.text}
                </li>
            ))}
        </ul>
        <button>
            <LandingIcon type="mobileMenu" className="inline-block lg:hidden"/>
        </button>
        </>
    );
}

export {Menu};
