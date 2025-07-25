import React from 'react';
import Link from 'next/link';


type HeroSectionProps = {
  title: string;
};

const HeroSection:React.FC<HeroSectionProps>=({title}) => {
  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url("/images/hero-section.jpg")` }}
    >
      <div className="w-full h-full bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-5 max-w-[700px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Craving something tasty? We bring your favorite meals to your doorstep in just minutes.
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-white text-[#6a11cb] font-semibold rounded-full shadow-md hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
