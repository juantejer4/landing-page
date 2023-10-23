import React from 'react';
import { LandingIcon } from './LandingIcon';

function MiniCard({iconType, title, description}) {
  return (
    <div className='bg-white w-full rounded-xl px-10 py-10 gap-y-6 grid grid-rows-[40%_auto_auto] h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <LandingIcon type={iconType} className=' self-end' />
      <div className='font-bold text-2xl'>{title}</div>
      <div className='font-light text-[18px] text-texty-gray'>{description}</div>
    </div>
  );
}

export { MiniCard };
