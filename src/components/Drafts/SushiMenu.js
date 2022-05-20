import SalmonPoke from "../images/sushi-images/sushi-19.jpeg";
import VeggiePoke from "../images/sushi-images/sushi-26.jpeg";
import MiniSalmon from "../images/sushi-images/sushi-12.jpeg";
import OmbosSeth from "../images/sushi-images/sushi-23.jpeg";
import VeggieSet from "../images/sushi-images/sushi-27.jpeg";
import FriendlySet from "../images/sushi-images/sushi-8.jpeg";
import SunnyPhiladelphia from "../images/sushi-images/sushi-22.jpeg";
import HiddenDragon from "../images/sushi-images/sushi-9.jpeg";
import HottestTaisho from "../images/sushi-images/sushi-24.jpeg";
import BurningTaisho from "../images/sushi-images/sushi-3.jpeg";
import BlissfulEel from "../images/sushi-images/sushi-2.jpeg";
import Sebastian from "../images/sushi-images/sushi-20.jpeg";
import DoubleSalmon from "../images/sushi-images/sushi-6.jpeg";
import ClockworkOrange from "../images/sushi-images/sushi-4.jpeg";
import KiwiRoll from "../images/sushi-images/sushi-11.jpeg";
import Siamese from "../images/sushi-images/sushi-25.jpeg";
import SalmonMaki from "../images/sushi-images/sushi-18.jpeg";
import NigiriWithRoasted from "../images/sushi-images/sushi-15.jpeg";
import NigiriWithSalmon from "../images/sushi-images/sushi-16.jpeg";
import NigiriWithEel from "../images/sushi-images/sushi-14.jpeg";
import VulcanTobiko from "../images/sushi-images/sushi-29.jpeg";
import SalmonGunkan from "../images/sushi-images/sushi-17.jpeg";
import VeryVegetarian from "../images/sushi-images/sushi-28.jpeg";
import SushiOne from "../images/sushi-images/sushi-1.jpeg";
import CucumberMaki from "../images/sushi-images/sushi-5.jpeg";
import HungrySet from "../images/sushi-images/sushi-10.jpeg";
import NigiriOcean from "../images/sushi-images/sushi-13.jpeg";
import FoggyAlbion from "../images/sushi-images/sushi-7.jpeg";
import StanleyKubrick from "../images/sushi-images/sushi-21.jpeg";

