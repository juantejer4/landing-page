import React from 'react'
import { LandingIcon } from './LandingIcon'

function ArticleCard({image, title, description}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white lg:mb-0 mb-[5vh] shadow-[0px_7px_29px_rgba(100,100,111,0.2)]">
      <img src={image} className="w-full" alt="article" />
      <div className="font-bold text-xl px-5 py-3">{title}</div>
      <div className="font-light text-base px-5 py-3">{description}</div>
        <button className="flex items-center gap-x-3 px-5 py-3 hover:gap-x-6 transition-all duration-200">
            <div className="font-semibold text-primary-blue py-3">Read more</div>
            <LandingIcon type="smallRightArrow" className="transition-all" />
        </button>
    </div>
  );
}

export {ArticleCard}