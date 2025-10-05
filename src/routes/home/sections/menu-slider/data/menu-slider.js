import pizzaOne375 from "../assets/pizza-one-375.webp";
import pizzaTwo375 from "../assets/pizza-two-375.webp";
import pizzaThree375 from "../assets/pizza-three-375.webp";
import SalmonPoke375 from "../assets/sushi-one-375.webp";
import VeggiePoke375 from "../assets/sushi-two-375.webp";
import MiniSalmon375 from "../assets/sushi-three-375.webp";
import ChickenAlfredo375 from "../assets/pasta-one-375.webp";
import AllaGricia375 from "../assets/pasta-two-375.webp";
import SheetPan375 from "../assets/pasta-three-375.webp";

import pizzaOne700 from "../assets/pizza-one-700.webp";
import pizzaTwo700 from "../assets/pizza-two-700.webp";
import pizzaThree700 from "../assets/pizza-three-700.webp";
import SalmonPoke700 from "../assets/sushi-one-700.webp";
import VeggiePoke700 from "../assets/sushi-two-700.webp";
import MiniSalmon700 from "../assets/sushi-three-700.webp";
import ChickenAlfredo700 from "../assets/pasta-one-700.webp";
import AllaGricia700 from "../assets/pasta-two-700.webp";
import SheetPan700 from "../assets/pasta-three-700.webp";

const menuSliderCategories = [
  {
    name: "pizza",
    id: "pizza",
  },
  {
    name: "sushi",
    id: "sushi",
  },
  {
    name: "pasta",
    id: "pasta",
  },
];
const productsData = [
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    description: "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
    price: (5).toFixed(2),
    img375: pizzaOne375,
    img700: pizzaOne700,
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    description: "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
    price: (10).toFixed(2),
    img375: pizzaTwo375,
    img700: pizzaTwo700,
    category: "pizza",
  },
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    description: "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
    price: (5).toFixed(2),
    img375: pizzaThree375,
    img700: pizzaThree700,
    category: "pizza",
  },
  {
    id: "salmon-poke",
    img375: SalmonPoke375,
    img700: SalmonPoke700,
    name: "Salmon Poke",
    description: "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    price: (10).toFixed(2),
    category: "sushi",
  },

  {
    id: "veggie-poke",
    img375: VeggiePoke375,
    img700: VeggiePoke700,
    name: "Veggie Poke",
    description: "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    price: (8).toFixed(2),
    category: "sushi",
  },
  {
    id: "mini-salmon-set-22-pcs",
    img375: MiniSalmon375,
    img700: MiniSalmon700,
    name: "Mini Salmon Set",
    description: "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    price: (35).toFixed(2),
    category: "sushi",
  },
  {
    id: "chicken-alfredo",
    img375: ChickenAlfredo375,
    img700: ChickenAlfredo700,
    name: "Chicken Alfredo",
    description: "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    price: (2).toFixed(2),
    category: "pasta",
  },
  {
    id: "pasta-alla-gricia",
    img375: AllaGricia375,
    img700: AllaGricia700,
    name: "Pasta Alla Gricia",
    description: "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    price: (9).toFixed(2),
    category: "pasta",
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    img375: SheetPan375,
    img700: SheetPan700,
    name: "Burrata Caprese Gnocchi",
    description: "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    price: (5).toFixed(2),
    category: "pasta",
  },
];

export { productsData, menuSliderCategories };
