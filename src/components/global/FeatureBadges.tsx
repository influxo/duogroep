import React, { useEffect } from "react";
import badge from "../../assets/images/Badge.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureBadges: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <section className="bg-gray-100 py-8 my-12 md:my-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-gray-200 rounded-full p-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    src={badge}
                    alt="Experience Icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">25 years of experience.</h3>
                <p className="text-gray-600 text-sm mt-1">
                  We have 25 years of experience serving the community with
                  quality cleaning services.
                </p>
              </div>
            </div>

            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-gray-200 rounded-full p-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    src={badge}
                    alt="Experience Icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Quality Products deliver by us.
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Our products are eco-friendly. If you're not satisfied with
                  our service, we'll make it right.
                </p>
              </div>
            </div>

            <div
              className="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-gray-200 rounded-full p-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    src={badge}
                    alt="Experience Icon"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  24/7 hours clients support.
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  We offer 24/7 customer service that can be reached anytime
                  when a problem occurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureBadges;
