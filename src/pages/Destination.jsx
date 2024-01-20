import React, { useState } from "react";
import { destinations } from "../data";

const Destination = () => {
  const [destination, setDestination] = useState(destinations[0]);

  const active = (selectedDestination) =>
    destination.name === selectedDestination
      ? "border-b-2 border-white"
      : "border-b-2 border-transparent ";

  return (
    <section className="lg:bg-destination-desktop md:bg-destination-tab bg-destination-mb bg-no-repeat bg-cover   lg:p-[90px] lg:pt-[120px] pt-[100px] text-white lg:text-left text-center  min-h-[100vh]">
      <h2 className="lg:text-[28px] text-[20px] font-barlow-condensed uppercase tracking-[4.725px] lg:text-left">
      <span className="text-headerLinks/40 font-barlow"> 01 </span> Pick your destination
      </h2>
      <div className="flex lg:flex-row flex-col items-center lg:text-left text-center lg:gap-0 gap-20 justify-between mt-[60px] ">
        {/* left image */}
        <div className="flex items-center justify-center md:max-w-[400px] max-w-[300px] md:max-h-[400px] max-h-[300px]">
          <img src={`${destination.images.png}`} alt="planet.." />
        </div>
        {/* right desc */}
        <div className="flex flex-col gap-[30px] lg:w-[50%]">
          <ul className="flex gap-3 lg:mx-0 mx-auto">
            {destinations.map((destination) => (
              <li
                className={`cursor-pointer text-[16px] tracking-[2.7px] hover:border-b-2 hover:border-white hover:border-solid ${active(
                  destination.name
                )}`}
                key={destination.name}
                onClick={() => setDestination(destination)}
              >
                {destination.name}
              </li>
            ))}
          </ul>

          <div className="flex flex-col  gap-[10px]">
            <h1 className="md:text-[100px] text-[56px] font-bellefair">
              {destination.name}
            </h1>
            <p className="md:text-[18px] text-[15px] leading-[32px] text-[#D0D6F9] font-barlow md:max-w-[444px] max-w-[327px]">
              {destination.description}
            </p>
            {/* <hr /> */}
            <div className="w-full bg-white h-[3px] mx-auto md:my-[30px] opacity-[0.7]"></div>

            <div className="flex items-center gap-[80px] mt-[10px]">
              <div className="">
                <h3 className="text-[#D0D6F9] text-[14px] uppercase font-barlow-condensed">
                  AVG. DISTANCE
                </h3>
                <p className="text-[28px] font-bellefair text-[#D0D6F9] uppercase">
                  {destination.distance}
                </p>
              </div>
              <div className="">
                <h3 className="text-[#D0D6F9] text-[14px] uppercase font-barlow-condensed">
                  EST. TRAVEL TIME
                </h3>
                <p className="text-[28px] font-bellefair text-[#D0D6F9] uppercase">
                  {destination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
