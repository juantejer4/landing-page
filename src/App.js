import { Navbar } from "./Components/Navbar";
import { FeaturedCard } from "./Components/FeaturedCard";
import { LandingIcon } from "./Components/LandingIcon";
import { Footer } from "./Components/Footer";
import { OurServices } from "./Components/OurServices";
import { Articles } from "./Components/Articles";
import { LastestsArticles } from "./Components/LastestsArticles";
import { CarouselSection } from "./Components/CarouselSection";
import { DownSectionIcons } from "./Components/DownSectionIcons";

function App() {
  
  return (
    <>
      <div className="mx-auto mt-12 w-4/5">
        <Navbar />
        <LandingIcon type="dotts" className="absolute lg:left-0 right-0" />
        <FeaturedCard />
        <OurServices />
      </div>
      <div className="relative w-screen">
        <LandingIcon type="dotts" className="absolute right-4" />
      </div>
      <div className="mx-[10%] mt-[24%] relative">
        <Articles />
        <CarouselSection/>
        <LastestsArticles/>

      </div>
      <DownSectionIcons/>
      <Footer />
    </>
  );
}

export default App;
