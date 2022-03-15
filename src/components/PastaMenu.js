import ChickenAlfredo from "../images/pasta-images/Chicken Alfredo.jpeg";
import AllaGricia from "../images/pasta-images/Pasta Alla Gricia.webp";
import SheetPan from "../images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.jpeg";
import AllaVodka from "../images/pasta-images/Penne Alla Vodka.jpeg";
import BakedSpaghetti from "../images/pasta-images/Baked Spaghetti.jpeg";
import PotatoGnocchi from "../images/pasta-images/Cacio e Pepe Potato Gnocchi.jpeg";
import BakedZiti from "../images/pasta-images/Ultimate Baked Ziti.jpeg";
import CacioPepe from "../images/pasta-images/Cacio e Pepe.jpeg";
import PastaPuttanesca from "../images/pasta-images/Pasta Puttanesca.webp";
import ItalianPastaSalad from "../images/pasta-images/Italian Pasta Salad.jpeg";
import Lasagna from "../images/pasta-images/Lasagna Roll Ups.jpeg";
import ToastedRavioli from "../images/pasta-images/Toasted Ravioli.jpeg";
import OrecchietteBroccoli from "../images/pasta-images/Orecchiette with Broccoli Rabe.webp";
import LambRagu from "../images/pasta-images/Lamb Ragù.jpeg";
import LasagnaBolognese from "../images/pasta-images/Lasagna Bolognese.jpeg";
import LemonRicotta from "../images/pasta-images/Lemon Ricotta Pasta.jpeg";
import StuffedRigatoni from "../images/pasta-images/Stuffed Rigatoni.jpeg";
import FiveCheese from "../images/pasta-images/Five-Cheese Ziti Al Forno.jpeg";
import ChickenFlorentine from "../images/pasta-images/Chicken Florentine Pasta.jpeg";
import MacCheese from "../images/pasta-images/Italian Mac and Cheese.jpeg";

