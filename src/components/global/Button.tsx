import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Button() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <a
        href="#"
        className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition mt-5"
      >
        Contact Us
      </a>
    </div>
  );
}

export default Button;
