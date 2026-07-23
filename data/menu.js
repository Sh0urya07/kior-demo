/* KIOR — The Door Cafe · Single source of truth for the menu.
   Used by both the main website and the digital menu site.
   Prices in INR. All items vegetarian. */
window.KIOR_MENU = {
  currency: "₹",
  categories: [
    {
      id: "hot-coffee", name: "Hot Coffee", kicker: "Brewed warm",
      items: [
        { n: "Americano", p: 120 },
        { n: "Cafe Latte", p: 120 },
        { n: "Cappuccino", p: 120 },
        { n: "Mocha", p: 140 },
        { n: "Flat White", p: 140 },
        { n: "Hazelnut Cappuccino", p: 160 },
        { n: "Cinnamon Cappuccino", p: 160 },
        { n: "Tiramisu Cappuccino", p: 160 },
        { n: "Biscoff Cappuccino", p: 180 },
        { n: "Hot Chocolate", p: 210 }
      ]
    },
    {
      id: "iced-coffee", name: "Iced Coffee", kicker: "On the rocks",
      items: [
        { n: "On The Rockespresso", p: 99 },
        { n: "Ice Americano", p: 120 },
        { n: "Ice Latte", p: 140, tag: "Best seller" },
        { n: "Ice Mocha", p: 140 },
        { n: "Affogato", p: 140 },
        { n: "Cranberry Espresso", p: 170, tag: "Best seller" },
        { n: "Vietnamese Iced Coffee", p: 170 },
        { n: "Ginger Ale Espresso", p: 199 },
        { n: "Tonic Water Espresso", p: 199 }
      ]
    },
    {
      id: "frappe", name: "Frappe", kicker: "Blended & cold",
      items: [
        { n: "Classic Frappe", p: 140 },
        { n: "Dark Frappe", p: 160 },
        { n: "Hazelnut Frappe", p: 160 },
        { n: "Tiramisu Frappe", p: 160 },
        { n: "Irish Frappe", p: 160 },
        { n: "Mocha Frappe", p: 160 },
        { n: "Cinnamon Frappe", p: 160 },
        { n: "Caramel Frappe", p: 170 },
        { n: "Oreo Frappe", p: 180 },
        { n: "Double Choco Chip Frappe", p: 180 },
        { n: "Choco Frappe", p: 180 },
        { n: "Brownie Frappe", p: 180 },
        { n: "Strawberry Frappe", p: 180 },
        { n: "Nutella Frappe", p: 200 }
      ]
    },
    {
      id: "shakes", name: "Shakes", kicker: "Thick & creamy",
      items: [
        { n: "Vanilla Shake", p: 120 },
        { n: "Butterscotch Shake", p: 130 },
        { n: "Raspberry Shake", p: 140 },
        { n: "Blueberry Shake", p: 140 },
        { n: "Oreo Shake", p: 170 },
        { n: "KitKat Shake", p: 170 },
        { n: "Chocolate Shake", p: 170 },
        { n: "Black Current Shake", p: 180 },
        { n: "Brownie Shake", p: 180 },
        { n: "Biscoff Shake", p: 200 },
        { n: "Strawberry Shake", p: 200 },
        { n: "Nutella Shake", p: 210 },
        { n: "Ferrero Rocher Shake", p: 230 }
      ]
    },
    {
      id: "mocktails", name: "Mocktails", kicker: "Shaken, zero proof",
      items: [
        { n: "Fresh Nimbu Pani", p: 80 },
        { n: "Fresh Lemonade", p: 90 },
        { n: "Virgin Mojito", p: 100 },
        { n: "Watermelon Mojito", p: 120 },
        { n: "Mint Mojito", p: 120 },
        { n: "Green Apple Mojito", p: 120 },
        { n: "Blueberry Mojito", p: 130 },
        { n: "Strawberry Mojito", p: 130 },
        { n: "Spice Guava Mojito", p: 140 },
        { n: "Pina Colada Mojito", p: 140 },
        { n: "Black Current Mojito", p: 140 },
        { n: "Blue Lagoon", p: 140 }
      ]
    },
    {
      id: "iced-tea", name: "Iced Tea", kicker: "Cool & fruity",
      items: [
        { n: "Lemon Iced Tea", p: 99 },
        { n: "Peach Iced Tea", p: 120 },
        { n: "Blueberry Iced Tea", p: 120 },
        { n: "Cranberry Iced Tea", p: 120 },
        { n: "Strawberry Iced Tea", p: 120 },
        { n: "Black Current Iced Tea", p: 130 },
        { n: "Watermelon Iced Tea", p: 130 },
        { n: "Guava Iced Tea", p: 130 },
        { n: "Green Apple Iced Tea", p: 130 },
        { n: "Red Bull Ice Tea", p: 180 }
      ]
    },
    {
      id: "tea", name: "Tea", kicker: "Simple & warm",
      items: [
        { n: "Black Tea", p: 49 },
        { n: "Green Tea", p: 59 },
        { n: "Hot Lemon Tea", p: 80 },
        { n: "Honey Lemon Tea", p: 90 }
      ]
    },
    {
      id: "soups", name: "Soups", kicker: "Bowls of warmth",
      items: [
        { n: "Tomato Soup", p: 89 },
        { n: "Sweet Corn Soup", p: 99 },
        { n: "Manchow Soup", p: 119 },
        { n: "Creamy Mushroom", p: 149 },
        { n: "Burnt Garlic Soup", p: 149 }
      ]
    },
    {
      id: "pasta", name: "Pasta", kicker: "Twirl-worthy",
      items: [
        { n: "Arrabiata Pasta", p: 210 },
        { n: "Alfredo Pasta", p: 230 },
        { n: "Hawa Mahal Pasta", p: 250, tag: "Signature" },
        { n: "Creamy Pesto Pasta", p: 270 }
      ]
    },
    {
      id: "maggie", name: "Maggie", kicker: "Comfort in a bowl",
      items: [
        { n: "Ghar Ki Maggie", p: 79 },
        { n: "Vegetable Maggie", p: 99 },
        { n: "Tandoori Maggie", p: 120 },
        { n: "Peri-Peri Maggie", p: 120 },
        { n: "Cheese Maggie", p: 140 },
        { n: "Cheese Corn Maggie", p: 150 },
        { n: "Double Tadka Maggie", p: 160 },
        { n: "Korean Maggie", p: 170 }
      ]
    },
    {
      id: "street-food", name: "Street Food", kicker: "Desi favourites",
      items: [
        { n: "Vada Pav", p: 70 },
        { n: "Cheesy Vada Pav", p: 90 },
        { n: "Bhel Puri", p: 90 },
        { n: "Spicy Bhel Puri", p: 110 },
        { n: "Nachos Bhel Puri", p: 130 },
        { n: "Mini Samosa Platter", p: 130 },
        { n: "Veg Pakoda", p: 140 },
        { n: "Paneer Pakoda", p: 160 }
      ]
    },
    {
      id: "wraps", name: "Wraps", kicker: "Rolled & ready",
      items: [
        { n: "Healthy Veggie Wrap", p: 99 },
        { n: "Falafel Wrap", p: 139 },
        { n: "Cheese Corn Wrap", p: 139 },
        { n: "Chilly Paneer Wrap", p: 139 },
        { n: "Mexican Wrap", p: 159 }
      ]
    },
    {
      id: "burger", name: "Burger", kicker: "Stacked high",
      items: [
        { n: "Crispy Potato Burger", p: 79 },
        { n: "Veg Burger", p: 89 },
        { n: "Paneer Burger", p: 110 },
        { n: "Peri-Peri Paneer Burger", p: 120 },
        { n: "Tandoori Paneer Burger", p: 120 },
        { n: "Cheese Loaded Burger", p: 140 },
        { n: "Mexican Burger", p: 160 }
      ]
    },
    {
      id: "fries", name: "Fries", kicker: "Crisp & golden",
      items: [
        { n: "Salted Fries", p: 99 },
        { n: "Peri-Peri Fries", p: 120 },
        { n: "Peri-Peri Loaded Fries", p: 160 },
        { n: "Cheese Baked Fries", p: 180 }
      ]
    },
    {
      id: "pizza", name: "Pizza", kicker: "Wood-fired mood",
      items: [
        { n: "Margherita Pizza", p: 220 },
        { n: "OTC Pizza", p: 240 },
        { n: "Farm House Pizza", p: 260 },
        { n: "Paneer Paprika Pizza", p: 280 },
        { n: "Mushroom Cheese Corn Pizza", p: 300 },
        { n: "Cheese Burst Pizza", p: 320 }
      ]
    },
    {
      id: "nachos", name: "Nachos", kicker: "Loaded & sharp",
      items: [
        { n: "Baked Nachos", p: 149 },
        { n: "Cheesy Corn Nachos", p: 169 },
        { n: "Jalapeno & Olives Nachos", p: 189 }
      ]
    },
    {
      id: "chinese", name: "Chinese", kicker: "Wok-tossed",
      items: [
        { n: "Fried Momos", p: 110 },
        { n: "Steam Momos", p: 110 },
        { n: "Veg Desi Noodles", p: 140 },
        { n: "Hakka Noodles", p: 150 },
        { n: "Kurkure Momos", p: 150 },
        { n: "Chilly Garlic Noodles", p: 170 },
        { n: "Spring Roll", p: 180 },
        { n: "Crispy Corn", p: 180, tag: "Best seller" },
        { n: "Chilly Paneer", p: 180 },
        { n: "Veg Fingers", p: 180 },
        { n: "Cheese Corn Triangle", p: 180 },
        { n: "Hara Bhara Kebab", p: 180 },
        { n: "Potato Veggies", p: 180 },
        { n: "Honey Chilly Potato", p: 180 },
        { n: "Cheese Balls", p: 180 },
        { n: "Chilli Potato", p: 180 }
      ]
    },
    {
      id: "sandwich", name: "Sandwich", kicker: "Grilled & baked",
      items: [
        { n: "Pizza Sandwich", p: 79 },
        { n: "Bombay Masala Sandwich", p: 79 },
        { n: "Veg Grilled Sandwich", p: 99 },
        { n: "Mexican Cheese Corn Sandwich", p: 139 },
        { n: "Double Layer Baked Sandwich", p: 149 },
        { n: "Tandoori Paneer Sandwich", p: 159 },
        { n: "Paneer Tadka Sandwich", p: 159 },
        { n: "Mushroom Sandwich", p: 169 },
        { n: "Nutella Sandwich", p: 189 }
      ]
    },
    {
      id: "breads", name: "Breads", kicker: "Fresh from the oven",
      items: [
        { n: "Bread Butter", p: 60 },
        { n: "Maska Bun", p: 60 },
        { n: "Bun Samosa", p: 80 },
        { n: "Garlic Bread", p: 99 },
        { n: "Cheese Chilly Toast", p: 120 },
        { n: "Cheese Garlic Bread", p: 140 }
      ]
    },
    {
      id: "dessert", name: "Dessert", kicker: "Sweet endings",
      items: [
        { n: "Brownie With Ice Cream", p: 149 },
        { n: "Walnut Hazelnut Brownie", p: 169 },
        { n: "Chocolate Sizzling Brownie", p: 189, tag: "Sizzling" }
      ]
    }
  ]
};
