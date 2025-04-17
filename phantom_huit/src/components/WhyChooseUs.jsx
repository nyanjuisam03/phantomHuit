import React from 'react'

function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left side - Why Us Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Chose Us</h2>
              <div className="">
                <p className="font-semibold mb-2">Your Trusted Partner for Tailored Solutions and Unmatched Service Excellence.</p>
                <p className="text-gray-900 mb-6">
                Choosing Phantom-Huit Investments Limited means partnering with a company that is deeply committed to delivering quality, innovation, and reliability. Our vision is to be a leader across multiple industries, providing solutions that not only meet but exceed customer expectations. Guided by core values of integrity, professionalism, and customer-centricity, we are dedicated to fostering long-term partnerships built on trust. With a mission to provide tailored, high-quality solutions and exceptional after-sales support, Phantom-Huit ensures that every service drives the success of our clients, making us the ideal choice for your business needs
                </p>
               
              </div>
            </div>
          </div>


            {/* Right side - Image */}
            <div className="relative h-full">
            <img
              src="/pictures/WhychoseUs.webp"
              alt="Phantom-Hult Investments Team"
              className="hidden sm:block sm:w-[590px] h-[350px] object-cover "
            />
          
          </div>

         
       
        </div>
    </div>
    </section>
  )
}

export default WhyChooseUs
