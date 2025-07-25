import React from 'react'


const Contact: React.FC = () => {
    return (
        <div className="app-container">
            <main className="content">
                <section className="px-16 py-5 text-center md:px-[5%] bg-white font-[Poppins,sans-serif]">
                    <h2 className="text-[2.8rem] font-bold text-[#6a11cb] mb-2">Contact Us</h2>

                    <form className="max-w-[600px] mx-auto mt-8 flex flex-col gap-4">

                        <input type="text" placeholder="Your Name" required className="px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]" name="name" />
                        <input type="email" placeholder="Your Email" required className="px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a11cb]" name="email" />
                        <textarea placeholder="Your Message" required className="px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-500 resize-y focus:outline-none focus:ring-2 focus:ring-[#6a11cb]" name="message" ></textarea>
                        <button type="submit" className="px-6 py-3 mt-1 rounded-full font-semibold bg-[#6a11cb] text-white transition-colors duration-300 hover:bg-[#5621b3]" >Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Contact;