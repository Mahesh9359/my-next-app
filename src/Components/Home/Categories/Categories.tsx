import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pizzaImg from 'public/icons/pizza.png';
import dosaImg from 'public/icons/masala-dosa.png';
import dessertsImg from 'public/icons/dessert.png';
import burgersImg from 'public/icons/burger.png';
import drinksImg from 'public/icons/soda.png';
import snacksImg from 'public/icons/snack.png';


const categories = [
    { name: 'Pizza', image: pizzaImg },
    { name: 'Dosa', image: dosaImg },
    { name: 'Desserts', image: dessertsImg },
    { name: 'Burgers', image: burgersImg },
    { name: 'Drinks', image: drinksImg },
    { name: 'Snacks', image: snacksImg }
];

const Categories: React.FC = () => {
    return (
        <section className="px-18 py-20 bg-[linear-gradient(to right, #fdfbfb, #ebedee)] text-center">
            <h2 className="text-4xl font-extrabold  text-[#333] mb-12">🍕 Popular Food Categories</h2>
            <div className="grid [grid-template-columns:repeat(auto-fit,_minmax(140px,_1fr))] gap-10 justify-center">
                {categories.map((Category, index) => (
                    <Link href={"category/" + Category.name.toLowerCase()} className="decoration-none text-inherit block w-full max-w-46" key={index}>
                        <div className="bg-white rounded-[20px] p-[25px_15px] shadow-md transition-transform duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl group" >
                            <Image src={Category.image} alt={Category.name} className="w-[60px] h-[60px] mb-[15px] mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" />
                            <h3 className="text-[1.1rem] text-[#444] m-0">{Category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Categories;