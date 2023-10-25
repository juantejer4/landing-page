import React from 'react'
import { LandingIcon } from './LandingIcon'

function DownSectionIcons() {
  return (
    <>
        <div className="relative w-screen h-auto flex justify-center mt-20 mb-44">
        <LandingIcon
          type="shape"
          className="absolute -right-0 bottom-60 -z-10 opacity-50"
        />
        <LandingIcon
          type="fullDotts"
          className="md:inline md:absolute hidden right-20  -z-10 opacity-90 -bottom-56"
        />
      </div>
    </>
  )
}

export {DownSectionIcons}