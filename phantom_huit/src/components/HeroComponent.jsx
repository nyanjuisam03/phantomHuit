import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const slides = [
  {
    id: 1,
    title: "One Company, Limitless Solutions",
    description: "Your Preferred Investment Partner in delivering innovative, high-impact solutions across medical, IT, construction, and security sectors.",
    image: "/pictures/phantomPic.jpg"
  },
  {
    id: 2,
    title: "Expert Medical Solutions",
    description: "Powered by seven specialized doctors delivering precise, quality-assured medical supplies and services with up to 20 years of equipment servicing.",
    image: "/pictures/HeroImageTwo.avif"
  },
  {
    id: 3,
    title: "Our Core Values",
    description: "Built on Transparency, Responsibility, Innovation, and Integrity - driving excellence in every service we provide.",
    image: "/pictures/HeroimageThree.webp"
  },

];

function HeroComponent() {
  const splideOptions = {
    type: 'fade',
    rewind: true,
    autoplay: true,
    interval: 5000,
    arrows: true,
    pagination: false,
    pauseOnHover: false
  };

  return (
    <section id="home" className="bg-gray-900 text-white relative min-h-[60vh]">
      <Splide options={splideOptions}>
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="relative min-h-[60vh] flex items-center justify-center">
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="container mx-auto px-4 z-10 relative py-10 flex flex-col items-center text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="mb-8 text-sm max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/service">
                    <button className="border-2 border-white hover:border-orange-600 hover:bg-orange-600 text-white  px-6 py-2 rounded text-sm transition-all duration-300  font-normal">
                      Our Services
                    </button>
                  </a>
                  <button className="border-2 border-white hover:border-orange-600 hover:bg-orange-600 text-white  px-6 py-2 rounded text-sm transition-all duration-300  font-normal">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default HeroComponent;