import React from 'react';
import { services } from '../data/service.js';

const ServiceRow = ({  title, description, imageUrl, isImageRight, features, id, backgroundColor}) => {
  
  const contentSection = (
    <div className="w-full md:w-[70%] p-4 flex flex-col justify-center">
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <ul className="space-y-1 mb-4">
        {features?.map((feature, index) => (
          <li key={index} className="text-neutral-600">• {feature}</li>
        ))}
      </ul>
      <a 
        href={`/service/${id}`} 
        className="text-neutral-800 font-medium hover:underline"
      >
        View More →
      </a>
    </div>
  );

  const imageSection = (
    <div className="hidden md:block w-full md:w-[30%] bg-neutral-100">
      <div className="w-full h-full">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-neutral-200" />
        )}
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row border-b border-neutral-200 last:border-b-0 min-h-[500px] ${backgroundColor}`}>
      {isImageRight ? (
        <>
          {contentSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

function ServicePage() {
  return (
    <section className=""> {/* Reduced padding from py-16 to py-8 */}
      <div className="px-1 mx-auto">
        {services.map((service, index) => (
          <ServiceRow 
          key={service.id}
          {...service}
          isImageRight={index % 2 === 1}
          backgroundColor={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicePage;
