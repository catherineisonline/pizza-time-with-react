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
  61: {
    id: 61,
    ItemImg: ChickenAlfredo,
    ItemName: "Chicken Alfredo",
    ItemIngredients:
      "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    ItemPrice: (2).toFixed(2),
  },

  62: {
    ItemImg: AllaGricia,
    ItemName: "Pasta Alla Gricia",
    ItemIngredients:
      "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    ItemPrice: (9).toFixed(2),
  },
  63: {
    ItemImg: SheetPan,
    ItemName: "Sheet-Pan Burrata Caprese Gnocchi",
    ItemIngredients:
      "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    ItemPrice: (5).toFixed(2),
  },
  64: {
    ItemImg: AllaVodka,
    ItemName: "Penne Alla Vodka",
    ItemIngredients:
      "Tomato sauce, penne, heavy cream, red pepper flakes, butter.",
    ItemPrice: (10).toFixed(2),
  },
  65: {
    ItemImg: BakedSpaghetti,
    ItemName: "Baked Spaghetti",
    ItemIngredients:
      "Ground beef, spaghetti, olive oil, crushed tomatoes, basil.",
    ItemPrice: (8).toFixed(2),
  },
  66: {
    ItemImg: PotatoGnocchi,
    ItemName: "Cacio e Pepe Potato Gnocchi",
    ItemIngredients:
      "Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.",
    ItemPrice: (10).toFixed(2),
  },
  67: {
    ItemImg: BakedZiti,
    ItemName: "Ultimate Baked Ziti",
    ItemIngredients:
      "Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.",
    ItemPrice: (12).toFixed(2),
  },
  68: {
    ItemImg: CacioPepe,
    ItemName: "Cacio e Pepe",
    ItemIngredients: "Spaghetti, parmesan, butter, black pepper.",
    ItemPrice: (8).toFixed(2),
  },
  69: {
    ItemImg: PastaPuttanesca,
    ItemName: "Pasta Puttanesca",
    ItemIngredients:
      "Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.",
    ItemPrice: (11).toFixed(2),
  },
  70: {
    ItemImg: ItalianPastaSalad,
    ItemName: "Italian Pasta Salad",
    ItemIngredients:
      "Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.",
    ItemPrice: (7).toFixed(2),
  },
  71: {
    ItemImg: Lasagna,
    ItemName: "Lasagna Roll Ups",
    ItemIngredients:
      "Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.",
    ItemPrice: (13).toFixed(2),
  },
  72: {
    ItemImg: ToastedRavioli,
    ItemName: "Toasted Ravioli",
    ItemIngredients:
      "Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.",
    ItemPrice: (13).toFixed(2),
  },
  73: {
    ItemImg: OrecchietteBroccoli,
    ItemName: "Orecchiette with Broccoli Rabe",
    ItemIngredients:
      "Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.",
    ItemPrice: (13).toFixed(2),
  },
  74: {
    ItemImg: LambRagu,
    ItemName: "Lamb Ragù",
    ItemIngredients:
      "Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.",
    ItemPrice: (12).toFixed(2),
  },
  75: {
    ItemImg: LasagnaBolognese,
    ItemName: "Lasagna Bolognese",
    ItemIngredients:
      "Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.",
    ItemPrice: (11).toFixed(2),
  },
  76: {
    ItemImg: LemonRicotta,
    ItemName: "Lemon Ricotta Pasta",
    ItemIngredients: "Spaghetti, ricotta, lemon, red pepper flakes, parmesan.",
    ItemPrice: (13).toFixed(2),
  },
  77: {
    ItemImg: StuffedRigatoni,
    ItemName: "Stuffed Rigatoni",
    ItemIngredients:
      "Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.",
    ItemPrice: (9).toFixed(2),
  },
  78: {
    ItemImg: FiveCheese,
    ItemName: "Five-Cheese Ziti Al Forno",
    ItemIngredients:
      "Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.",
    ItemPrice: (15).toFixed(2),
  },
  79: {
    ItemImg: ChickenFlorentine,
    ItemName: "Chicken Florentine Pasta",
    ItemIngredients:
      "Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.",
    ItemPrice: (10).toFixed(2),
  },
  80: {
    ItemImg: MacCheese,
    ItemName: "Italian Mac and Cheese",
    ItemIngredients:
      "Italian sausage, pasta, cheese sauce, cream, baby spinach.",
    ItemPrice: (8).toFixed(2),
  },
  81: {
    ItemImg: ChickenAlfredo,
    ItemName: "Chicken Alfredo",
    ItemIngredients:
      "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    ItemPrice: (2).toFixed(2),
  },

  82: {
    ItemImg: AllaGricia,
    ItemName: "Pasta Alla Gricia",
    ItemIngredients:
      "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    ItemPrice: (9).toFixed(2),
  },
  83: {
    ItemImg: SheetPan,
    ItemName: "Sheet-Pan Burrata Caprese Gnocchi",
    ItemIngredients:
      "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    ItemPrice: (5).toFixed(2),
  },
  84: {
    ItemImg: AllaVodka,
    ItemName: "Penne Alla Vodka",
    ItemIngredients:
      "Tomato sauce, penne, heavy cream, red pepper flakes, butter.",
    ItemPrice: (10).toFixed(2),
  },
  85: {
    ItemImg: BakedSpaghetti,
    ItemName: "Baked Spaghetti",
    ItemIngredients:
      "Ground beef, spaghetti, olive oil, crushed tomatoes, basil.",
    ItemPrice: (8).toFixed(2),
  },
  86: {
    ItemImg: PotatoGnocchi,
    ItemName: "Cacio e Pepe Potato Gnocchi",
    ItemIngredients:
      "Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.",
    ItemPrice: (10).toFixed(2),
  },
  87: {
    ItemImg: BakedZiti,
    ItemName: "Ultimate Baked Ziti",
    ItemIngredients:
      "Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.",
    ItemPrice: (12).toFixed(2),
  },
  88: {
    ItemImg: CacioPepe,
    ItemName: "Cacio e Pepe",
    ItemIngredients: "Spaghetti, parmesan, butter, black pepper.",
    ItemPrice: (8).toFixed(2),
  },
  89: {
    ItemImg: PastaPuttanesca,
    ItemName: "Pasta Puttanesca",
    ItemIngredients:
      "Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.",
    ItemPrice: (11).toFixed(2),
  },
  90: {
    ItemImg: ItalianPastaSalad,
    ItemName: "Italian Pasta Salad",
    ItemIngredients:
      "Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.",
    ItemPrice: (7).toFixed(2),
  },
  91: {
    ItemImg: Lasagna,
    ItemName: "Lasagna Roll Ups",
    ItemIngredients:
      "Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.",
    ItemPrice: (13).toFixed(2),
  },
  92: {
    ItemImg: ToastedRavioli,
    ItemName: "Toasted Ravioli",
    ItemIngredients:
      "Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.",
    ItemPrice: (13).toFixed(2),
  },
  93: {
    ItemImg: OrecchietteBroccoli,
    ItemName: "Orecchiette with Broccoli Rabe",
    ItemIngredients:
      "Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.",
    ItemPrice: (13).toFixed(2),
  },
  94: {
    ItemImg: LambRagu,
    ItemName: "Lamb Ragù",
    ItemIngredients:
      "Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.",
    ItemPrice: (12).toFixed(2),
  },
  95: {
    ItemImg: LasagnaBolognese,
    ItemName: "Lasagna Bolognese",
    ItemIngredients:
      "Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.",
    ItemPrice: (11).toFixed(2),
  },
  96: {
    ItemImg: LemonRicotta,
    ItemName: "Lemon Ricotta Pasta",
    ItemIngredients: "Spaghetti, ricotta, lemon, red pepper flakes, parmesan.",
    ItemPrice: (13).toFixed(2),
  },
  97: {
    ItemImg: StuffedRigatoni,
    ItemName: "Stuffed Rigatoni",
    ItemIngredients:
      "Ground turkey, rigatoni pasta, red pepper, mozzarella, parmesan.",
    ItemPrice: (9).toFixed(2),
  },
  98: {
    ItemImg: FiveCheese,
    ItemName: "Five-Cheese Ziti Al Forno",
    ItemIngredients:
      "Alfredo sauce, ricotta cheese, ziti pasta, marinara sauce, fontina cheese.",
    ItemPrice: (15).toFixed(2),
  },
  99: {
    ItemImg: ChickenFlorentine,
    ItemName: "Chicken Florentine Pasta",
    ItemIngredients:
      "Skinless chicken breasts, linguine pasta, chicken broth, butter, baby spinach.",
    ItemPrice: (10).toFixed(2),
  },
  100: {
    ItemImg: MacCheese,
    ItemName: "Italian Mac and Cheese",
    ItemIngredients:
      "Italian sausage, pasta, cheese sauce, cream, baby spinach.",
    ItemPrice: (8).toFixed(2),
  },
};

export default PastaMenu;