const PastaMenu = {
  1: {
    PizzaImg: ChickenAlfredo,
    PizzaName: "Chicken Alfredo",
    PizzaIngredients:
      "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    PizzaPrice: (2).toFixed(2),
  },

  2: {
    PizzaImg: AllaGricia,
    PizzaName: "Pasta Alla Gricia",
    PizzaIngredients:
      "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    PizzaPrice: (9).toFixed(2),
  },
  3: {
    PizzaImg: SheetPan,
    PizzaName: "Sheet-Pan Burrata Caprese Gnocchi",
    PizzaIngredients:
      "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    PizzaPrice: (5).toFixed(2),
  },
  4: {
    PizzaImg: AllaVodka,
    PizzaName: "Penne Alla Vodka",
    PizzaIngredients:
      "Tomato sauce, penne, heavy cream, red pepper flakes, butter.",
    PizzaPrice: (10).toFixed(2),
  },
  5: {
    PizzaImg: BakedSpaghetti,
    PizzaName: "Baked Spaghetti",
    PizzaIngredients:
      "Ground beef, spaghetti, olive oil, crushed tomatoes, basil.",
    PizzaPrice: (8).toFixed(2),
  },
  6: {
    PizzaImg: PotatoGnocchi,
    PizzaName: "Cacio e Pepe Potato Gnocchi",
    PizzaIngredients:
      "Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.",
    PizzaPrice: (10).toFixed(2),
  },
  7: {
    PizzaImg: BakedZiti,
    PizzaName: "Ultimate Baked Ziti",
    PizzaIngredients:
      "Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.",
    PizzaPrice: (12).toFixed(2),
  },
  8: {
    PizzaImg: CacioPepe,
    PizzaName: "Cacio e Pepe",
    PizzaIngredients: "Spaghetti, parmesan, butter, black pepper.",
    PizzaPrice: (8).toFixed(2),
  },
  9: {
    PizzaImg: PastaPuttanesca,
    PizzaName: "Pasta Puttanesca",
    PizzaIngredients:
      "Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.",
    PizzaPrice: (11).toFixed(2),
  },
  10: {
    PizzaImg: ItalianPastaSalad,
    PizzaName: "Italian Pasta Salad",
    PizzaIngredients:
      "Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.",
    PizzaPrice: (7).toFixed(2),
  },
  11: {
    PizzaImg: Lasagna,
    PizzaName: "Lasagna Roll Ups",
    PizzaIngredients:
      "Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.",
    PizzaPrice: (13).toFixed(2),
  },
  12: {
    PizzaImg: ToastedRavioli,
    PizzaName: "Toasted Ravioli",
    PizzaIngredients:
      "Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.",
    PizzaPrice: (13).toFixed(2),
  },
  13: {
    PizzaImg: OrecchietteBroccoli,
    PizzaName: "Orecchiette with Broccoli Rabe",
    PizzaIngredients:
      "Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.",
    PizzaPrice: (13).toFixed(2),
  },
  14: {
    PizzaImg: LambRagu,
    PizzaName: "Lamb Ragù",
    PizzaIngredients:
      "Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.",
    PizzaPrice: (12).toFixed(2),
  },
  15: {
    PizzaImg: LasagnaBolognese,
    PizzaName: "Lasagna Bolognese",
    PizzaIngredients:
      "Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.",
    PizzaPrice: (11).toFixed(2),
  },
  16: {
    PizzaImg: LemonRicotta,
    PizzaName: "Lemon Ricotta Pasta",
    PizzaIngredients: "Spaghetti, ricotta, lemon, red pepper flakes, parmesan.",
    PizzaPrice: (13).toFixed(2),
  },
  17: {
    PizzaImg: StuffedRigatoni,
    PizzaName: "Stuffed Rigatoni",
    PizzaIngredients:
      "Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.",
    PizzaPrice: (9).toFixed(2),
  },
  18: {
    PizzaImg: FiveCheese,
    PizzaName: "Five-Cheese Ziti Al Forno",
    PizzaIngredients:
      "Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.",
    PizzaPrice: (15).toFixed(2),
  },
  19: {
    PizzaImg: ChickenFlorentine,
    PizzaName: "Chicken Florentine Pasta",
    PizzaIngredients:
      "Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.",
    PizzaPrice: (10).toFixed(2),
  },
  20: {
    PizzaImg: MacCheese,
    PizzaName: "Italian Mac and Cheese",
    PizzaIngredients:
      "Italian sausage, pasta, cheese sauce, cream, baby spinach.",
    PizzaPrice: (8).toFixed(2),
  },
  21: {
    PizzaImg: ChickenAlfredo,
    PizzaName: "Chicken Alfredo",
    PizzaIngredients:
      "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    PizzaPrice: (2).toFixed(2),
  },

  22: {
    PizzaImg: AllaGricia,
    PizzaName: "Pasta Alla Gricia",
    PizzaIngredients:
      "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    PizzaPrice: (9).toFixed(2),
  },
  23: {
    PizzaImg: SheetPan,
    PizzaName: "Sheet-Pan Burrata Caprese Gnocchi",
    PizzaIngredients:
      "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    PizzaPrice: (5).toFixed(2),
  },
  24: {
    PizzaImg: AllaVodka,
    PizzaName: "Penne Alla Vodka",
    PizzaIngredients:
      "Tomato sauce, penne, heavy cream, red pepper flakes, butter.",
    PizzaPrice: (10).toFixed(2),
  },
  25: {
    PizzaImg: BakedSpaghetti,
    PizzaName: "Baked Spaghetti",
    PizzaIngredients:
      "Ground beef, spaghetti, olive oil, crushed tomatoes, basil.",
    PizzaPrice: (8).toFixed(2),
  },
  26: {
    PizzaImg: PotatoGnocchi,
    PizzaName: "Cacio e Pepe Potato Gnocchi",
    PizzaIngredients:
      "Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.",
    PizzaPrice: (10).toFixed(2),
  },
  27: {
    PizzaImg: BakedZiti,
    PizzaName: "Ultimate Baked Ziti",
    PizzaIngredients:
      "Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.",
    PizzaPrice: (12).toFixed(2),
  },
  8: {
    PizzaImg: CacioPepe,
    PizzaName: "Cacio e Pepe",
    PizzaIngredients: "Spaghetti, parmesan, butter, black pepper.",
    PizzaPrice: (8).toFixed(2),
  },
  29: {
    PizzaImg: PastaPuttanesca,
    PizzaName: "Pasta Puttanesca",
    PizzaIngredients:
      "Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.",
    PizzaPrice: (11).toFixed(2),
  },
  30: {
    PizzaImg: ItalianPastaSalad,
    PizzaName: "Italian Pasta Salad",
    PizzaIngredients:
      "Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.",
    PizzaPrice: (7).toFixed(2),
  },
  31: {
    PizzaImg: Lasagna,
    PizzaName: "Lasagna Roll Ups",
    PizzaIngredients:
      "Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.",
    PizzaPrice: (13).toFixed(2),
  },
  32: {
    PizzaImg: ToastedRavioli,
    PizzaName: "Toasted Ravioli",
    PizzaIngredients:
      "Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.",
    PizzaPrice: (13).toFixed(2),
  },
  33: {
    PizzaImg: OrecchietteBroccoli,
    PizzaName: "Orecchiette with Broccoli Rabe",
    PizzaIngredients:
      "Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.",
    PizzaPrice: (13).toFixed(2),
  },
  34: {
    PizzaImg: LambRagu,
    PizzaName: "Lamb Ragù",
    PizzaIngredients:
      "Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.",
    PizzaPrice: (12).toFixed(2),
  },
  35: {
    PizzaImg: LasagnaBolognese,
    PizzaName: "Lasagna Bolognese",
    PizzaIngredients:
      "Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.",
    PizzaPrice: (11).toFixed(2),
  },
  36: {
    PizzaImg: LemonRicotta,
    PizzaName: "Lemon Ricotta Pasta",
    PizzaIngredients: "Spaghetti, ricotta, lemon, red pepper flakes, parmesan.",
    PizzaPrice: (13).toFixed(2),
  },
  37: {
    PizzaImg: StuffedRigatoni,
    PizzaName: "Stuffed Rigatoni",
    PizzaIngredients:
      "Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.",
    PizzaPrice: (9).toFixed(2),
  },
  38: {
    PizzaImg: FiveCheese,
    PizzaName: "Five-Cheese Ziti Al Forno",
    PizzaIngredients:
      "Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.",
    PizzaPrice: (15).toFixed(2),
  },
  39: {
    PizzaImg: ChickenFlorentine,
    PizzaName: "Chicken Florentine Pasta",
    PizzaIngredients:
      "Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.",
    PizzaPrice: (10).toFixed(2),
  },
  40: {
    PizzaImg: MacCheese,
    PizzaName: "Italian Mac and Cheese",
    PizzaIngredients:
      "Italian sausage, pasta, cheese sauce, cream, baby spinach.",
    PizzaPrice: (8).toFixed(2),
  },
};

export default PastaMenu;
