'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from 'public/icons/logo.png';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '@/redux/cartSlice';
import { useSession, signOut } from 'next-auth/react';

const Navbar: React.FC = () => {
    const [isLocalLoggedIn, setIsLocalLoggedIn] = useState(false);
    const { data: session } = useSession();
    const cartQuantity = useSelector(selectTotalQuantity);

    useEffect(() => {
        const checkLoginStatus = () => {
            const status = localStorage.getItem('isLoggedIn') === 'true';
            setIsLocalLoggedIn(status);
        };

        checkLoginStatus();

        window.addEventListener('authChange', checkLoginStatus);
        return () => {
            window.removeEventListener('authChange', checkLoginStatus);
        };
    }, []);

    const handleLogout = () => {
        if (session) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            localStorage.removeItem('cartItems');
            window.dispatchEvent(new Event('authChange'));
            signOut({ callbackUrl: '/' });
        } else {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userData');
            localStorage.removeItem('cartItems');
            window.dispatchEvent(new Event('authChange'));
            window.location.href = '/';
        }
    };


    const isLoggedIn = isLocalLoggedIn || !!session;

    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-blue-500 py-4 px-8 text-white shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <Image src={logoImg} alt="logo" width={40} height={40} />
                <span className="text-xl font-bold">FoodPanda</span>
            </div>

            <ul className="flex items-center gap-6 font-medium">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>

                {isLoggedIn ? (
                    <>
                        <li className="relative">
                            <Link href="/cart" className="relative">
                                🛒 Cart
                                {cartQuantity > 0 && (
                                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                                        {cartQuantity}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="bg-white text-blue-600 hover:bg-gray-200 px-4 py-1 rounded-md"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link
                            href="/login"
                            className="bg-white text-blue-600 hover:bg-gray-200 px-4 py-1 rounded-md"
                        >
                            Login →
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
