import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { CiMedicalCross } from "react-icons/ci";

import { MdConstruction } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { TbDeviceCctv } from "react-icons/tb";

import { FaRegLightbulb } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";

const ServiceCard = ({ title, description, Icon }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Icon className="text-3xl font-light" />
    </div>
    <h3 className="text-xl font-normal mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    { 
      title: "Medical Supplies", 
      description: "Providing top-quality medical supplies and equipment to enhance healthcare efficiency.",
      Icon: CiMedicalCross
    },
    { 
      title: "Electrical Supplies", 
      description: "Offering a wide variety of stationery and office essentials for businesses.",
      Icon: FaRegLightbulb
    },
    { 
      title: "Repair Works", 
      description: "Expert construction services, including repairs, renovations, and infrastructure improvements.",
      Icon: MdConstruction
    },
    { 
      title: "IT Equipment", 
      description: "Delivering advanced IT systems and reliable computer hardware for businesses.",
      Icon: RiComputerLine
    },
    { 
      title: "Security System", 
      description: "Ensuring safety with modern CCTV and comprehensive security system solutions.",
      Icon: TbDeviceCctv
    },
    { 
       title: "Construction", 
       description: "Building design, construction and maintenance services",
       Icon: LuBuilding2
     },
  ];

  return (
    <section id="services" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Services</h2>
        <span className="h-2 mt-4 w-16 bg-white mx-auto rounded-full"></span>
        <Splide
          options={{
            perPage: 3,
            gap: '3rem',
            pagination: false,
            autoplay:true,
            type: 'loop',
            interval: 4000,           
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <SplideSlide key={index}>
              <ServiceCard {...service} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="flex justify-center mt-12">
        <a href="/service">
        <button className="bg-orange-600 text-white px-6 py-2 rounded text-sm">Learn More</button>
  </a>
</div>
    </section>
  );
};

export default Services;