import React from 'react'
import { LandingIcon } from './LandingIcon'
import { Logo } from './Logo'

function Footer() {
  return (
    <div className="relative w-screen pt-[8vw] pb-[3vw] bg-gradient-to-t from-[#5A98F2] to-[#67C3F3] overflow-hidden ">
        <LandingIcon type="fullDotts" className="absolute md:-bottom-5 md:-left-5 -bottom-10 right-0"  />

        <div className="grid md:grid-rows-3 grid-rows-[auto_auto_auto_auto_auto] md:grid-cols-2 gap-3 gap-x-[5vw] md:col-start-1 col-end-3 md:mr-[8vw] md:ml-[15vw] m-auto w-[60%]">
          <Logo
            bgColor="bg-white"
            tColor="text-[#5B9BF3]"
            textColor="text-white"
          />
          <div className=" font-light text-lg w-full text-white pb-3 md:col-start-1 pr-4">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </div>
          <div className=" font-light text-lg text-white md:col-start-1">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </div>
          <div className="font-bold text-xl text-white font mb-1 lg:mt-2 mt-10 md:row-start-1 md:col-start-2 self-center">
            Company
          </div>
          <ul className="flex flex-col gap-3 md:col-start-2 md:row-start-2 row-span-2">
            <li className="font-light text-lg text-white">About</li>
            <li className="font-light text-lg text-white">Testimonials</li>
            <li className="font-light text-lg text-white">Find a doctor</li>
            <li className="font-light text-lg text-white">Apps</li>
          </ul>
        </div>
      </div>
  )
}

export {Footer}