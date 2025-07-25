import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoImg from 'public/icons/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-br from-[#6a11cb] to-[#2575fc] text-white px-6 md:px-10 py-12 font-poppins border-t border-white/20 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.2)]  ">
            <div className="flex flex-wrap justify-between gap-10">
                <div className="max-w-xs">
                    <Image
                        src={logoImg}
                        alt="FoodPanda Logo"
                        className="w-13 h-13 mb-2.5 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
                    />
                    <h2 className='m-0 text-2xl font-bold text-white drop-shadow-md'>FoodPanda</h2>
                    <p className='mt-2 text-sm leading-relaxed text-gray-200'>Delivering happiness to your doorstep 🍱</p>
                </div>

                <div>
                    <h3 className='text-lg mb-2.5 font-semibold'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link
                                href="/"
                                className="relative text-white text-base hover:text-gray-100 transition-all before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:transition-all"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="relative text-white text-base hover:text-gray-100 transition-all before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:transition-all"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="relative text-white text-base hover:text-gray-100 transition-all before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:transition-all"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="relative text-white text-base hover:text-gray-100 transition-all before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-white before:transition-all"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">Email: Foodpanda@gmail.com</p>
                    <p className="text-sm text-gray-200 leading-relaxed">Phone: +91 9359613329</p>
                    <p className="text-sm text-gray-200 leading-relaxed">Location: Pune, India</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex items-center space-x-5 mt-2">
                        <a
                            href="#"
                            className="text-white text-xl hover:scale-110 hover:text-white hover:drop-shadow-lg transition-all"
                            aria-label="Instagram"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="#"
                            className="text-white text-xl hover:scale-110 hover:text-white hover:drop-shadow-lg transition-all"
                            aria-label="Twitter"
                        >
                            <Twitter />
                        </a>
                        <a
                            href="#"
                            className="text-white text-xl hover:scale-110 hover:text-white hover:drop-shadow-lg transition-all"
                            aria-label="Facebook"
                        >
                            <Facebook />
                        </a>
                        <a
                            href="#"
                            className="text-white text-xl hover:scale-110 hover:text-white hover:drop-shadow-lg transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 text-center pt-6 mt-10 text-sm text-gray-300">
                &copy; {new Date().getFullYear()} FoodPanda. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;