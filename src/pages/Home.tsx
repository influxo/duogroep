import heroimg from "../assets/images/Hero.png";
import orangeMan from "../assets/images/orange-man.png";
import Button from "../components/global/Button";
import Navbar from "../components/global/Navbar";
import cleaning from "../assets/images/cleaningMachine.svg";
import ServiceSlider from "../components/home/ServiceSlider";
import FeatureBadges from "../components/global/FeatureBadges";
import Footer from "../components/global/Footer";
import CleaningBlueSection from "../components/global/CleaningBlueSection";
import Accordion from "../components/home/Accordion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
        <div className="max-w-7xl mx-auto h-screen px-6 grid md:grid-cols-2 items-center gap-10 pt-12">
          <div data-aos="fade-right">
            <h1 className="text-xl md:text-3xl text-gray-900 leading-tight mb-6">
              Clean your dream place.
            </h1>
            <h1 className="text-5xl md:text-7xl font-medium text-gray-900 leading-tight">
              You think,
              <br />
              <span className="text-primary">we clean</span> your <br /> dream
              thing.
            </h1>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src={heroimg}
              alt="Finance Illustration"
              className="relative z-10 mx-auto"
            />
          </div>
        </div>

        <div className="px-4 py-8 md:py-16 bg-white">
          <div className="flex flex-col max-w-7xl mx-auto px-4 md:flex-row gap-8 items-center">
            <div className="w-full">
              <div className="rounded-3xl overflow-hidden" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <img
                  src={orangeMan}
                  alt="Pool maintenance professional cleaning a swimming pool"
                  className=" object-cover"
                />
              </div>
            </div>

            <div className="w-full space-y-4 md:ml-14" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <p className="text-primary text-2xl">About Us</p>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
                <span className="text-black">Simplify </span>
                <span className="text-blue-500">
                  Pool
                  <br /> Maintenance
                </span>
                <span className="text-black">
                  {" "}
                  with
                  <br /> Our Expert Services.
                </span>
              </h1>

              <p className="text-gray-700 text-base md:text-lg">
                Many health clubs, fitness centers and private clubs, such as
                the YMCA, have pools used mostly for exercise or recreation.
                Many towns and cities provide public pools. Many hotels have
                pools available for their guests to use at their leisure.
              </p>

              <div>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-third">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
            <div data-aos="zoom-out-right">
              <h1 className="text-5xl md:text-6xl font-bold">
                Professional
                <br />
                <span className="text-blue-500">Cleaning</span> Company
              </h1>
            </div>

            <div data-aos="zoom-out-left">
              <p className="text-gray-700 text-base md:text-lg">
                Many health clubs, fitness centers and private clubs, such as
                the YMCA, have pools used mostly for exercise or recreation.
                Many towns and cities provide public pools. Many hotels have
                pools available for their guests to use at their leisure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-sm p-12 flex justify-start h-96">
              <img
                src={cleaning}
                alt="Cleaning Machine"
                className="w-24 h-24"
              />
            </div>
            <div className="bg-[#FAF9F6] rounded-lg shadow-sm p-12 border-x h-96"></div>
            <div className="bg-secondary rounded-lg shadow-sm p-12 h-96"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        <ServiceSlider />
        <CleaningBlueSection />
        <FeatureBadges />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                  Professional
                  <br />
                  Maintenance
                </h2>
                <p className="text-gray-700 mb-6">
                  Many health clubs, fitness centers and private clubs, such as
                  the YMCA, have pools used mostly for exercise or recreation.
                  Many towns and cities provide public pools. Many hotels have
                  pools available for their guests to use at their leisure.
                </p>
                <Button />
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden" data-aos="zoom-out-left">
                  <img
                    src={orangeMan}
                    alt="Pool maintenance professional cleaning a swimming pool"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Accordion />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
