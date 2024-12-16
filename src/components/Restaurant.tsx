import React from 'react';
import { ChefHat, Clock, MapPin, Phone } from 'lucide-react';

const Restaurant = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Frito Restaurant</h1>
            <p className="text-xl">Experience the finest dining in town</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-orange-500" />
            <div>
              <h3 className="font-semibold">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sun: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <MapPin className="h-8 w-8 text-orange-500" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">123 Restaurant Street, City</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <Phone className="h-8 w-8 text-orange-500" />
            <div>
              <h3 className="font-semibold">Reservations</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Burger",
                price: "$12.99",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              },
              {
                name: "Mediterranean Salad",
                price: "$9.99",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              },
              {
                name: "Grilled Salmon",
                price: "$24.99",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{dish.name}</h3>
                  <p className="text-orange-500 font-bold mt-2">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-orange-500 rounded-full mb-4">
            <ChefHat className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Master Chefs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of expert chefs brings years of experience from top restaurants around the world,
            ensuring every dish meets our high standards of quality and taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;