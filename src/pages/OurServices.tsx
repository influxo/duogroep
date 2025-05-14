import React from "react";
import ServicesSection from "../components/services/SercivesSection";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../components/global/Button";
import orangeMan from "../assets/images/orange-man.png";
import Hero from "../components/global/Hero";

const OurServices: React.FC = () => {
  Aos.init({ duration: 1000 });
  return (
    <div>
      <Navbar bgColor="bg-secondary" />
      <Hero/>
      <ServicesSection />
      <div className="py-16 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={orangeMan}
              alt="Pool maintenance worker cleaning a pool"
              className="w-[600px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-lg">
              Welcome to <span className="text-blue-500">Jalsarah</span>.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Simplify <span className="text-blue-500">Pool Maintenance</span>{" "}
              with Our Expert Services.
            </h2>

            <p className="mt-6 text-gray-600">
              Many health clubs, fitness centers and private clubs, such as the
              YMCA, have pools used mostly for exercise or recreation. Many
              towns and cities provide public pools. Many hotels have pools
              available for their guests to use at their leisure.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Regular Cleaning and Skimming.</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Regular Cleaning and Skimming.</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Brushing and Vacuuming.</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">/</span>
                <p className="font-medium">Brushing and Vacuuming.</p>
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurServices;
