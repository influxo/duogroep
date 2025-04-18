import pool from "../assets/images/pool.png";
import pc from "../assets/images/pc.png";
import laptop from "../assets/images/laptop.png";
import game from "../assets/images/game.png";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleService: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  return (
    <div>
      <Navbar bgColor="bg-white"/>
      <div className="py-16 rounded-lg my-8 max-w-7xl mx-auto px-6">
        <nav className="py-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
            <span>&gt;</span>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Service Details
            </a>
          </div>
        </nav>

        <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8" data-aos="fade-right">
          Cleaning Shops
        </h2>

        <div className="rounded-lg overflow-hidden mb-16">
          <img
            src={pool}
            alt="Luxury pool with gazebo and tropical landscaping"
            className="w-full h-96 object-cover bg-no-repeat rounded-lg"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-4xl font-bold mb-6" data-aos="fade-right">Steps of services.</h3>
          <p className="text-gray-600 mb-12 max-w-3xl" data-aos="fade-left">
            Many health clubs, fitness centers and private clubs, such as the
            YMCA, have pools used mostly for exercise or recreation. Many towns
            and cities provide public pools. Many hotels have pools available
            for their guests to use at their leisure.
          </p>

          {[...Array(2)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6"
            >
              {[
                { img: pc, text: "Book your require services." },
                { img: game, text: "Choose pool design." },
                { img: laptop, text: "We design it in virtual" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <div className="h-72 overflow-hidden px-8">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="px-8 mt-2">
                    <div className="p-4 bg-gray-100 hover:bg-primary hover:text-white text-gray-800 text-center rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-duration="1500">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;