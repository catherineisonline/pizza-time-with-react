import React from "react";
import MenuSliderProducts from "./MenuSliderProducts";
import MenuSliderCategories from "./MenuSliderCategories";
import CheesePizza from "../../images/cheese-pizza.jpg";
import PepperoniPizza from "../../images/pepperoni-pizza.jpg";
import BBQPizza from "../../images/BBQ-chicken-pizza.jpg";
import MenuSliderImg from "../../images/section-8-img.jpg";
import SalmonPoke from "../../images/sushi-images/sushi-19.jpeg";
import VeggiePoke from "../../images/sushi-images/sushi-26.jpeg";
import MiniSalmon from "../../images/sushi-images/sushi-12.jpeg";
import ChickenAlfredo from "../../images/pasta-images/Chicken Alfredo.jpeg";
import AllaGricia from "../../images/pasta-images/Pasta Alla Gricia.jpeg";
import SheetPan from "../../images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.jpeg";

const MenuSliderCategory = [
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
const MenuSliderProduct = [
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    describtion:
      "Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.",
    price: (5).toFixed(2),
    img: PepperoniPizza,
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    describtion:
      "Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.",
    price: (10).toFixed(2),
    img: BBQPizza,
    category: "pizza",
  },
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    describtion: "Pizza dough, pizza sauce, provolone cheese, mozzarella.",
    price: (5).toFixed(2),
    img: CheesePizza,
    category: "pizza",
  },
  {
    id: "salmon-poke",
    img: SalmonPoke,
    name: "Salmon Poke",
    describtion:
      "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    price: (10).toFixed(2),
    category: "sushi",
  },

  {
    id: "veggie-poke",
    img: VeggiePoke,
    name: "Veggie Poke",
    describtion: "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    price: (8).toFixed(2),
    category: "sushi",
  },
  {
    id: "mini-salmon-set-22-pcs",
    img: MiniSalmon,
    name: "Mini Salmon Set",
    describtion:
      "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    price: (35).toFixed(2),
    category: "sushi",
  },
  {
    id: "chicken-alfredo",
    img: ChickenAlfredo,
    name: "Chicken Alfredo",
    describtion:
      "Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.",
    price: (2).toFixed(2),
    category: "pasta",
  },
  {
    id: "pasta-alla-gricia",
    img: AllaGricia,
    name: "Pasta Alla Gricia",
    describtion:
      "Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.",
    price: (9).toFixed(2),
    category: "pasta",
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    img: SheetPan,
    name: "Burrata Caprese Gnocchi",
    describtion:
      "Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.",
    price: (5).toFixed(2),
    category: "pasta",
  },
];

export default class MenuSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "pizza",
      allProducts: [],
      allCategories: [],
    };
    this.getAllProducts = this.getAllProducts.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }
  allCategoriesData = new Promise((resolve, reject) => {
    if (true) {
      resolve(MenuSliderCategory);
      return;
    }
    reject("error, check the code!");
  });
  allProductsData = new Promise((resolve, reject) => {
    if (true) {
      resolve(MenuSliderProduct);
      return;
    }
    reject("error, check the code!");
  });
  getCategories() {
    try {
      const result = this.allCategoriesData;
      this.setState({ allCategories: result });
    } catch (error) {
      console.log(error);
    }
  }
  getAllProducts() {
    try {
      const result = this.allProductsData;
      this.setState({ allProducts: result });
      // this.setState({activeCategory: "pizza"})
    } catch (error) {
      console.log(error);
    }
  }
  changeCategory(newCategory) {
    this.setState({ activeCategory: newCategory });
    this.getProductsByCategory(newCategory);
  }
  getProductsByCategory(category) {
    let separateCategoriesByname = [];
    //Separate arrays by category names

    const separateCategories = MenuSliderProduct.reduce(function (
      singleCategory,
      singleItem
    ) {
      separateCategoriesByname = Object.keys(singleCategory);

      if (!singleCategory[singleItem.category])
        singleCategory[singleItem.category] = singleItem;
      else
        singleCategory[singleItem.category] = Array.isArray(
          singleCategory[singleItem.category]
        )
          ? singleCategory[singleItem.category].concat(singleItem)
          : [singleCategory[singleItem.category]].concat(singleItem);

      return singleCategory;
    },
    {});

    const productsOfCategories = Object.keys(separateCategories).map(
      (e) => separateCategories[e]
    );

    let singleCategoryArray = [];
    productsOfCategories.map((category) => {
      return singleCategoryArray.push(category);
    });

    //Change products by category
    separateCategoriesByname.forEach((cate) => {
      if (cate === category) {
        return this.setState({ allProducts: separateCategories[category] });
      }
    });
  }
  componentDidMount() {
    // this.getCategories();
    this.getAllProducts();
    this.getProductsByCategory(this.state.activeCategory);
  }

  render() {
    const { allProducts } = this.state;
    return (
      <article className="section-8">
        <img
          className="menu-slider-hero"
          src={MenuSliderImg}
          alt="restaurant interior"
        />
        <section className="dish-slider  flex-container flex-column txt-center">
          <section className="dish-categories flex-container flex-column">
            <ul>
              {MenuSliderCategory.map((category) => (
                <MenuSliderCategories
                  key={category.id}
                  category={category}
                  changeCategory={this.changeCategory}
                />
              ))}
            </ul>
          </section>
          <section className="menu-slider-products">
            {allProducts.map((singleProduct) => {
              return (
                <MenuSliderProducts
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                />
              );
            })}
          </section>
        </section>
      </article>
    );
  }
}
