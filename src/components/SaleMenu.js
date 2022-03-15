


import CheesePizza from "../images/cheese-pizza.avif";
import VeggiePizza from "../images/veggie-pizza.avif";
import PepperoniPizza from "../images/pepperoni-pizza.avif";
import MeatPizza from "../images/meat-pizza.avif";
import MargheritaPizza from "../images/margherita-pizza.avif";
import BBQPizza from "../images/BBQ-chicken-pizza.avif";
import AllaPalla from "../images/pizza-alla-pala.avif";
import Prosciutto from "../images/Prosciutto-e-Funghi-Pizza .avif";
import DetroitStyle from "../images/Detroit-Style-pizza.avif";
import GarlicFingers from "../images/Garlic-Fingers-pizza.avif";
import StLous from "../images/St-Louis-Style-Pizza.avif";
import Rustica from "../images/Pizza-Rustica.avif";
import Genovese from "../images/Genovese.avif";
import Efichi from "../images/Pizza-e-fichi.avif";
import Apizza from "../images/Apizza.avif";
import StuffedPizza from "../images/Stuffed-Pizza.avif";
import Pugliese from "../images/Pugliese.avif";
import TomatoPie from "../images/Tomato-Pie.avif";
import Fugaza from "../images/fugazza.avif";
import DiZucca from "../images/di-zucca.avif";
import Fugazeta from "../images/Fugazzeta.avif";
import Carbonara from "../images/carbonara.avif";
import GranmaPie from "../images/Grandma-Pie.avif";
import Padellino from "../images/padellino.avif";
import CaliforniaStyle from "../images/California-Style.avif";
import Fritta from "../images/fritta.avif";
import Romana from "../images/romana.avif";
import ThinCrust from "../images/ Thin-Crust.avif";
import GreekStyle from "../images/Greek-Style.avif";
import PizzaRomana from "../images/PizzaRomana.avif";

const SaleMenu = {
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
      "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
    PizzaPrice: (10).toFixed(2),
  },
  7: {
    PizzaImg: AllaPalla,
    PizzaName: "Pizza alla pala",
    PizzaIngredients: "Cheese, cherry tomatoes, arugula, olive oil, yeast.",
    PizzaPrice: (12).toFixed(2),
  },
  8: {
    PizzaImg: Prosciutto,
    PizzaName: "Prosciutto e Funghi Pizza",
    PizzaIngredients:
      "Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.",
    PizzaPrice: (8).toFixed(2),
  },
  9: {
    PizzaImg: DetroitStyle,
    PizzaName: "Detroit-Style Pizza",
    PizzaIngredients:
      "Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.",
    PizzaPrice: (11).toFixed(2),
  },
  10: {
    PizzaImg: GarlicFingers,
    PizzaName: "Garlic Fingers",
    PizzaIngredients:
      "Bread flour, mozzarella cheese, butter, olive oil, instant yeast.",
    PizzaPrice: (7).toFixed(2),
  },
  11: {
    PizzaImg: StLous,
    PizzaName: "St. Louis-Style Pizza",
    PizzaIngredients:
      "Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.",
    PizzaPrice: (13).toFixed(2),
  },
  12: {
    PizzaImg: Rustica,
    PizzaName: "Pizza Rustica",
    PizzaIngredients: "Prosciutto, pepperoni, mozzarella, crust, eggs.",
    PizzaPrice: (13).toFixed(2),
  },
  13: {
    PizzaImg: Genovese,
    PizzaName: "Pizza pesto Genovese",
    PizzaIngredients:
      "Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.",
    PizzaPrice: (13).toFixed(2),
  },
  14: {
    PizzaImg: Efichi,
    PizzaName: "Pizza e fichi",
    PizzaIngredients:
      "Coconut flour, truffle oil, fig jam, cheese, prosciutto.",
    PizzaPrice: (12).toFixed(2),
  },
  15: {
    PizzaImg: Apizza,
    PizzaName: "Apizza",
    PizzaIngredients:
      "Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.",
    PizzaPrice: (11).toFixed(2),
  },
  16: {
    PizzaImg: StuffedPizza,
    PizzaName: "Stuffed Pizza",
    PizzaIngredients:
      "Hot italian sausage, sweet italian sausage, pizza dough, red pepper flakes, olive oil.",
    PizzaPrice: (13).toFixed(2),
  },
  17: {
    PizzaImg: Pugliese,
    PizzaName: "Pugliese Pizza",
    PizzaIngredients:
      "Sloppy joe, banana peppers, ground beef, pizza dough, ricotta cheese.",
    PizzaPrice: (9).toFixed(2),
  },
  18: {
    PizzaImg: TomatoPie,
    PizzaName: "Tomato Pie",
    PizzaIngredients:
      "Pizza dough, san marzano, red pepper flakes, pizza stone, olive oil.",
    PizzaPrice: (15).toFixed(2),
  },
  19: {
    PizzaImg: Fugaza,
    PizzaName: "Fugazza",
    PizzaIngredients: "Mozzarella cheese, sugar, dry yeast, all purpose flour.",
    PizzaPrice: (10).toFixed(2),
  },
  20: {
    PizzaImg: DiZucca,
    PizzaName: "Pizza fiori di zucca",
    PizzaIngredients:
      "Zucchini blossoms, pizza dough, buffalo mozzarella, olive oil.",
    PizzaPrice: (8).toFixed(2),
  },
  21: {
    PizzaImg: Fugazeta,
    PizzaName: "Fugazzeta",
    PizzaIngredients:
      "Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.",
    PizzaPrice: (9).toFixed(2),
  },
  22: {
    PizzaImg: Carbonara,
    PizzaName: "Pizza Carbonara",
    PizzaIngredients:
      "Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.",
    PizzaPrice: (8).toFixed(2),
  },
  23: {
    PizzaImg: GranmaPie,
    PizzaName: "Grandma Pie",
    PizzaIngredients:
      "Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.",
    PizzaPrice: (11).toFixed(2),
  },
  24: {
    PizzaImg: Padellino,
    PizzaName: "Pizza al padellino",
    PizzaIngredients:
      "Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper",
    PizzaPrice: (10).toFixed(2),
  },
  25: {
    PizzaImg: CaliforniaStyle,
    PizzaName: "California-Style Pizza",
    PizzaIngredients:
      "Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.",
    PizzaPrice: (15).toFixed(2),
  },
  26: {
    PizzaImg: Fritta,
    PizzaName: "Pizza fritta",
    PizzaIngredients:
      "Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.",
    PizzaPrice: (8).toFixed(2),
  },
  27: {
    PizzaImg: Romana,
    PizzaName: "Pinsa romana",
    PizzaIngredients:
      "Rice flour, olive oil, plain flour, sea salt, dried yeast.",
    PizzaPrice: (5).toFixed(2),
  },
  28: {
    PizzaImg: ThinCrust,
    PizzaName: "Chicago Thin Crust Pizza",
    PizzaIngredients:
      "Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.",
    PizzaPrice: (13).toFixed(2),
  },
  29: {
    PizzaImg: GreekStyle,
    PizzaName: "Greek-Style Pizza",
    PizzaIngredients:
      "White cheddar, sauce, tomato paste, bread flour, red pepper flakes.",
    PizzaPrice: (8).toFixed(2),
  },
  30: {
    PizzaImg: PizzaRomana,
    PizzaName: "Pizza Romana",
    PizzaIngredients: "Fresh mozzarella, bread flour, tomato, olive oil, yeast",
    PizzaPrice: (11).toFixed(2),
  },
};

export default SaleMenu;
