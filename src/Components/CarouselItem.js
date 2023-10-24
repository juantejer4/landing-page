import React from 'react';
import { LandingIcon } from './LandingIcon';

function CarouselItem({ name, company, profilePic, comment, className }) {
  return (
    <div className={`bg-gradient-to-t from-[#5A98F2] to-[#67C3F3] rounded-3xl px-[9%] py-[3%] mx-[3%] ${className} overflow-hidden flex flex-col transition-opacity`}>
      <LandingIcon
        type="carouselDotts"
        className="absolute -right-12 -top-4"
      />
      <div className="font-bold text-white text-4xl text-center ">
        What our customer are saying
      </div>
      <hr className="w-11 border border-white rounded-md mx-auto mt-6 mb-16" />
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className="flex lg:flex-row lg:items-stretch items-center flex-col lg:mr-12 ">
          <img
            src={profilePic}
            className="border-2 rounded-full overflow-hidden md:w-[10vw] md:h-[10vw] w-[14vh] h-[14vh] object-cover"
            alt="profile"
          />
          <div className="flex flex-col items-center lg:pl-6 ">
            <div className="font-bold text-white text-2xl w-max">
              {name}
            </div>
            <div className="text-white text-lg opacity-90">
              {company}
            </div>
          </div>
        </div>
        <div className="text-white opacity-90 py-4 lg:pr-6 lg:text-left text-center">
          <div className="flex w-full h-full">
            {comment}
          </div>
        </div>
      </div>
    </div>
  );
}

export { CarouselItem };
