'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    message:
      'Amazing service! The food always arrives hot and on time. Highly recommend this platform.',
    location: 'Pune, India',
    image: 'https://i.pravatar.cc/150?img=56',
  },
  {
    name: 'Priya Desai',
    message:
      'User-friendly UI and tons of food options. I use it almost every day!',
    location: 'Pune, India',
    image: 'https://i.pravatar.cc/150?img=44',
  },
  {
    name: 'Rohit Mehta',
    message:
      'Great customer support and delicious meals from top restaurants.',
    location: 'Pune, India',
    image: 'https://i.pravatar.cc/150?img=4',
  },
];


const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">💬 What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform hover:-translate-y-2"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700 mb-4">"{testimonial.message}"</p>
            <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