const SushiMenu = {
  101: {
    ItemImg: SalmonPoke,
    ItemName: "Salmon Poke",
    ItemIngredients:
      "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    ItemPrice: (10).toFixed(2),
  },

  102: {
    ItemImg: VeggiePoke,
    ItemName: "Veggie Poke",
    ItemIngredients:
      "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    ItemPrice: (8).toFixed(2),
  },
  103: {
    ItemImg: MiniSalmon,
    ItemName: "Mini Salmon Set - 22Pcs",
    ItemIngredients:
      "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    ItemPrice: (35).toFixed(2),
  },
  104: {
    ItemImg: OmbosSeth,
    ItemName: "The Bull of Ombos Seth - 32 Pcs",
    ItemIngredients:
      "Double Salmon Roll, Sunny Philadelphia, Salmon Maki Raki, Cucumber Maki Raki.",
    ItemPrice: (30).toFixed(2),
  },
  105: {
    ItemImg: VeggieSet,
    ItemName: "Veggie Set 32Pcs",
    ItemIngredients:
      "Very Veggie Roll, Very Veggie Maki, Cucumber Maki Raki, Avocado Maki Raki.",
    ItemPrice: (16).toFixed(2),
  },
  106: {
    ItemImg: FriendlySet,
    ItemName: "Friendly Set 40Pcs",
    ItemIngredients:
      "Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.",
    ItemPrice: (30).toFixed(2),
  },
  107: {
    ItemImg: SunnyPhiladelphia,
    ItemName: "Sunny Philadelphia Roll 8Pcs",
    ItemIngredients: "Salmon, cream cheese, avocado, rice, sesame, nori.",
    ItemPrice: (12).toFixed(2),
  },
  108: {
    ItemImg: HiddenDragon,
    ItemName: "Hidden Dragon Roll 8Pcs",
    ItemIngredients:
      "Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.",
    ItemPrice: (13).toFixed(2),
  },
  109: {
    ItemImg: DoubleSalmon,
    ItemName: "Double Salmon Roll 8Pcs",
    ItemIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, nori.",
    ItemPrice: (14).toFixed(2),
  },
  110: {
    ItemImg: HottestTaisho,
    ItemName: "The Hottest Taisho",
    ItemIngredients:
      "Salmon, Cream Cheese, Avocado, Cucumber, Rice - all comes with your chosen sauce.",
    ItemPrice: (12).toFixed(2),
  },
  111: {
    ItemImg: BurningTaisho,
    ItemName: "Burning Taisho",
    ItemIngredients: "Salmon, Avocado, Rice, Cucumber, Cream Cheese.",
    ItemPrice: (10).toFixed(2),
  },
  112: {
    ItemImg: BlissfulEel,
    ItemName: "Blissful Eel Roll 8Pcs",
    ItemIngredients:
      "Eel kinda blissful, Cream Cheese, Avocado, Tobico, Sesame, Rice, Nori.",
    ItemPrice: (14).toFixed(2),
  },
  113: {
    ItemImg: Sebastian,
    ItemName: "Sebastian the Crab Roll 8Pcs",
    ItemIngredients:
      "Crab with Unique Sauce, Cream Cheese, Avocado, Dried Tuna Flakes, Sesame, Cucumber Rice, Nori.",
    ItemPrice: (13).toFixed(2),
  },
  114: {
    ItemImg: DoubleSalmon,
    ItemName: "Double Salmon Roll 8Pcs",
    ItemIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, Nori.",
    ItemPrice: (10).toFixed(2),
  },
  115: {
    ItemImg: ClockworkOrange,
    ItemName: "Clockwork Orange Roll 8Pcs",
    ItemIngredients: "Salmon, orange, cream cheese, salmon extra slice, nori.",
    ItemPrice: (11).toFixed(2),
  },
  16: {
    ItemImg: KiwiRoll,
    ItemName: "Kiwi Roll 8Pcs",
    ItemIngredients:
      "Salmon, Kiwi, Carrot, Cream Cheese, Tobico, Cucumber, Rice, Nori.",
    ItemPrice: (13).toFixed(2),
  },
  117: {
    ItemImg: Siamese,
    ItemName: "The Roll of Siamese",
    ItemIngredients: "Salmon, Cucumber, Carrot, Caviar, Rice.",
    ItemPrice: (15).toFixed(2),
  },
  118: {
    ItemImg: SalmonMaki,
    ItemName: "Salmon Maki Raki 8Pcs",
    ItemIngredients: "Salmon, Cream Cheese, Rice, Nori.",
    ItemPrice: (9).toFixed(2),
  },
  119: {
    ItemImg: NigiriWithRoasted,
    ItemName: "Nigiri with Roasted Salmon 1Pc",
    ItemIngredients: "Roasted Salmon, Rice.",
    ItemPrice: (5).toFixed(2),
  },
  120: {
    ItemImg: NigiriWithSalmon,
    ItemName: "Nigiri with Salmon and Orange 1Pc",
    ItemIngredients: "Salmon, Orange, Rice.",
    ItemPrice: (4).toFixed(2),
  },
  121: {
    ItemImg: NigiriWithEel,
    ItemName: "Nigiri with Eel 1Pc",
    ItemIngredients: "Eel, rice.",
    ItemPrice: (6).toFixed(2),
  },
  122: {
    ItemImg: VulcanTobiko,
    ItemName: "Vulcan Tobiko",
    ItemIngredients: "Delicious Gunkan with Tobiko and Rice.",
    ItemPrice: (4).toFixed(2),
  },
  123: {
    ItemImg: SalmonGunkan,
    ItemName: "Salmon Gunkan with Cream Cheese",
    ItemIngredients:
      "Perfect sushi rice, Nigiri prawns, Cream cheese, Wasabi.",
    ItemPrice: (11).toFixed(2),
  },
  124: {
    ItemImg: VeryVegetarian,
    ItemName: "Very Vegetarian Maki 8Pcs",
    ItemIngredients: "Avocado, Cream Cheese, Cucumber, Rice, Nori.",
    ItemPrice: (5).toFixed(2),
  },
  125: {
    ItemImg: SushiOne,
    ItemName: "Avocado Maki Raki 8Pcs",
    ItemIngredients: "Avocado, Cream Cheese, Rice, Nori.",
    ItemPrice: (5).toFixed(2),
  },
  126: {
    ItemImg: CucumberMaki,
    ItemName: "Cucumber Maki Raki 8Pcs",
    ItemIngredients: "Cucumber, Sesame, Rice, Nori.",
    ItemPrice: (4).toFixed(2),
  },
  127: {
    ItemImg: HungrySet,
    ItemName: "Hungry Set 64Pcs",
    ItemIngredients:
      "Californication,  Sunny Philadelphia Roll, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Very Vegetarian Maki Raki, Cucumber Maki Raki,  Avocado Maki Raki.",
    ItemPrice: (50).toFixed(2),
  },
  128: {
    ItemImg: NigiriOcean,
    ItemName: "Nigiri Ocean - 14 Pcs",
    ItemIngredients:
      "14 Different Nigiris: Salmon Nigiri - 2Pcs, Salmon Nigiri with Orange - 2Pcs, Eel Nigiri - 2Pcs, Tuna Nigiri - 2Pcs, Fried Tuna Nigiri - 2Pcs, Fried Salmon Nigiri - 2Pcs, Kiwi Nigiri - 2Pcs",
    ItemPrice: (40).toFixed(2),
  },
  129: {
    ItemImg: FoggyAlbion,
    ItemName: "Foggy Albion - 26Pcs",
    ItemIngredients:
      "Sunny Philadelphia, Sebastian the Crab, Cucumber Maki Raki, Salmon Gunkan with Cream Cheese - 2Pcs",
    ItemPrice: (30).toFixed(2),
  },
  130: {
    ItemImg: StanleyKubrick,
    ItemName: "Stanley Kubrick - 24 Pcs",
    ItemIngredients:
      "Clockwork Orange Roll, Spicy Salmon Roll, Very Vegetarian Maki",
    ItemPrice: (11).toFixed(2),
  },
  131: {
    ItemImg: SalmonPoke,
    ItemName: "Salmon Poke",
    ItemIngredients:
      "Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.",
    ItemPrice: (10).toFixed(2),
  },

  132: {
    ItemImg: VeggiePoke,
    ItemName: "Veggie Poke",
    ItemIngredients:
      "Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.",
    ItemPrice: (8).toFixed(2),
  },
  33: {
    ItemImg: MiniSalmon,
    ItemName: "Mini Salmon Set - 22Pcs",
    ItemIngredients:
      "Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs",
    ItemPrice: (35).toFixed(2),
  },
  134: {
    ItemImg: OmbosSeth,
    ItemName: "The Bull of Ombos Seth - 32 Pcs",
    ItemIngredients:
      "Double Salmon Roll, Sunny Philadelphia, Salmon Maki Raki, Cucumber Maki Raki.",
    ItemPrice: (30).toFixed(2),
  },
  135: {
    ItemImg: VeggieSet,
    ItemName: "Veggie Set 32Pcs",
    ItemIngredients:
      "Very Veggie Roll, Very Veggie Maki, Cucumber Maki Raki, Avocado Maki Raki.",
    ItemPrice: (16).toFixed(2),
  },
  136: {
    ItemImg: FriendlySet,
    ItemName: "Friendly Set 40Pcs",
    ItemIngredients:
      "Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.",
    ItemPrice: (30).toFixed(2),
  },
  137: {
    ItemImg: SunnyPhiladelphia,
    ItemName: "Sunny Philadelphia Roll 8Pcs",
    ItemIngredients: "Salmon, cream cheese, avocado, rice, sesame, nori.",
    ItemPrice: (12).toFixed(2),
  },
  138: {
    ItemImg: HiddenDragon,
    ItemName: "Hidden Dragon Roll 8Pcs",
    ItemIngredients:
      "Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.",
    ItemPrice: (13).toFixed(2),
  },
  139: {
    ItemImg: DoubleSalmon,
    ItemName: "Double Salmon Roll 8Pcs",
    ItemIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, nori.",
    ItemPrice: (14).toFixed(2),
  },
  40: {
    ItemImg: HottestTaisho,
    ItemName: "The Hottest Taisho",
    ItemIngredients:
      "Salmon, Cream Cheese, Avocado, Cucumber, Rice - all comes with your chosen sauce.",
    ItemPrice: (12).toFixed(2),
  },
  141: {
    ItemImg: BurningTaisho,
    ItemName: "Burning Taisho",
    ItemIngredients: "Salmon, Avocado, Rice, Cucumber, Cream Cheese.",
    ItemPrice: (10).toFixed(2),
  },
  142: {
    ItemImg: BlissfulEel,
    ItemName: "Blissful Eel Roll 8Pcs",
    ItemIngredients:
      "Eel kinda blissful, Cream Cheese, Avocado, Tobico, Sesame, Rice, Nori.",
    ItemPrice: (14).toFixed(2),
  },
  143: {
    ItemImg: Sebastian,
    ItemName: "Sebastian the Crab Roll 8Pcs",
    ItemIngredients:
      "Crab with Unique Sauce, Cream Cheese, Avocado, Dried Tuna Flakes, Sesame, Cucumber Rice, Nori.",
    ItemPrice: (13).toFixed(2),
  },
  144: {
    ItemImg: DoubleSalmon,
    ItemName: "Double Salmon Roll 8Pcs",
    ItemIngredients:
      "Salmon, Cream Cheese, Avocado, Sesame, Extra Salmon Slice, Cucumber, Rice, Nori.",
    ItemPrice: (10).toFixed(2),
  },
  145: {
    ItemImg: ClockworkOrange,
    ItemName: "Clockwork Orange Roll 8Pcs",
    ItemIngredients: "Salmon, orange, cream cheese, salmon extra slice, nori.",
    ItemPrice: (11).toFixed(2),
  },
  146: {
    ItemImg: KiwiRoll,
    ItemName: "Kiwi Roll 8Pcs",
    ItemIngredients:
      "Salmon, Kiwi, Carrot, Cream Cheese, Tobico, Cucumber, Rice, Nori.",
    ItemPrice: (13).toFixed(2),
  },
  147: {
    ItemImg: Siamese,
    ItemName: "The Roll of Siamese",
    ItemIngredients: "Salmon, Cucumber, Carrot, Caviar, Rice.",
    ItemPrice: (15).toFixed(2),
  },
  148: {
    ItemImg: SalmonMaki,
    ItemName: "Salmon Maki Raki 8Pcs",
    ItemIngredients: "Salmon, Cream Cheese, Rice, Nori.",
    ItemPrice: (9).toFixed(2),
  },
  149: {
    ItemImg: NigiriWithRoasted,
    ItemName: "Nigiri with Roasted Salmon 1Pc",
    ItemIngredients: "Roasted Salmon, Rice.",
    ItemPrice: (5).toFixed(2),
  },
  150: {
    ItemImg: NigiriWithSalmon,
    ItemName: "Nigiri with Salmon and Orange 1Pc",
    ItemIngredients: "Salmon, Orange, Rice.",
    ItemPrice: (4).toFixed(2),
  },
  151: {
    ItemImg: NigiriWithEel,
    ItemName: "Nigiri with Eel 1Pc",
    ItemIngredients: "Eel, rice.",
    ItemPrice: (6).toFixed(2),
  },
  152: {
    ItemImg: VulcanTobiko,
    ItemName: "Vulcan Tobiko",
    ItemIngredients: "Delicious Gunkan with Tobiko and Rice.",
    ItemPrice: (4).toFixed(2),
  },
  153: {
    ItemImg: SalmonGunkan,
    ItemName: "Salmon Gunkan with Cream Cheese",
    ItemIngredients:
      "Perfect sushi rice, Nigiri prawns, Cream cheese, Wasabi.",
    ItemPrice: (11).toFixed(2),
  },
  54: {
    ItemImg: VeryVegetarian,
    ItemName: "Very Vegetarian Maki 8Pcs",
    ItemIngredients: "Avocado, Cream Cheese, Cucumber, Rice, Nori.",
    ItemPrice: (5).toFixed(2),
  },
  155: {
    ItemImg: SushiOne,
    ItemName: "Avocado Maki Raki 8Pcs",
    ItemIngredients: "Avocado, Cream Cheese, Rice, Nori.",
    ItemPrice: (5).toFixed(2),
  },
  156: {
    ItemImg: CucumberMaki,
    ItemName: "Cucumber Maki Raki 8Pcs",
    ItemIngredients: "Cucumber, Sesame, Rice, Nori.",
    ItemPrice: (4).toFixed(2),
  },
  157: {
    ItemImg: HungrySet,
    ItemName: "Hungry Set 64Pcs",
    ItemIngredients:
      "Californication,  Sunny Philadelphia Roll, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Very Vegetarian Maki Raki, Cucumber Maki Raki,  Avocado Maki Raki.",
    ItemPrice: (50).toFixed(2),
  },
  58: {
    ItemImg: NigiriOcean,
    ItemName: "Nigiri Ocean - 14 Pcs",
    ItemIngredients:
      "14 Different Nigiris: Salmon Nigiri - 2Pcs, Salmon Nigiri with Orange - 2Pcs, Eel Nigiri - 2Pcs, Tuna Nigiri - 2Pcs, Fried Tuna Nigiri - 2Pcs, Fried Salmon Nigiri - 2Pcs, Kiwi Nigiri - 2Pcs",
    ItemPrice: (40).toFixed(2),
  },
  159: {
    ItemImg: FoggyAlbion,
    ItemName: "Foggy Albion - 26Pcs",
    ItemIngredients:
      "Sunny Philadelphia, Sebastian the Crab, Cucumber Maki Raki, Salmon Gunkan with Cream Cheese - 2Pcs",
    ItemPrice: (30).toFixed(2),
  },
  160: {
    ItemImg: StanleyKubrick,
    ItemName: "Stanley Kubrick - 24 Pcs",
    ItemIngredients:
      "Clockwork Orange Roll, Spicy Salmon Roll, Very Vegetarian Maki",
    ItemPrice: (11).toFixed(2),
  },
};

export default SushiMenu;
