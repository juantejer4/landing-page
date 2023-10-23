import { Navbar } from "./Components/Navbar";
import { FeaturedCard } from "./Components/FeaturedCard";
import { LandingIcon } from "./Components/LandingIcon";
import { MiniCard } from "./Components/MiniCard";
import { Button } from "./Components/Button";
import { TextArticle } from "./Components/TextArticle";
import articleIllustration02 from "./imgs/illustration02.png";
import articleIllustration03 from "./imgs/illustration03.png";
import profilePic01 from "./imgs/profile-pic-1.png";
import profilePic02 from "./imgs/profile-pic-2.jpg";
import profilePic03 from "./imgs/profile-pic-3.jpg";
import profilePic04 from "./imgs/profile-pic-4.jpg";
import profilePic05 from "./imgs/profile-pic-5.jpg";
import profilePic06 from "./imgs/profile-pic-6.jpg";
import pic1 from "./imgs/img-1.png";
import pic2 from "./imgs/img-2.png";
import pic3 from "./imgs/img-3.png";
import { ArticleCard } from "./Components/ArticleCard";
import { Carousel } from "./Components/Carousel";
import { Footer } from "./Components/Footer";

function App() {

  const items = [
  {
    name: "Edward Newgate",
    company: "Founder Circle",
    profilePic: profilePic01,
    comment: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    name: "John Doe",
    company: "Tech Corp",
    profilePic: profilePic02,
    comment: "We provide innovative tech solutions to boost your business productivity and growth. We believe in the power of technology to transform your organization.",
  },
  {
    name: "Jane Smith",
    company: "Health Plus",
    profilePic: profilePic03,
    comment: "Our health and wellness programs are designed to help you live a healthier, happier life. We believe in the power of health and wellness.",
  },
  {
    name: "Richard Roe",
    company: "Edu Future",
    profilePic: profilePic04,
    comment: "We offer a wide range of online courses to help you learn new skills and advance your career. We believe in the power of education.",
  },
  {
    name: "Mary Major",
    company: "Green Energy",
    profilePic: profilePic05,
    comment: "We are committed to providing sustainable and environmentally friendly energy solutions. We believe in the power of green energy.",
  },
  {
    name: "Robert Minor",
    company: "Finance Secure",
    profilePic: profilePic06,
    comment: "Our financial advisors are here to help you make informed decisions about your investments and financial planning. We believe in the power of financial security.",
  },
];

  

  return (
    <>
      <div className="mx-auto mt-12 w-4/5">
        <Navbar />
        <LandingIcon type="dotts" className="absolute lg:left-0 right-0" />
        <FeaturedCard />
        <TextArticle
          title="Our services"
          text="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
          centerText={true}
        />

        <div className="relative contents">
          <LandingIcon type="wave" className="absolute left-0 -z-10 -mt-10 lg:w-[60vw] w-[90vw]" />
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
        <div className="flex justify-center mt-[10vw] mb-[20vw] ">
          <Button
            bgColor="bg-white"
            hoverColor="hover:bg-primary-blue hover:text-white"
            textColor="text-primary-blue"
            border="border-2 border-primary-blue "
          >
            Learn more
          </Button>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <img
            src={articleIllustration02}
            className="w-full"
            alt="second article"
          />
          <div className="lg:pl-40 lg:pr-20">
            <TextArticle
              title="Leading healthcare providers"
              text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
              centerText={false}
            />
            <Button
              bgColor="bg-white"
              hoverColor="hover:bg-primary-blue hover:text-white"
              textColor="text-primary-blue"
              border="border-2 border-primary-blue "
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-screen">
        <LandingIcon type="dotts" className="absolute right-4" />
      </div>
      <div className="mx-[10vw] mt-[24vh] relative">
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-[20vw]">
          <div className="lg:pl-40 lg:pr-20">
            <TextArticle
              title="Download our mobile apps"
              text="Our dedicated patient engagement app and 
                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                    or administrative hassle) and securely"
              centerText={false}
            />
            <Button
              bgColor="bg-white"
              hoverColor="hover:bg-primary-blue hover:text-white"
              textColor="text-primary-blue"
              border="border-2 border-primary-blue lg:mb-0 mb-[10vh] "
            >
              Download
              <LandingIcon type="downArrow" fill="#458FF6" />
            </Button>
          </div>
          <img
            src={articleIllustration03}
            className="w-full"
            alt="third article"
          />
        </div>
        <div className="relative">
          <LandingIcon type="dotts" className="absolute -left-2 bottom-24 " />
          <Carousel items={items} />
        </div>
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
        </div>
      </div>
      <div className="relative w-screen h-auto flex justify-center mt-20 mb-44">
        <LandingIcon
          type="shape"
          className="absolute -right-0 bottom-60 -z-10 opacity-50"
        />
        <LandingIcon
          type="fullDotts"
          className="md:inline md:absolute hidden right-20  -z-10 opacity-90 -bottom-56"
        />
        <Button
          bgColor="bg-white"
          hoverColor="hover:bg-primary-blue hover:text-white"
          textColor="text-primary-blue"
          border="border-2 border-primary-blue "
        >
          View all
        </Button>
      </div>
      <Footer/>
    </>
  );
}

export default App;
