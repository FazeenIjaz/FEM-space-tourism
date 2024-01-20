import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="lg:bg-home-desktop md:bg-home-tab bg-home-mb bg-no-repeat bg-cover flex lg:flex-row flex-col items-center justify-between  p-[90px] pt-[120px] text-white lg:text-left text-center min-h-[100vh]">
      <div className="flex flex-col pt-[15px] ">
        <h6 className="lg:text-[18px] md:text-[16px] text-[14px] text-[400] tracking-[4.7px] text-[#D0D6F9] font-barlow-condensed">
          SO, YOU WANT TO TRAVEL TO
        </h6>
        <h1 className="lg:text-[150px] md:text-[120px] text-[100px]  text-white font-bellefair">
          SPACE
        </h1>
        <p className="max-w-[444px] text-[#D0D6F9] font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center font-bellefair text-[32px] ">
        <Link to="/destination">
          <button className="w-[150px] h-[150px] bg-pureWhite text-black rounded-full tracking-[2px] lg:m-auto mt-[80px] relative ripple  ">
            Explore
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
