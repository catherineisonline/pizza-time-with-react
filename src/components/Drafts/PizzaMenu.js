import CheesePizza from "../images/cheese-pizza.jpg";
import VeggiePizza from "../images/veggie-pizza.jpg";
import PepperoniPizza from "../images/pepperoni-pizza.jpg";
import MeatPizza from "../images/meat-pizza.jpg";
import MargheritaPizza from "../images/margherita-pizza.jpg";
import BBQPizza from "../images/BBQ-chicken-pizza.jpg";
import AllaPalla from "../images/pizza-alla-pala.jpg";
import Prosciutto from "../images/Prosciutto-e-Funghi-Pizza.jpg";
import DetroitStyle from "../images/Detroit-Style-pizza.jpg";
import GarlicFingers from "../images/Garlic-Fingers-pizza.jpg";
import StLous from "../images/St-Louis-Style-Pizza.jpg";
import Rustica from "../images/Pizza-Rustica.jpg";
import Genovese from "../images/Genovese.jpg";
import Efichi from "../images/Pizza-e-fichi.jpg";
import Apizza from "../images/Apizza.jpg";
import StuffedPizza from "../images/Stuffed-Pizza.jpg";
import Pugliese from "../images/Pugliese.jpg";
import TomatoPie from "../images/Tomato-Pie.jpg";
import Fugaza from "../images/fugazza.jpg";
import DiZucca from "../images/di-zucca.jpg";
import Fugazeta from "../images/Fugazzeta.jpg";
import Carbonara from "../images/carbonara.jpg";
import GranmaPie from "../images/Grandma-Pie.jpg";
import Padellino from "../images/padellino.jpg";
import CaliforniaStyle from "../images/California-Style.jpg";
import Fritta from "../images/fritta.jpg";
import Romana from "../images/romana.jpg";
import ThinCrust from "../images/Thin-Crust.jpg";
import GreekStyle from "../images/Greek-Style.jpg";
import PizzaRomana from "../images/PizzaRomana.jpg";

