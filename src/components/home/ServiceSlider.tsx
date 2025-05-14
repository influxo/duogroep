import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import servicesImg from "../../assets/images/services.png";

interface Service {
  image: any;
  id: number;
  title: string;
}

const ServiceSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const services: Service[] = [
    {
      id: 1,
      title: "Office Cleaning",
      image: servicesImg,
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      image: servicesImg,
    },
    {
      id: 3,
      title: "Window Cleaning",
      image: servicesImg,
    },
    {
      id: 4,
      title: "Floor Maintenance",
      image: servicesImg,
    },
    {
      id: 5,
      title: "Disinfection Services",
      image: servicesImg,
    },
    {
      id: 6,
      title: "Post-Construction Cleaning",
      image: servicesImg,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto py-20 bg-white md:mb-24 mb-12">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-12 lg:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl ">
            Whatever the assignment, we will take care of it down to the last
            detail. This way you are assured of a perfect result.
          </p>
        </div>
        <div className="flex-col justify-between w-1/2 items-end text-right ">
          <div className="flex gap-4 justify-end">
            <button
              onClick={previous}
              className="bg-secondary relative px-3 py-3 rounded-full font-medium transition-all duration-100 overflow-hidden"
            >
              <FaArrowLeftLong className="text-primary" />
            </button>
            <button
              onClick={next}
              className="bg-primary relative px-3 py-3 rounded-full font-medium transition-all duration-100 overflow-hidden"
            >
              <FaArrowRightLong className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-4 relative group">
              <div
                className="h-[300px] bg-cover bg-center rounded-lg shadow-md overflow-hidden flex items-end transition-transform hover:scale-105 relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white opacity-0 group-hover:opacity-100 transition-all flex justify-between items-center">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <Link
                    to="/services"
                    className="inline-block text-white p-2 rounded-full"
                  >
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceSlider;
