import React from 'react';
import { services } from '../data/service.js';

const ServiceRow = ({ title, description, imageUrl, isImageRight, features, id }) => {
  const contentSection = (
    <div className="w-full md:w-1/2 p-4"> {/* Reduced padding from p-8 to p-4 */}
      <h3 className="text-2xl font-serif mb-2">{title}</h3> {/* Reduced margin-bottom */}
      <p className="text-neutral-600 mb-4">{description}</p> {/* Reduced margin-bottom */}
      <ul className="space-y-1 mb-4"> {/* Reduced space between items */}
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
    <div className="hidden md:block w-full md:w-1/2 bg-neutral-100">
      <div className="aspect-[3/2] w-full h-full"> {/* Changed aspect ratio to reduce height */}
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
    <div className="flex flex-col md:flex-row border-b border-neutral-200 last:border-b-0">
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
    <section className="py-12"> {/* Reduced padding from py-16 to py-8 */}
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceRow 
            key={service.id}
            {...service}
            isImageRight={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicePage;