const PizzaMenu = {
  1: {
    ItemImg: CheesePizza,
    ItemName: "Cheese Pizza",
    ItemIngredients: "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
    ItemPrice: (2).toFixed(2),
  },

  2: {
    ItemImg: VeggiePizza,
    ItemName: "Veggie Pizza",
    ItemIngredients:
      "Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.",
    ItemPrice: (9).toFixed(2),
  },
  3: {
    ItemImg: PepperoniPizza,
    ItemName: "Pepperoni Pizza",
    ItemIngredients:
      "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
    ItemPrice: (5).toFixed(2),
  },
  4: {
    ItemImg: MeatPizza,
    ItemName: "Meat Pizza",
    ItemIngredients:
      "Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.",
    ItemPrice: (10).toFixed(2),
  },
  5: {
    ItemImg: MargheritaPizza,
    ItemName: "Margherita Pizza",
    ItemIngredients:
      "Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.",
    ItemPrice: (8).toFixed(2),
  },
  6: {
    ItemImg: BBQPizza,
    ItemName: "BBQ Chicken Pizza",
    ItemIngredients:
      "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
    ItemPrice: (10).toFixed(2),
  },
  7: {
    ItemImg: AllaPalla,
    ItemName: "Pizza alla pala",
    ItemIngredients: "Cheese, cherry tomatoes, arugula, olive oil, yeast.",
    ItemPrice: (12).toFixed(2),
  },
  8: {
    ItemImg: Prosciutto,
    ItemName: "Prosciutto e Funghi Pizza",
    ItemIngredients:
      "Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.",
    ItemPrice: (8).toFixed(2),
  },
  9: {
    ItemImg: DetroitStyle,
    ItemName: "Detroit-Style Pizza",
    ItemIngredients:
      "Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.",
    ItemPrice: (11).toFixed(2),
  },
  10: {
    ItemImg: GarlicFingers,
    ItemName: "Garlic Fingers",
    ItemIngredients:
      "Bread flour, mozzarella cheese, butter, olive oil, instant yeast.",
    ItemPrice: (7).toFixed(2),
  },
  11: {
    ItemImg: StLous,
    ItemName: "St. Louis-Style Pizza",
    ItemIngredients:
      "Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.",
    ItemPrice: (13).toFixed(2),
  },
  12: {
    ItemImg: Rustica,
    ItemName: "Pizza Rustica",
    ItemIngredients: "Prosciutto, pepperoni, mozzarella, crust, eggs.",
    ItemPrice: (13).toFixed(2),
  },
  13: {
    ItemImg: Genovese,
    ItemName: "Pizza pesto Genovese",
    ItemIngredients:
      "Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.",
    ItemPrice: (13).toFixed(2),
  },
  14: {
    ItemImg: Efichi,
    ItemName: "Pizza e fichi",
    ItemIngredients: "Coconut flour, truffle oil, fig jam, cheese, prosciutto.",
    ItemPrice: (12).toFixed(2),
  },
  15: {
    ItemImg: Apizza,
    ItemName: "Apizza",
    ItemIngredients:
      "Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.",
    ItemPrice: (11).toFixed(2),
  },
  16: {
    ItemImg: StuffedPizza,
    ItemName: "Stuffed Pizza",
    ItemIngredients:
      "Hot italian sausage, sweet italian sausage, pizza dough, red pepper flakes, olive oil.",
    ItemPrice: (13).toFixed(2),
  },
  17: {
    ItemImg: Pugliese,
    ItemName: "Pugliese Pizza",
    ItemIngredients:
      "Sloppy joe, banana peppers, ground beef, pizza dough, ricotta cheese.",
    ItemPrice: (9).toFixed(2),
  },
  18: {
    ItemImg: TomatoPie,
    ItemName: "Tomato Pie",
    ItemIngredients:
      "Pizza dough, san marzano, red pepper flakes, pizza stone, olive oil.",
    ItemPrice: (15).toFixed(2),
  },
  19: {
    ItemImg: Fugaza,
    ItemName: "Fugazza",
    ItemIngredients: "Mozzarella cheese, sugar, dry yeast, all purpose flour.",
    ItemPrice: (10).toFixed(2),
  },
  20: {
    ItemImg: DiZucca,
    ItemName: "Pizza fiori di zucca",
    ItemIngredients:
      "Zucchini blossoms, pizza dough, buffalo mozzarella, olive oil.",
    ItemPrice: (8).toFixed(2),
  },
  21: {
    ItemImg: Fugazeta,
    ItemName: "Fugazzeta",
    ItemIngredients:
      "Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.",
    ItemPrice: (9).toFixed(2),
  },
  22: {
    ItemImg: Carbonara,
    ItemName: "Pizza Carbonara",
    ItemIngredients:
      "Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.",
    ItemPrice: (8).toFixed(2),
  },
  23: {
    ItemImg: GranmaPie,
    ItemName: "Grandma Pie",
    ItemIngredients:
      "Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.",
    ItemPrice: (11).toFixed(2),
  },
  24: {
    ItemImg: Padellino,
    ItemName: "Pizza al padellino",
    ItemIngredients:
      "Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper",
    ItemPrice: (10).toFixed(2),
  },
  25: {
    ItemImg: CaliforniaStyle,
    ItemName: "California-Style Pizza",
    ItemIngredients:
      "Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.",
    ItemPrice: (15).toFixed(2),
  },
  26: {
    ItemImg: Fritta,
    ItemName: "Pizza fritta",
    ItemIngredients:
      "Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.",
    ItemPrice: (8).toFixed(2),
  },
  27: {
    ItemImg: Romana,
    ItemName: "Pinsa romana",
    ItemIngredients:
      "Rice flour, olive oil, plain flour, sea salt, dried yeast.",
    ItemPrice: (5).toFixed(2),
  },
  28: {
    ItemImg: ThinCrust,
    ItemName: "Chicago Thin Crust Pizza",
    ItemIngredients:
      "Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.",
    ItemPrice: (13).toFixed(2),
  },
  29: {
    ItemImg: GreekStyle,
    ItemName: "Greek-Style Pizza",
    ItemIngredients:
      "White cheddar, sauce, tomato paste, bread flour, red pepper flakes.",
    ItemPrice: (8).toFixed(2),
  },
  30: {
    ItemImg: PizzaRomana,
    ItemName: "Pizza Romana",
    ItemIngredients: "Fresh mozzarella, bread flour, tomato, olive oil, yeast",
    ItemPrice: (11).toFixed(2),
  },
  31: {
    ItemImg: CheesePizza,
    ItemName: "Cheese Pizza",
    ItemIngredients: "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
    ItemPrice: (2).toFixed(2),
  },

  32: {
    ItemImg: VeggiePizza,
    ItemName: "Veggie Pizza",
    ItemIngredients:
      "Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.",
    ItemPrice: (9).toFixed(2),
  },
  33: {
    ItemImg: PepperoniPizza,
    ItemName: "Pepperoni Pizza",
    ItemIngredients:
      "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
    ItemPrice: (5).toFixed(2),
  },
  34: {
    ItemImg: MeatPizza,
    ItemName: "Meat Pizza",
    ItemIngredients:
      "Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.",
    ItemPrice: (10).toFixed(2),
  },
  35: {
    ItemImg: MargheritaPizza,
    ItemName: "Margherita Pizza",
    ItemIngredients:
      "Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.",
    ItemPrice: (8).toFixed(2),
  },
  36: {
    ItemImg: BBQPizza,
    ItemName: "BBQ Chicken Pizza",
    ItemIngredients:
      "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
    ItemPrice: (10).toFixed(2),
  },
  37: {
    ItemImg: AllaPalla,
    ItemName: "Pizza alla pala",
    ItemIngredients: "Cheese, cherry tomatoes, arugula, olive oil, yeast.",
    ItemPrice: (12).toFixed(2),
  },
  38: {
    ItemImg: Prosciutto,
    ItemName: "Prosciutto e Funghi Pizza",
    ItemIngredients:
      "Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.",
    ItemPrice: (8).toFixed(2),
  },
  39: {
    ItemImg: DetroitStyle,
    ItemName: "Detroit-Style Pizza",
    ItemIngredients:
      "Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.",
    ItemPrice: (11).toFixed(2),
  },
  40: {
    ItemImg: GarlicFingers,
    ItemName: "Garlic Fingers",
    ItemIngredients:
      "Bread flour, mozzarella cheese, butter, olive oil, instant yeast.",
    ItemPrice: (7).toFixed(2),
  },
  41: {
    ItemImg: StLous,
    ItemName: "St. Louis-Style Pizza",
    ItemIngredients:
      "Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.",
    ItemPrice: (13).toFixed(2),
  },
  42: {
    ItemImg: Rustica,
    ItemName: "Pizza Rustica",
    ItemIngredients: "Prosciutto, pepperoni, mozzarella, crust, eggs.",
    ItemPrice: (13).toFixed(2),
  },
  43: {
    ItemImg: Genovese,
    ItemName: "Pizza pesto Genovese",
    ItemIngredients:
      "Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.",
    ItemPrice: (13).toFixed(2),
  },
  44: {
    ItemImg: Efichi,
    ItemName: "Pizza e fichi",
    ItemIngredients: "Coconut flour, truffle oil, fig jam, cheese, prosciutto.",
    ItemPrice: (12).toFixed(2),
  },
  45: {
    ItemImg: Apizza,
    ItemName: "Apizza",
    ItemIngredients:
      "Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.",
    ItemPrice: (11).toFixed(2),
  },
  46: {
    ItemImg: StuffedPizza,
    ItemName: "Stuffed Pizza",
    ItemIngredients:
      "Hot italian sausage, sweet italian sausage, pizza dough, red pepper flakes, olive oil.",
    ItemPrice: (13).toFixed(2),
  },
  47: {
    ItemImg: Pugliese,
    ItemName: "Pugliese Pizza",
    ItemIngredients:
      "Sloppy joe, banana peppers, ground beef, pizza dough, ricotta cheese.",
    ItemPrice: (9).toFixed(2),
  },
  48: {
    ItemImg: TomatoPie,
    ItemName: "Tomato Pie",
    ItemIngredients:
      "Pizza dough, san marzano, red pepper flakes, pizza stone, olive oil.",
    ItemPrice: (15).toFixed(2),
  },
  49: {
    ItemImg: Fugaza,
    ItemName: "Fugazza",
    ItemIngredients: "Mozzarella cheese, sugar, dry yeast, all purpose flour.",
    ItemPrice: (10).toFixed(2),
  },
  50: {
    ItemImg: DiZucca,
    ItemName: "Pizza fiori di zucca",
    ItemIngredients:
      "Zucchini blossoms, pizza dough, buffalo mozzarella, olive oil.",
    ItemPrice: (8).toFixed(2),
  },
  51: {
    ItemImg: Fugazeta,
    ItemName: "Fugazzeta",
    ItemIngredients:
      "Feta cheese, mozzarella cheese, parmesan cheese, olive oil, yeast.",
    ItemPrice: (9).toFixed(2),
  },
  52: {
    ItemImg: Carbonara,
    ItemName: "Pizza Carbonara",
    ItemIngredients:
      "Refrigerated pizza crust, monterey jack cheese, parmesan cheese, butter, chicken bouillon.",
    ItemPrice: (8).toFixed(2),
  },
  53: {
    ItemImg: GranmaPie,
    ItemName: "Grandma Pie",
    ItemIngredients:
      "Dark brown sugar, san marzano tomatoes, tomato paste, bread flour, red pepper flakes.",
    ItemPrice: (11).toFixed(2),
  },
  54: {
    ItemImg: Padellino,
    ItemName: "Pizza al padellino",
    ItemIngredients:
      "Mozzarella cheese, prosciutto di parma, dough, baby arugula, black pepper",
    ItemPrice: (10).toFixed(2),
  },
  55: {
    ItemImg: CaliforniaStyle,
    ItemName: "California-Style Pizza",
    ItemIngredients:
      "Feta cheese, marinated artichoke hearts, pizza crust, red bell pepper, red onion.",
    ItemPrice: (15).toFixed(2),
  },
  56: {
    ItemImg: Fritta,
    ItemName: "Pizza fritta",
    ItemIngredients:
      "Ricotta cheese, tomato sauce, tipo 00, neapolitan pizza base, mozzarella cheese.",
    ItemPrice: (8).toFixed(2),
  },
  57: {
    ItemImg: Romana,
    ItemName: "Pinsa romana",
    ItemIngredients:
      "Rice flour, olive oil, plain flour, sea salt, dried yeast.",
    ItemPrice: (5).toFixed(2),
  },
  58: {
    ItemImg: ThinCrust,
    ItemName: "Chicago Thin Crust Pizza",
    ItemIngredients:
      "Sweet italian sausage, semolina flour, pizza sauce, giardiniera, sugar.",
    ItemPrice: (13).toFixed(2),
  },
  59: {
    ItemImg: GreekStyle,
    ItemName: "Greek-Style Pizza",
    ItemIngredients:
      "White cheddar, sauce, tomato paste, bread flour, red pepper flakes.",
    ItemPrice: (8).toFixed(2),
  },
  60: {
    ItemImg: PizzaRomana,
    ItemName: "Pizza Romana",
    ItemIngredients: "Fresh mozzarella, bread flour, tomato, olive oil, yeast",
    ItemPrice: (11).toFixed(2),
  },
};

export default PizzaMenu;
