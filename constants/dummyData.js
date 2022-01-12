const myProfile = {
  name: "Uttam Marandi",
  profile_image: require("../assets/images/profile.png"),
  address: "Bijay R.C Pur, Ward No - 21, Baripada",
};

const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: require("../assets/icons/burger.png"),
  },
  {
    id: 2,
    name: "Fruit Item",
    icon: require("../assets/icons/cherry.png"),
  },
  {
    id: 3,
    name: "Rice Item",
    icon: require("../assets/icons/rice.png"),
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 9.99,
  calories: 89,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description:
    "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
  categories: [1, 2, 3],
  price: 15.99,
  calories: 178,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 11.99,
  calories: 84,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const friedChicken = {
  id: 5,
  name: "Fried Chicken",
  description:
    "Fried chicken, also known as Southern fried chicken is a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.",
  // categories: [1, 2],
  price: 65.99,
  calories: 246,
  isFavourite: true,
  image: require("../assets/dummyData/fried_chicken.png"),
};

const boiledRiceEgg = {
  id: 6,
  name: "Boiled Rice with Egg",
  description:
    "This vibrant rice is served alongside your midweek meal for a plethora of colour and flavour. Egg is stirred through the rice after cooking for added richness, then served with a variety of raw vegetables for added crunch.",
  // categories: [1, 2],
  price: 35.99,
  calories: 205,
  isFavourite: false,
  image: require("../assets/dummyData/boiledrice_egg.png"),
};

const veggieTomato = {
  id: 7,
  name: "Veggie Tomato Mix",
  description:
    "Baked Vegetables in Tomato Sauce features deep-fried brinjal and potato slices topped with a mouthwatering combination of veggies in tomato sauce, drizzled with white sauce, and garnished with cheese. ",
  // categories: [1, 2],
  price: 29.99,
  calories: 95,
  isFavourite: false,
  image: require("../assets/dummyData/veggie_tomato.png"),
};

const dumplingSoup = {
  id: 8,
  name: "Dumpling Soup",
  description:
    "This delicious homemade Dumpling Soup is a great way to enjoy your favorite Chinese food, made fresh! A cozy soup recipe made with Dumplings floating in a clear chicken broth that’s bursting with the Asian flavors of ginger, sesame, and garlic.",
  // categories: [1, 2],
  price: 79.99,
  calories: 295,
  isFavourite: true,
  image: require("../assets/dummyData/dumplig_soup.png"),
};

const friedRiceOmlet = {
  id: 9,
  name: "Fried Rice Omlet",
  description:
    "Fluffy and aromatic egg fried rice is a crowd pleaser. A hearty meal on the go and a satisfying dinner after a hard day at work.",
  // categories: [1, 2],
  price: 49.99,
  calories: 125,
  isFavourite: true,
  image: require("../assets/dummyData/friedrice_omlet.png"),
};
const cucumberSalad = {
  id: 10,
  name: "Cucumber Salad",
  description:
    "This sweet and tangy summer salad of cucumber, cilantro, and peanuts with just a hint of heat is always a hit at picnics and potlucks.",
  // categories: [1, 2],
  price: 5.99,
  calories: 65,
  isFavourite: false,
  image: require("../assets/dummyData/cucumber_salad.png"),
};

const chickenSalad = {
  id: 11,
  name: "Chicken Salad",
  description:
    "Between the protein in the chicken and the healthy fats in the avocado, this is one of the most filling chicken salad.",
  // categories: [1, 2],
  price: 15.99,
  calories: 95,
  isFavourite: true,
  image: require("../assets/dummyData/chicken_salad.png"),
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Newest",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 7,
    name: "All",
    list: [
      friedRiceOmlet,
      friedChicken,
      dumplingSoup,
      vegBiryani,
      hamburger,
      hotTacos,
      wrapSandwich,
      boiledRiceEgg,
      veggieTomato,
      cucumberSalad,
      chickenSalad,
    ],
  },
];

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
    card_no: "1234",
  },
  {
    id: 2,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
    card_no: "1234",
  },
];

const allCards = [
  {
    id: 1,
    name: "Apple Pay",
    icon: require("../assets/icons/apple.png"),
  },
  {
    id: 2,
    name: "Visa",
    icon: require("../assets/icons/visa.png"),
  },
  {
    id: 3,
    name: "PayPal",
    icon: require("../assets/icons/paypal.png"),
  },
  {
    id: 4,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
  },
  {
    id: 5,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 1.556306570595712,
    longitude: 110.35504616746915,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

export default {
  vegBiryani,
  myProfile,
  categories,
  menu,
  sizes,
  myCart,
  myCards,
  allCards,
  fromLocs,
};
