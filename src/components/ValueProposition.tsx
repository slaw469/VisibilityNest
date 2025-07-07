import React from 'react';
import { Home, Shield, TrendingUp, Users } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Home,
      title: 'SECTION 8 HOUSING',
      description: 'Expert guidance in acquiring and managing Section 8 properties with qualified tenants'
    },
    {
      icon: Shield,
      title: 'PROPERTY MANAGEMENT',
      description: 'Comprehensive property management services to protect your investment'
    },
    {
      icon: TrendingUp,
      title: 'INVESTMENT PROPERTIES',
      description: 'Strategic analysis and acquisition of profitable real estate investments'
    },
    {
      icon: Users,
      title: 'FAMILY SCREENING',
      description: 'Rigorous tenant screening process to ensure quality families for your properties'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Why Choose NTX Realtors Group
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized expertise in Section 8 housing and investment properties with a proven track record
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-600 transition-colors">
                <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to Start Your Real Estate Journey?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Whether you're looking for your first home, investment property, or Section 8 housing opportunity, 
            we're here to guide you through every step of the process in Allen, TX and surrounding areas.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            GET STARTED TODAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;