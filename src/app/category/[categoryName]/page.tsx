'use client';

import React, { useState } from 'react';
import { use } from 'react';
import { menuCategories } from '@/Components/Data/MenuCategories';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
};

type Category = {
  category: string;
  items: MenuItem[];
};

type Props = {
  params: Promise<{ categoryName: string }>;
};



type QuantityState = {
  [id: number]: number;
};

const CategoryDetails = ({ params }: Props) => {
  const [quantity, setQuantity] = useState<QuantityState>({});
  const dispatch = useDispatch();
  const { data: session } = useSession();


  const { categoryName } = use(params);
  const decodedName = decodeURIComponent(categoryName.toLowerCase());

  const categoryData: Category | undefined = menuCategories.find(
    (cat) => cat.category.toLowerCase() === decodedName
  );

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
    <div className="app-container">
      <main className="content">
        {categoryData ? (
          <>
            <h2 className="text-4xl text-center font-bold mt-6 mb-10">
              🍽️{' '}
              <span className="text-[#6a11cb] font-semibold underline decoration-wavy decoration-black">
                {decodedName.toUpperCase()}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 pb-15">
              {categoryData.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-center p-6 flex flex-col items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="text-left w-full">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-green-600 font-semibold mt-1">₹{item.price}</p>
                    <p className="bg-yellow-500 text-white inline-block px-3 py-1 rounded-full text-sm mt-1">
                      ⭐ {item.rating}
                    </p>
                  </div>

                  <div className="flex justify-center items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-lg shadow cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold min-w-[30px] text-center">
                      {quantity[item.id] || 0}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-lg shadow cursor-pointer"
                    >
                      +
                    </button>
                  </div>


                  <button
                    className="mt-4 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-[#5710a6] hover:to-[#1d5be2] text-white font-semibold text-base py-2 px-6 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
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
          <h2 className="text-center text-3xl font-semibold py-20">Category Not Found 😢</h2>
        )}
      </main>
    </div>
  );
};

export default CategoryDetails;