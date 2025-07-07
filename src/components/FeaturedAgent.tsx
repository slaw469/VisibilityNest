import React from 'react';

const FeaturedAgent = () => {
  return (
    <section id="agent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Meet Your Agent</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Since March 2021, Saad Khan has been transforming lives through real estate with NTX Realtors Group. 
              Specializing in Section 8 Housing and investment properties, Saad provides a comprehensive suite of 
              real estate services including buying, selling, leasing, and property management.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              What sets Saad apart is his meticulous approach to identifying the best families for investor properties, 
              ensuring reduced risk and optimal returns. Whether you're a first-time homebuyer, seasoned investor, or 
              looking for Section 8 housing opportunities, Saad's expertise in Allen, TX and surrounding areas makes 
              him your trusted real estate partner.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Specializations:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Section 8 Housing Acquisition & Management</li>
                <li>• New Construction & Like-New Properties</li>
                <li>• Investment Property Analysis</li>
                <li>• Property Management Services</li>
                <li>• First-Time Homebuyer Guidance</li>
              </ul>
            </div>

            {/* Agent Name and Button */}
            <div className="flex items-center gap-6 pt-6">
              <div>
                <h3 className="text-2xl font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Saad Khan</h3>
                <p className="text-gray-600 font-light">Real Estate Broker - NTX Realtors Group</p>
                <p className="text-sm text-gray-500 font-light">Licensed in Texas | Allen, TX</p>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Agent Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
              <img
                src="/src/assets/client.jpg"
                alt="Saad Khan - NTX Realtors Group"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4+</div>
                <div className="text-sm text-gray-600 font-light">Years Experience</div>
              </div>
            </div>
            
            {/* Achievement Badge */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-4 shadow-2xl">
              <div className="text-center">
                <div className="text-sm font-bold">Section 8</div>
                <div className="text-xs">Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgent;