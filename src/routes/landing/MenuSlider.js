import React from 'react'
import { motion } from "framer-motion";
import MenuSliderProducts from './MenuSliderProducts'
import MenuSliderCategories from './MenuSliderCategories'
import MenuSlide375 from '../../assets/images/section-eight/section-eight-375.webp'
import MenuSlide700 from '../../assets/images/section-eight/section-eight-700.webp'
import MenuSlide900 from '../../assets/images/section-eight/section-eight-900.webp'
import MenuSlide1440 from '../../assets/images/section-eight/section-eight-1440.webp'
//375
import pizzaOne375 from '../../assets/images/menu-slider/pizza-one-375.webp'
import pizzaTwo375 from '../../assets/images/menu-slider/pizza-two-375.webp'
import pizzaThree375 from '../../assets/images/menu-slider/pizza-three-375.webp'
import SalmonPoke375 from '../../assets/images/menu-slider/sushi-one-375.webp'
import VeggiePoke375 from '../../assets/images/menu-slider/sushi-two-375.webp'
import MiniSalmon375 from '../../assets/images/menu-slider/sushi-three-375.webp'
import ChickenAlfredo375 from '../../assets/images/menu-slider/pasta-one-375.webp'
import AllaGricia375 from '../../assets/images/menu-slider/pasta-two-375.webp'
import SheetPan375 from '../../assets/images/menu-slider/pasta-three-375.webp'
//700
import pizzaOne700 from '../../assets/images/menu-slider/pizza-one-700.webp'
import pizzaTwo700 from '../../assets/images/menu-slider/pizza-two-700.webp'
import pizzaThree700 from '../../assets/images/menu-slider/pizza-three-700.webp'
import SalmonPoke700 from '../../assets/images/menu-slider/sushi-one-700.webp'
import VeggiePoke700 from '../../assets/images/menu-slider/sushi-two-700.webp'
import MiniSalmon700 from '../../assets/images/menu-slider/sushi-three-700.webp'
import ChickenAlfredo700 from '../../assets/images/menu-slider/pasta-one-700.webp'
import AllaGricia700 from '../../assets/images/menu-slider/pasta-two-700.webp'
import SheetPan700 from '../../assets/images/menu-slider/pasta-three-700.webp'

const MenuSliderCategory = [
  {
    name: 'pizza',
    id: 'pizza',
  },
  {
    name: 'sushi',
    id: 'sushi',
  },
  {
    name: 'pasta',
    id: 'pasta',
  },
]
const MenuSliderProduct = [
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    describtion:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    price: (5).toFixed(2),
    img375: pizzaOne375,
    img700: pizzaOne700,
    category: 'pizza',
  },
  {
    id: 'bbq-chicken-pizza',
    name: 'BBQ Chicken Pizza',
    describtion:
      'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
    price: (10).toFixed(2),
    img375: pizzaTwo375,
    img700: pizzaTwo700,
    category: 'pizza',
  },
  {
    id: 'cheese-pizza',
    name: 'Cheese Pizza',
    describtion: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    price: (5).toFixed(2),
    img375: pizzaThree375,
    img700: pizzaThree700,
    category: 'pizza',
  },
  {
    id: 'salmon-poke',
    img375: SalmonPoke375,
    img700: SalmonPoke700,
    name: 'Salmon Poke',
    describtion:
      'Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.',
    price: (10).toFixed(2),
    category: 'sushi',
  },

  {
    id: 'veggie-poke',
    img375: VeggiePoke375,
    img700: VeggiePoke700,
    name: 'Veggie Poke',
    describtion: 'Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.',
    price: (8).toFixed(2),
    category: 'sushi',
  },
  {
    id: 'mini-salmon-set-22-pcs',
    img375: MiniSalmon375,
    img700: MiniSalmon700,
    name: 'Mini Salmon Set',
    describtion:
      'Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs',
    price: (35).toFixed(2),
    category: 'sushi',
  },
  {
    id: 'chicken-alfredo',
    img375: ChickenAlfredo375,
    img700: ChickenAlfredo700,
    name: 'Chicken Alfredo',
    describtion:
      'Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.',
    price: (2).toFixed(2),
    category: 'pasta',
  },
  {
    id: 'pasta-alla-gricia',
    img375: AllaGricia375,
    img700: AllaGricia700,
    name: 'Pasta Alla Gricia',
    describtion:
      'Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.',
    price: (9).toFixed(2),
    category: 'pasta',
  },
  {
    id: 'sheet-pan-burrata-caprese-gnocchi',
    img375: SheetPan375,
    img700: SheetPan700,
    name: 'Burrata Caprese Gnocchi',
    describtion:
      'Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.',
    price: (5).toFixed(2),
    category: 'pasta',
  },
]

export default class MenuSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      activeCategory: 'pizza',
      allProducts: [],
      allCategories: [],
    }
    this.getAllProducts = this.getAllProducts.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    this.getProductsByCategory = this.getProductsByCategory.bind(this)
  }
  allCategoriesData = new Promise((resolve, reject) => {
    if (true) {
      resolve(MenuSliderCategory)
      return
    }
    reject('error, check the code!')
  })
  allProductsData = new Promise((resolve, reject) => {
    if (true) {
      resolve(MenuSliderProduct)
      return
    }
    reject('error, check the code!')
  })
  getCategories() {
    try {
      const result = this.allCategoriesData
      this.setState({ allCategories: result })
    } catch (error) {
      console.log(error)
    }
  }
  getAllProducts() {
    try {
      const result = this.allProductsData
      this.setState({ allProducts: result })
      // this.setState({activeCategory: "pizza"})
    } catch (error) {
      console.log(error)
    }
  }
  changeCategory(newCategory) {
    this.setState({ activeCategory: newCategory })
    this.getProductsByCategory(newCategory)
  }
  getProductsByCategory(category) {
    let separateCategoriesByname = []
    //Separate arrays by category names

    const separateCategories = MenuSliderProduct.reduce(function (
      singleCategory,
      singleItem,
    ) {
      separateCategoriesByname = Object.keys(singleCategory)

      if (!singleCategory[singleItem.category])
        singleCategory[singleItem.category] = singleItem
      else
        singleCategory[singleItem.category] = Array.isArray(
          singleCategory[singleItem.category],
        )
          ? singleCategory[singleItem.category].concat(singleItem)
          : [singleCategory[singleItem.category]].concat(singleItem)

      return singleCategory
    },
    {})

    const productsOfCategories = Object.keys(separateCategories).map(
      (e) => separateCategories[e],
    )

    let singleCategoryArray = []
    productsOfCategories.map((category) => {
      return singleCategoryArray.push(category)
    })

    //Change products by category
    separateCategoriesByname.forEach((cate) => {
      if (cate === category) {
        return this.setState({ allProducts: separateCategories[category] })
      }
    })
  }
  componentDidMount() {
    this.getAllProducts()
    this.getProductsByCategory(this.state.activeCategory)
  }

  render() {
    const { allProducts } = this.state
    return (
       <motion.div
initial={{ opacity: 0, translateX: 300  }}
whileInView={{ opacity: 1 , translateX: 0  }}
  exit={{ opacity: 0,  translateX: 300  }}
  transition={{ duration: 2}}
  className="section-8"
>
        <img
          className="menu-slider-hero"
          src={MenuSlide375}
          srcSet={`${MenuSlide1440} 1440w, ${MenuSlide900} 900w, ${MenuSlide700} 700w, ${MenuSlide375} 375w`}
          sizes="(min-width: 1440px) 1440px, (min-width: 900px) 900px, (min-width: 700px) 700px, 375px"
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
              )
            })}
          </section>
        </section>
        </motion.div>
    )
  }
}
