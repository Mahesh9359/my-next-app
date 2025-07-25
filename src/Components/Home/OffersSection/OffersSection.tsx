'use client';

import React from 'react';
import { Percent, Flame, Gift } from 'lucide-react';

const offers = [
  {
    icon: <Percent className="text-yellow-500" size={28} />,
    title: 'Flat 50% Off',
    description: 'Get half off on your first 3 orders. Limited time only!',
  },
  {
    icon: <Flame className="text-red-500" size={28} />,
    title: 'Hot Deal 🔥',
    description: 'Combo meals starting at just ₹99. Don’t miss out!',
  },
  {
    icon: <Gift className="text-purple-500" size={28} />,
    title: 'Refer & Earn',
    description: 'Invite friends and earn ₹100 credits on each signup.',
  },
];

const OffersSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#333]">
        🎁 Exciting Offers Just for You!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{offer.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {offer.title}
            </h3>
            <p className="text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
