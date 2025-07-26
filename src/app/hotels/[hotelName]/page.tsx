'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { restaurantsData, type RestaurantMenuItem } from '@/Components/Data/RestaurantData';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '@/redux/cartSlice';
import { useSession } from 'next-auth/react';


type QuantityMap = {
  [id: number]: number;
};

const RestaurantDetailsPage = () => {
  const [quantity, setQuantity] = useState<QuantityMap>({});
  const dispatch = useDispatch();
  const cartQuantity = useSelector(selectTotalQuantity);
  const { data: session } = useSession();


  const pathname = usePathname();
  const hotelName = pathname.split('/').pop();
  const decodedName = decodeURIComponent(hotelName?.toLowerCase() || '');

  const menuItems: RestaurantMenuItem[] | undefined = restaurantsData[decodedName];

  const increaseQuantity = (id: number) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (id: number) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <main className="px-6 py-10 bg-white min-h-screen">
      {menuItems ? (
        <>
          <h2 className="text-4xl text-center font-bold mb-10">
            🍽️ Menu -{' '}
            <span className="text-[#6a11cb] font-semibold underline decoration-wavy decoration-black">
              {decodedName.toUpperCase()}
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{item.description}</p>
                  <p className="text-purple-800 font-bold text-lg">₹{item.price}</p>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-9 h-9 text-lg rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-sm cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold min-w-[30px] text-center">
                    {quantity[item.id] || 0}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-9 h-9 text-lg rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  className="mt-5 mb-5 mx-auto w-4/5 py-2 px-6 text-white font-semibold text-base rounded-full shadow-md bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-[#5710a6] hover:to-[#1d5be2] transition-all duration-300 hover:-translate-y-1"
                  onClick={() => {
                    const isLoggedIn = localStorage.getItem("isLoggedIn");

                    if ((!isLoggedIn || isLoggedIn !== "true") && !session) {
                      toast.error("Please login first to add items to cart");
                      return;
                    }

                    const qty = quantity[item.id] || 0;

                    if (qty === 0) {
                      toast.warn('Please select products to add to cart');
                    } else {
                      dispatch(addToCart({ ...item, quantity: qty }));
                      toast.success(`${qty} product(s) added to cart`);
                      setQuantity((prev) => ({ ...prev, [item.id]: 0 }));
                    }
                  }}


                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-4xl text-center text-red-500 font-bold mt-12">Restaurant Not Found 😢</h2>
      )}
    </main>
  );
};

export default RestaurantDetailsPage;
