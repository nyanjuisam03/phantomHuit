import React from 'react';

function ServiceDetail({ service }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mt-8">
        <a href="/service" className="text-neutral-600 hover:underline">
          ← Back to Services
        </a>
      </div>
      
      <div className="md:flex gap-8">
        <div className="">
          <h1 className="text-4xl font-serif mb-6">{service.title}</h1>
          <p className="text-neutral-600 mb-8 whitespace-pre-line">
            {service.fullDescription}
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif mb-4">Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-neutral-600 mr-2">•</span>
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      
      </div>
    </div>
  );
}

export default ServiceDetail;