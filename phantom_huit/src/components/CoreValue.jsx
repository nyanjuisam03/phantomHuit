import React from 'react';
import { FaRegEye, FaShieldAlt } from "react-icons/fa";
import { PiLightbulbLight, PiHandshake } from "react-icons/pi";

function CoreValue() {
  const values = [
    {
      icon: <FaRegEye className="w-8 h-8" />,
      title: "Transparency",
      description: "Maintaining open, honest communication with clients and partners."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Responsibility",
      description: "Delivering reliable solutions with accountability in every project."
    },
    {
      icon: <PiLightbulbLight className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing creativity and forward-thinking to drive impactful results."
    },
    {
      icon: <PiHandshake className="w-8 h-8" />,
      title: "Honesty & Integrity",
      description: "Upholding ethical standards and trustworthiness in all business practices."
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 ">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreValue;