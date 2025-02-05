"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/images/testimonial.webp",
      name: "Andy Newman",
      title: "Expert",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      image: "/images/testimonial.webp",
      name: "James Corden",
      title: "ML Engineer",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
        Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

        Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        
        `,
    },
    {
      image: "/images/testimonial.webp",
      name: "James Corden",
      title: "ML Engineer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const imageSrcs = [
    "/images/rods.png",
    "/images/welding.png",
    "/images/iron-rod.png",
    "/images/ship.png",
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const handleNavigation = (direction: "next" | "back") => {
    if (direction === "next") {
      if (currentTestimonial !== testimonials.length - 1) {
        setCurrentTestimonial(currentTestimonial + 1);
      }
    } else {
      if (currentTestimonial !== 0) {
        setCurrentTestimonial(currentTestimonial - 1);
      }
    }
  };

  return (
    <>
      <section className="bg-bgPrimary md:p-12 px-4 pt-8">
        <div className="lg:w-[1100px] mx-auto">
          <div className="text-white mb-5">
            <h4 className="uppercase text-sm tracking-wide">Testimonials</h4>
            <h2 className="text-4xl font-bold mt-2 md:w-[450px]">
              We build customer trust and loyalty
            </h2>
          </div>

          <div className="text-white flex flex-col md:flex-row justify-between items-start md:mt-10">
            <div className="md:w-1/2">
              <div className="flex gap-3 items-start">
                {testimonials.map((testimonial, index) => {
                  return (
                    <div
                      key={`testimial-${index}`}
                      className={`flex flex-col items-center gap-2 ${
                        index === currentTestimonial
                          ? "opacity-100 md:w-[120px]"
                          : "opacity-50 md:w-[120px]"
                      }`}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-0 border-white"
                      />
                      {index === currentTestimonial && (
                        <div className="text-center">
                          <h5 className="font-semibold">{testimonial.name}</h5>
                          <p className="text-sm opacity-75">
                            {testimonial.title}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="md:w-1/2 py-10 md:p-0">
              <p className="md:text-lg text-sm leading-relaxed h-[250px]">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => handleNavigation("back")}
                  className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-md"
                >
                  ←
                </button>
                <button
                  onClick={() => handleNavigation("next")}
                  className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full shadow-md"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bgSecondary md:h-[180px] mb-48">
        <div className="lg:w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 items-start justify-center h-full">
          {imageSrcs.map((src, index) => {
            return (
              <img
                key={`test-img-${index}`}
                src={src}
                // alt="Testimonial"
                className="w-full md:mx-2"
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
