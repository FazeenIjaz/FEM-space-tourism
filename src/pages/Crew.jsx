import React from "react";
import { Carousel } from "react-responsive-carousel";
import { crew } from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Crew = () => {
  return (
    <section className="lg:bg-crew-desktop md:bg-crew-tab bg-crew-mb bg-no-repeat bg-cover lg:p-[90px] lg:pt-[120px] p-[30px] pt-[140px] text-white lg:text-left text-center lg:max-h-[100vh]">
      <h1 className="md:text-[28px] text-[20px] tracking-[4.725px] uppercase md:text-left text-center font-barlow-condensed overflow-hidden">
        <span className="text-headerLinks/40 font-barlow"> 02 </span> Meet your
        crew
      </h1>
      <Carousel showArrows={false} showStatus={false}>
        {crew.map((val, index) => (
          <div
            key={index}
            className="carousel-item lg:h-[70vh] flex flex-col-reverse sm:flex-col justify-end  gap-12 lg:gap-0 lg:justify-end lg:flex-row -z-10"
          >
            {/* left text */}
            <div className=" lg:text-left text-center lg:w-[50%] lg:my-auto mt-[70px]">
              <h5 className="lg:text-[32px]  md:text-[24px] text-[16px] uppercase font-bellefair opacity-[0.4994]">
                {val.role}
              </h5>
              <h1 className="lg:text-[56px] md:text-[40px] text-[24px] font-bellefair uppercase my-4">
                {val.name}
              </h1>
              <p className="lg:max-w-[444px]  text-[#D0D6F9] md:leading-[32px] leading-[25px] md:text-[16px] text-[15px] font-barlow lg:text-left text-center">
                {val.bio}
              </p>
            </div>
            {/* right image */}
            <div className="lg:w-[45%] flex ">
              <img
                src={val.images.png}
                alt={val.name}
                className="mt-8 w-[50%] sm:w-auto lg:h-full sm:mt-auto mb-0  mx-auto md:max-w-[456.372px]"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Crew;
