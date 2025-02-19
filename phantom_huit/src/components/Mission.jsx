import React from 'react'

function Mission() {
  return (
    <section id="about" className="py-24 ">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Image */}
          <div className="relative h-full">
          <img
            src="/pictures/mission.jpg"
            alt="Phantom-Hult Investments Team"
            className="w-[590px] h-[350px] object-cover "
          />
        
        </div>

        {/* Left side - About Us Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="">
              <p className="text-gray-900 mb-6">
              Phantom-Huit Investments Limited’s mission is to be a trusted investment partner, providing tailored, high-quality, and cost-effective solutions across industries like medical, IT, construction, and security. They prioritize understanding unique client needs, ensuring all products meet strict safety and quality standards to build lasting partnerships. Committed to Kenya’s growth, they focus on job creation and workforce development while embracing innovation and excellence to drive sustainable success.
              </p>
             
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </section>
  )
}

export default Mission
