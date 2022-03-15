import SalmonPoke from "../images/sushi-images/Salmon-Poke .avif";
import VeggiePoke from "../images/sushi-images/Veggie Poke.avif";
import MiniSalmon from "../images/sushi-images/Mini Salmon Set.avif";
import OmbosSeth from "../images/sushi-images/The Bull of Ombos Seth.avif";
import VeggieSet from "../images/sushi-images/Veggie Set 32Pcs.avif";
import FriendlySet from "../images/sushi-images/FRIENDLY SET 40Pcs.avif";
import SunnyPhiladelphia from "../images/sushi-images/Sunny Philadelphia Roll 8Pcs.avif";
import HiddenDragon from "../images/sushi-images/Hidden Dragon Roll 8Pcs.avif";
import DoubleSalmon from "../images/sushi-images/Double Salmon Roll 8Pcs.avif";
import HottestTaisho from "../images/sushi-images/The Hottest Taisho.avif";
import BurningTaisho from "../images/sushi-images/Burning Taisho.avif";
import BlissfulEel from "../images/sushi-images/Blissful Eel Roll 8Pcs.avif";
import Sebastian from "../images/sushi-images/Sebastian the Crab Roll 8Pcs.avif";
import DoubleSalmonRoll from "../images/sushi-images/Double Salmon Roll 8Pcs.avif";
import ClockworkOrange from "../images/sushi-images/Clockwork Orange Roll 8Pcs.avif";
import KiwiRoll from "../images/sushi-images/Kiwi Roll 8Pcs.avif";
import Siamese from "../images/sushi-images/The roll of Siamese.avif";
import SalmonMaki from "../images/sushi-images/Salmon Maki Raki 8Pcs.avif";
import NigiriWithRoasted from "../images/sushi-images/Nigiri with Roasted Salmon 1Pc.avif";
import NigiriWithSalmon from "../images/sushi-images/Nigiri with Salmon and Orange 1Pc.avif";
import NigiriWithEel from "../images/sushi-images/Nigiri with Eel 1Pc.avif";
import VulcanTobiko from "../images/sushi-images/Vulcan Tobiko.avif";
import SalmonGunkan from "../images/sushi-images/Salmon Gunkan with Cream Cheese.avif";
import VeryVegetarian from "../images/sushi-images/Very Vegetarian Maki.avif";
import AvocadoMaki from "../images/sushi-images/Avocado Maki Raki 8Pcs.avif";
import CucumberMaki from "../images/sushi-images/Cucumber Maki Raki 8Pcs.avif";
import HungrySet from "../images/sushi-images/Hungry Set 64Pcs.avif";
import NigiriOcean from "../images/sushi-images/Nigiri Ocean - 14 Pcs.avif";
import FoggyAlbion from "../images/sushi-images/Foggy Albion - 26Pcs.avif";
import StanleyKubrick from "../images/sushi-images/Stanley Kubrick - 24 Pcs.avif";

