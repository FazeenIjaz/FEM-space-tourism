import React, { useState } from "react";
import { technology } from "../data";

const Technology = () => {
  const [activeSpan, setActiveSpan] = useState(technology[0]);

  const handleSpanClick = (span) => {
    setActiveSpan(span);
  };

  return (
    <section className="lg:bg-technology-desktop md:bg-technology-tab bg-technology-mb bg-no-repeat bg-cover lg:p-[90px] lg:pt-[120px] p-[30px] pt-[140px] text-white lg:text-left text-center lg:h-[100vh]">
      <h1 className="md:text-[28px] text-[20px] tracking-[4.725px] uppercase md:text-left text-center font-barlow-condensed overflow-hidden">
        <span className="text-headerLinks/40 font-barlow"> 03 </span>Launch
        Space 101
      </h1>
      <div className="flex lg:flex-row flex-col-reverse">
        {/* Span numbers */}
        <div className="flex py-12 lg:gap-8 lg:flex-col font-bold font-bellefair text-lg">
          {technology.map((tech, index) => (
            <span
              key={index}
              className={`w-[40px] md:w-[60px] h-[40px] md:h-[60px] cursor-pointer flex justify-center items-center rounded-full lg:mx-0 mx-auto ${
                activeSpan === tech ? "bg-white text-black" : "bg-white/40"
              }`}
              onClick={() => handleSpanClick(tech)}
            >
              {index + 1}
            </span>
          ))}
        </div>
        {technology.map(
          (tech) =>
            activeSpan === tech && (
              <div
                key={tech.name}
                className="flex lg:flex-row flex-col-reverse items-center gap-9"
              >
                <div className="lg:px-16 lg:mt-[10px]">
                  <small className="lg:text-[16px] uppercase text-[#D0D6F9] font-barlow-condensed">
                    The Technology....
                  </small>
                  <h2 className="lg:text-[56px] text-bellefair uppercase md:text-[40px] text-[24px]">
                    {tech.name}
                  </h2>
                  <p className="lg:text-[18px] md:text-[16px] text-[15px] text-[#D0D6F9] lg:leading-[32px] leading-[28px] lg:max-w-[444px] md:max-w-[458px]">
                    {tech.description}
                  </p>
                </div>
                <div className="lg:w-[40%] lg:mt-0 mt-[30px] rounded-md h-full w-full">
                  <img
                    src={tech.images.portrait}
                    alt={tech.name}
                    className="h-full w-full rounded-sm"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Technology;
