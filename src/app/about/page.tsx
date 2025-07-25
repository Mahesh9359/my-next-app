import React from "react";

const About: React.FC = () => {
  return (

    <section className="py-16 px-6 md:px-[5%] bg-white text-[#333]">
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="flex-grow flex-shrink basis-1/2">
          <h2 className="text-4xl font-bold text-purple-700 mb-2">About FoodPanda</h2>
          <h4 className="text-lg text-black/40 mb-5">Delivering Happiness Since 2025</h4>
          <p className="text-base text-black/80 leading-relaxed mb-4">
            At FoodPanda, we believe food is not just about satisfying hunger — it's an experience.
            We connect you to your favorite local restaurants and deliver meals to your doorstep
            quickly, hot, and fresh. With real-time tracking, exclusive deals, and a wide variety of cuisines,
            we aim to make food ordering effortless and joyful.
          </p>
          <p className="text-base text-black/80 leading-relaxed mb-4">
            Whether you're craving biryani, burgers, or bubble tea — we've got you covered. Join millions of happy customers
            and let FoodPanda bring deliciousness to your door!
          </p>
        </div>

        <div className="flex-grow flex-shrink basis-[40%] flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="About FoodPanda"
            className="w-full max-w-[400px] rounded-[20px] shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;