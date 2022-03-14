import CheesePizza from "../images/cheese-pizza.avif";
import VeggiePizza from "../images/veggie-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import MeatPizza from "../images/meat-pizza.avif";
import MargheritaPizza from "../images/margherita-pizza.avif";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";

const PizzaMenu = {
  1: {
    PizzaImg: CheesePizza,
    PizzaName: "Cheese Pizza",
    PizzaIngredients: "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
    PizzaPrice: (2).toFixed(2),
  },

  2: {
    PizzaImg: VeggiePizza,
    PizzaName: "Veggie Pizza",
    PizzaIngredients:
      "Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.",
    PizzaPrice: (9).toFixed(2),
  },
  3: {
    PizzaImg: PepperoniPizza,
    PizzaName: "Pepperoni Pizza",
    PizzaIngredients:
      "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
    PizzaPrice: (5).toFixed(2),
  },
  4: {
    PizzaImg: MeatPizza,
    PizzaName: "Meat Pizza",
    PizzaIngredients:
      "Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.",
    PizzaPrice: (10).toFixed(2),
  },
  5: {
    PizzaImg: MargheritaPizza,
    PizzaName: "Margherita Pizza",
    PizzaIngredients:
      "Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.",
    PizzaPrice: (8).toFixed(2),
  },
  6: {
    PizzaImg: BBQPizza,
    PizzaName: "BBQ Chicken Pizza",
    PizzaIngredients:
      "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese",
    PizzaPrice: (10).toFixed(2),
  },
};

export default PizzaMenu;
