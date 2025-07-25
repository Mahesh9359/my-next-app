import React, { type JSX } from 'react';
import { Truck, Clock, Star, Phone } from 'lucide-react';

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <Truck size={40} className="text-[#6a11cb] mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />,
    title: 'Fast Delivery',
    description: 'We deliver your favorite food in under 30 minutes, hot and fresh!',
  },
  {
    icon: <Clock size={40} className="text-[#6a11cb] mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />,
    title: '24/7 Support',
    description: 'Day or night, we’re here to assist you with your food orders anytime.',
  },
  {
    icon: <Star size={40} className="text-[#6a11cb] mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />,
    title: 'Top Restaurants',
    description: 'Partnered with the best-rated restaurants to bring you quality meals.',
  },
  {
    icon: <Phone size={40} className="text-[#6a11cb] mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />,
    title: 'Easy Ordering',
    description: 'Simple and user-friendly interface to order your food in just a few taps.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="app-container">
      <main className="content">
        <section className="py-16 px-5 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-center font-[Poppins,sans-serif]">
          <h2 className="text-[2.8rem] font-bold text-[#6a11cb] mb-2">Our Services</h2>
          <p className="text-[1.1rem] text-[#444] mb-10">What makes FoodPanda awesome 🍽️</p>

          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-xl p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] group"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-[#333] mb-2">{service.title}</h3>
                <p className="text-sm text-[#666]">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
