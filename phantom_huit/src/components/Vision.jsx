import React from 'react'


function Vision() {
  return (
    <section id="about" className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <div className="">
              <p className="text-gray-900 mb-6">
              Phantom-Huit Investments Limited’s vision is to be the leading investment partner in the region, known for delivering innovative, reliable, and high-impact solutions. They strive to foster long-term relationships, create value for clients, and set industry standards for quality and service excellence.
              </p>
             
            </div>
          </div>
        </div>


          {/* Right side - Image */}
          
          <div className="relative h-full">
          <img
            src="/pictures/vision.jpg"
            alt="Phantom-Hult Investments Team"
            className="w-[590px] h-[350px] object-cover "
          />
        
        </div>

        {/* Left side - About Us Content */}
      
     
      </div>
    </div>
  </section>
  )
}

export default Vision
