import React from 'react';


const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right side - Image */}
            <div className="relative h-full">
            <img
              src="/pictures/Aboutuspic1.jpg"
              alt="Phantom-Hult Investments Team"
              className="hidden sm:block sm:w-[590px] h-[350px] object-cover "
            />
          
          </div>

          {/* Left side - About Us Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <div className="">
                <p className="font-semibold mb-2">Empowering Growth Through Innovative Solutions</p>
                <p className="text-gray-900 mb-6">
                Phantom-Huit Investments Limited, established in 2021 in Nakuru, Kenya, is a unique investment company founded by seven practicing medical doctors, specializing in diverse sectors including medical supplies, security systems, construction services, and office supplies. Our medical expertise, combined with our commitment to quality and service excellence, sets us apart in understanding and meeting client needs. With offices across major Kenyan cities and partnerships with quality assurance bodies like KEBS, we deliver cost-effective, reliable solutions backed by extensive warranties and support. Our foundation in medical expertise, coupled with our diverse service portfolio and core values of transparency, responsibility, innovation, and integrity, makes us the preferred investment partner for businesses seeking comprehensive, professional solutions.
                </p>
               
              </div>
            </div>
          </div>
       
        </div>
        <div className="text-center mt-4">
          <a href="aboutpage">
          <button className="bg-orange-600 text-white px-6 py-2 rounded text-sm">Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;