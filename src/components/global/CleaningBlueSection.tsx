import bgIcons from "../../assets/images/bgIcons.svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CleaningBlueSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <div className="px-4" data-aos="flip-up">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl bg-blue-500 p-8 md:p-12 flex justify-between items-center md:my-16">
        <div className="relative z-10" data-aos="zoom-in" data-aos-duration="1500">
          <p className="text-white/90 text-lg mb-2">
            We specialises in the following:
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Our Professional
            <br />
            Cleaning Services.
          </h2>
        </div>
        <img
          src={bgIcons}
          alt="Finance Illustration"
          className="h-80 object-cover p-6"
        />
      </div>
    </div>
  );
};

export default CleaningBlueSection;
