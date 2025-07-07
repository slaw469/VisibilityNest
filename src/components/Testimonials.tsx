import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shaheer Iqbal",
      text: "Saad was very helpful through the process of buying my first home in Houston. He promptly addressed all my concerns and answered my questions. His knowledge and expertise made it easy for me to make an informed decision quickly. His negotiation skills ensured I get the best deal possible.",
      rating: 5,
      location: "Houston, TX",
      timeAgo: "5 years ago"
    },
    {
      name: "Faisal Khan", 
      text: "Worked with Saad to close on a new construction. Saad has a deep knowledge of the market and was able to provide valuable insights to us so that we could make an informed decision. He helped us navigate the builders process and helped us throughout.",
      rating: 5,
      location: "Dallas, TX",
      timeAgo: "5 years ago"
    },
    {
      name: "Isna Khan",
      text: "Saad helped us find our rental and the home we purchased. He has in depth knowledge of the real estate in the Dallas suburbs and gives you excellent ideas about upgrading older properties. He is reliable and dependable. Will definitely work with him again in the future!",
      rating: 5,
      location: "Dallas Suburbs",
      timeAgo: "7 years ago"
    },
    {
      name: "Armin M",
      text: "Saad was super helpful helping my wife and I find a house. Definitely didn't rush us like other agents and made sure we found the house of our dreams! Will definitely do business with him again!",
      rating: 5,
      location: "Allen, TX",
      timeAgo: "6 years ago"
    },
    {
      name: "Mohammad Payel",
      text: "Mr. Khan is an amazing realtor. He is my go to guy for buying a home. He is very professional, and he genuinely cares for his clients. He discussed with me all the options I have with my budget. That was really helpful to make a decision.",
      rating: 5,
      location: "Dallas, TX",
      timeAgo: "7 years ago"
    },
    {
      name: "Ghazel Rashid",
      text: "NTX Realtors Group were extremely professional, responsive and super helpful throughout the entire house hunting process. They are a very sharp team that really made this stressful process a lot easier.",
      rating: 5,
      location: "Dallas, TX",
      timeAgo: "4 years ago"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real testimonials from satisfied clients who trusted Saad Khan with their real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-purple-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.timeAgo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-lg px-6 py-3 shadow-md">
            <div className="flex mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">5.0 Stars</div>
              <div className="text-sm text-gray-500">Based on 50+ Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;