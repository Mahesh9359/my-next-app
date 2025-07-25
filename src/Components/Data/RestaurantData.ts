export type RestaurantMenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type RestaurantData = {
  [restaurantName: string]: RestaurantMenuItem[];
};

export const restaurantsData: RestaurantData = {
  "the south special": [
    {
      id: 21,
      name: "Masala Dosa",
      price: 120,
      description: "Crispy rice crepe filled with spiced potatoes",
      image: "https://img.freepik.com/free-photo/masala-dosa-south-indian-food_466689-74646.jpg"
    },
    {
      id: 22,
      name: "Idli Sambar",
      price: 80,
      description: "Steamed rice cakes with lentil soup",
      image: "https://img.freepik.com/free-photo/idli-sambar-traditional-south-indian-breakfast_466689-74652.jpg"
    },
    {
      id: 23,
      name: "Vada",
      price: 60,
      description: "Savory fried lentil donut with coconut chutney",
      image: "https://img.freepik.com/free-photo/vada-pav-indian-street-food_466689-74648.jpg"
    },
    {
      id: 24,
      name: "Uttapam",
      price: 100,
      description: "Thick pancake with onions and tomatoes",
      image: "https://img.freepik.com/free-photo/uttapam-south-indian-dish_466689-74650.jpg"
    },
    {
      id: 25,
      name: "Meals Plate",
      price: 150,
      description: "Traditional thali with rice, sambar, rasam",
      image: "https://img.freepik.com/free-photo/south-indian-thali-meal_466689-74654.jpg"
    },
    {
      id: 26,
      name: "Filter Coffee",
      price: 40,
      description: "Strong South Indian style coffee",
      image: "https://img.freepik.com/free-photo/indian-filter-coffee_466689-74656.jpg"
    },
    {
      id: 27,
      name: "Pongal",
      price: 90,
      description: "Comforting rice and lentil dish",
      image: "https://img.freepik.com/free-photo/pongal-south-indian-dish_466689-74658.jpg"
    }
  ],

  "pizza studio": [
    {
      id: 28,
      name: "Margherita Pizza",
      price: 199,
      description: "Classic pizza with tomato sauce and mozzarella",
      image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg"
    },
    {
      id: 29,
      name: "Pepperoni Pizza",
      price: 249,
      description: "With extra pepperoni and cheese",
      image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2159.jpg"
    },
    {
      id: 30,
      name: "Veggie Supreme",
      price: 279,
      description: "Loaded with fresh vegetables",
      image: "https://img.freepik.com/free-photo/flat-lay-pizza-slice-with-pepper-tomato_23-2148747628.jpg"
    },
    {
      id: 31,
      name: "BBQ Chicken Pizza",
      price: 299,
      description: "Smoky BBQ sauce with grilled chicken",
      image: "https://img.freepik.com/free-photo/flat-lay-homemade-chicken-pizza-with-mushrooms-peppers_23-2148766557.jpg"
    },
    {
      id: 32,
      name: "Garlic Bread",
      price: 99,
      description: "Freshly baked with garlic butter",
      image: "https://img.freepik.com/free-photo/garlic-bread-with-parsley-white-background_123827-20848.jpg"
    },
    {
      id: 33,
      name: "Cheesy Pasta",
      price: 179,
      description: "Penne in creamy cheese sauce",
      image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg"
    },
    {
      id: 34,
      name: "Chocolate Lava Cake",
      price: 129,
      description: "Warm chocolate cake with molten center",
      image: "https://img.freepik.com/free-photo/chocolate-lava-cake-with-ice-cream_144627-27294.jpg"
    },
    {
      id: 35,
      name: "Mojito (Mocktail)",
      price: 89,
      description: "Refreshing mint lime drink",
      image: "https://img.freepik.com/free-photo/mojito-cocktail-with-lime-mint_140725-1140.jpg"
    }
  ],

  "burger nation": [
    {
      id: 36,
      name: "Classic Cheeseburger",
      price: 129,
      description: "Beef patty with cheese, lettuce, and special sauce",
      image: "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg"
    },
    {
      id: 37,
      name: "Bacon Burger",
      price: 159,
      description: "With crispy bacon and cheddar cheese",
      image: "https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-sesame-bun_90220-1192.jpg"
    },
    {
      id: 38,
      name: "Veggie Burger",
      price: 119,
      description: "Plant-based patty with fresh veggies",
      image: "https://img.freepik.com/free-photo/vegetarian-burger-prepared-with-chickpeas_627-2-1198.jpg"
    },
    {
      id: 39,
      name: "Chicken Burger",
      price: 139,
      description: "Grilled chicken with mayo and lettuce",
      image: "https://img.freepik.com/free-photo/chicken-burger-with-lettuce-tomato-onion_1339-88423.jpg"
    },
    {
      id: 40,
      name: "Double Patty Burger",
      price: 189,
      description: "Two beef patties with extra cheese",
      image: "https://img.freepik.com/free-photo/double-hamburger-with-cheese-bacon_123827-21392.jpg"
    },
    {
      id: 41,
      name: "French Fries",
      price: 79,
      description: "Crispy golden fries",
      image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg"
    },
    {
      id: 42,
      name: "Onion Rings",
      price: 89,
      description: "Crispy battered onion rings",
      image: "https://img.freepik.com/free-photo/crispy-onion-rings-plate_181624-23496.jpg"
    },
    {
      id: 43,
      name: "Milk Shake",
      price: 99,
      description: "Vanilla, chocolate or strawberry",
      image: "https://img.freepik.com/free-photo/strawberry-milkshake-with-whipped-cream_144627-34281.jpg"
    }
  ],

  "sweet treats": [
    {
      id: 44,
      name: "Chocolate Cake",
      price: 149,
      description: "Rich chocolate layered cake",
      image: "https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_114579-1300.jpg"
    },
    {
      id: 45,
      name: "Red Velvet Cupcake",
      price: 79,
      description: "Cream cheese frosted cupcake",
      image: "https://img.freepik.com/free-photo/red-velvet-cupcake-with-cream-cheese-frosting_114579-1316.jpg"
    },
    {
      id: 46,
      name: "Tiramisu",
      price: 129,
      description: "Classic Italian coffee-flavored dessert",
      image: "https://img.freepik.com/free-photo/tiramisu-cake-with-cocoa-powder_114579-1319.jpg"
    },
    {
      id: 47,
      name: "Macarons (Box of 6)",
      price: 199,
      description: "Assorted French macarons",
      image: "https://img.freepik.com/free-photo/colorful-macarons-plate_114579-1309.jpg"
    },
    {
      id: 48,
      name: "Cheesecake",
      price: 139,
      description: "New York style with berry compote",
      image: "https://img.freepik.com/free-photo/cheesecake-with-berries_114579-1321.jpg"
    },
    {
      id: 49,
      name: "Donuts (Box of 4)",
      price: 149,
      description: "Glazed, chocolate, and sprinkled",
      image: "https://img.freepik.com/free-photo/donuts-with-sprinkles_114579-1323.jpg"
    },
    {
      id: 50,
      name: "Hot Chocolate",
      price: 99,
      description: "Rich and creamy with marshmallows",
      image: "https://img.freepik.com/free-photo/hot-chocolate-with-marshmallows_114579-1325.jpg"
    },
    {
      id: 51,
      name: "Ice Cream Sundae",
      price: 119,
      description: "Vanilla ice cream with toppings",
      image: "https://img.freepik.com/free-photo/ice-cream-sundae-with-whipped-cream_114579-1327.jpg"
    },
    {
      id: 52,
      name: "Brownie",
      price: 89,
      description: "Fudgy chocolate brownie",
      image: "https://img.freepik.com/free-photo/chocolate-brownie-with-ice-cream_114579-1329.jpg"
    }
  ]
};
