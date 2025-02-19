import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-center  mb-12">Get In Touch</h2>
        

          {/* Message Form Side */}
          <div className="bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Message Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                required
              />
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        
      </div>
    </div>
  );
};

export default ContactUs;