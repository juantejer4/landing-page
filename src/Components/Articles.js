import React from 'react'
import { TextArticle } from './TextArticle'
import { SecondaryButton } from './SecondaryButton'
import articleIllustration02 from "../imgs/illustration02.png";
import articleIllustration03 from "../imgs/illustration03.png";
import { LandingIcon } from './LandingIcon';

function Articles() {
  return (
    <>
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-[6%]">
          <img
            src={articleIllustration02}
            className="w-full"
            alt="second article"
          />
          <div className="lg:pl-40 lg:pr-20">
            <TextArticle
              title="Leading healthcare providers"
              text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
            />
            <SecondaryButton className="border-2">Learn more</SecondaryButton>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-[20%]">
          <div className="lg:pl-40 lg:pr-20">
            <TextArticle
              title="Download our mobile apps"
              text="Our dedicated patient engagement app and 
                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                    or administrative hassle) and securely"
            />
            <SecondaryButton className="border-2 mb-[10%] lg:mb-0">
              Download
              <LandingIcon type="downArrow" fill="#458FF6" />
            </SecondaryButton>
          </div>
          <img
            src={articleIllustration03}
            className="w-full"
            alt="third article"
          />
        </div>
    </>
  )
}

export { Articles }