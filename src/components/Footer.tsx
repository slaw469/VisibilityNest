import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'buying',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="buying">I'm interested in buying a home</option>
                <option value="selling">I'm interested in selling a home</option>
                <option value="investment">I'm interested in investment properties</option>
                <option value="section8">I'm interested in Section 8 housing</option>
                <option value="management">I need property management services</option>
                <option value="both">I'm interested in both buying and selling</option>
              </select>
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                SEND US A MESSAGE
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">NTX Realtors Group</h3>
              <p className="text-gray-300 mb-4">
                Your trusted real estate partner specializing in Section 8 housing, investment properties, 
                and comprehensive property management services in Allen, TX and surrounding areas.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Allen, TX and surrounding Dallas suburbs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>Contact us for your consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>info@ntxrealtorsgroup.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#section8" className="text-gray-400 hover:text-purple-400 transition-colors">Section 8 Housing</a>
                <a href="#investment" className="text-gray-400 hover:text-purple-400 transition-colors">Investment Properties</a>
                <a href="#buying" className="text-gray-400 hover:text-purple-400 transition-colors">Home Buying</a>
                <a href="#selling" className="text-gray-400 hover:text-purple-400 transition-colors">Home Selling</a>
                <a href="#management" className="text-gray-400 hover:text-purple-400 transition-colors">Property Management</a>
                <a href="#leasing" className="text-gray-400 hover:text-purple-400 transition-colors">Leasing Services</a>
                <a href="#construction" className="text-gray-400 hover:text-purple-400 transition-colors">New Construction</a>
                <a href="#screening" className="text-gray-400 hover:text-purple-400 transition-colors">Tenant Screening</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* License Info */}
            <div className="text-sm text-gray-400">
              <p className="mb-2">Saad Khan - Real Estate Broker</p>
              <p className="mb-2">NTX Real Estate Investment Group</p>
              <p className="mb-2">Licensed in Texas</p>
              <p>TREC Consumer Protection Notice | TREC Information About Brokerage Services</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NTX Realtors Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;