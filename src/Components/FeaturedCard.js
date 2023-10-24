import React from "react";
import mainArticleIllustration from "../imgs/main-article.png";
import { PrimaryButton } from "./PrimaryButton";

function FeaturedCard() {
  return (
    <div className="flex mb-36 lg:flex-row flex-col justify-center">
      <div className="mt-32 max-w-xl flex-1">
        <div className="font-bold text-5xl min-w-fit">
          Virtual healthcare for you
        </div>
        <div className="font-light text-xl mt-8 mb-12 text-texty-gray">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </div>
        <PrimaryButton className="border-2 border-transparent hover:border-2">
          Consult today
        </PrimaryButton>
      </div>
      <div className=" lg:ml-8 flex-2 m-auto">
        <img
          src={mainArticleIllustration}
          className="lg:max-w-fit"
          alt="main card"
        />
      </div>
    </div>
  );
}

export { FeaturedCard };
