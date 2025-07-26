'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { removeFromCart, clearCart, addToCart, CartItem,} from '@/redux/cartSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const TAX_RATE = 0.05;
const DELIVERY_CHARGE = 40; 

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const increaseQty = (item: CartItem) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const decreaseQty = (item: CartItem) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ ...item, quantity: -1 }));
    } else {
      dispatch(removeFromCart(item.id));
      toast.info(`${item.name} removed from cart`);
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + DELIVERY_CHARGE;

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      toast.error('Please login first to proceed to checkout!');
      return;
    }
    toast.success('Proceeding to checkout...');
    router.push("/checkout");
  };

  return (
    <div className="px-6 py-10 min-h-100">
      <h2 className="text-4xl font-bold text-center mb-10">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-2xl text-gray-600">Your cart is empty 😕</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl p-6 shadow-md gap-4"
              >
                <img
                  src={item.image || '/placeholder.png'}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price} * {item.quantity}</p>
                  <p className="font-semibold text-green-600 mt-1">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQty(item)}
                    className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-lg shadow"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold min-w-[30px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(item)}
                    className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold text-lg shadow"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(item.id));
                      toast.info(`${item.name} removed from cart`);
                    }}
                    className="text-red-500 hover:underline ml-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-xl ml-auto space-y-3 text-right">
            <p className="text-lg">
              Subtotal: <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
            </p>
            <p className="text-lg">
              Tax (5%): <span className="font-semibold">₹{tax.toFixed(2)}</span>
            </p>
            <p className="text-lg">
              Delivery: <span className="font-semibold">₹{DELIVERY_CHARGE}</span>
            </p>
            <p className="text-2xl font-bold">
              Total: ₹{total.toFixed(2)}
            </p>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  dispatch(clearCart());
                  toast.warn('Cart cleared');
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded shadow"
              >
                Clear Cart
              </button>

              <button
                onClick={handleCheckout}
                className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] hover:from-[#5710a6] hover:to-[#1d5be2] text-white font-semibold py-2 px-6 rounded-full shadow"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
