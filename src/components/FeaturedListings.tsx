import React from 'react';
import { Eye, Bed, Bath, Square } from 'lucide-react';

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      price: '$450,000',
      address: '3005 Knoxbridge Dr, Forney, TX 75126',
      beds: 4,
      baths: 3,
      sqft: 2354,
      brokerage: 'Listed With Berkshire Hathaway HomeServices PenFed TX',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      price: '$325,000',
      address: '1245 Oak Valley Ln, Dallas, TX 75234',
      beds: 3,
      baths: 2,
      sqft: 1850,
      brokerage: 'Listed With Berkshire Hathaway HomeServices PenFed TX',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      price: '$675,000',
      address: '789 Maple Creek Dr, Plano, TX 75075',
      beds: 5,
      baths: 4,
      sqft: 3200,
      brokerage: 'Listed With Berkshire Hathaway HomeServices PenFed TX',
      image: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      price: '$525,000',
      address: '456 Sunset Ridge Ave, Richardson, TX 75081',
      beds: 4,
      baths: 3,
      sqft: 2650,
      brokerage: 'Listed With Berkshire Hathaway HomeServices PenFed TX',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="listings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Featured Listings</h2>
          <p className="text-lg text-gray-600 font-light">
            Discover exceptional properties in prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/20 hover:scale-105">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors border border-white/20">
                  <Eye className="w-4 h-4 text-gray-700" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="text-2xl font-light text-purple-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {listing.price}
                </div>
                
                <div className="text-gray-700 mb-3 text-sm font-light">
                  {listing.address}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 font-light">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{listing.beds} bd</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{listing.baths} ba</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 border-t pt-3 font-light">
                  {listing.brokerage}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
            VIEW ALL LISTINGS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;