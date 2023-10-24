import React from "react";
import pic1 from "../imgs/img-1.png";
import pic2 from "../imgs/img-2.png";
import pic3 from "../imgs/img-3.png";
import { LandingIcon } from "./LandingIcon";
import { ArticleCard } from "./ArticleCard";
import { SecondaryButton } from "./SecondaryButton";


function LastestsArticles() {
  return (
    <>
      <div className="relative mt-[8vw]">
        <div className="font-bold text-black text-4xl text-center ">
          Check out our latest articles
        </div>
        <hr className="w-12 border border-black rounded-md mx-auto mt-6 mb-16" />
        <LandingIcon
          type="fullDotts"
          className="absolute left-0 top-20 -z-10"
        />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 px-[4vw]">
          <ArticleCard
            image={pic1}
            title="Disease detection, check up in the laboratory"
            description="In this case, the role of the health laboratory is very important to do a disease detection..."
          />
          <ArticleCard
            image={pic2}
            title="Herbal medicines that are 
              safe for consumption"
            description="Herbal medicine is very widely used at this time because of its very good for your health..."
          />
          <ArticleCard
            image={pic3}
            title="Natural care for healthy 
              facial skin"
            description="A healthy lifestyle should start from now and also for your skin health. There are some..."
          />
        </div>
        <SecondaryButton className="border-2 m-auto mt-[4vw]">View all</SecondaryButton>

      </div>
    </>
  );
}

export { LastestsArticles };
