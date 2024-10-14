export const CDN_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2622342&lng=72.9735531&page_type=DESKTOP_WEB_LISTING";
export const CARD_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const MENU_IMAGE_ITEM_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
export const MENU_CDN_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2183307&lng=72.9780897&restaurantId=";
export const RESTAURANT_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2612989&lng=72.9727224&restaurantId=";
export function filterData(allRestroData, searchTxt) {
  const data = allRestroData.filter((restro) => {
    const d = restro?.data?.name
      ?.toLowerCase()
      ?.includes(searchTxt?.toLowerCase());
    return d;
  });
  return data;
}
export const name = "Siddhesh Mhapankar";
export const mail = "siddheshmhapankar2478@gmail.com";
export const linkedin = "https://www.linkedin.com/in/siddheshmhapankar2478/";
export const github = "https://github.com/siddheshmhapankar2478/";
export const restaurantListMain = [
  {
    id: "32133",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas"],
    sla: "26 mins",
    avgRating: 3.9,
  },
  {
    id: "23744",
    name: "McDonald's",
    cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    sla: "18 mins",
    avgRating: 4.5,
  },
  {
    id: "39677",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    costForTwo: "₹750 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    sla: "18 mins",
    avgRating: 4.1,
  },
  {
    id: "221810",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    sla: "28 mins",
    avgRating: 4.2,
  },
  {
    id: "48750",
    name: "Meraki",
    cloudinaryImageId: "zlg9ivz8tsouustzf2r4",
    cuisines: ["Chinese", "Thai", "Burmese", "Pan-Asian", "Asian"],
    sla: "30 mins",
    avgRating: 4.1,
    costForTwo: "₹400 for two",
  },
  {
    id: "60181",
    name: "Starbucks Coffee",
    cloudinaryImageId: "0c958153eeb436db6d515ca36e47e8a4",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Bakery",
      "Ice Cream",
    ],
    sla: "21 mins",
    avgRating: 4.3,
    costForTwo: "₹400 for two",
  },
  {
    id: "31489",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    sla: "22 mins",
    avgRating: 4,
    costForTwo: "₹250 for two",
  },
  {
    id: "31983",
    name: "Natural Ice Cream",
    cloudinaryImageId: "ts7etbvrvqq0gclxkdfl",
    cuisines: ["Ice Cream", "Desserts"],
    sla: "20 mins",
    avgRating: 4.7,
    costForTwo: "₹150 for two",
  },
  {
    id: "53642",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId: "846dab8cca3c56a482d7cbcda0dd0eb9",
    cuisines: ["Waffle", "Desserts", "Ice Cream"],
    sla: "27 mins",
    avgRating: 4.3,
    costForTwo: "₹200 for two",
  },
  {
    id: "76024",
    name: "NIC Ice Creams",
    cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
    cuisines: ["Ice Cream", "Desserts"],
    sla: "16 mins",
    avgRating: 4.6,
    costForTwo: "₹120 for two",
  },
  {
    id: "17503",
    name: "Faasos - Wraps & Rolls",
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    cuisines: [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    sla: "21 mins",
    avgRating: 4.1,
    costForTwo: "₹200 for two",
  },
  {
    id: "16644",
    name: "Behrouz Biryani",
    cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
    cuisines: [
      "Biryani",
      "Mughlai",
      "North Indian",
      "Lucknowi",
      "Hyderabadi",
      "Kebabs",
      "Desserts",
      "Beverages",
    ],
    sla: "20 mins",
    avgRating: 4.2,
    costForTwo: "₹500 for two",
  },
  {
    id: "305815",
    name: "Barbeque Nation",
    cloudinaryImageId: "bgdbwat8mps7zgzsxlay",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    sla: "21 mins",
    avgRating: 3.7,
    costForTwo: "₹600 for two",
  },
  {
    id: "328882",
    name: "Charcoal Eats - Biryani & Beyond",
    cloudinaryImageId: "d796c32a336dcce6814de6921d916966",
    cuisines: ["Biryani", "Kebabs", "Hyderabadi", "North Indian"],
    sla: "24 mins",
    avgRating: 4.1,
    costForTwo: "₹499 for two",
  },
  {
    id: "487628",
    name: "Poetry By Love & Cheesecake",
    cloudinaryImageId: "d63c7c51ff0962f22d30957ba3f1ff74",
    cuisines: ["Desserts"],
    sla: "23 mins",
    avgRating: 4.4,
    costForTwo: "₹900 for two",
  },
  {
    id: "33828",
    name: "Aromas Cafe & Bistro",
    cloudinaryImageId: "jvmgd55cwtfpywyvb6zv",
    cuisines: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Middle Eastern",
      "Continental",
      "Beverages",
    ],
    sla: "29 mins",
    avgRating: 4.4,
    costForTwo: "₹1000 for two",
  },
  {
    id: "200279",
    name: "Nothing but Chicken",
    cloudinaryImageId: "rgiz2uz44dm7ol6oytpt",
    cuisines: ["Salads", "Biryani", "Kebabs", "Fast Food", "Healthy Food"],
    sla: "22 mins",
    avgRating: 4.4,
    costForTwo: "₹400 for two",
  },
  {
    id: "668979",
    name: "The Brooklyn Creamery - Healthy Ice Cream",
    cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
    cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
    sla: "15 mins",
    avgRating: 4.5,
    costForTwo: "₹200 for two",
  },
  {
    id: "351107",
    name: "Grameen Kulfi",
    cloudinaryImageId: "kv1kef6gpag9fj5qsecu",
    cuisines: ["Ice Cream", "Desserts"],
    sla: "15 mins",
    avgRating: 4.8,
    costForTwo: "₹120 for two",
  },
];
