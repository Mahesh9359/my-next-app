"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from 'public/icons/logo.png';
import {  useSelector } from 'react-redux';
import { selectTotalQuantity } from '@/redux/cartSlice';


const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); 
    const cartQuantity = useSelector(selectTotalQuantity);

    useEffect(() => {
        const checkLoginStatus = () => {
            const status = localStorage.getItem("isLoggedIn");
            setIsLoggedIn(status === "true");
        };

        checkLoginStatus();
        window.addEventListener("authChange", checkLoginStatus);

        return () => {
            window.removeEventListener("authChange", checkLoginStatus);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userData");
        localStorage.removeItem("cartItems");
        setIsLoggedIn(false);
        window.dispatchEvent(new Event("authChange"));
        window.location.href = "/";
    };

    return (
        <nav className="flex justify-between items-center bg-[linear-gradient(135deg,#6a11cb,#2575fc)] py-4 px-16 text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] sticky top-0 z-[1000] border-b border-white/20 backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-[0_12px_50px_rgba(0,0,0,0.3)]">
            <div className="flex items-center text-white text-3xl font-bold transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                    src={logoImg}
                    alt="logo"
                    className="w-10 h-10 mr-3 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-in-out hover:rotate-18 hover:scale-110"
                />
                <span>FoodPanda</span>
            </div>

            <ul className="flex list-none gap-13 items-center">
                <li><Link href="/" className="text-white text-xl font-medium relative py-2 no-underline transition-all duration-300 hover:text-[#ffffee] hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full">Home</Link></li>
                <li><Link href="/about" className="text-white text-xl font-medium relative py-2 no-underline transition-all duration-300 hover:text-[#ffffee] hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full">About</Link></li>
                <li><Link href="/services" className="text-white text-xl font-medium relative py-2 no-underline transition-all duration-300 hover:text-[#ffffee] hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full">Services</Link></li>
                <li><Link href="/contact" className="text-white text-xl font-medium relative py-2 no-underline transition-all duration-300 hover:text-[#ffffee] hover:[text-shadow:0_0_8px_rgba(255,255,255,0.7)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full">Contact</Link></li>

                {!isLoggedIn ? (
                    <li>
                        <Link
                            href="/login"
                            className="px-5 py-2 bg-white/15 border border-white/50 rounded-full font-semibold cursor-pointer transition-all duration-300 flex items-center gap-2 backdrop-blur-md text-white hover:bg-white/25 hover:-translate-y-1"
                        >
                            Login <span className="ml-1">→</span>
                        </Link>
                    </li>
                ) : (
                    <>
                        <li className="relative">
                            <Link
                                href="/cart"
                                className="px-5 py-2 bg-white/15 border border-white/50 rounded-full font-semibold cursor-pointer transition-all duration-300 backdrop-blur-md text-white hover:bg-white/25 hover:-translate-y-1"
                            >
                                🛒 Cart
                                {cartQuantity > 0 && (
                                    <span className="absolute -top-1 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                                        {cartQuantity}
                                    </span>
                                )}
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={handleLogout}
                                className="px-5 py-2 bg-white/15 border border-white/50 rounded-full font-semibold cursor-pointer transition-all duration-300 backdrop-blur-md text-white hover:bg-white/25 hover:-translate-y-1"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;