const SushiMenu = {
  1: {
    PizzaImg: SalmonPoke,
    PizzaName: "Salmon Poke",
    PizzaIngredients:
      "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    PizzaPrice: (10).toFixed(2),
  },

  2: {
    PizzaImg: VeggiePoke,
    PizzaName: "Veggie Poke",
    PizzaIngredients:
      "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    PizzaPrice: (8).toFixed(2),
  },
  3: {
    PizzaImg: MiniSalmon,
    PizzaName: "Mini Salmon Set - 22Pcs",
    PizzaIngredients:
      "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    PizzaPrice: (35).toFixed(2),
  },
  4: {
    PizzaImg: OmbosSeth,
    PizzaName: "The Bull of Ombos Seth - 32 Pcs",
    PizzaIngredients:
      "Double Salmon Roll, Sunny Philadelphia, Salmon Maki Raki, Cucumber Maki Raki.",
    PizzaPrice: (30).toFixed(2),
  },
  5: {
    PizzaImg: VeggieSet,
    PizzaName: "Veggie Set 32Pcs",
    PizzaIngredients:
      "Very Veggie Roll, Very Veggie Maki, Cucumber Maki Raki, Avocado Maki Raki.",
    PizzaPrice: (16).toFixed(2),
  },
  6: {
    PizzaImg: FriendlySet,
    PizzaName: "Friendly Set 40Pcs",
    PizzaIngredients:
      "Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.",
    PizzaPrice: (30).toFixed(2),
  },
  7: {
    PizzaImg: SunnyPhiladelphia,
    PizzaName: "Sunny Philadelphia Roll 8Pcs",
    PizzaIngredients: "Salmon, cream cheese, avocado, rice, sesame, nori.",
    PizzaPrice: (12).toFixed(2),
  },
  8: {
    PizzaImg: HiddenDragon,
    PizzaName: "Hidden Dragon Roll 8Pcs",
    PizzaIngredients:
      "Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.",
    PizzaPrice: (13).toFixed(2),
  },
  9: {
    PizzaImg: DoubleSalmon,
    PizzaName: "Double Salmon Roll 8Pcs",
    PizzaIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, nori.",
    PizzaPrice: (14).toFixed(2),
  },
  10: {
    PizzaImg: HottestTaisho,
    PizzaName: "The Hottest Taisho",
    PizzaIngredients:
      "Salmon, Cream Cheese, Avocado, Cucumber, Rice - all comes with your chosen sauce.",
    PizzaPrice: (12).toFixed(2),
  },
  11: {
    PizzaImg: BurningTaisho,
    PizzaName: "Burning Taisho",
    PizzaIngredients: "Salmon, Avocado, Rice, Cucumber, Cream Cheese.",
    PizzaPrice: (10).toFixed(2),
  },
  12: {
    PizzaImg: BlissfulEel,
    PizzaName: "Blissful Eel Roll 8Pcs",
    PizzaIngredients:
      "Eel kinda blissful, Cream Cheese, Avocado, Tobico, Sesame, Rice, Nori.",
    PizzaPrice: (14).toFixed(2),
  },
  13: {
    PizzaImg: Sebastian,
    PizzaName: "Sebastian the Crab Roll 8Pcs",
    PizzaIngredients:
      "Crab with Unique Sauce, Cream Cheese, Avocado, Dried Tuna Flakes, Sesame, Cucumber Rice, Nori.",
    PizzaPrice: (13).toFixed(2),
  },
  14: {
    PizzaImg: DoubleSalmonRoll,
    PizzaName: "Double Salmon Roll 8Pcs",
    PizzaIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, Nori.",
    PizzaPrice: (10).toFixed(2),
  },
  15: {
    PizzaImg: ClockworkOrange,
    PizzaName: "Clockwork Orange Roll 8Pcs",
    PizzaIngredients: "Salmon, orange, cream cheese, salmon extra slice, nori.",
    PizzaPrice: (11).toFixed(2),
  },
  16: {
    PizzaImg: KiwiRoll,
    PizzaName: "Kiwi Roll 8Pcs",
    PizzaIngredients:
      "Salmon, Kiwi, Carrot, Cream Cheese, Tobico, Cucumber, Rice, Nori.",
    PizzaPrice: (13).toFixed(2),
  },
  17: {
    PizzaImg: Siamese,
    PizzaName: "The Roll of Siamese",
    PizzaIngredients: "Salmon, Cucumber, Carrot, Caviar, Rice.",
    PizzaPrice: (15).toFixed(2),
  },
  18: {
    PizzaImg: SalmonMaki,
    PizzaName: "Salmon Maki Raki 8Pcs",
    PizzaIngredients: "Salmon, Cream Cheese, Rice, Nori.",
    PizzaPrice: (9).toFixed(2),
  },
  19: {
    PizzaImg: NigiriWithRoasted,
    PizzaName: "Nigiri with Roasted Salmon 1Pc",
    PizzaIngredients: "Roasted Salmon, Rice.",
    PizzaPrice: (5).toFixed(2),
  },
  20: {
    PizzaImg: NigiriWithSalmon,
    PizzaName: "Nigiri with Salmon and Orange 1Pc",
    PizzaIngredients: "Salmon, Orange, Rice.",
    PizzaPrice: (4).toFixed(2),
  },
  21: {
    PizzaImg: NigiriWithEel,
    PizzaName: "Nigiri with Eel 1Pc",
    PizzaIngredients: "Eel, rice.",
    PizzaPrice: (6).toFixed(2),
  },
  22: {
    PizzaImg: VulcanTobiko,
    PizzaName: "Vulcan Tobiko",
    PizzaIngredients: "Delicious Gunkan with Tobiko and Rice.",
    PizzaPrice: (4).toFixed(2),
  },
  23: {
    PizzaImg: SalmonGunkan,
    PizzaName: "Salmon Gunkan with Cream Cheese",
    PizzaIngredients:
      "Perfect sushi rice, Nigiri prawns, Cream cheese, Wasabi.",
    PizzaPrice: (11).toFixed(2),
  },
  24: {
    PizzaImg: VeryVegetarian,
    PizzaName: "Very Vegetarian Maki 8Pcs",
    PizzaIngredients: "Avocado, Cream Cheese, Cucumber, Rice, Nori.",
    PizzaPrice: (5).toFixed(2),
  },
  25: {
    PizzaImg: AvocadoMaki,
    PizzaName: "Avocado Maki Raki 8Pcs",
    PizzaIngredients: "Avocado, Cream Cheese, Rice, Nori.",
    PizzaPrice: (5).toFixed(2),
  },
  26: {
    PizzaImg: CucumberMaki,
    PizzaName: "Cucumber Maki Raki 8Pcs",
    PizzaIngredients: "Cucumber, Sesame, Rice, Nori.",
    PizzaPrice: (4).toFixed(2),
  },
  27: {
    PizzaImg: HungrySet,
    PizzaName: "Hungry Set 64Pcs",
    PizzaIngredients:
      "Californication,  Sunny Philadelphia Roll, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Very Vegetarian Maki Raki, Cucumber Maki Raki,  Avocado Maki Raki.",
    PizzaPrice: (50).toFixed(2),
  },
  28: {
    PizzaImg: NigiriOcean,
    PizzaName: "Nigiri Ocean - 14 Pcs",
    PizzaIngredients:
      "14 Different Nigiris: Salmon Nigiri - 2Pcs, Salmon Nigiri with Orange - 2Pcs, Eel Nigiri - 2Pcs, Tuna Nigiri - 2Pcs, Fried Tuna Nigiri - 2Pcs, Fried Salmon Nigiri - 2Pcs, Kiwi Nigiri - 2Pcs",
    PizzaPrice: (40).toFixed(2),
  },
  29: {
    PizzaImg: FoggyAlbion,
    PizzaName: "Foggy Albion - 26Pcs",
    PizzaIngredients:
      "Sunny Philadelphia, Sebastian the Crab, Cucumber Maki Raki, Salmon Gunkan with Cream Cheese - 2Pcs",
    PizzaPrice: (30).toFixed(2),
  },
  30: {
    PizzaImg: StanleyKubrick,
    PizzaName: "Stanley Kubrick - 24 Pcs",
    PizzaIngredients:
      "Clockwork Orange Roll, Spicy Salmon Roll, Very Vegetarian Maki",
    PizzaPrice: (11).toFixed(2),
  },
  31: {
    PizzaImg: SalmonPoke,
    PizzaName: "Salmon Poke",
    PizzaIngredients:
      "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    PizzaPrice: (10).toFixed(2),
  },

  32: {
    PizzaImg: VeggiePoke,
    PizzaName: "Veggie Poke",
    PizzaIngredients:
      "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    PizzaPrice: (8).toFixed(2),
  },
  33: {
    PizzaImg: MiniSalmon,
    PizzaName: "Mini Salmon Set - 22Pcs",
    PizzaIngredients:
      "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    PizzaPrice: (35).toFixed(2),
  },
  34: {
    PizzaImg: OmbosSeth,
    PizzaName: "The Bull of Ombos Seth - 32 Pcs",
    PizzaIngredients:
      "Double Salmon Roll, Sunny Philadelphia, Salmon Maki Raki, Cucumber Maki Raki.",
    PizzaPrice: (30).toFixed(2),
  },
  35: {
    PizzaImg: VeggieSet,
    PizzaName: "Veggie Set 32Pcs",
    PizzaIngredients:
      "Very Veggie Roll, Very Veggie Maki, Cucumber Maki Raki, Avocado Maki Raki.",
    PizzaPrice: (16).toFixed(2),
  },
  36: {
    PizzaImg: FriendlySet,
    PizzaName: "Friendly Set 40Pcs",
    PizzaIngredients:
      "Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.",
    PizzaPrice: (30).toFixed(2),
  },
  37: {
    PizzaImg: SunnyPhiladelphia,
    PizzaName: "Sunny Philadelphia Roll 8Pcs",
    PizzaIngredients: "Salmon, cream cheese, avocado, rice, sesame, nori.",
    PizzaPrice: (12).toFixed(2),
  },
  38: {
    PizzaImg: HiddenDragon,
    PizzaName: "Hidden Dragon Roll 8Pcs",
    PizzaIngredients:
      "Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.",
    PizzaPrice: (13).toFixed(2),
  },
  39: {
    PizzaImg: DoubleSalmon,
    PizzaName: "Double Salmon Roll 8Pcs",
    PizzaIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, nori.",
    PizzaPrice: (14).toFixed(2),
  },
  40: {
    PizzaImg: HottestTaisho,
    PizzaName: "The Hottest Taisho",
    PizzaIngredients:
      "Salmon, Cream Cheese, Avocado, Cucumber, Rice - all comes with your chosen sauce.",
    PizzaPrice: (12).toFixed(2),
  },
  41: {
    PizzaImg: BurningTaisho,
    PizzaName: "Burning Taisho",
    PizzaIngredients: "Salmon, Avocado, Rice, Cucumber, Cream Cheese.",
    PizzaPrice: (10).toFixed(2),
  },
  42: {
    PizzaImg: BlissfulEel,
    PizzaName: "Blissful Eel Roll 8Pcs",
    PizzaIngredients:
      "Eel kinda blissful, Cream Cheese, Avocado, Tobico, Sesame, Rice, Nori.",
    PizzaPrice: (14).toFixed(2),
  },
  43: {
    PizzaImg: Sebastian,
    PizzaName: "Sebastian the Crab Roll 8Pcs",
    PizzaIngredients:
      "Crab with Unique Sauce, Cream Cheese, Avocado, Dried Tuna Flakes, Sesame, Cucumber Rice, Nori.",
    PizzaPrice: (13).toFixed(2),
  },
  44: {
    PizzaImg: DoubleSalmonRoll,
    PizzaName: "Double Salmon Roll 8Pcs",
    PizzaIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, Nori.",
    PizzaPrice: (10).toFixed(2),
  },
  45: {
    PizzaImg: ClockworkOrange,
    PizzaName: "Clockwork Orange Roll 8Pcs",
    PizzaIngredients: "Salmon, orange, cream cheese, salmon extra slice, nori.",
    PizzaPrice: (11).toFixed(2),
  },
  46: {
    PizzaImg: KiwiRoll,
    PizzaName: "Kiwi Roll 8Pcs",
    PizzaIngredients:
      "Salmon, Kiwi, Carrot, Cream Cheese, Tobico, Cucumber, Rice, Nori.",
    PizzaPrice: (13).toFixed(2),
  },
  47: {
    PizzaImg: Siamese,
    PizzaName: "The Roll of Siamese",
    PizzaIngredients: "Salmon, Cucumber, Carrot, Caviar, Rice.",
    PizzaPrice: (15).toFixed(2),
  },
  48: {
    PizzaImg: SalmonMaki,
    PizzaName: "Salmon Maki Raki 8Pcs",
    PizzaIngredients: "Salmon, Cream Cheese, Rice, Nori.",
    PizzaPrice: (9).toFixed(2),
  },
  49: {
    PizzaImg: NigiriWithRoasted,
    PizzaName: "Nigiri with Roasted Salmon 1Pc",
    PizzaIngredients: "Roasted Salmon, Rice.",
    PizzaPrice: (5).toFixed(2),
  },
  50: {
    PizzaImg: NigiriWithSalmon,
    PizzaName: "Nigiri with Salmon and Orange 1Pc",
    PizzaIngredients: "Salmon, Orange, Rice.",
    PizzaPrice: (4).toFixed(2),
  },
  51: {
    PizzaImg: NigiriWithEel,
    PizzaName: "Nigiri with Eel 1Pc",
    PizzaIngredients: "Eel, rice.",
    PizzaPrice: (6).toFixed(2),
  },
  52: {
    PizzaImg: VulcanTobiko,
    PizzaName: "Vulcan Tobiko",
    PizzaIngredients: "Delicious Gunkan with Tobiko and Rice.",
    PizzaPrice: (4).toFixed(2),
  },
  53: {
    PizzaImg: SalmonGunkan,
    PizzaName: "Salmon Gunkan with Cream Cheese",
    PizzaIngredients:
      "Perfect sushi rice, Nigiri prawns, Cream cheese, Wasabi.",
    PizzaPrice: (11).toFixed(2),
  },
  54: {
    PizzaImg: VeryVegetarian,
    PizzaName: "Very Vegetarian Maki 8Pcs",
    PizzaIngredients: "Avocado, Cream Cheese, Cucumber, Rice, Nori.",
    PizzaPrice: (5).toFixed(2),
  },
  55: {
    PizzaImg: AvocadoMaki,
    PizzaName: "Avocado Maki Raki 8Pcs",
    PizzaIngredients: "Avocado, Cream Cheese, Rice, Nori.",
    PizzaPrice: (5).toFixed(2),
  },
  56: {
    PizzaImg: CucumberMaki,
    PizzaName: "Cucumber Maki Raki 8Pcs",
    PizzaIngredients: "Cucumber, Sesame, Rice, Nori.",
    PizzaPrice: (4).toFixed(2),
  },
  57: {
    PizzaImg: HungrySet,
    PizzaName: "Hungry Set 64Pcs",
    PizzaIngredients:
      "Californication,  Sunny Philadelphia Roll, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Very Vegetarian Maki Raki, Cucumber Maki Raki,  Avocado Maki Raki.",
    PizzaPrice: (50).toFixed(2),
  },
  58: {
    PizzaImg: NigiriOcean,
    PizzaName: "Nigiri Ocean - 14 Pcs",
    PizzaIngredients:
      "14 Different Nigiris: Salmon Nigiri - 2Pcs, Salmon Nigiri with Orange - 2Pcs, Eel Nigiri - 2Pcs, Tuna Nigiri - 2Pcs, Fried Tuna Nigiri - 2Pcs, Fried Salmon Nigiri - 2Pcs, Kiwi Nigiri - 2Pcs",
    PizzaPrice: (40).toFixed(2),
  },
  59: {
    PizzaImg: FoggyAlbion,
    PizzaName: "Foggy Albion - 26Pcs",
    PizzaIngredients:
      "Sunny Philadelphia, Sebastian the Crab, Cucumber Maki Raki, Salmon Gunkan with Cream Cheese - 2Pcs",
    PizzaPrice: (30).toFixed(2),
  },
  60: {
    PizzaImg: StanleyKubrick,
    PizzaName: "Stanley Kubrick - 24 Pcs",
    PizzaIngredients:
      "Clockwork Orange Roll, Spicy Salmon Roll, Very Vegetarian Maki",
    PizzaPrice: (11).toFixed(2),
  },
};

export default SushiMenu;
