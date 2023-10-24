import React from "react";
import { TextArticle } from "./TextArticle";
import { LandingIcon } from "./LandingIcon";
import { MiniCard } from "./MiniCard";
import { SecondaryButton } from "./SecondaryButton";

function OurServices() {
  return (
    <>
      <TextArticle
        title="Our services"
        text="We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        additionalTitleClasses="text-center"
        additionalTextClasses="px-auto lg:px-32 text-center"
        additionalDivClasses="items-center"
      />
      <div className="relative contents">
        <LandingIcon
          type="wave"
          className="absolute left-0 -z-10 -mt-10 lg:w-[60%] w-[90%]"
        />
        <LandingIcon
          type="fullDotts"
          className="absolute right-32 mt-80 -z-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 justify-items-center gap-y-10 gap-x-6">
          <MiniCard
            iconType="search"
            title="Search doctor"
            description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
          />
          <MiniCard
            iconType="pharmacy"
            title="Online pharmacy"
            description="Buy  your medicines with our mobile application with a simple delivery system"
          />
          <MiniCard
            iconType="consultation"
            title="Consultation"
            description="Free consultation with our trusted doctors and get the best recomendations"
          />
          <MiniCard
            iconType="details"
            title="Details info"
            description="Free consultation with our trusted doctors and get the best recomendations"
          />
          <MiniCard
            iconType="emergencyCare"
            title="Emergency care"
            description="You can get 24/7 urgent care for yourself or your children and your lovely family"
          />
          <MiniCard
            iconType="tracking"
            title="Tracking"
            description="Track and save your medical history and health data"
          />
        </div>
      </div>
      <div className="flex justify-center mt-[10%] mb-[20%] ">
        <SecondaryButton className="border-2">Learn more</SecondaryButton>
      </div>
    </>
  );
}

export { OurServices };
