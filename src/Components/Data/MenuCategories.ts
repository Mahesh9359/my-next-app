export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    category: "Pizza",
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato sauce and fresh mozzarella with basil.",
        price: 199,
        rating: 4.6,
        image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg"
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Loaded with spicy pepperoni slices and cheese.",
        price: 249,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2159.jpg"
      },
      {
        id: 3,
        name: "Veggie Supreme",
        description: "Bell peppers, olives, onions, mushrooms & more.",
        price: 279,
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/flat-lay-pizza-slice-with-pepper-tomato_23-2148747628.jpg"
      },
      {
        id: 4,
        name: "BBQ Chicken Pizza",
        description: "Grilled chicken, BBQ sauce, onions & cilantro.",
        price: 299,
        rating: 4.8,
        image: "https://img.freepik.com/free-photo/flat-lay-homemade-chicken-pizza-with-mushrooms-peppers_23-2148766557.jpg"
      },
      {
        id: 5,
        name: "Four Cheese Pizza",
        description: "Mozzarella, cheddar, parmesan & blue cheese blend.",
        price: 319,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/top-view-four-cheese-pizza-with-basil-parmesan-mozzarella-blue-cheese_141793-2157.jpg"
      }
    ]
  },
  {
    category: "Dosa",
    items: [
      {
        id: 6,
        name: "Masala Dosa",
        description: "Crispy rice crepe with potato filling and chutney.",
        price: 120,
        rating: 4.8,
        image: "https://img.freepik.com/free-photo/masala-dosa-south-indian-food_466689-74646.jpg"
      },
      {
        id: 7,
        name: "Rava Dosa",
        description: "Thin semolina dosa served with chutney and sambar.",
        price: 110,
        rating: 4.6,
        image: "https://img.freepik.com/free-photo/uttapam-south-indian-dish_466689-74650.jpg"
      },
      {
        id: 8,
        name: "Paneer Dosa",
        description: "Dosa stuffed with spiced cottage cheese.",
        price: 150,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/paneer-dosa-south-indian-food_466689-74644.jpg"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        id: 9,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center.",
        price: 129,
        rating: 4.8,
        image: "https://img.freepik.com/free-photo/chocolate-lava-cake-with-ice-cream_144627-27294.jpg"
      },
      {
        id: 10,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee & mascarpone.",
        price: 129,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/tiramisu-cake-with-cocoa-powder_114579-1319.jpg"
      },
      {
        id: 11,
        name: "Cheesecake",
        description: "New York style with berry compote.",
        price: 139,
        rating: 4.6,
        image: "https://img.freepik.com/free-photo/cheesecake-with-berries_114579-1321.jpg"
      }
    ]
  },
  {
    category: "Burgers",
    items: [
      {
        id: 12,
        name: "Classic Cheeseburger",
        description: "Beef patty with cheese, lettuce & special sauce.",
        price: 129,
        rating: 4.6,
        image: "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg"
      },
      {
        id: 13,
        name: "Bacon Burger",
        description: "Crispy bacon with cheddar cheese.",
        price: 159,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-sesame-bun_90220-1192.jpg"
      },
      {
        id: 14,
        name: "Veggie Burger",
        description: "Plant-based patty with fresh veggies.",
        price: 119,
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/vegetarian-burger-prepared-with-chickpeas_627-2-1198.jpg"
      }
    ]
  },
  {
    category: "Drinks",
    items: [
      {
        id: 15,
        name: "Mojito (Mocktail)",
        description: "Mint, lime, sugar & soda.",
        price: 89,
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/mojito-cocktail-with-lime-mint_140725-1140.jpg"
      },
      {
        id: 16,
        name: "Masala Chai",
        description: "Spiced Indian tea with milk.",
        price: 49,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/indian-masala-tea-cup_141793-1054.jpg"
      },
      {
        id: 17,
        name: "Filter Coffee",
        description: "South Indian style strong coffee.",
        price: 40,
        rating: 4.6,
        image: "https://img.freepik.com/free-photo/indian-filter-coffee_466689-74656.jpg"
      }
    ]
  },
  {
    category: "Snacks",
    items: [
      {
        id: 18,
        name: "French Fries",
        description: "Crispy golden fries with ketchup.",
        price: 79,
        rating: 4.5,
        image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg"
      },
      {
        id: 19,
        name: "Onion Rings",
        description: "Crispy battered onion rings.",
        price: 89,
        rating: 4.4,
        image: "https://img.freepik.com/free-photo/crispy-onion-rings-plate_181624-23496.jpg"
      },
      {
        id: 20,
        name: "Paneer Tikka",
        description: "Spiced grilled cottage cheese cubes.",
        price: 149,
        rating: 4.7,
        image: "https://img.freepik.com/free-photo/paneer-tikka-masala_141793-1900.jpg"
      }
    ]
  }
];
