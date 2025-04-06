import React, { useState } from "react";
import photo from "../../assets/images/Photo.png";
import "aos/dist/aos.css";
const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Accordions = [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve southeast Michigan for residential projects and offer statewide coverage for commercial and industrial work. If you're located out of state, don't hesitate to reach out! We're more than willing to travel. If you're unsure whether we cover your area, feel free to contact us—we'd be happy to assist you.",
    },
    {
      question: "Are your services environmentally friendly?",
      answer:
        "Yes, we use eco-friendly materials and techniques whenever possible. Our epoxy coatings are low in volatile organic compounds (VOCs), ensuring a safer environment for you and your family.",
    },
    {
      question: "Do you offer free consultations or quotes?",
      answer:
        "Yes, we provide free consultations and detailed quotes to help you decide on the best solution for your flooring needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and digital payments.",
    },
  ];

  return (
    <div>
      <section className="bg-gray-50 mt-12">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 p-12">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-down"
     data-aos-duration="3000">
                Relax we're always here for
                <br />
                you!
              </h2>
              <p className="text-gray-700 mb-8" data-aos="fade-right">
                Nam ut ante magna. Aliquam ipsum ex, condimentum non ipsum.
                Fusce feugiat magna nec eros, suscipit nulla lectus ut. Cras ut
                eros eu feugiat tempor placerat.
              </p>

              <div className="space-y-6">
                {Accordions.map((Accordion, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden transition-all relative ${
                      activeIndex === index
                        ? "bg-dark_blue"
                        : "bg-white shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full flex justify-between items-center py-5 px-6 text-left text-gray-800 focus:outline-none ${
                        activeIndex === index ? "pl-8" : ""
                      }`}
                    >
                      <span
                        className={`text-lg font-medium ${
                          activeIndex === index ? "text-white" : "text-black"
                        }`}
                      >
                        {Accordion.question}
                      </span>
                      <span
                        className={`text-2xl transform ${
                          activeIndex === index ? "rotate-45 text-white" : ""
                        } transition-transform`}
                        data-aos="fade-down"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-300`}
                      style={{
                        maxHeight: activeIndex === index ? "500px" : "0",
                      }}
                      ref={(el) => {
                        if (activeIndex === index && el) {
                          el.style.maxHeight = `${el.scrollHeight}px`;
                        }
                      }}
                    >
                      <div
                        className={`px-6 pb-5 text-white text-md leading-relaxed border-t border-gray-200/30 ${
                          activeIndex === index ? "pl-8" : "text-gray-700"
                        }`}
                      >
                        {Accordion.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-full rounded-lg overflow-hidden">
                <img
                  src={photo}
                  alt="Glass window cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordion;
