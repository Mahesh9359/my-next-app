import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import burgerImg from 'public/images/burger.jpg';
import dessertsImg from 'public/images/dessert.jpg';
import dosaImg from 'public/images/south-indian.jpg';
import pizzaImg from 'public/images/pizza.jpg';


const restaurantsData= [
    {
        name: "The South Special",
        image: dosaImg,
        rating: "4.5 ★",
        foodtype: "Traditional Meal, South Indian"
    },
    {
        name: "Pizza Studio",
        image: pizzaImg,
        rating: "4.7 ★",
        foodtype: "Fast Food, Pizza"
    },
    {
        name: "Burger Nation",
        image: burgerImg,
        rating: "4.4 ★",
        foodtype: "Fast Food, Burgers"
    },
    {
        name: "Sweet Treats",
        image: dessertsImg,
        rating: "4.8 ★",
        foodtype: "Desserts, Bakery"
    }
];
const PopularRestaurants: React.FC = () => {
    return (
        <section className="px-18 py-10 bg-[linear-gradient(to right, #fdfbfb, #ebedee)] text-center">
            <h2 className="text-4xl font-extrabold  text-[#333] mb-12">🍽️ Popular Restaurants Near You</h2>
            <div className="grid [grid-template-columns:repeat(auto-fit,_minmax(140px,_1fr))] gap-10 justify-center">
                {restaurantsData.map((rest) => (
                    <Link href={"hotels/" + rest.name.toLowerCase()} className="content" key={rest.name}>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden h-full transform hover:-translate-y-2">
                            <Image src={rest.image} alt={rest.name} className="w-full h-50 object-cover" />
                            <div className="text-left px-4 py-5">
                                <h3 className=' text-xl font-semibold text-gray-800 m-0'>{rest.name}</h3>
                                <p className='text-sm text-gray-600 my-1'>{rest.foodtype}</p>
                                <span className="inline-block mt-2 bg-[#6a11cb] text-white px-3 py-1 rounded-full text-sm">{rest.rating}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default PopularRestaurants;