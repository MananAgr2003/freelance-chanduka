"use client";

import { useState } from "react";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonials = [
    {
      text: "Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper.",
      name: "Peter Parker",
      role: "Expert",
      image: "/images/testimonial.webp",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna non nunc tristique vehicula. Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper.",
      name: "Mary Jane",
      role: "Analyst",
      image: "/images/testimonial.webp",
    },
    {
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper.",
      name: "Tony Stark",
      role: "Engineer",
      image: "/images/testimonial.webp",
    },
  ];

  return (
    <section className="relative text-white h-[600px] mb-32">
        <img
          src="/images/testimonial-bg.png"
          alt="Industrial Structure"
          className="w-full h-full"
        />

      <div className="absolute bg-bgDark md:pl-16 py-8 md:py-8 px-8 md:pt-24 md:w-1/2 md:h-[550px] -bottom-10">
        <h4 className="text-sm font-semibold text-white">TESTIMONIALS</h4>
        <h2 className="text-4xl font-bold mt-2">What people say</h2>
        <p className="mt-4 text-lg text-neutral-300 flex gap-3 md:h-[150px]">
          <span className="text-blue-500 text-6xl font-bold">&#8220;</span>
          <span className="text-base">{testimonials[currentIndex].text}</span>
        </p>
        <div className="flex items-center mt-6">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-12 h-12 rounded-full mr-4 border-2 border-gray-500"
          />
          <div>
            <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-sm text-gray-400">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>
        <div className="flex mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center relative mt-10 md:mt-0">
        
      </div> */}
    </section>
  );
}
