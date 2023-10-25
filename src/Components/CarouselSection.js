import React from 'react'
import { LandingIcon } from './LandingIcon'
import { Carousel } from './Carousel'
import profilePic01 from "../imgs/profile-pic-1.png";
import profilePic02 from "../imgs/profile-pic-2.jpg";
import profilePic03 from "../imgs/profile-pic-3.jpg";
import profilePic04 from "../imgs/profile-pic-4.jpg";
import profilePic05 from "../imgs/profile-pic-5.jpg";
import profilePic06 from "../imgs/profile-pic-6.jpg";

function CarouselSection() {
    const items = [
        {
          name: "Edward Newgate",
          company: "Founder Circle",
          profilePic: profilePic01,
          comment:
            "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
        },
        {
          name: "John Doe",
          company: "Tech Corp",
          profilePic: profilePic02,
          comment:
            "We provide innovative tech solutions to boost your business productivity and growth. We believe in the power of technology to transform your organization.",
        },
        {
          name: "Jane Smith",
          company: "Health Plus",
          profilePic: profilePic03,
          comment:
            "Our health and wellness programs are designed to help you live a healthier, happier life. We believe in the power of health and wellness.",
        },
        {
          name: "Richard Roe",
          company: "Edu Future",
          profilePic: profilePic04,
          comment:
            "We offer a wide range of online courses to help you learn new skills and advance your career. We believe in the power of education.",
        },
        {
          name: "Mary Major",
          company: "Green Energy",
          profilePic: profilePic05,
          comment:
            "We are committed to providing sustainable and environmentally friendly energy solutions. We believe in the power of green energy.",
        },
        {
          name: "Robert Minor",
          company: "Finance Secure",
          profilePic: profilePic06,
          comment:
            "Our financial advisors are here to help you make informed decisions about your investments and financial planning. We believe in the power of financial security.",
        },
      ];
    
  return (
    <>
        <div className="relative">
          <LandingIcon type="dotts" className="absolute -left-2 bottom-24 " />
          <Carousel items={items} />
        </div>
    </>
  )
}

export {CarouselSection}