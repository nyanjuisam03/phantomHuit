import React from 'react';

const ReusableHeroComponent = ({ 
  title = 'Services', // default title
  backgroundImage = '/pictures/phantomPic.jpg',
  minHeight = '60vh',
  opacity = 50,
  className = '',
  titleClassName = '',
}) => {
  return (
    <div>
      <section className={`bg-gray-900 text-white py-10 relative flex items-center ${className}`}
        style={{ minHeight }}>
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ opacity: opacity / 100 }}
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h2 className={`text-4xl md:text-2xl font-bold mb-4 ${titleClassName}`}>
            {title}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ReusableHeroComponent;