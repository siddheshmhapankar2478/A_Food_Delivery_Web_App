// export const CDN_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2622342&lng=72.9735531&page_type=DESKTOP_WEB_LISTING";
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

export const restaurantMenu = {
  32133: [
    {
      title: "Recommended",
      items: [
        {
          imageId: "a6c351a9a53ae0c5fa2e5e401b8bf27a",
          name: "Makhni Paneer & Chicken Tikka Keema Combo",
          description:
            "Serves 2 | Satisfy your desi flavour cravings with Makhni Paneer & Chicken Tikka Keema Melts. Makhni Paneer Melts: (265 Kcal/100g), Chicken Tikka Keema Melts : (283 Kcal/100g).",
          id: "135336797",
          price: 54900,
        },
        {
          imageId: "e6072e97754de0c6c6030103e0fb50d3",
          name: "Create your Melts Box of 2 - Veg",
          description:
            "Serves 2 | Choose any 2 Melts. Double the flavour, double the satisfaction. Cheezy Cheese Veg Melts :  (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g), Makhni Paneer Melts : (265 Kcal/100g).",
          id: "135320134",
        },
        {
          imageId: "0b816322be7e8731246e9492e4b44b84",
          name: "Cheezy Cheese Veg & Loaded BBQ Veg Combo",
          description:
            "Serves 2 | Double the satisfaction with Cheezy Cheese Veg & Loaded BBQ Veg Melts. Cheezy Cheese Veg Melts :  (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g).",
          id: "135673848",
          price: 39900,
        },
        {
          imageId: "e7620274ab99ba415f3e00480020cb48",
          name: "Create your Melts Box of 2 Non-Veg",
          description:
            "Serves 2 | Choose any 2 Melts. Double the flavour, double the satisfaction. Cheezy Cheese Chicken : (268 Kcal/100g), Loaded BBQ Non-Veg : (330 Kcal/100g), Chicken Tikka Keema : (283 Kcal/100g).",
          id: "135320143",
        },
        {
          imageId: "3779ffaf02380c80f951a1ed2b90c997",
          name: "Cheezy Cheese Chicken & Loaded BBQ Non-Veg Combo",
          description:
            "Serves 1 | Satisfy your non veg cravings with Cheezy Cheese Chicken & Loaded Chicken BBQ Melts. Cheezy Cheese Chicken Melts : (268 Kcal/100g), Loaded BBQ Non-Veg Melts: (330 Kcal/100g).",
          id: "135336796",
          price: 48900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/10/f992e8ef-2a2b-4210-b7b6-874686580f44_afd87372-44c4-4947-8928-74f3e1522418.jpg",
          name: "Melts Meal for 1 with Exotica Veggie Garlic Bread 2Pcs & 1 Dip-Veg",
          description:
            "Choose your favourite Melts & get Exotica Veggie Garlic Bread (2 Pcs) with Mayo Dip.  Cheezy Cheese Veg Melts :  (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g), Makhni Paneer Melts : (265 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "147077572",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/bfee1036-41ea-40c1-addc-4fcbfb9475ee_37545bf3-2f63-458b-a7bc-fbeeaa7c41bc.jpg_compressed",
          name: "Melts 3 Course Meal for 1 - Veg",
          description:
            'Serves 1 | The perfect "Me Time" meal. Choose your favourite Melts & Fries accompanied with 1 Pepsi PET. Cheezy Cheese Veg Melts :  (296 Kcal/100g), Loaded BBQ Veg Melts : (255 Kcal/100g), Makhni Paneer Melts : (265 Kcal/100g).',
          id: "135320136",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/18/2b0e6419-c316-43b5-8f36-fd47074399eb_ffa8760b-eb38-4a21-b547-36a3c39692b6.jpg",
          name: "Melts Meal for 1 with Exotica Veggie Garlic Bread 2Pcs & 1 Dip-Non Veg",
          description:
            "Choose your favourite Melts & get Exotica Veggie Garlic Bread (2 Pcs) with Mayo Dip. Cheezy Cheese Chicken Melts : (268 Kcal/100g), Loaded BBQ Non-Veg Melts : (330 Kcal/100g), Chicken Tikka Keema Melts : (283 Kcal/100g).  Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "147077573",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/26d48552-a554-4b30-93d0-7462c255adc2_cc625cc1-b13b-44d4-a394-969d224b4c6c.jpg_compressed",
          name: "Melts 3 Course Meal for 1 Non-Veg",
          description:
            'Serves 1 | The perfect "Me Time" meal. Choose your favourite Melts & Fries accompanied with 1 Pepsi PET. Cheezy Cheese Chicken Melts : (268 Kcal/100g), Loaded BBQ Non-Veg Melts : (330 Kcal/100g), Chicken Tikka Keema Melts : (283 Kcal/100g).',
          id: "135320146",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/3330ac68-19aa-4598-a9f9-ac1f538ab52c_e1e7be34-7ff1-475b-a69b-4b99de6a2b09.png",
          name: "My Box - Non Veg",
          description:
            "Serves 1 | 1 personal non veg pizza, 2 pc garlic bread & 1 Pepsi PET. For Meals, refer to the nutritional data for individual products.",
          id: "94974467",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/a1efbc7d-6165-4b69-8fe8-e88335921678_0c2d69b5-8aef-4ff2-962c-7c9d75bb84ce.png",
          name: "My Box - Veg",
          description:
            "Serves 1 | 1 personal veg pizza, 2 pc garlic bread & 1 Pepsi PET ! For Meals, refer to the nutritional data for individual products.",
          id: "94974457",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/9004b4ef-3454-40d3-babb-641082675270_4fd584b6-55b0-4a17-b519-d42e6fff8af9.png",
          name: "Hut Treat Meal for 2 - Veg",
          description:
            "Serves 2 | 1 medium veg pizza upto signature, 1 classic bread stix, 1 Pepsi PET. For Meals, refer to the nutritional data for individual products.",
          id: "87269974",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fc115b57-9536-4c2d-8876-bcedf630ea7b_b7818aa0-4ccb-4cfa-acb5-df7a9cace4e5.png_compressed",
          name: "Hut Treat Meal for 2 - Non Veg",
          description:
            "Serves 2 | 1 medium non-veg pizza upto signature, 1 classic bread stix, 1 Pepsi PET. For Meals, refer to the nutritional data for individual products.",
          id: "87269978",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/4bf86218-e9b2-4ff2-9c8b-bfc20e115efc_e6e2dc0f-10ed-4389-918b-45d3e32bfeda.png",
          name: "Hut Treat Meal for 4 - Non Veg",
          description:
            "Serves 4 | Super saver meal combo @ 959 - 2 med non veg pizza of choice, 2 classic bread stix, 2 Pepsi PET. For Meals, refer to the nutritional data for individual products.",
          id: "114791544",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/ca00e969-c65f-4436-85fc-a64408ddaa09_6f0ea04a-c96c-4a1e-893a-be49ead80ae0.png",
          name: "Hut Treat Meal for 4 - Veg",
          description:
            "Serves 4 | Super saver meal combo @ 859 - 2 med veg pizza of choice, 2 classic bread stix, 2 Pepsi PET. For Meals, refer to the nutritional data for individual products.",
          id: "114791542",
        },
        {
          imageId: "6110f28b77f670194674bbf318970656",
          name: "Super Value Deal : 2 Medium Non-Veg Pizzas starting at Rs 749 (Save Upto 39%).",
          description:
            "Serves 4 | Choose any 2 of your favorite non-veg medium pizzas. For Meals, refer to the nutritional data for individual products.",
          id: "114791535",
        },
        {
          imageId: "2d34f1c2c669eab6821dd0ee068590e4",
          name: "Super Value Deal : 2 Medium Veg Pizzas starting at Rs 649 (Save Upto 41%).",
          description:
            "Serves 4 | Choose any 2 of your favorite veg medium pizzas. For Meals, refer to the nutritional data for individual products.",
          id: "114791525",
        },
        {
          imageId: "z0c4xpovma1qtmu4tlls",
          name: "Veggie Supreme",
          description:
            "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "113811259",
        },
        {
          imageId: "s5ld93rsknx0fhj6xarn",
          name: "Tandoori Paneer",
          description:
            "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "48083898",
        },
        {
          imageId: "cbye9x7wxeopwqvenn7g",
          name: "Veggie Feast",
          description:
            "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "48083913",
        },
      ],
    },
    {
      title: "Veg Pizza",
      items: [
        {
          imageId: "dpventcrozvfni0lqb10",
          name: "Margherita Pizza",
          description:
            "Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (292 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "96199565",
          price: 16900,
        },
        {
          imageId: "z0c4xpovma1qtmu4tlls",
          name: "Veggie Supreme",
          description:
            "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "113811259",
        },
        {
          imageId: "s5ld93rsknx0fhj6xarn",
          name: "Tandoori Paneer",
          description:
            "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "48083898",
        },
        {
          imageId: "bf62afee565475fb92a204206321a41c",
          name: "Mazedar Makhni Paneer",
          description:
            "Serves 1 | A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle (PAN Per/Med-288 Kcal/100g | TnC-290 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "116285984",
        },
        {
          imageId: "cbye9x7wxeopwqvenn7g",
          name: "Veggie Feast",
          description:
            "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "48083913",
        },
        {
          imageId: "dpventcrozvfni0lqb10",
          name: "Margherita",
          description:
            "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "113811266",
        },
        {
          imageId: "b7d1f56df6414f8b6e49001af95e259a",
          name: "Ultimate Tandoori Veggie",
          description:
            "Serves 1 | An ultimate combination of your favourite veggies-onion, green capsicum, mushroom, tomato, spicy jalapeno on tandoori sauce, topped with 100% mozzarella cheese & generous drizzle of mint mayo (PAN Per/Med-314 Kcal/100g | TnC-395 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "116285983",
        },
        {
          imageId: "0c4c12819d98a35144e3f08451ae64f3",
          name: "Mexican Fiesta",
          description:
            "Serves 1 | Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella cheese with a signature spice sprinkle & our flavourful pan sauce (PAN Per/Med-266 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "116285981",
        },
        {
          imageId: "9bd233c76aaf2d2745c5c07332609a8c",
          name: "Awesome American Cheesy",
          description:
            "Serves 1 | Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce (PAN Per/Med-290 Kcal/100g | TnC-300 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "116285985",
        },
        {
          imageId: "c3832837392378cca98e484b89c313ba",
          name: "Country Feast",
          description:
            "Serves 1 | Loaded with herbed onion & green capsicum, sweet corn, tomato with signature pan sauce and 100% mozzarella cheese. It's a feast you can't refuse (PAN Per/Med-244 Kcal/100g | TnC-282 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "48083749",
        },
        {
          imageId: "d4d697a58b3a97a46676fa8712e90ed7",
          name: "Bold BBQ Veggies",
          description:
            "Serves 1 | Our signature pan sauce, with BBQ Sauce drizzle, topped with mushroom, onion, green capsicum, & red paprika (PAN Per/Med-242 Kcal/100g | TnC-266 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "135320131",
        },
        {
          imageId: "a89yqx09ppwlecyqterp",
          name: "Spiced Paneer",
          description:
            "Serves 1 | Spiced paneer, crunchy onion, juicy tomato & 100% mozzarella cheese, with our classic pan sauce (PAN Per/Med-276 Kcal/100g | TnC-283 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "99811880",
        },
        {
          imageId: "0e7df98b7cffdb0b88856464014ad2ff",
          name: "Schezwan Margherita",
          description:
            "Serves 2 | Your very own margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese (PAN Per/Med-300 Kcal/100g | TnC-309 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "116285980",
        },
        {
          imageId: "ckbnw98n6tffy50wvuzm",
          name: "Corn & Cheese",
          description:
            "Serves 1 | A combination of juicy sweet corn & 100% mozzarella cheese with flavourful signature pan sauce (PAN Per/Med-320 Kcal/100g | TnC-304 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "72273573",
        },
      ],
    },
    {
      title: "Garlic Bread",
      items: [
        {
          imageId: "m8ecjvtqcjtnt31uvobl",
          name: "Garlic Bread Spicy Supreme",
          description:
            "Serves 1 | Garlic bread topped with 100% mozzarella cheeese, onion & green chillies (346 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "33664780",
          price: 16900,
        },
        {
          imageId: "ziohlqoy38mfqzmfxy7e",
          name: "Cheese Garlic Bread",
          description:
            "Serves 1 | Nothing beats our garlic bread! Period! (363 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "13018336",
          price: 15900,
        },
        {
          imageId: "a8288101773dde9baf1e1b2d3228dbf8",
          name: "Masala Keema Garlic Bread",
          description:
            "Serves 1 | Hut's signature Garlic Bread topped with chicken keema masala, onion and green chilli & a flavourful dressing.A must try! (442 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "114791506",
          price: 18900,
        },
        {
          imageId: "n2ycmete7ehes9mrerlw",
          name: "Classic Bread Stix",
          description:
            "Serves 1 | Freshly baked buttery bread stix, sprinkled with herbs (287 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "6244468",
          price: 11900,
        },
        {
          imageId: "o0zibtrbtyjwznptrsgy",
          name: "Loaded Bread Stix",
          description:
            "Serves 1 | Freshly baked bread sticks, topped with a flavourful dressing & seasoned with herbs (320 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "135772850",
          price: 16900,
        },
        {
          imageId: "e4f730c3f48f82fce15895dacf3e9081",
          name: "Exotica Veggie Garlic Bread",
          description:
            "Serves 1 | Hut's signature Garlic Bread topped with spiced exotic veggies and a flavourful dressing (449 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "114791505",
          price: 15900,
        },
      ],
    },
    {
      title: "Appetizer",
      items: [
        {
          imageId: "k05qzlgnyo43bdjdbbuy",
          name: "Veg Mayonnaise Dip",
          description:
            "Serves 1 | Veg mayonnaise dip 20 gm (55 Kcal/100g) Contains Cereals containing Gluten (Wheat) & Soya.",
          id: "81890732",
          price: 2857,
        },
        {
          imageId: "6a3835027affacf8259f68c1d2fbf9f5",
          name: "BBQ Baked Chicken Wings (6 pcs)",
          description:
            "Serves 1 | All new baked BBQ chicken wings. Its juicy, spicy & so much flaourful (206 Kcal/100g) Contains Cereals containing Gluten (Wheat) & Soya.",
          id: "135320149",
          price: 26900,
        },
        {
          imageId: "oqfrpjaw6v4q3p3qafww",
          name: "Jalapeno Poppers",
          description:
            "Serves 1 | Jalapano poppers with gooey white sauce. (250 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "54420823",
          price: 11900,
        },
        {
          imageId: "spmefmk8u9ftwbvdk6ay",
          name: "Zesty Paneer Pocket",
          description:
            "Serves 1 | Freshly baked pocket stuffed with flavourful paneer, veggies & smoked texas garlic sauce (264 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "34481766",
          price: 12900,
        },
        {
          imageId: "aeems3ogejdzxfjblkx7",
          name: "Spicy Baked Chicken Wings - 6 pcs",
          description:
            "Serves 1 | 6 pcs of tender and Juicy sweet chilli chicken wings (189 Kcal/100g) Contains Cereals containing Gluten (Wheat) & Soya.",
          id: "15962548",
          price: 25900,
        },
        {
          imageId: "a8dea12984ff26dfee5fa6e5743abbb5",
          name: "BBQ Baked Chicken Wings (4 pcs)",
          description:
            "Serves 1 | All new baked BBQ chicken wings. Its juicy, spicy & so much flaourful (206 Kcal/100g) Contains Cereals containing Gluten (Wheat) & Soya.",
          id: "135320152",
          price: 21900,
        },
        {
          imageId: "f5fyw9eyvkdjvybjhgho",
          name: "Spicy Baked Chicken Wings (4 pcs)",
          description:
            "Serves 1 | 4 pcs of tender and juicy sweet chilly chicken wings (189 Kcal/100g) Contains Cereals containing Gluten (Wheat) & Soya.",
          id: "55978498",
          price: 20900,
        },
        {
          imageId: "frgza6cm1sjezw79pjtu",
          name: "Sprinkled Fries - New",
          description:
            "Serves 1 | Baked fries seasoned with our signature peruvian seasoning (204 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "114791507",
          price: 10900,
        },
        {
          imageId: "wukqmbrmv0vngtlrczgw",
          name: "Zesty Chicken Pocket",
          description:
            "Serves 1 | Freshly baked pocket stuffed with chicken, veggies & smoked texas garlic sauce (216 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "35326897",
          price: 14900,
        },
        {
          imageId: "ygx3tiuj7ygbp1jyw1ce",
          name: "Momo Dip",
          description: "Serves 1 | Schezwan dip (18 Kcal/100g)",
          id: "76893709",
          price: 3000,
        },
        {
          imageId: "8bef47cab8863c1bcd113a28e30ffee4",
          name: "Cheezy Sprinkled Fries",
          description:
            "Serves 1 | Baked fries seasoned with cheezy seasoning (213 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "135320132",
          price: 10900,
        },
        {
          imageId: "hovlvq3ceumkhyivd0ik",
          name: "Tomato Ketchup",
          description: "Serves 1 | Ketchup sachet (11 Kcal/100g)",
          id: "79484162",
          price: 95,
        },
      ],
    },
    {
      title: "New Thin n Crispy Pizzas",
      items: [
        {
          imageId: "252a01784a4caa78e1d7d1a4206f8b2f",
          name: "Chicken Supreme Thin n Crispy",
          description:
            "Serves 4 | New Thin n Crispy crust with delicious chicken tikka, flavourful herbed chicken, spicy schezwan chicken meatball with flavourful pan sauce and 100% mozzarella cheese. (TnC-284 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136101910",
          price: 94900,
        },
        {
          imageId: "e2f207fda70413b191db2683e4d471df",
          name: "Bold BBQ Veggie Thin n Crispy",
          description:
            "Serves 4 | New Thin n Crispy crust with our signature pan sauce, with BBQ sauce drizzle, topped with mushroom, onion, green capsicum, & red paprika (TnC-266 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136101905",
          price: 74900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/7/74ad756e-dc60-4b84-bdc2-2ddf65fda8f7_b340bd7e-a978-47fb-9fc1-d08ed1ad35b1_compressed",
          name: "Dhabe Da Keema Thin n Crispy",
          description:
            "Serves 4 | New Thin n Crispy crust with dhaba style chicken keema masala, green chiili, crunchy onion with flavourful pan sauce, 100 % mozzarella cheese & a generous drizzle of mint mayo (TnC-290 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136101908",
          price: 74900,
        },
        {
          imageId: "fcdc4615f6c0fa952da88c394d732fad",
          name: "Mexican Fiesta Thin n Crispy",
          description:
            "Serves 4 | New Thin n Crispy crust topped with red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn, 100% mozzarella cheese, signature spice sprinkle & our flavourful pan sauce (TnC-258 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136101907",
          price: 74900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/7/a365b1af-5d17-4639-994b-1f4e177c757e_f2e7acc3-9370-49e3-829b-296ea2754eaf_compressed",
          name: "Tandoori Paneer Thin n Crispy",
          description:
            "Serves 4 | New Thin n Crispy crust topped with spiced paneer, crunchy onions & green capsicum, spicy red paprika, delicious tandoori sauce and 100% mozzarella cheese (TnC-326 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136101906",
          price: 74900,
        },
        {
          imageId: "364fbbed964a25498f7413762ebed513",
          name: "Chicken Pepperoni Thin n Crispy",
          description:
            "Serves 4 | New Thin n Crispy crust with yummy chicken pepperoni & 100% mozzarella cheese with signature pan sauce. Its a classic! (TnC-311 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136101909",
          price: 84900,
        },
      ],
    },
    {
      title: "Pasta",
      items: [
        {
          imageId: "pfwyjsgapi6u5hswj302",
          name: "Penne McN Cheese & Chicken Pasta",
          description:
            "Serves 1 | Penne Pasta baked in classic jalapeno sauce along with herbed chicken, green capsicum, onion and red capsicum topped with 100% mozzarella cheese (224 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136547529",
          price: 22900,
        },
        {
          imageId: "skfbhz264euhvsoayprt",
          name: "Penne McN Cheese Pasta",
          description:
            "Serves 1 | Penne Pasta baked in classic jalapeno sauce along with green capsicum, onion and red capsicum topped with 100% mozzarella cheese (227 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136547526",
          price: 20900,
        },
        {
          imageId: "kcgpendnr72r4ljbdhvw",
          name: "Classic Mushroom Pasta",
          description:
            "Serves 1 | Fusilli pasta baked in classic mushroom sauce (230 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "135772854",
          price: 20900,
        },
        {
          imageId: "c6aea671a74704ce9f39dba98d5846dd",
          name: "Spicy Red Schezwan Pasta",
          description:
            "Serves 1 | Fusilli pasta baked in spicy schezwan sauce, along with green capsicum, onion, red capsicum and paprika for an added zing (190 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136547519",
          price: 17900,
        },
        {
          imageId: "afetxjkwly3qhzheetjm",
          name: "Tandoori Murg Pasta",
          description:
            "Serves 1 | Penne pasta baked in your favorite tandoori sauce along with with chicken tikka, green capsicum, onion and red capsicum (214 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136547521",
          price: 18900,
        },
        {
          imageId: "e4d3b61ab38a0e86db994a9c1db2d0a9",
          name: "Spicy Schezwan Pasta Chicken",
          description:
            "Serves 1 | Fusilli pasta baked in spicy schezwan sauce along with schezwan chicken meatballs, green capsicum, onion, red capsicum and red paprika (178 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "114791522",
          price: 19900,
        },
        {
          imageId: "f1bnld6zrlutewe7vi9a",
          name: "Tandoori Paneer Pasta",
          description:
            "Serves 1 | Penne pasta baked in your favorite tandoori sauce along with flavorful soft paneer, green capsicum, onion and red capsicum (231 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136547523",
          price: 16900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/df80e92e-e161-4751-b986-2949977782d5_93c0908b-bf74-42b5-bf8d-3a09214c7e32.jpg",
          name: "Tomato Twist Red Sauce Pasta",
          description:
            "Serves 1 | Fusilli pasta baked in tangy flavorful tomato sauce infused with heavenly herbs & spices, along with green capsicum, onion and red capsicum (175 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
          id: "136547516",
          price: 16900,
        },
      ],
    },
  ],
  23744: [
    {
      title: "McBreakfast",
      items: [
        {
          imageId: "55f41cd2962cd5162adf657a949fab80",
          name: "Sausage & Egg McMuffin Sandwich Combo",
          description:
            "Sizzling aromatic sausage accompanied by the freshly steamed egg between the two slices of fresh English muffins + Coffee (R)",
          id: "61249934",
          price: 27300,
        },
        {
          imageId: "c57b5327ffeb8d44f90982ef13811c78",
          name: "Sausage McMuffin Sandwich Combo",
          description:
            "Sizzling aromatic sausage patty between the two slices of fresh English muffins + Coffee (R)",
          id: "61249935",
          price: 25600,
        },
        {
          imageId: "36d8d4789793db20bcfe3359ec814b8e",
          name: "Veg McMuffin - Sandwich",
          description:
            "Grilled Spinach & Corn patty and slice of processed Cheddar cheese nestled between a toasty English Muffin.",
          id: "61249967",
          price: 11900,
        },
        {
          imageId: "83bcbf3a3eab08d09e332aa2d7acca69",
          name: "Sausage McMuffin - Sandwich",
          description:
            "Sizzling aromatic sausage patty between two slices of fresh English muffins. A wholesome breakfast!",
          id: "61249996",
          price: 13400,
        },
        {
          imageId: "63f426865644cf79af5163230a901d80",
          name: "Sausage & Egg McMuffin - Sandwich",
          description:
            "Sizzling aromatic sausage accompanied by the freshly steamed egg between two slices of fresh English muffins. A wholesome breakfast!",
          id: "61249999",
          price: 15600,
        },
        {
          imageId: "534f18e69e28bb060a85d30e03a102e4",
          name: "Hashbrown",
          description:
            "Freshly fried golden brown potatoes that melt in your mouth.",
          id: "61270911",
          price: 5400,
        },
        {
          imageId: "39bb3c273b440ee352b738fa1f00c842",
          name: "Egg & Cheese McMuffin - Sandwich",
          description:
            "Fluffy soft egg topped with Cheese served between English muffins",
          id: "75964582",
          price: 10300,
        },
        {
          imageId: "853df93396ec14836751239af41c0f84",
          name: "Sausage with Egg McMuffin 3 Pc Meal",
          description:
            "Sizzling aromatic sausage accompanied by the freshly steamed egg between two slices of fresh English muffins. Served with Hashbrown and a coffee of your choice.",
          id: "75964583",
          price: 29900,
        },
        {
          imageId: "acee1d07c362312c3bc4332013450e88",
          name: "Sausage McMuffin 3 Pc Meal",
          description:
            "Sizzling aromatic sausage patty between two slices of fresh English muffins. Served with Hashbrown and a coffee of your choice.",
          id: "75964584",
          price: 27700,
        },
        {
          imageId: "6e3ebff1d0678c7678e4fd2401f799ae",
          name: "Egg & Cheese McMuffin 3 Pc Meal",
          description:
            "Fluffy soft egg topped with cheese served between English muffins. Served with Hashbrown and a coffee of your choice.",
          id: "75964585",
          price: 24500,
        },
        {
          imageId: "ecf2ffc0e9a053e5c790d2faab4fcd56",
          name: "Hot Cakes With Maple Syrup",
          description: "Freshly prepared, spongy and oh-so filling hotcakes.",
          id: "75964586",
          price: 14900,
        },
        {
          imageId: "0d64bf0e5a9308ab143f28e49e190902",
          name: "Veg McMuffin Sandwich Combo",
          description:
            "Start your day with a combo of Veg McMuffin and a Coffee (S)",
          id: "75964587",
          price: 24700,
        },
        {
          imageId: "5ea9884008b93009a1a761f86fc350a5",
          name: "Hot Cake 2 Pc Meal",
          description:
            "Freshly prepared, spongy and oh-so filling hotcakes paired with a filter coffee (R)",
          id: "75964588",
          price: 26700,
        },
        {
          imageId: "8f393bee2cb4710f0ed13ed7be519c1b",
          name: "Hot Cake 3 Pc Meal",
          description:
            "Freshly prepared, spongy and oh-so filling hotcakes served with hashbrown and a coffee of your choice.",
          id: "75964589",
          price: 28400,
        },
        {
          imageId: "8bcca26adae8fa3e5593e1c8405dcac9",
          name: "Double Cheese McMuffin- Sandwich",
          description:
            "Make your mornings Cheese with the new Double Cheese McMuffin. Shredded onion, Jalapenos topped with Cheese (and more cheese) layered between toasted and buttered Muffin buns",
          id: "75964590",
          price: 10300,
        },
        {
          imageId: "4a32aa8cabd4caa4f6dc361b1fe0331c",
          name: "Double Cheese McMuffin Sandwich Combo",
          description:
            "Make your mornings Cheese with the new Double Cheese McMuffin. Shredded onion, Jalapenos topped with Cheese (and more cheese) layered between toasted and buttered Muffin buns. Served with a coffee of your choice.",
          id: "75964591",
          price: 15400,
        },
        {
          imageId: "3a91832849055b8770ec4ef2bd27fd03",
          name: "Double Cheese McMuffin 3 Pc Meal",
          description:
            "Try the delcious combo of Double Cheese McMuffin, Crispy Hashbrown and a beverage of your choice (S) to brighten up your day.",
          id: "75964592",
          price: 24500,
        },
        {
          imageId: "ae7bc83b4549021a4579323516bab7ad",
          name: "Spicy Egg McMuffin - sandwich combo",
          description:
            "Spice up your mornings with the new Spicy Egg McMuffin, Freshly cracked and steamed egg patty topped with spicy masala seasoning, shredded onions, topped with habanero sauce, layered between toasted and buttered Muffin buns. Served with a coffee of your choice.",
          id: "75964594",
          price: 15400,
        },
        {
          imageId: "38d8784662196a231858925936c84847",
          name: "Spicy Egg McMuffin 3 Pc Meal",
          description:
            "Try the delcious combo of Spicy Egg McMuffin, Crispy Hashbrown and a beverage of your choice (S) to brighten up your day.",
          id: "75964595",
          price: 25600,
        },
        {
          imageId: "798e2b493a04283cea3f7c388d6ef6ea",
          name: "Spicy Egg McMuffin - Sandwich",
          description:
            "Spice up your mornings with the new Spicy Egg McMuffin, Freshly cracked and steamed egg patty topped with spicy masala seasoning, shredded onions, topped with habanero sauce, layered between toasted and buttered Muffin buns.",
          id: "75964597",
          price: 10900,
        },
        {
          imageId: "76aeecdcdea1eea92c575db5b1111223",
          name: "Veg McMuffin 3 Pc Meal",
          description:
            "Grilled Spinach & Corn patty and slice of processed cheddar cheese nestled between a toasty English Muffin served with Hashbrowns and a Coffee of your choice",
          id: "93522248",
          price: 26800,
        },
        {
          imageId: "a00928a1fbaa5a3a49a58953295987db",
          name: "Egg & Cheese McMuffin - sandwich Combo",
          description:
            "Start your day with a combo of Egg & Cheese McMuffin and a Cappuccino (S)",
          id: "136249504",
          price: 15400,
        },
      ],
    },
    {
      title: "Newly Launched",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/0fbf18a1-5191-4cda-a09d-521a24c8c6ca_25cf57c6-48cc-47bd-b422-17e86b816422.png",
          name: "Chicken Surprise Burger",
          description:
            "Introducing the new Chicken Surprise Burger which has the perfect balance of a crispy fried chicken patty, the crunch of onions and the richness of creamy sauce.",
          id: "115610113",
          price: 7600,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/cb9833dd-5983-4445-bb1b-8d0e70b6c930_8928ae23-ddae-4d9a-abc5-e887d7d7868e.png",
          name: "Chicken Surprise Burger Combo",
          description:
            "Chicken Surprise Burger Combo + Fries (M) + Drink of your choice.",
          id: "143868019",
          price: 23800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/ccceb88b-2015-47a3-857b-21a9641d87ed_ad91cfe4-3727-4f23-a34e-4d09c8330709.png",
          name: "Chicken Surprise Burger + Fries (M)",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with the iconic Fries (M)",
          id: "145040437",
          price: 16300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/1793c61c-48f4-4785-b8a6-bc50eadb3b88_36ab0b13-0b17-459c-97a6-50dea3027b80.png",
          name: "Cappuccino Small with Hazelnut",
          description:
            "A delightful and aromatic coffee beverage that combines the robust flavor of espresso with the rich, nutty essence of hazelnut.",
          id: "146631252",
          price: 19500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/b65446d8-bee6-484c-abdf-0326315c7e40_4c694dbc-e5e9-4998-b6ac-bd280fc6b5dc.png",
          name: "Classic Coffee Regular with Hazelnut",
          description:
            "refreshing and delicious beverage that combines the rich, nutty taste of hazelnut with the cool, invigorating essence of cold coffee",
          id: "146631254",
          price: 23700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/81425a09-1c2f-4449-a049-c1bd4f6841e9_6e40b0d7-f376-4421-9559-b703864e8258.png",
          name: "Cappuccino Small with Cinammon Spice",
          description:
            "A warm and aromatic coffee beverage that combines the bold flavor of espresso with the comforting spice of cinnamon",
          id: "146631256",
          price: 19500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/e0a5c619-2df5-431f-9e21-670a358e8dbb_c2a2324f-ff95-44b3-adf9-dd6aee9696aa.png",
          name: "Cappuccino Small with French Vanilla",
          description:
            "A popular coffee beverage that combines the smooth, creamy flavor of vanilla with the robust taste of espresso",
          id: "146631259",
          price: 19500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/6c0288a4-943a-4bb6-a810-b14877c0ea8f_f56187da-4ae4-4a88-b1a5-e48e28d78087.png",
          name: "Chicken Surprise Burger + 4 Pc Chicken McNuggets + Coke-",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with 4 Pc Chicken McNuggets and Coke",
          id: "146631263",
          price: 24900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/f1d9557a-6f86-4eb2-abd5-569f2e865de2_9b71c67a-45f1-41c1-9e1c-b80a934768da.png",
          name: "Chicken Surprise Burger + McChicken Burger",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with the iconic McChicken Burger",
          id: "146631267",
          price: 20000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/6f033388-9f56-4d08-997a-fd65019fb416_7e677b00-4132-419d-9fe8-e112d1a41586.png",
          name: "Classic Coffee Regular with Cinammon Spice",
          description:
            "refreshing beverage that combines the invigorating taste of iced coffee with the warm, aromatic notes of cinnamon",
          id: "146631268",
          price: 23700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/5926eaba-bd6a-4af1-ba57-89bdb2fdfec6_c2507538-7597-4fc0-92e3-bdf57c81bda5.png",
          name: "Classic Coffee Regular with French Vanilla",
          description:
            "a delightful and refreshing beverage that blends into the smooth, creamy essence of vanilla with the invigorating taste of chilled coffee.",
          id: "146631274",
          price: 23700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/8db75dd0-07fa-4afb-8243-44d87b74f45b_e7a88ae1-c3d6-487a-b3c8-48880a309593.png",
          name: "Iced Coffee with Cinammon Spice",
          description:
            "An ideal choice for those who enjoy a flavorful, refreshing cinammon twist to their iced coffee, providing a satisfying and refreshing pick-me-up.",
          id: "146631309",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/35867352-7802-4082-8b25-955878a6daa2_1d995db8-655f-45d3-9ad2-4469fe1301ae.png",
          name: "Iced Coffee with French Vanilla",
          description:
            "An ideal choice for those who enjoy a smooth, creamy vanilla twist to their iced coffee, providing a satisfying and refreshing pick-me-up",
          id: "146631313",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/0619409e-e7cc-4b7c-a002-c05a2dff2ed8_f9bf368f-3dae-4af5-813d-4645384d24f7.png",
          name: "Iced Coffee with Hazelnut",
          description:
            "An ideal choice for those who enjoy a flavorful, nutty twist to their iced coffee, providing a satisfying and refreshing pick-me-up.",
          id: "146631318",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ca2023e7-41e0-4233-a92c-c2bc52ef8ee5_33a0ea24-50ee-4a9b-b917-bbc2e6b5f37b.png",
          name: "2 Crispy Veggie Burger  + 2 Fries (M) + Veg Pizza McPuff",
          description:
            "Feel the crunch with Burger Combos for 2: 2 Crispy Veggie Burger + 2 Fries (M)+ Veg Pizza McPuff",
          id: "151005405",
          price: 58900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ce6551d8-829a-4dde-9131-cbf7818a6f26_a5b69cee-6377-4295-bbee-49725693c45d.png",
          name: "2 Crispy Veggie Burger  + Fries (L) + 2 Coke",
          description:
            "Feel the crunch with Burger Combos for 2: 2 Crispy Veggie Burger + Fries (L)+ 2 Coke",
          id: "151005417",
          price: 61900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/921eac18-93f2-43ee-aaf3-6ba7b8d15aea_302570c8-8813-46a5-8897-569c8965d163.png",
          name: "2 McCrispy Chicken Burger + 2 Fries (M) + Veg Pizza McPuff.",
          description:
            "Feel the crunch with Burger Combos for 2: 2 McCrispy Chicken Burger + 2 Fries (M)+ Veg Pizza McPuff",
          id: "151005435",
          price: 65900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/b4fda3b0-82c9-4d97-ab9c-c804b7d7893a_a14992d5-49cb-4035-827d-a43e40752840.png",
          name: "2 McCrispy Chicken Burger + Fries (L) + 2 Coke",
          description:
            "Feel the crunch with our Burger Combos for 2 : 2 McCrispy Chicken Burger + Fries (L)+ 2 Coke",
          id: "151005451",
          price: 70900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/13047bb4-5cdd-47a4-8702-a2310668a643_c71bc9e1-f760-4519-b3c1-e72aa8011839.png",
          name: "Crispy Veggie Burger",
          description:
            "A flavorful patty made with a blend of 7 premium veggies, topped with zesty cocktail sauce, all served between soft, premium buns. Perfectly satisfying and full of flavor.",
          id: "151005470",
          price: 20000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/2448de0c-73cc-4b27-b037-ac7f48ad3385_e400b623-d212-423f-ac3b-32750273b4ec.png",
          name: "Crispy Veggie Burger +  Classic Cheese Fries.",
          description:
            "Feel the crunch with our newly launched Crispy Veggie Burger with Classic Cheese Fries",
          id: "151005478",
          price: 30900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ebbef215-0074-426b-a427-cf97ed508fd5_0f4e4f20-d751-499a-9fae-237c5ca4d4b3.png",
          name: "Crispy Veggie Burger + McAloo Tikki",
          description:
            "Feel the crunch with our newly launched Crispy Veggie Burger + McAloo Tikki",
          id: "151005496",
          price: 24500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/9527fe1b-fc4e-4a08-ba05-390e58b1a300_e841dfea-a775-4378-9079-76cae90c4cce.png",
          name: "Crispy Veggie Burger + McVeggie Burger + Fries (M)",
          description:
            "Feel the crunch with Crispy Veggie Burger+ McVeggie + Fries (M)",
          id: "151005506",
          price: 40900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/616491d0-2698-464f-8f8e-a8a4b911477b_961f1954-cf11-491e-b705-e8cb9f891cfb.png",
          name: "Crispy Veggie Burger Meal (M).",
          description:
            "A flavorful patty with 7 premium veggies, zesty cocktail sauce, and soft buns, paired with crispy fries (M) and a refreshing Coke (M). A perfectly satisfying and full-flavored meal!",
          id: "151005525",
          price: 32667,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/d619c1d9-9298-4527-b5aa-39cd9d41050f_a7abb5ea-ea8f-4b44-a69e-b9a9825f10ab.png",
          name: "Crispy Veggie Burger + Piri Piri Fries (M)",
          description:
            "Feel the crunch with our newly launched Crispy Veggie Burger with Piri Piri Fries (M)",
          id: "151005545",
          price: 30900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/aa34f13f-fa73-4ac7-8652-e4badb624ffe_a2ba5c74-e755-4d52-acf0-7bcef7c0886f.png",
          name: "McCrispy Chicken Burger-",
          description:
            "A crunchy, golden chicken thigh fillet, topped with fresh lettuce and creamy pepper mayo, all nestled between soft, toasted premium buns. Perfectly satisfying and full of flavor.",
          id: "151005572",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/686a46d0-b396-406e-88c8-45a95d41b12e_8ef81670-4855-4085-97ea-12f578b3957b.png",
          name: "McCrispy Chicken Burger Meal (M).",
          description:
            "A crunchy, golden chicken thigh fillet with fresh lettuce and creamy pepper mayo between soft, toasted premium buns, served with crispy fries (M) and a refreshing Coke (M). A perfectly satisfying and full-flavored meal!",
          id: "151005584",
          price: 36667,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/19b4f863-c75f-4935-ab27-f5256d5f0ec4_310ef44a-48cb-472e-b467-3881959ad028.png",
          name: "McCrispy Chicken Burger + Piri Piri Fries (M)",
          description:
            "Feel the crunch with our newly launched McCrispy Chicken Burger with Piri Piri Fries (M)",
          id: "151005594",
          price: 35900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/da9cfd74-6825-4290-8a07-e4a5c91c0ba9_7ab215c9-7cbb-41d7-b223-13e7dc5342e6.png",
          name: "McCrispy Chicken Burger + McChicken Burger + Fries (M)",
          description:
            "Feel the crunch with McCrispy Chicken Burger+ McChicken + Fries (M)",
          id: "151005602",
          price: 41500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/a41229c9-d571-4b52-a460-8f7d6c305add_f3585ee7-ec89-4ae1-bd7c-dab6bfd92f0a.png",
          name: "McCrispy Chicken Burger + Classic Cheese Fries",
          description:
            "Feel the crunch with our newly launched McCrispy Chicken Burger with Classic Cheese Fries",
          id: "151005607",
          price: 36900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/d4ebeeff-05e5-4b72-954f-b5a8890cef2f_db24461d-e085-42d4-9741-8fd4634c7f80.png",
          name: "McCrispy Chicken Burger + McAloo Tikki",
          description:
            "Feel the crunch with our newly launched McCrispy Chicken Burger + McAloo Tikki",
          id: "151005617",
          price: 29500,
        },
      ],
    },
    {
      title: "Burgers With Millet Bun",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/1fb900f6-71bb-4724-a507-830735f555c5_06c06358-bc36-469d-84e3-44e9504bb7d0.png",
          name: "Chicken Surprise Burger with Multi-Millet Bun",
          description:
            "Try the  Chicken Surprise Burger in the new multi-millet bun! Enjoy the same tasty chicken patty you love, now sandwiched between a nutritious multi-millet bun",
          id: "151005453",
          price: 8500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/cfd7d779-b04d-43be-947e-a43df33ae119_a0de6b13-c9ac-489a-8416-e9b72ace4542.png",
          name: "McAloo Tikki Burger with Multi-Millet Bun",
          description:
            "Try your favourite McAloo Tikki Burger in a multi-millet bun! Enjoy the same tasty McAloo Tikki patty you love, now sandwiched between a nutritious millet bun.",
          id: "151005551",
          price: 8000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/bf0a9899-19a5-4fc9-9898-9e15098bac43_681fbed4-5354-4d5a-9d67-b59d274ea633.png",
          name: "McChicken Burger with Multi-Millet Bun",
          description:
            "Make a healthier choice with our McChicken Burger in a multi-millet bun! Same juicy chicken patty, now with a nutritious twist.",
          id: "151005557",
          price: 15200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/6eac1f61-cf7b-422a-bc6d-8c55bc1ff842_01e557a3-f5a2-4239-b06b-01ffd46ec154.png",
          name: "McSpicy Chicken Burger with Multi-Millet Bun",
          description:
            "Feel the heat and feel good too! Try your McSpicy Chicken Burger in nutritious multi-millet bun.",
          id: "151005622",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/70eb5956-3666-47f4-bcf8-1f5075207222_fd9e2a06-3f27-47e3-88aa-86895ffaa65e.png",
          name: "McSpicy Paneer Burger with Multi-Millet Bun",
          description:
            "Spice up your meal with a healthier bite! Try your McSpicy Paneer Burger with the nutritious multi-millet bun.",
          id: "151005624",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/397caee8-4da3-4143-98b1-e4dac155ab3e_0ed975df-7665-4f3a-ae16-8a7eb008afd6.png",
          name: "McVeggie Burger with Multi-Millet Bun",
          description:
            "Try your favorite McVeggie Burger in a nutritious multi-millet bun! A healthier twist on a classic favorite, with the same tasty veggie patty you love",
          id: "151005628",
          price: 16000,
        },
      ],
    },
    {
      title: "Group Sharing Combos",
      items: [
        {
          imageId: "ea7ba594c7d77cb752de9a730fbcb3bf",
          name: "Burger Combo for 2: McAloo Tikki",
          description:
            "Stay home, stay safe and share a combo- 2 McAloo Tikki Burgers + 2 Fries (L)",
          id: "52432723",
          price: 34900,
        },
        {
          imageId: "934194567f9c231dc46dccf2d4e6d415",
          name: "6 Pc Chicken Nuggets + McChicken Burger + Coke",
          description:
            "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with 6 Pc Nuggets and Coke.",
          id: "63148832",
          price: 35900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/9287ef7a-72d5-4d65-bf81-4d6a6ec97c72_a0d274fd-abd1-4a33-a080-20c33fbdb355.png",
          name: "Burger Combo for 2: McSpicy Chicken + McChicken",
          description:
            "Flat 15% Off on McSpicy Chicken Burger + McChicken Burger + Fries (M)",
          id: "102106433",
          price: 44900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/08e9bc73-6774-41cf-96bb-ca817c4e23d3_e00ec89e-86f8-4531-956a-646082dc294c.png",
          name: "Burger Combo for 2: Corn & Cheese + McVeggie",
          description:
            "Flat 15% Off on Corn & Cheese Burger +McVeggie Burger+Fries (M)",
          id: "112667348",
          price: 39200,
        },
        {
          imageId: "b57153898abed2127d7217c2ee3e9e4b",
          name: "Burger Combo for 2: McChicken Burger with Pizza McPuff",
          description:
            "Save big on your favourite sharing combo - 2 McChicken Burger + 2 Fries (M) + Veg Pizza McPuff",
          id: "117967111",
          price: 42900,
        },
        {
          imageId: "e62aea3ba1cd5585a76004f59cd991e5",
          name: "Burger Combo for 2: McSpicy Chicken Burger with Pizza McPuff",
          description:
            "Save big on your favourite sharing combo- 2 McSpicy Chicken Burger + 2 Fries (M) + Veg Pizza McPuff",
          id: "117967113",
          price: 50900,
        },
        {
          imageId: "1ff73fc5aa656a10da5801469da3327a",
          name: "Burger Combo for 2: McVeggie Burger with Pizza McPuff",
          description:
            "Save big on your favourite sharing combo - 2 McVeggie Burger + 2 Fries (M) + Veg Pizza McPuff",
          id: "117967119",
          price: 46900,
        },
        {
          imageId: "0ea8a2fddbbc17bc6239a9104963a3e8",
          name: "Burger Combo for 2: McSpicy Paneer + McAloo Tikki with Pizza McPuff",
          description:
            "Get the best value in your meal for 2. Save big on your favourite sharing meal - McSpicy Paneer Burger  + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
          id: "117967126",
          price: 38800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/a3fb2f02-830f-4d67-a866-cb06c962e77a_2a076599-a836-4e53-93b8-499ab952632d.png",
          name: "Burger Combo for 2: McVeggie + McAloo Tikki with Pizza McPuff",
          description:
            "Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
          id: "117967128",
          price: 40900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/5/2fde246e-339c-4ae9-8c56-54c3645b7f04_208b7860-79c8-485b-b3f7-4017d3ef3fde.png",
          name: "Burger Combo for 2: McChicken Burger ",
          description:
            "Save big on your favourite sharing combo - 2 McChicken Burger + Fries (L) + 2 Coke",
          id: "118028656",
          price: 44900,
        },
        {
          imageId: "98afaf26d81b15bec74cc356fe60cc13",
          name: "Burger Combo for 2: McSpicy Chicken Burger ",
          description:
            "Save big on your favourite sharing combo - 2 McSpicy Chicken Burger + Fries (L) + 2 Coke",
          id: "118028658",
          price: 52900,
        },
        {
          imageId: "09b3cb6130cfae15d486223c313fb6c6",
          name: "Burger Combo for 2: McVeggie Burger ",
          description:
            "Save big on your favourite sharing combo - 2 McVeggie Burger + Fries (L) + 2 Coke",
          id: "118028661",
          price: 40900,
        },
        {
          imageId: "642ae100416c13ce1c4c2d61c44026a1",
          name: "Burger Combo for 2: McSpicy Paneer + McAloo Tikki with Coke",
          description:
            "Get the best value in your meal for 2. Save big on your favourite sharing meal - McSpicy Paneer Burger + Fries (L) + 2 Coke + McAloo Tikki Burger",
          id: "118028667",
          price: 39900,
        },
        {
          imageId: "d2381b84780fb273c2e7b868410a22cc",
          name: "Burger Combo for 2: McVeggie + McAloo Tikki with Coke",
          description:
            "Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + Fries (L) + 2 Coke + McAloo Tikki Burger",
          id: "118028668",
          price: 34900,
        },
        {
          imageId: "65c9c9b82c4d1f77a05dc4d89c9ead1d",
          name: "2 Chicken Maharaja Mac Burger + 2 Coke + Fries (L) + McFlurry Oreo (M)",
          description:
            "Enjoy 2 of the tallest burgers innovated by us. Created with chunky juicy grilled chicken patty paired along with fresh ingredients like jalapeno, onion, slice of cheese, tomatoes & crunchy lettuce dressed with the classical Habanero sauce. Served with Coke, Large Fries and a medium McFlurry Oreo",
          id: "123196650",
          price: 61100,
        },
        {
          imageId: "847b562672e71c2352d92b797c0b0a4e",
          name: "Burger Combo for 2: Corn & Cheese Burger",
          description:
            "Save big on your favourite sharing combo - 2 Corn and Cheese Burger + Fries (L) + 2 Coke",
          id: "125284826",
          price: 44900,
        },
        {
          imageId: "1166a8baa3066342affb829ef0c428dd",
          name: "Burger Combo for 2: Grilled Chicken & Cheese",
          description:
            "Save big on your favourite sharing combo - 2 Grilled Chicken and Cheese Burger + Fries (L) + 2 Coke",
          id: "125284827",
          price: 47900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/22/a7aa30c4-da8c-4155-9152-78dda1f86d78_1c8693d2-38fb-4699-b1b6-6b1ccb555a4f.png",
          name: "Burger Combo for 2: McSpicy Deluxe Chicken Burger",
          description:
            "Save upto 24% off on your favorite sharing combo of 2 McSpicy Deluxe Chicken Burger + Fries (L) + 2 Coke (Serves 2)",
          id: "136745213",
          price: 55000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/22/67f01168-b4a0-4f99-aa13-4da0b492b913_67d42161-a5ad-4249-ade7-6169a184f534.png",
          name: "Burger Combo for 2: McSpicy Deluxe Paneer Burger",
          description:
            "Save upto 24% off on your favorite sharing combo of 2 McSpicy Deluxe Paneer Burger + Fries (L) + 2 Coke (Serves 2)",
          id: "136745216",
          price: 57900,
        },
        {
          imageId: "f042ac70799fce046cd9f8e69e67fc97",
          name: "Burger Combo for 2: McCheese Burger Chicken",
          description:
            "Save big on your favourite sharing combo - 2 McCheese Burger Chicken + Fries (L) + 2 Coke",
          id: "141910890",
          price: 65900,
        },
        {
          imageId: "857b57ae6a17e12e61174a3a45fe8fc0",
          name: "Burger Combo for 2: McCheese Burger Veg",
          description:
            "Save big on your favourite sharing combo - 2 McCheese Burger Veg  + Fries (L) + 2 Coke",
          id: "141910892",
          price: 62900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ca2023e7-41e0-4233-a92c-c2bc52ef8ee5_33a0ea24-50ee-4a9b-b917-bbc2e6b5f37b.png",
          name: "2 Crispy Veggie Burger  + 2 Fries (M) + Veg Pizza McPuff.",
          description:
            "Feel the crunch with Burger Combos for 2: 2 Crispy Veggie Burger + 2 Fries (M)+ Veg Pizza McPuff",
          id: "151005402",
          price: 58900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ce6551d8-829a-4dde-9131-cbf7818a6f26_a5b69cee-6377-4295-bbee-49725693c45d.png",
          name: "2 Crispy Veggie Burger  + Fries (L) + 2 Coke.",
          description:
            "Feel the crunch with Burger Combos for 2: 2 Crispy Veggie Burger + Fries (L)+ 2 Coke",
          id: "151005411",
          price: 61900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/921eac18-93f2-43ee-aaf3-6ba7b8d15aea_302570c8-8813-46a5-8897-569c8965d163.png",
          name: "2 McCrispy Chicken Burger + 2 Fries (M) + Veg Pizza McPuff",
          description:
            "Feel the crunch with Burger Combos for 2: 2 McCrispy Chicken Burger + 2 Fries (M)+ Veg Pizza McPuff",
          id: "151005428",
          price: 65900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/b4fda3b0-82c9-4d97-ab9c-c804b7d7893a_a14992d5-49cb-4035-827d-a43e40752840.png",
          name: "2 McCrispy Chicken Burger + Fries (L) + 2 Coke.",
          description:
            "Feel the crunch with our Burger Combos for 2 : 2 McCrispy Chicken Burger + Fries (L)+ 2 Coke",
          id: "151005444",
          price: 70900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/9527fe1b-fc4e-4a08-ba05-390e58b1a300_e841dfea-a775-4378-9079-76cae90c4cce.png",
          name: "Crispy Veggie Burger + McVeggie Burger + Fries (M).",
          description:
            "Feel the crunch with Crispy Veggie Burger+ McVeggie + Fries (M)",
          id: "151005503",
          price: 40900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/da9cfd74-6825-4290-8a07-e4a5c91c0ba9_7ab215c9-7cbb-41d7-b223-13e7dc5342e6.png",
          name: "McCrispy Chicken Burger + McChicken Burger + Fries (M).",
          description:
            "Feel the crunch with McCrispy Chicken Burger+ McChicken + Fries (M)",
          id: "151005598",
          price: 41500,
        },
      ],
    },
    {
      title: "McSaver Combos (2 Pc Meals)",
      items: [
        {
          imageId: "fb4b9d4775505e82d05d6734ef3e2491",
          name: "Veg Pizza McPuff + McSpicy Chicken Burger",
          description:
            "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Veg Pizza McPuff",
          id: "33933495",
          price: 24900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/34aaf6ee-06e2-4c60-9950-8ad569bc5898_2639ffd2-47dd-447b-bbbe-eb391315666f.png",
          name: "2 Cappuccino",
          description: "2 Cappuccino (S)",
          id: "49054080",
          price: 23800,
        },
        {
          imageId: "006d51070b0ab9c839a293b87412541c",
          name: "McChicken Burger + McSpicy Chicken Burger",
          description:
            "The ultimate chicken combo made just for you. Get the top selling McChicken with the McSpicy Chicken Burger.",
          id: "50288499",
          price: 29900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/e36a9ed2-bfc0-4d36-bfef-297e2c74f991_90e415d8-c4f0-45c1-ad81-db8ef52a5f96.png",
          name: "2 Iced Coffee",
          description: "Enjoy 2 Iced Coffee",
          id: "50288524",
          price: 23800,
        },
        {
          imageId: "1f4d583548597d41086df0c723560da7",
          name: "McVeggie Burger + McAloo Tikki Burger",
          description:
            "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, makes our iconic McVeggie and combo with our top selling McAloo Tikki Burger.",
          id: "50288536",
          price: 19900,
        },
        {
          imageId: "74603316fc90ea3cd2b193ab491fbf53",
          name: "Strawberry Shake + Fries (M)",
          description:
            "Can't decide what to eat? We've got you covered. Get this snacking combo with Medium Fries and Strawberry Shake.",
          id: "50446972",
          price: 19600,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/10/e446290d-d8c8-4256-b01b-605a096287f0_6b113716-f6b3-4719-9eff-744a7ccbfcfb.png",
          name: "McChicken Burger + Fries (M)",
          description:
            "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Medium Fries.",
          id: "63148830",
          price: 22900,
        },
        {
          imageId: "9f0269a2d28f4918a3b07f63a487f26d",
          name: "McAloo Tikki Burger + Veg Pizza McPuff + Coke",
          description:
            "The ultimate veg combo made just for you. Get the top selling McAloo Tikki served with Veg Pizza McPuff and Coke.",
          id: "63148847",
          price: 18500,
        },
        {
          imageId: "d14cc495747a172686ebe43e675bc941",
          name: "McVeggie Burger + Fries (M)",
          description:
            "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Medium Fries.",
          id: "63148850",
          price: 19900,
        },
        {
          imageId: "2d7540e92ac04c0c0823e9f4f029e2dd",
          name: "2 Coke",
          description:
            "The perfect companion to your burger, fries and everything nice. Double it up with this combo.",
          id: "65031984",
          price: 16300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/74d5ac49-0c3b-4c44-9c80-6c4264e46ff0_c7af7bcf-538e-477c-a778-cbd28bb4855f.png",
          name: "McAloo Tikki + Fries (R)",
          description: "Aloo Tikki+ Fries (R)",
          id: "65340433",
          price: 10900,
        },
        {
          imageId: "7274d82212a758e597550e8c246fb2f7",
          name: "Mexican McAloo Tikki Burger + Fries (R)",
          description:
            "A fusion of international taste combined with your favourite aloo tikki patty, layered with shredded onion, and delicious Chipotle sauce. Served with Regular Fries.",
          id: "65340440",
          price: 11600,
        },
        {
          imageId: "9a66b8ef66d780b9f83a0fc7cd434ded",
          name: "McChicken Burger + Veg Pizza McPuff",
          description:
            "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Veg Pizza McPuff.",
          id: "65340441",
          price: 17900,
        },
        {
          imageId: "8cb2f75ca6a51061c69280daf1b63bec",
          name: "McVeggie Burger + Veg Pizza McPuff",
          description:
            "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Veg Pizza McPuff.",
          id: "65340445",
          price: 18900,
        },
        {
          imageId: "52a347eab543d461b1a15b609779b8c2",
          name: "McVeggie Burger + Fries (R)",
          description:
            "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Regular fries.",
          id: "65340446",
          price: 17600,
        },
        {
          imageId: "f4be6e877d2567a0b585d4b16e53871e",
          name: "Mexican McAloo Tikki Burger + Fries (L)",
          description:
            "A fusion of international taste combined with your favourite aloo tikki patty, layered with shredded onion, and delicious Chipotle sauce. Served with Large Fries.",
          id: "66785451",
          price: 17400,
        },
        {
          imageId: "a4148348225f693c23b73eda06934fac",
          name: "McChicken Burger + Fries (L)",
          description:
            "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Large Fries.",
          id: "66785481",
          price: 23900,
        },
        {
          imageId: "f16eeec3e5d19f8627971620ed2da6f8",
          name: "McVeggie Burger + Fries (L)",
          description:
            "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Large fries.",
          id: "66785491",
          price: 23900,
        },
        {
          imageId: "4a170da5ecae92e11410a8fbb44c8476",
          name: "2 Fries (R)",
          description:
            "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Double your happiness with this fries combo",
          id: "87280845",
          price: 11200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/f3b2f1ea-b1f2-4be8-80a7-5db83d6ef192_5bcaddc3-bd20-4975-9fc9-86e6b7d33506.png",
          name: "2 McVeggie Burger",
          description:
            "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns makes our iconic McVeggie.",
          id: "87280849",
          price: 25000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/29/18f3ce07-00b5-487b-8608-56440efff007_2b241e0a-fad5-4be4-a848-81c124c95b8b.png",
          name: "Grilled Chicken & Cheese Burger + Coke",
          description: "Flat 15% Off on Grilled Chicken & Cheese Burger + Coke",
          id: "102106420",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/5fc70679-4883-47bc-a3eb-ac6a9d7ba83f_1c29c41f-ecb8-4c33-b2db-d186b3f270d7.png",
          name: "McAloo Tikki Burger + Veg Pizza McPuff + Fries (R)",
          description:
            "Flat 15% Off on McAloo Tikki + Veg Pizza McPuff + Fries (R)",
          id: "102106429",
          price: 20900,
        },
        {
          imageId: "0205cbd8b77f841e19e25ce727993d51",
          name: "McVeggie Burger + Fries (M) + Piri Piri Mix",
          description:
            "Flat 15% Off on McVeggie Burger + Fries (M) + Piri Piri Mix",
          id: "102106435",
          price: 23200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/29/0e4d8ee8-ee6b-4e12-9386-658dbcdc6be4_6810365e-3735-4b21-860b-923a416403be.png",
          name: "McVeggie Burger + Veg Pizza McPuff + Fries (L)",
          description:
            "Flat 15% Off on McVeggie Burger + Veg Pizza McPuff + Fries (L)",
          id: "102106436",
          price: 27900,
        },
        {
          imageId: "8cba0938b4401e5c8cb2ccf3741b93c4",
          name: "6 Pc Chicken Nuggets + Fries (M) + Piri Piri Spice Mix",
          description:
            "The best Non veg sides combo curated for you! Get 6 pc Chicken McNuggets + Fries M. Top it up with Piri Piri mix.",
          id: "108333464",
          price: 24600,
        },
        {
          imageId: "46bcb1e486cbe6dcdb0487b063af58a6",
          name: "McAloo Tikki Burger + Veg Pizza McPuff + Piri Piri Spice Mix",
          description:
            "Get India's favourite burger - McAloo Tikki along with Veg Pizza McPuff and spice it up with a Piri Piri Mix",
          id: "108333466",
          price: 13200,
        },
        {
          imageId: "b9f02abd64c74307339cbd3421e7f853",
          name: "Grilled Chicken & Cheese Burger + Veg Pizza McPuff",
          description:
            "A delicious Grilled Chicken & Cheese Burger + a crispy brown, delicious Pizza McPuff",
          id: "109039122",
          price: 19000,
        },
        {
          imageId: "f847f39d3b81367ecd2aa14bd2dca94d",
          name: "Corn & Cheese Burger + Veg Pizza McPuff",
          description:
            "A delicious Corn & Cheese Burger + a crispy brown, delicious Pizza McPuff",
          id: "109039123",
          price: 17700,
        },
        {
          imageId: "495bcb831b35c29883707b9458fd55b0",
          name: "Corn & Cheese Burger + Fries (R)",
          description:
            "A delicious Corn & Cheese Burger + a side of crispy, golden, world famous fries ??",
          id: "109039124",
          price: 18700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/31/043061fe-2b66-49a4-bc65-b26232584003_ec753203-f35a-487f-bc87-8dcccd31ea3f.png",
          name: "Corn & Cheese Burger + Coke",
          description: "Flat 15% Off on Corn & Cheese Burger + Coke",
          id: "109039138",
          price: 22900,
        },
        {
          imageId: "46781c13d587e5f951ac1bbb39e57154",
          name: "Chocolate Flavoured Shake+ Fries (M)",
          description:
            "Can't decide what to eat? We've got you covered. Get this snacking combo with Medium Fries and Chocolate Flavoured Shake.",
          id: "109884272",
          price: 19600,
        },
        {
          imageId: "65f3574f53112e9d263dfa924b1f8fed",
          name: "2 McFlurry Oreo (S)",
          description:
            "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Make it double with this combo!",
          id: "112667315",
          price: 15800,
        },
        {
          imageId: "f1238db9da73d8ec7a999792f35865d9",
          name: "2 Soft Serve Hot Fudge (M)",
          description:
            "A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge. So good you won't be able to stop at one!",
          id: "112667316",
          price: 15600,
        },
        {
          imageId: "8d4a82d50f6e79d95fcc324b161374f8",
          name: "Corn & Cheese Burger + Coke + Fries (M) + Veg Pizza McPuff",
          description:
            "Enjoy Corn and Cheese Burger + Coke + Fries (M) + Veg Pizza McPuff",
          id: "121924789",
          price: 35500,
        },
        {
          imageId: "e10982204687e18ee6541684365039b8",
          name: "McSpicy Chicken Burger + Fries (M) + Piri Piri Spice Mix",
          description:
            "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with the spicy piri piri mix and medium fries.",
          id: "123196675",
          price: 27900,
        },
        {
          imageId: "40259e78ad0e89966755805a7c1ad800",
          name: "McSpicy Chicken Burger + Mexican Cheese Fries",
          description:
            "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Mexican Cheese Fries.",
          id: "123196676",
          price: 27900,
        },
        {
          imageId: "87ce9779f986dcb21ab1fcfe794938d1",
          name: "McSpicy Paneer Burger + Fries (M) + Piri Piri Spice Mix",
          description:
            "Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with the spicy piri piri mix and medium fries.",
          id: "123196677",
          price: 27900,
        },
        {
          imageId: "fcc2fb1635f8e14c69b57126014f0bd5",
          name: "McSpicy Paneer + Classic Cheese Fries",
          description:
            "Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Mexican Cheese Fries.",
          id: "123196678",
          price: 27900,
        },
        {
          imageId: "972a2b3aca8059ba25a04875ec091885",
          name: "Black Forest Mcflurry (M) BOGO",
          description: "Get 2 Black Forest McFlurry for the price of one!",
          id: "125973396",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/b8c0d92e-86b0-4efa-81c1-66be9b3f846b_ddd80150-1aa4-465c-8453-7f7e7650c6c9.png",
          name: "New McSaver Chicken Surprise",
          description:
            "Enjoy a delicious combo of the new Chicken Surprise Burger with a beverage, now in a delivery friendly reusable bottle.",
          id: "143868024",
          price: 11900,
        },
        {
          imageId: "7bf83367ed61708817caefbc79a3c9eb",
          name: "New McSaver Chicken Nuggets (4 Pc)",
          description: "Enjoy New McSaver Chicken Nuggets (4 Pc)",
          id: "143868025",
          price: 11900,
        },
        {
          imageId: "8f0cbf7d50d3f8dad87b971fb11f8d6c",
          name: "New McSaver Masala McEgg",
          description: "Enjoy New McSaver Masala McEgg",
          id: "143868026",
          price: 11900,
        },
        {
          imageId: "ab4c47366f0e51ac0071f705b0f2d93e",
          name: "New McSaver McAloo Tikki",
          description: "Enjoy New McSaver McAloo Tikki",
          id: "143868027",
          price: 11900,
        },
        {
          imageId: "5897849bed9b0298559968c3e5f4af81",
          name: "New McSaver Mexican McAloo Tikki",
          description: "Enjoy New McSaver Mexican McAloo Tikki",
          id: "143868028",
          price: 11900,
        },
        {
          imageId: "45fa406e76418771de26c37e8863fbb3",
          name: "New McSaver Pizza McPuff",
          description: "Enjoy New McSaver Pizza McPuff",
          id: "143868029",
          price: 11900,
        },
        {
          imageId: "70771ada9c14923d9535e84d1d2fc2e0",
          name: "New McSaver Small Fries",
          description: "Enjoy New McSaver Small Fries",
          id: "143868030",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/ad720fff-d805-4477-b6c2-460b2160688e_24061f49-1c64-44fa-a0c3-2514c197a0d9.png",
          name: "Chicken Surprise Burger + Chocolate Shake",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with a refreshing Chocolate Shake",
          id: "145040435",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/ccceb88b-2015-47a3-857b-21a9641d87ed_ad91cfe4-3727-4f23-a34e-4d09c8330709.png",
          name: "Chicken Surprise Burger + Fries (M).",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with the iconic Fries (M)",
          id: "149472360",
          price: 16300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/7305e7bc-83cd-4bb8-adec-c7a4dcc6cba3_605b581e-b566-4a97-9768-4eb2b3b29bc1.png",
          name: "New McSaver McAloo Tikki NONG",
          description:
            "McAloo Tikki Burger No Onion No Garlic+ Drink of your choice",
          id: "149472375",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/9635bbca-324b-47e6-ba22-80ffccd3cd88_9dd25da6-4d43-4be2-acd4-02fec64592b6.png",
          name: "New McSaver Mexican McAloo Tikki NONG",
          description:
            "Mexican McAloo Tikki Burger No Onion No Garlic+ Drink of your choice",
          id: "149472376",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/f1d9557a-6f86-4eb2-abd5-569f2e865de2_9b71c67a-45f1-41c1-9e1c-b80a934768da.png",
          name: "Chicken Surprise Burger + McChicken Burger.",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with the iconic McChicken Burger",
          id: "151005348",
          price: 20000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/2448de0c-73cc-4b27-b037-ac7f48ad3385_e400b623-d212-423f-ac3b-32750273b4ec.png",
          name: "Crispy Veggie Burger +  Classic Cheese Fries",
          description:
            "Feel the crunch with our newly launched Crispy Veggie Burger with Classic Cheese Fries",
          id: "151005475",
          price: 30900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/ebbef215-0074-426b-a427-cf97ed508fd5_0f4e4f20-d751-499a-9fae-237c5ca4d4b3.png",
          name: "Crispy Veggie Burger + McAloo Tikki.",
          description:
            "Feel the crunch with our newly launched Crispy Veggie Burger + McAloo Tikki",
          id: "151005483",
          price: 24500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/d619c1d9-9298-4527-b5aa-39cd9d41050f_a7abb5ea-ea8f-4b44-a69e-b9a9825f10ab.png",
          name: "Crispy Veggie Burger + Piri Piri Fries (M).",
          description:
            "Feel the crunch with our newly launched Crispy Veggie Burger with Piri Piri Fries (M)",
          id: "151005539",
          price: 30900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/19b4f863-c75f-4935-ab27-f5256d5f0ec4_310ef44a-48cb-472e-b467-3881959ad028.png",
          name: "McCrispy Chicken Burger + Piri Piri Fries (M).",
          description:
            "Feel the crunch with our newly launched McCrispy Chicken Burger with Piri Piri Fries (M)",
          id: "151005591",
          price: 35900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/a41229c9-d571-4b52-a460-8f7d6c305add_f3585ee7-ec89-4ae1-bd7c-dab6bfd92f0a.png",
          name: "McCrispy Chicken Burger + Classic Cheese Fries.",
          description:
            "Feel the crunch with our newly launched McCrispy Chicken Burger with Classic Cheese Fries",
          id: "151005606",
          price: 36900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/d4ebeeff-05e5-4b72-954f-b5a8890cef2f_db24461d-e085-42d4-9741-8fd4634c7f80.png",
          name: "McCrispy Chicken Burger + McAloo Tikki.",
          description:
            "Feel the crunch with our newly launched McCrispy Chicken Burger + McAloo Tikki",
          id: "151005610",
          price: 29500,
        },
      ],
    },
    {
      title: "Burger Combos ( 3 Pc Meals )",
      items: [
        {
          imageId: "1bcd9724fca70871a0e1fdc298c1f0e0",
          name: "McAloo Tikki Double Patty Burger Combo",
          description:
            "Enjoy a delicious combo of McAloo Tikki Burger double patty burger + Fries (M) + Beverage of your choice in a new, delivery friendly, reusable bottle.",
          id: "53956949",
          price: 22400,
        },
        {
          imageId: "b13dfa207df1045eae030442555fb69c",
          name: "McVeggie Double Patty Burger Combo",
          description:
            "Enjoy a combo of McVeggie double patty burer + Fries (M) + Drink of your Choice in a new, delivery friendly, resuable bottle.",
          id: "53956935",
          price: 32000,
        },
        {
          imageId: "e8a8f43ee29a3b97d2fac37e89648eac",
          name: "McChicken Double Patty Burger Combo",
          description:
            "Your favorite McChicken Burger double pattu burger + Fries (M) + Drink of your choice in a new, delivery friendly, resuable bottle.",
          id: "53956929",
          price: 35300,
        },
        {
          imageId: "91ed96b67df6e630a6830fc2e857b5b1",
          name: "McSpicy Chicken Double Patty Burger combo",
          description:
            "Your favorite McSpicy Chicken double patty Burger + Fries (M) + Drink of your choice.",
          id: "53956736",
          price: 40900,
        },
        {
          imageId: "6bfe589298fbd3dc6d5fcebf35cad1c2",
          name: "Mexican McAloo Tikki Double Patty Burger Combo",
          description:
            "Enjoy the Mexican McAloo Tikki burger with double patty + Fries (M) + Coke (M)",
          id: "54782036",
          price: 24300,
        },
        {
          imageId: "0140c49c7274cdb6af08053af1e6cc20",
          name: "Mexican McAloo Tikki Burger Combo",
          description:
            "Enjoy a delicious combo of Mexican McAloo Tikki Burger + Fries (M) + Beverage of your choice in a new, delivery friendly, reusable bottle.",
          id: "61249971",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/15320eae-f8fa-45e5-ba99-ce3286811dc0_992c4661-e1a5-4476-88bc-a8e3ca65d0db.png",
          name: "McVeggie Burger Happy Meal",
          description:
            "Enjoy a combo of McVeggie Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
          id: "61270904",
          price: 30600,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/ea4edc48-32b1-4399-b5d3-cab678c1455f_07a6817c-def0-43bd-a05a-c8740a903d76.png",
          name: "McAloo Tikki Burger Happy Meal",
          description:
            "Enjoy a combo of McAloo Tikki Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
          id: "61270907",
          price: 21200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/c45fc9ba-afb9-4a5f-b547-55bfad55989e_ac0ffb6d-1429-445d-8b53-d5a0f6d85ff4.png",
          name: "McChicken Burger Happy Meal",
          description:
            "Enjoy a combo of McChicken Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
          id: "61270909",
          price: 32700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/f6813404-54a4-492b-a03a-cf32d00ee1ae_c98c4761-69eb-4503-bde3-dffaafd43b15.png",
          name: "Grilled Cheese and Chicken Burger Combo",
          description:
            "Enjoy a combo of Grilled Chicken & Cheese Burger + Fries (M) + Coke . Order now to experience a customizable, delicious meal.",
          id: "61270914",
          price: 30400,
        },
        {
          imageId: "4c56f086e500afe6b2025f9c46846e12",
          name: "9 Pc Chicken Nuggets Combo",
          description:
            "Enjoy your favorite Chicken McNuggets + Fries (M) + Drink of your choice.",
          id: "61270916",
          price: 38700,
        },
        {
          imageId: "6e7f9411ed67fe8d8873734af1e8d4e9",
          name: "Chicken McNuggets 6 Pcs Combo",
          description:
            "Enjoy your favorite Chicken McNuggets + Fries (M) + Drink of your choice.",
          id: "61270917",
          price: 34700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/22/f631f834-aec2-410d-ab9d-7636cd53d7a0_8801a3c7-ad83-4f7c-bcb0-76101fadde91.png",
          name: "Big Spicy Chicken Wrap Combo",
          description:
            "Your favorite Big Spicy Chicken Wrap + Fries (M) + Drink of your choice.",
          id: "61270919",
          price: 37100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/b943fe56-212d-4366-a085-4e24d3532b30_3776df33-e18d-46c9-a566-c697897f1d16.png",
          name: "McChicken Burger Combo",
          description:
            "Your favorite McChicken Burger + Fries (M) + Drink of your choice in a new, delivery friendly, resuable bottle.",
          id: "61270925",
          price: 31500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/c8839f22-e525-44bb-8a50-8ee7cffecd26_cf4c0bcf-c1b9-4c0e-9109-03eb86abf4dd.png",
          name: "Corn & cheese Burger Combo",
          description:
            "Enjoy a combo of Corn & Cheese Burger + Fries (M) + Coke . Order now to experience a customizable, delicious meal.",
          id: "61270927",
          price: 30900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/ead090f2-5f80-4159-a335-d32658bcfc7c_8bcc5cd9-b22a-4f5d-8cde-0a2372c985c8.png",
          name: "Chicken Maharaja Mac Burger Combo",
          description:
            "Enjoy a double decker Chicken Maharaja Mac + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious meal.",
          id: "61270934",
          price: 38500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/70fc7aa0-7f3b-418e-8ccd-5947b5f1aacd_055bbe77-fbe7-4200-84d3-4349475eb298.png",
          name: "McSpicy Paneer Burger Combo",
          description:
            "Enjoy your favourite McSpicy Paneer Burger + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious combo",
          id: "61270951",
          price: 34200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/214189a0-fd53-4f83-9d18-c3e53f2c017a_70748bf8-e587-47d6-886c-9b7ac57e84b3.png",
          name: "McSpicy Chicken Burger Combo",
          description:
            "Your favorite McSpicy Chicken Burger + Fries (M) + Drink of your choice.",
          id: "61270974",
          price: 35200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/22/116148a2-7f56-44af-bdd0-6bbb46f48baa_355bbd20-86d4-49b8-b3a9-d290772a9676.png",
          name: "Big Spicy Paneer Wrap Combo",
          description:
            "Your favorite Big Spicy Paneer Wrap + Fries (M) + Drink of your choice.",
          id: "61270986",
          price: 36100,
        },
        {
          imageId: "b22592af2edd8c7046fcc74d10a66ace",
          name: "Kebab Chicken Burger Combo",
          description:
            "Relish on a juicy Chicken Kebab Burger + Fries (M) + Drink of your Choice on this meal. Order now to experience a customizable, delicious meal.",
          id: "61271281",
          price: 20500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/5c9942c5-bc9d-4637-a312-cf51fe1d7aa8_e7e13473-9424-4eb8-87c3-368cfd084a2f.png",
          name: "McVeggie Burger Combo",
          description:
            "Enjoy a combo of McVeggie + Fries (M) + Drink of your Choice in a new, delivery friendly, resuable bottle.",
          id: "61271324",
          price: 28000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/48e91da2-b730-4e72-b308-d4350b924328_34f0a479-5f28-44dc-b787-85ad656d7579.png",
          name: "Filet-O-Fish Burger Combo",
          description:
            "Enjoy our Signature Filet-O-Fish Burger + Fries (M) + Drink of your choice.",
          id: "61271357",
          price: 35000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/d064fb5e-fb2e-4e1d-9515-18f26489f5b1_f6f49dba-2ae7-4ebf-8777-548c5ad4d799.png",
          name: "Veg Maharaja Mac Burger Combo",
          description:
            "Enjoy a double decker Veg Maharaja Mac+ Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious meal.",
          id: "61271454",
          price: 38500,
        },
        {
          imageId: "4f474c833930fa31d08ad2feed3414d8",
          name: "Masala McEgg Burger Combo",
          description:
            "Enjoy a combo of Masala McEgg + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious meal.",
          id: "67552002",
          price: 22500,
        },
        {
          imageId: "31da1776bf9e74beea809aadc61cf1da",
          name: "Birthday Party Package - McChicken",
          description:
            "5 McChicken Burger + 5 Sweet Corn + 5 B Natural Mixed Fruit Beverage + 5 Soft Serve (M) + Book",
          id: "78479107",
          price: 219800,
        },
        {
          imageId: "567411605ac9c72680aa742e17fb83d5",
          name: "Birthday Party Package - McVeggie",
          description:
            "5 McVeggie Burger + 5 Sweet Corn + 5 B Natural Mixed Fruit Beverage + 5 Soft Serve (M) + Book",
          id: "78479108",
          price: 219800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/1365612e-e004-44f8-8983-9824ace68608_588ad214-744b-495f-a00b-13a322768bfd.png",
          name: "McEgg Burger Happy Meal",
          description:
            "Enjoy a combo of McEgg Burger  + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
          id: "78479109",
          price: 23800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/29/28550356-fea3-47ce-bfa8-11222c78958a_8975c012-a121-42c3-92e7-719644761d83.png",
          name: "McSpicy Premium Burger Chicken Combo",
          description:
            "A deliciously filling meal of McSpicy Premium Chicken Burger + Fries (M) + Drink of your choice",
          id: "80575170",
          price: 38500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/29/14ce2cab-913c-4916-b98a-df2e5ea838ff_6d6208ca-4b76-4b87-a3fe-72c2db1081d8.png",
          name: "McSpicy Premium Burger Veg Combo",
          description:
            "A deliciously filling meal of McSpicy Premium Veg Burger + Fries (M) + Drink of your choice",
          id: "80575172",
          price: 38500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/b32eb9b3-7873-4f00-b601-0c92dd5a71ef_ec318a73-0e41-4277-8606-dc5c33b04533.png",
          name: "McCheese Burger Chicken Combo",
          description:
            "Enjoy a deliciously filling meal of McCheese Chicken Burger + Fries (M) + Beverage of your Choice in a delivery friendly, reusable bottle.",
          id: "100815094",
          price: 38500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/22b25dd0-80ed-426b-a323-82c6b947612d_df827568-54f9-4329-af60-1fff38d105e9.png",
          name: "McCheese Burger Veg Combo",
          description:
            "Enjoy a deliciously filling meal of McCheese Veg Burger + Fries (M) + Beverage of your Choice in a delivery friendly, reusable bottle.",
          id: "112667420",
          price: 38500,
        },
        {
          imageId: "b03a3ad7212fca0da40e90eed372ced9",
          name: "McAloo Tikki Burger Combo",
          description:
            "Enjoy a delicious combo of McAloo Tikki Burger + Fries (M) + Beverage of your choice in a new, delivery friendly, reusable bottle.",
          id: "115130123",
          price: 20500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/29/9068eeb6-c774-4354-8c18-bf2ddcc94d10_631c39d1-d78c-4275-a14f-60670ce5aee4.png",
          name: "McCheese Burger Veg Combo with Corn",
          description:
            "Enjoy a combo of  McCheese Burger Veg, Classic corn, McFlurry Oreo (Small) with a beverage of your choice in a delivery friendly, resuable bottle.",
          id: "117967121",
          price: 41700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/d444977d-16b7-4e98-9026-0a8fdc5b55c9_a062197d-ac93-49bc-9ada-73d947c3821c.png",
          name: "2 Pc Chicken Nuggets Happy Meal",
          description:
            "Enjoy a combo of  2 Pc Chicken Nuggets + Sweet Corn+ B Natural Mixed Fruit Beverage + Book",
          id: "126296612",
          price: 22076,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/2904251b-562f-42bf-b412-b72133851ee0_11fb8bb1-fe59-4cd2-8f16-ae64131fb9f9.png",
          name: "4 Pc Chicken Nuggets Happy Meal",
          description:
            "Enjoy a combo of  4 Pc Chicken Nuggets + Sweet Corn+ B Natural Mixed Fruit Beverage + Book",
          id: "126296613",
          price: 26800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/925ee002-5dad-42b2-bfb3-7ae0dfa291d3_42d881c9-ebea-45f5-a91d-ce0eb4b25d2a.png",
          name: "McSpicy Deluxe Chicken Burger Combo",
          description:
            "McSpicy Deluxe Chicken Burger + Fries (M) + Drink of your choice.",
          id: "132406344",
          price: 37100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/72abe84e-7e1d-4bbe-aa2d-a6de6753df3d_60e7e353-1fb1-4365-a6c4-aa4834198570.png",
          name: "McSpicy Deluxe Paneer Burger Combo",
          description:
            "McSpicy Deluxe paneer Burger + Fries (M) + Drink of your choice.",
          id: "132406347",
          price: 36100,
        },
        {
          imageId: "6581baefa0ab6c6a7f4b99e67e1c38c0",
          name: "McSpicy Deluxe Chicken Double Patty Burger Combo",
          description:
            "McSpicy Deluxe Chicken double patty Burger + Fries (M) + Drink of your choice.",
          id: "134350871",
          price: 42800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/6c0288a4-943a-4bb6-a810-b14877c0ea8f_f56187da-4ae4-4a88-b1a5-e48e28d78087.png",
          name: "Chicken Surprise Burger + 4 Pc Chicken McNuggets + Coke",
          description:
            "Enjoy the newly launched Chicken Surprise Burger with 4 Pc Chicken McNuggets and Coke",
          id: "145040433",
          price: 24900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/cb9833dd-5983-4445-bb1b-8d0e70b6c930_8928ae23-ddae-4d9a-abc5-e887d7d7868e.png",
          name: "Chicken Surprise Burger Combo.",
          description:
            "Chicken Surprise Burger Combo + Fries (M) + Drink of your choice.",
          id: "149472359",
          price: 23800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/132a5f06-c8f2-4243-8325-6c11adcc9e3d_4c14362d-1253-4135-bef3-49e5f32c8cf6.png",
          name: "McAloo Tikki NONG Burger Combo ( M)",
          description:
            "McAloo Tikki Burger No Onion No Garlic+ Fries ( M ) + Drink of your choice",
          id: "149472371",
          price: 20500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/1fd6abac-0bf8-4ee9-86b0-d8f5261070ec_e1c15946-e866-4b54-8bb3-f10ff76a7f1f.png",
          name: "Mexican McAloo Tikki NONG Burger Combo ( M)",
          description:
            "Mexican McAloo Tikki Burger No Onion No Garlic+ Fries ( M ) + Drink of your choice",
          id: "149472373",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/616491d0-2698-464f-8f8e-a8a4b911477b_961f1954-cf11-491e-b705-e8cb9f891cfb.png",
          name: "Crispy Veggie Burger Meal (M)",
          description:
            "A flavorful patty with 7 premium veggies, zesty cocktail sauce, and soft buns, paired with crispy fries (M) and a refreshing Coke (M). A perfectly satisfying and full-flavored meal!",
          id: "151005512",
          price: 32667,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/686a46d0-b396-406e-88c8-45a95d41b12e_8ef81670-4855-4085-97ea-12f578b3957b.png",
          name: "McCrispy Chicken Burger Meal (M)",
          description:
            "A crunchy, golden chicken thigh fillet with fresh lettuce and creamy pepper mayo between soft, toasted premium buns, served with crispy fries (M) and a refreshing Coke (M). A perfectly satisfying and full-flavored meal!",
          id: "151005575",
          price: 36667,
        },
      ],
    },
    {
      title: "Burgers & Wraps",
      items: [
        {
          imageId: "314b5b5786f73746de4880602723a913",
          name: "McSpicy Chicken Double Patty Burger",
          description:
            "Indulge in our signature tender double chicken patty, coated in spicy, crispy batter, topped with creamy sauce, and crispy lettuce.",
          id: "53522052",
          price: 28100,
        },
        {
          imageId: "af88f46a82ef5e6a0feece86c349bb00",
          name: "McChicken Double Patty Burger",
          description:
            "Enjoy the classic, tender double chicken patty with creamy mayonnaise and lettuce in every bite",
          id: "53522063",
          price: 17300,
        },
        {
          imageId: "2d5062832f4d36c90e7dfe61ef48e85a",
          name: "McVeggie Double Patty Burger",
          description:
            "Savour your favorite spiced double veggie patty, lettuce, mayo, between toasted sesame buns in every bite",
          id: "53522068",
          price: 18800,
        },
        {
          imageId: "cda0e2d51420a95fad28ad728914b6de",
          name: "Mexican McAloo Tikki Double Patty Burger",
          description:
            "A fusion of International taste combined with your favourite aloo tikki now with two patties",
          id: "61271496",
          price: 9400,
        },
        {
          imageId: "ef569f74786e6344883a1decdd193229",
          name: "McAloo Tikki Double Patty Burger",
          description:
            "The World's favourite Indian burger! A crispy double Aloo patty, tomato mayo sauce & onions",
          id: "53522077",
          price: 9400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/65a88cf4-7bcd-40f6-a09d-ec38c307c5d9_8993ea5b-f8e0-4d6c-9691-7f85adee2000.png",
          name: "Chicken Maharaja Mac Burger",
          description:
            "Savor our filling 11 layer burger! Double the indulgence with 2 juicy grilled chicken patties, along with jalapeños, onion, cheese, tomatoes, lettuce, and zesty Habanero sauce. ",
          id: "33143470",
          price: 26800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/06354d09-be1b-406c-86b5-49dc9b5062d1_2f80f39e-c951-4ca6-8fca-a243a18c3448.png",
          name: "Veg Maharaja Mac Burger",
          description:
            "Savor our filling 11 layer burger! Double the indulgence with 2 corn & cheese patties, along with jalapeños, onion, cheese, tomatoes, lettuce, and spicy Cocktail sauce. ",
          id: "33143476",
          price: 22500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/22/e1fa4587-23ac-4613-af61-de659b066d19_14205d12-ea39-4894-aa85-59035020cecd.png",
          name: "Big Spicy Chicken Wrap",
          description:
            "Tender and juicy chicken patty coated in spicy, crispy batter, topped with a creamy sauce, wrapped with lettuce, onions, tomatoes & cheese. A BIG indulgence.",
          id: "61249970",
          price: 25900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/2cf63c01-fef1-49b6-af70-d028bc79be7b_bfe88b73-33a9-489c-97f3-fb24631de1fc.png",
          name: "McVeggie Burger",
          description:
            "Savour your favorite spiced veggie patty, lettuce, mayo, between toasted sesame buns in every bite",
          id: "61249994",
          price: 15000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/dcdb436c-7b9f-4667-9b73-b8fa3215d7e2_9730340a-661b-49f4-a7d9-a8a89ffe988f.png",
          name: "McSpicy Chicken Burger",
          description:
            "Indulge in our signature tender chicken patty, coated in spicy, crispy batter, topped with creamy sauce, and crispy lettuce.",
          id: "61250018",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/fb912d21-ad9d-4332-b7cf-8f65d69e2c47_1fa5998c-b486-449a-9a88-2e61cf92ff77.png",
          name: "McSpicy Paneer Burger",
          description:
            "Indulge in rich & filling spicy paneer patty served with creamy sauce, and crispy lettuce—irresistibly satisfying!",
          id: "61250022",
          price: 21500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/c093ba63-c4fe-403e-811a-dc5da0fa6661_f2ad8e1e-5162-4cf8-8dab-5cc5208cdb85.png",
          name: "McChicken Burger",
          description:
            "Enjoy the classic, tender chicken patty with creamy mayonnaise and lettuce in every bite",
          id: "61250031",
          price: 14500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/22/198c3d14-3ce8-4105-8280-21577c26e944_779c4353-2f85-4515-94d2-208e90b830eb.png",
          name: "Big Spicy Paneer Wrap",
          description:
            "Rich & filling cottage cheese patty coated in spicy crispy batter, topped with tom mayo sauce wrapped with lettuce, onions, tomatoes & cheese.",
          id: "61250032",
          price: 24000,
        },
        {
          imageId: "b13811eeee71e578bc6ca89eca0ec87f",
          name: "McAloo Tikki Burger",
          description:
            "The World's favourite Indian burger! A crispy Aloo patty, tomato mayo sauce & onions",
          id: "61250033",
          price: 7500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/55a77d9e-cc28-4853-89c8-1ba3861f38c4_a378aafc-62b3-4328-a255-0f35f810966e.png",
          name: "Grilled Chicken & Cheese Burger",
          description:
            "A grilled chicken patty, topped with sliced cheese, spicy Habanero sauce, with some heat from jalapenos & crunch from onions",
          id: "61270922",
          price: 16400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/cb4d60c0-72c0-4694-8d41-3c745e253ea6_8262ec8c-e2ac-4c4f-8e52-36144a372851.png",
          name: "Corn & Cheese Burger",
          description:
            "A juicy corn and cheese patty, topped with extra cheese, Cocktail sauce, with some heat from jalapenos & crunch from onions",
          id: "61271438",
          price: 15500,
        },
        {
          imageId: "167aeccf27bab14940fa646c8328b1b4",
          name: "Mexican McAloo Tikki Burger",
          description:
            "Your favourite McAloo Tikki with a fusion spin with a Chipotle sauce & onions",
          id: "61271461",
          price: 7500,
        },
        {
          imageId: "f8287bf0bd1f1dacc6504b799dc84029",
          name: "Chicken Kebab Burger",
          description:
            "A flavourful Chicken Kebab patty topped with a tangy rassam sauce & crunchy onions",
          id: "61271501",
          price: 11200,
        },
        {
          imageId: "265c57f68b1a52f1cc4b63acf082d611",
          name: "Masala McEgg Burger",
          description:
            "A steamed egg, spicy Habanero sauce, & onions on toasted buns, a protein packed delight!",
          id: "67552006",
          price: 7200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/b1184d5f-0785-4393-98a8-a712d280a045_027d0e63-e5d9-43f3-9c9c-0dc68dd1ece1.png",
          name: "McCheese Burger Chicken",
          description:
            "Double the indulgence with a sinfully oozing cheesy patty & flame-grilled chicken patty, along with chipotle sauce, shredded onion, jalapenos & lettuce.",
          id: "80575166",
          price: 28100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/de84d4cc-6169-4235-942e-e4883a81c2e0_d90762c6-283f-46e5-a6ed-14ee3262bae0.png",
          name: "McCheese Burger Veg",
          description:
            "Find pure indulgence in our Veg McCheese Burger, featuring a sinfully oozing cheesy veg patty, roasted chipotle sauce, jalapenos & lettuce.",
          id: "80575167",
          price: 26200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/29/e1c10ab2-671b-4eac-aee8-88d9f96e005b_40169ccb-b849-4e0d-a54a-8938dd41ea34.png",
          name: "McSpicy Premium Chicken Burger",
          description:
            "A wholesome Spicy Chicken patty, Lettuce topped with Jalapenos and Cheese slice, Spicy Cocktail sauce & Cheese sauce",
          id: "80575169",
          price: 26000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/29/1a9faafd-b523-40a2-bdc6-f35191cfcf4a_0c462cb4-3843-4997-b813-dc34249b7c91.png",
          name: "McSpicy Premium Veg Burger",
          description:
            "A wholesome Spicy Paneer patty, Lettuce topped with Jalapenos and Cheese slice, Spicy Cocktail sauce & Cheese sauce",
          id: "80575171",
          price: 24900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/21/9f1f57da-e5ad-4544-bc5c-b820c813ee56_b5094c99-c4db-469b-a0e5-aefffbb3df5b.png",
          name: "Filet-O-Fish Burger",
          description:
            "Signature fish filet patty, balanced with a flavour of tartar sauce, a slice of cheese served with steamed buns.",
          id: "112667360",
          price: 18500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/4155af6e-6440-4fb1-b466-0747d4fac7f4_f13413da-3d90-4615-9043-52dbae05ecae.png",
          name: "McSpicy Deluxe Chicken Burger",
          description:
            "Indulge in a burger made with a spicy and crispy Chicken Patty, Chipotle Sauce, Tomatos, Lettuce & Jalapenos.",
          id: "132406348",
          price: 24300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/bc20f4ef-184a-498e-ad94-95da5f1891e1_2c70984c-ae04-4f00-8a3a-3a6fd33deee0.png",
          name: "McSpicy Deluxe Paneer Burger",
          description:
            "Indulge in a burger made with a spicy and crispy Paneer Patty, Chipotle Sauce, Tomatos, Lettuce & Cheese.",
          id: "132406349",
          price: 23400,
        },
        {
          imageId: "8540bab49c99e3b9f0d625c7b17a1347",
          name: "McSpicy Deluxe Chicken Double Patty Burger",
          description:
            "Indulge in a burger made with two spicy and crispy Chicken Patty, Chipotle Sauce, Tomatos, Lettuce & Jalapenos.",
          id: "134350870",
          price: 30000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/0fbf18a1-5191-4cda-a09d-521a24c8c6ca_25cf57c6-48cc-47bd-b422-17e86b816422.png",
          name: "Chicken Surprise Burger.",
          description:
            "Introducing the new Chicken Surprise Burger which has the perfect balance of a crispy fried chicken patty, the crunch of onions and the richness of creamy sauce.",
          id: "149472358",
          price: 7600,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/b5db4541-e1c2-4278-95c1-0c5e79884a70_6a0ab0a7-f33e-4648-ae82-ea11c5f37a75.png",
          name: "McAloo Tikki Burger NONG",
          description:
            "The World's favourite Indian burger with No Onion & No Garlic! Crispy aloo patty with delicious Tomato Mayo sauce!",
          id: "149472370",
          price: 7500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/6/e918b166-1b98-4f95-acf2-98aa35b8c8b4_58ce7382-a5f0-4a16-9ce6-cd3120dc1892.png",
          name: "Mexican McAloo Tikki Burger NONG",
          description:
            "Your favourite McAloo Tikki with a fusion spin of Chipotle sauce. No Onion and No Garlic",
          id: "149472372",
          price: 7500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/13047bb4-5cdd-47a4-8702-a2310668a643_c71bc9e1-f760-4519-b3c1-e72aa8011839.png",
          name: "Crispy Veggie Burger.",
          description:
            "A flavorful patty made with a blend of 7 premium veggies, topped with zesty cocktail sauce, all served between soft, premium buns. Perfectly satisfying and full of flavor.",
          id: "151005464",
          price: 20000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/aa34f13f-fa73-4ac7-8652-e4badb624ffe_a2ba5c74-e755-4d52-acf0-7bcef7c0886f.png",
          name: "McCrispy Chicken Burger",
          description:
            "A crunchy, golden chicken thigh fillet, topped with fresh lettuce and creamy pepper mayo, all nestled between soft, toasted premium buns. Perfectly satisfying and full of flavor.",
          id: "151005562",
          price: 22400,
        },
      ],
    },
    {
      title: "Fries & Sides",
      items: [
        {
          imageId: "df3edfc74f610edff535324cc53a362a",
          name: "Piri Piri Spice Mix",
          description:
            "The perfect, taste bud tingling partner for our World Famous Fries. Shake Shake, and dive in!",
          id: "61250021",
          price: 2381,
        },
        {
          imageId: "abe4b8cdf0f1bbfd1b9a7a05be3413e8",
          name: "Veg Pizza McPuff",
          description:
            "Crispy brown crust with a generous filling of rich tomato sauce, mixed with carrots, bell peppers, beans, onions and mozzarella. Served HOT.",
          id: "61270912",
          price: 6600,
        },
        {
          imageId: "5a18fbbff67076c9a4457a6b220a55d9",
          name: "Fries (Regular)",
          description:
            "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.",
          id: "65328891",
          price: 7900,
        },
        {
          imageId: "8a61e7fd97c454ea14d0750859fcebb8",
          name: "Fries (Medium)",
          description:
            "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.",
          id: "65328892",
          price: 12000,
        },
        {
          imageId: "a4b3002d0ea35bde5e5983f40e4ebfb4",
          name: "Fries (Large)",
          description:
            "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.",
          id: "65328893",
          price: 14000,
        },
        {
          imageId: "7db5533db29a4e9d2cc033f35c5572bc",
          name: "Tomato Ketchup Sachet",
          description:
            "Looking for a sauce to complement your meal? Look no further.",
          id: "67458385",
          price: 100,
        },
        {
          imageId: "1ca7abb262e8880f5cb545d0d2f9bb9b",
          name: "9 Pc Chicken Nuggets",
          description:
            "9 pieces of our iconic crispy, golden fried Chicken McNuggets!",
          id: "68259097",
          price: 21400,
        },
        {
          imageId: "44dc10c1099d7c366db9f5ce776878bd",
          name: "6 Pc Chicken Nuggets",
          description:
            "6 pieces of our iconic crispy, golden fried Chicken McNuggets!",
          id: "68259105",
          price: 19000,
        },
        {
          imageId: "f708dfc29c9624d8aef6e6ec30bde1c9",
          name: "Chilli Sauce Sachet",
          description:
            "Looking for a sauce to complement your meal? Look no further.",
          id: "69612766",
          price: 200,
        },
        {
          imageId: "9d67eae020425c4413acaf5af2a29dce",
          name: "Classic Corn Cup",
          description:
            "A delicious side of golden sweet kernels of corn in a cup",
          id: "112622455",
          price: 9000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/5692810b-ed08-49fb-9348-e62fc5d24864_4fcf05d6-70db-4e45-8b24-a519bde9a1a1.png",
          name: "Fries (M) + Piri Piri Mix",
          description: "Flat 15% Off on Fries (M) + Piri Piri Mix",
          id: "112622464",
          price: 12300,
        },
        {
          imageId: "f13f7c1db7b7fda89c86e84e98dc1d29",
          name: "Classic Cheese Fries",
          description:
            "The world famous, crispy golden Fries, served with delicious cheese sauce with a hint of spice. Contains cheese & mayonnaise",
          id: "112622489",
          price: 15700,
        },
        {
          imageId: "1ca7abb262e8880f5cb545d0d2f9bb9b",
          name: "20 Pc Chicken Nuggets",
          description:
            "20 pieces of our iconic crispy, golden fried Chicken McNuggets!",
          id: "116498332",
          price: 42201,
        },
        {
          imageId: "ba0a188d45aecc3d4d187f340ea9df54",
          name: "Barbeque Sauce",
          description:
            "Looking for a sauce to complement your meal? Look no further.",
          id: "123196651",
          price: 1905,
        },
        {
          imageId: "44dc10c1099d7c366db9f5ce776878bd",
          name: "4 Pcs Chicken Nuggets",
          description:
            "4 pieces of our iconic crispy, golden fried Chicken McNuggets!",
          id: "123196657",
          price: 11000,
        },
        {
          imageId: "6c3aeffdbd544ea3ceae1e4b8ce3fc43",
          name: "Mustard Sauce",
          description:
            "Looking for a sauce to complement your meal? Look no further.",
          id: "123196679",
          price: 1905,
        },
        {
          imageId: "319bffa6b4a2045961e09585cd5988a0",
          name: "Salsa Cheese Fries",
          description:
            "The world famous, crispy, golden Fries, served with rich cheese sauce and a tangy twist of salsa",
          id: "126296638",
          price: 13600,
        },
      ],
    },
    {
      title: "Coffee & Beverages (Hot and Cold)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/b7d85483-4328-40a7-8cba-c408771d2482_99cab512-28fc-4b2c-b07f-87850002e79c.png",
          name: "Strawberry Shake",
          description:
            "An all time favourite treat bringing together the perfect blend of creamy vanilla soft serve and strawberry flavor.Now in new, convenient and delivery friendly packaging",
          id: "65379331",
          price: 18500,
        },
        {
          imageId: "167dc0134bc1f4e8d7cb8e5c2a9dde5d",
          name: "Strawberry Green Tea (S)",
          description:
            "Freshly-brewed refreshing tea with fruity Strawbery flavour",
          id: "39608803",
          price: 15400,
        },
        {
          imageId: "562cb96c1de1c6f650daab676cf8dc8a",
          name: "Flat White Coffee",
          description:
            "Our signature McCafe espresso made with 100% Arabica beans, blended with steamed milk",
          id: "40651144",
          price: 19000,
        },
        {
          imageId: "2699c7c2130b4f50a09af3e294966b2e",
          name: "Moroccan Mint Green Tea (R )",
          description:
            "Freshly-brewed refreshing tea with hint of Moroccon Mint flavour",
          id: "40651146",
          price: 19400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/7a70ab81-ef1e-4e13-9c78-43ed2c62eaeb_3cd64c86-3a7b-41a6-9528-5fb5e2bbadc7.png",
          name: "Mixed Berry Smoothie",
          description:
            "A mix of mixed berries, blended together with our creamy soft serve",
          id: "61249938",
          price: 21100,
        },
        {
          imageId: "7d89db9d67c537d666d838ddc1e0c44f",
          name: "Ice Americano Coffee ",
          description:
            "Signature Arabica espresso shot mixed with ice for an energizing experience",
          id: "61249943",
          price: 18700,
        },
        {
          imageId: "58e19527263a4bf3bbbac4befb924120",
          name: "Chocolate Frappe",
          description:
            "An induglent treat of chocolate sauce & Oreo cookies blended with soft serve, ice & topped with whipped cream",
          id: "61249946",
          price: 27900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/5ad3343d-a520-498d-a933-52104c624304_9f6cb499-0229-40dc-8b17-4c386f0cc287.png",
          name: "American Mud Pie Shake",
          description:
            "Creamy and rich with chocolate and blended with nutty brownie bits for that extra thick goodness",
          id: "61249955",
          price: 20500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/14/fd328038-532b-4df7-b6e9-b21bd6e8c70f_7e663943-ab8a-4f24-8dc0-d727dd503cd3.png",
          name: "McCafe-Ice Coffee",
          description:
            "Classic coffee poured over ice with soft servefor a refreshing pick-me-up",
          id: "61249989",
          price: 20800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/1948679f-65df-4f93-a9cc-2ec796ca0818_6ad8b55d-e3cc-48ed-867d-511100b5735d.png",
          name: "Hot Chocolate (S)",
          description:
            "Sinfully creamy chocolate whisked with silky streamed milk",
          id: "61249997",
          price: 20500,
        },
        {
          imageId: "cee1ec0e10e25018572adcaf3a3c9e8c",
          name: "Latte Coffee (S)",
          description:
            "A classic combination of the signature McCafe espresso, smooth milk, steamed and froth",
          id: "61250008",
          price: 17800,
        },
        {
          imageId: "8d6a37c4fc69bceb66b6a66690097190",
          name: "Coke zero can",
          description:
            "The perfect diet companion to your burger, fries and everything nice. Regular serving size, 300 Ml.",
          id: "61250009",
          price: 6667,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/6a300499-efad-4a89-8fe4-ef6f6d3c1e2d_db248587-e3ea-4034-bbd7-33f9e483d6cb.png",
          name: "Americano Coffee (R)",
          description:
            "Refreshing cup of bold and robust espresso made with our signature 100% Arabica beans, combined with hot water",
          id: "61250013",
          price: 20500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/6a300499-efad-4a89-8fe4-ef6f6d3c1e2d_db248587-e3ea-4034-bbd7-33f9e483d6cb.png",
          name: "Americano Coffee (S)",
          description:
            "Refreshing cup of bold and robust espresso made with our signature 100% Arabica beans, combined with hot water",
          id: "68301801",
          price: 17400,
        },
        {
          imageId: "a1afed29afd8a2433b25cc47b83d01da",
          name: "Coke",
          description:
            "The perfect companion to your burger, fries and everything nice.",
          id: "68301809",
          price: 10300,
        },
        {
          imageId: "04a137420bf3febf861c4beed86d5702",
          name: "Mocha Coffee (R)",
          description:
            "A delight of ground Arabica espresso, chocolate syrup and steamed milk",
          id: "68301817",
          price: 24200,
        },
        {
          imageId: "71df07eb87d96824e2122f3412c8f743",
          name: "Mocha Coffee (S)",
          description:
            "A delight of ground Arabica espresso, chocolate syrup and steamed milk",
          id: "68301818",
          price: 21500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/15/1948679f-65df-4f93-a9cc-2ec796ca0818_6ad8b55d-e3cc-48ed-867d-511100b5735d.png",
          name: "Hot Chocolate (R)",
          description:
            "Sinfully creamy chocolate whisked with silky streamed milk",
          id: "68301819",
          price: 23200,
        },
        {
          imageId: "cee1ec0e10e25018572adcaf3a3c9e8c",
          name: "Latte Coffee (R)",
          description:
            "A classic combination of the signature McCafe espresso, smooth milk, steamed and frothed",
          id: "68301821",
          price: 20900,
        },
        {
          imageId: "6da8fa6b64c806e89058c87c0a85e759",
          name: "Vedica Zen Water Bottle",
          description: "Quench your thirst with the Vedica Zen Water Bottle",
          id: "69017284",
          price: 4762,
        },
        {
          imageId: "7d662c96bc13c4ac33cea70c691f7f28",
          name: "Fanta",
          description: "Add a zest of refreshing orange to your meal.",
          id: "69677665",
          price: 10300,
        },
        {
          imageId: "8e455d39bbbd8e4107b2099da51f3933",
          name: "Mixed Fruit Beverage",
          description: "Made with puree, pulp & juice from 6 delicious fruits",
          id: "78479110",
          price: 7600,
        },
        {
          imageId: "46e03daf797857bfbce9f9fbb539a6aa",
          name: "Sprite",
          description:
            "The perfect companion to your burger, fries and everything nice.",
          id: "83840334",
          price: 10300,
        },
        {
          imageId: "6333ac2ebe823a20cad586c0cd397b16",
          name: "English Breakfast Tea",
          description:
            "For when you want your time to enjoy long, slow sips of the wholesome English Breakfast tea",
          id: "112667358",
          price: 16500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/4f45f0d8-111a-4d9c-a993-06d6858fdb06_cb5d79e9-c112-45e5-9e6a-e17d75acd8ac.png",
          name: "Cappuccino Coffee (S)",
          description:
            "A refreshing espresso shot of 100% Arabica beans, topped with steamed milk froth. 236ml",
          id: "121924791",
          price: 17400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/4f45f0d8-111a-4d9c-a993-06d6858fdb06_cb5d79e9-c112-45e5-9e6a-e17d75acd8ac.png",
          name: "Cappuccino Coffee (R)",
          description:
            "A refreshing espresso shot of 100% Arabica beans, topped with steamed milk froth. 473ml",
          id: "121924792",
          price: 20500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/14/4f0f852a-1e4a-4bd9-b0ec-69ccef3c6a34_0f4f0b64-1b1b-4a7d-98f9-e074fc96d1bd.png",
          name: "Berry Lemonade Regular",
          description:
            "A refreshing drink, made with the delicious flavors of berries. 354 ml.",
          id: "125973395",
          price: 14300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/463331b6-aa39-4d37-a8b2-c175aa20f723_14e888b6-2ebf-4d84-93a7-7b0576147bda.png",
          name: "Chocolate Flavoured Shake",
          description:
            "The classic sinful Chocolate Flavoured Shake, a treat for anytime you need one. Now in new, convenient and delivery friendly packaging",
          id: "125973397",
          price: 18500,
        },
        {
          imageId: "5f9bdb36689a11cadb601a27b6fdef2d",
          name: "McCafe-Classic Coffee",
          description:
            "An irrestible blend of our signature espresso and soft serve with whipped cream on top, a timeless combination! Now in a new, convenient and delivery friendly packaging.",
          id: "125973399",
          price: 21600,
        },
        {
          imageId: "063e9cd747c621978ab4fddbb6d0a5ee",
          name: "Mocha Frappe",
          description:
            "The perfect mix of indulgence and bold flavours. Enjoy a delicious blend of coffee, chocolate sauce, and soft serve",
          id: "125973404",
          price: 27900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/5/7f188d92-7a7d-4f72-a518-38da47c14e5f_086f9aec-875b-498e-9d00-88c6d2aa91df.png",
          name: "Espresso Shot",
          description: "Enjoy an  Espresso Shot",
          id: "144198608",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/1793c61c-48f4-4785-b8a6-bc50eadb3b88_36ab0b13-0b17-459c-97a6-50dea3027b80.png",
          name: "Cappuccino Small with Hazelnut.",
          description:
            "A delightful and aromatic coffee beverage that combines the robust flavor of espresso with the rich, nutty essence of hazelnut.",
          id: "146631261",
          price: 19500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/0619409e-e7cc-4b7c-a002-c05a2dff2ed8_f9bf368f-3dae-4af5-813d-4645384d24f7.png",
          name: "Iced Coffee with Hazelnut.",
          description:
            "An ideal choice for those who enjoy a flavorful, nutty twist to their iced coffee, providing a satisfying and refreshing pick-me-up.",
          id: "146631317",
          price: 22900,
        },
        {
          imageId: "54243043b1b31fa715f38e6998a63e93",
          name: "Ice Tea - Green Apple flavour",
          description:
            "A perfect blend of aromatic teas, infused with green apple flavour .Now in a new, convenient and delivery friendly packaging",
          id: "147748562",
          price: 18500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/14/9dd6bee1-9ee4-40bc-801d-cf3c2472c5ed_6c035a5d-6f2c-4b2a-8351-41d6c476d9a7.png",
          name: "Ice Tea - lemon flavour",
          description:
            "A perfect blend of aromatic teas, infused with lemon flavour.Now in a new, convenient and delivery friendly packaging",
          id: "147748563",
          price: 18500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/14/f585991b-3864-4996-9821-9d835f44d09e_ea5c4f0e-c670-4b3e-b1f1-d8848edcfa2d.png",
          name: "Ice Tea- strawberry flavour",
          description:
            "A perfect blend of aromatic teas, infused with strawberry flavour . Now in a new, convenient and delivery friendly packaging",
          id: "147748565",
          price: 18500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/bb8470e1-5862-4844-bb47-ec0b2abdd752_845f1527-6bb0-46be-a1be-2fcc7532e813.png",
          name: "Mango Smoothie",
          description:
            "A delicious mix of mangoes, soft serve mix and blended ice",
          id: "149472354",
          price: 21100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/81425a09-1c2f-4449-a049-c1bd4f6841e9_6e40b0d7-f376-4421-9559-b703864e8258.png",
          name: "Cappuccino Small with Cinammon Spice.",
          description:
            "A warm and aromatic coffee beverage that combines the bold flavor of espresso with the comforting spice of cinnamon",
          id: "149472355",
          price: 19500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/6f033388-9f56-4d08-997a-fd65019fb416_7e677b00-4132-419d-9fe8-e112d1a41586.png",
          name: "Classic Coffee Regular with Cinammon Spice.",
          description:
            "refreshing beverage that combines the invigorating taste of iced coffee with the warm, aromatic notes of cinnamon",
          id: "149472361",
          price: 23700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/5926eaba-bd6a-4af1-ba57-89bdb2fdfec6_c2507538-7597-4fc0-92e3-bdf57c81bda5.png",
          name: "Classic Coffee Regular with French Vanilla.",
          description:
            "a delightful and refreshing beverage that blends into the smooth, creamy essence of vanilla with the invigorating taste of chilled coffee.",
          id: "149472362",
          price: 23700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/b65446d8-bee6-484c-abdf-0326315c7e40_4c694dbc-e5e9-4998-b6ac-bd280fc6b5dc.png",
          name: "Classic Coffee Regular with Hazelnut.",
          description:
            "refreshing and delicious beverage that combines the rich, nutty taste of hazelnut with the cool, invigorating essence of cold coffee",
          id: "149472363",
          price: 23700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/35867352-7802-4082-8b25-955878a6daa2_1d995db8-655f-45d3-9ad2-4469fe1301ae.png",
          name: "Iced Coffee with French Vanilla.",
          description:
            "An ideal choice for those who enjoy a smooth, creamy vanilla twist to their iced coffee, providing a satisfying and refreshing pick-me-up",
          id: "149472367",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/e0a5c619-2df5-431f-9e21-670a358e8dbb_c2a2324f-ff95-44b3-adf9-dd6aee9696aa.png",
          name: "Cappuccino Small with French Vanilla.",
          description:
            "A popular coffee beverage that combines the smooth, creamy flavor of vanilla with the robust taste of espresso",
          id: "151005354",
          price: 19500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/8db75dd0-07fa-4afb-8243-44d87b74f45b_e7a88ae1-c3d6-487a-b3c8-48880a309593.png",
          name: "Iced Coffee with Cinammon Spice.",
          description:
            "An ideal choice for those who enjoy a flavorful, refreshing cinammon twist to their iced coffee, providing a satisfying and refreshing pick-me-up.",
          id: "151005390",
          price: 22900,
        },
      ],
    },
    {
      title: "Cakes Brownies and Cookies",
      items: [
        {
          imageId: "c944d681ac7715e178c78e1300f66827",
          name: "Choco Brownie",
          description:
            "Delicious soft chocolate brownie, with the right balance of sweetness",
          id: "123046752",
          price: 9500,
        },
        {
          imageId: "32ff88484a8607b6d740c1635b9ce09f",
          name: "Choco Crunch Cookie",
          description:
            "Grab the choco crunch cookies packed with chocolate chips for the perfect crunch",
          id: "123046753",
          price: 9500,
        },
        {
          imageId: "fa5526832dfc6e236e6de7c322beae94",
          name: "Cinnamon Raisin Cookie",
          description:
            "Enjoy the wholesome flavours of this chewy and satisfying cookie",
          id: "123046756",
          price: 9500,
        },
        {
          imageId: "f3c4415f38ed3982e25c9cd4665840fc",
          name: "Blueberry Cheese Cake",
          description: "A sweet treat to suit your every mood",
          id: "123196653",
          price: 22900,
        },
        {
          imageId: "b424bcb7466a0a04ff8d7fe3270641b6",
          name: "Chocolate Express Cake",
          description:
            "This rich chocolate cake is topped with chocolate shavings, perfect for all chocolate lovers",
          id: "123196661",
          price: 17100,
        },
        {
          imageId: "cb24719daf96b58dd1be3bbf7b9fe372",
          name: "Cold Coffee  Combo",
          description:
            "In this combo choose any 1 coffee among- Cold Coffee ( R )/Iced Coffee ( R )/Iced Americano ( R ) and any 1 snacking item among- Choco crunch cookies/Oats Cookies/Choco Brownie/Blueberry muffin",
          id: "125149212",
          price: 18500,
        },
        {
          imageId: "9aba6528e9c4f780dda18b5068349020",
          name: "Hot  Coffee Combo",
          description:
            "In this combo choose any 1 hot coffee among- Cappuccino(s)/Latte(s)/Mocha(s)/Americano(s) and any 1 snacking item among- Choco crunch cookies/Oats Cookies/Choco Brownie/Blueberry muffin/ Signature croissant",
          id: "125149214",
          price: 17100,
        },
        {
          imageId: "c7165efd872543e1648c21c930dafe5f",
          name: "Indulge Choco Jar Dessert",
          description:
            "Rich chocolate for pure indulgence to satify your sweet tooth.",
          id: "125149215",
          price: 7600,
        },
        {
          imageId: "56ecb9e43f657ee8f239cc22f7831b83",
          name: "Vanilla Chocolate Muffin",
          description:
            "Sweet, soft, and fluffy vanilla flavoured chocolate chip muffins are perfect accompaniment with hot coffee!",
          id: "125973411",
          price: 12900,
        },
        {
          imageId: "b7f1ff384f864934bbe605eff1dd13b3",
          name: "Blueberry Cup Cheesecake",
          description: "Enjoy Blueberry Cup Cheesecake",
          id: "135704775",
          price: 14200,
        },
        {
          imageId: "6c748c0b21f4a99593d1040021500430",
          name: "Chocochip Muffin",
          description:
            "Enjoy a dense chocochip muffin, with melty chocolate chips for a choco-lover's delight",
          id: "144198607",
          price: 14200,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/ee2c7b9f-4426-4e70-9e98-bf8e8cc754ad_93eaaaa3-e498-4ca1-a77d-545a8006c8e2.png",
          name: "Indulge Combo",
          description:
            "Indulge in the perfect pairing of a classic cold coffee and a chocolate chip muffin, that balances the refreshing taste of chilled coffee with the sweet, comforting flavors of a freshly baked treat.",
          id: "146631322",
          price: 17100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/2e45768e-cee9-4c24-a051-f9f9d790970b_e8e974a1-cb15-4e2c-9b6f-9bf4f5150540.png",
          name: "Refresh Combo ",
          description:
            "Indulge in the perfect pairing of a brownie with a refreshing iced coffee, combining rich, chocolatey goodness with the cool, invigorating flavors of coffee.",
          id: "146631323",
          price: 17100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/87a8807b-77e4-4e0d-a47e-af1cf2d2b96d_3230e601-af8f-4436-85cd-14c4e855240d.png",
          name: "Take a break Combo",
          description:
            "Savor the harmonious pairing of a classic cappuccino with a cinnamon cookie, combining the bold, creamy flavors of coffee with the warm, spiced sweetness of a baked treat ",
          id: "146631325",
          price: 17100,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/9462ac0c-840e-44d1-a85d-bbea6f8268f1_a93dc44b-bf30-47b9-8cee-3a5589d2002e.png",
          name: "Treat Combo",
          description:
            "Delight in the luxurious pairing of a  chocolate jar dessert with a classic cappuccino, combining rich, creamy indulgence with the bold, aromatic flavors of espresso.",
          id: "146631328",
          price: 17100,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          imageId: "a28369e386195be4071d9cf5078a438d",
          name: "Mcflurry Oreo ( S )",
          description:
            "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Perfect for one.",
          id: "68301816",
          price: 10400,
        },
        {
          imageId: "f966500ed8b913a16cfdb25aab9244e4",
          name: "McFlurry Oreo ( M )",
          description:
            "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Share it, if you can.",
          id: "112667401",
          price: 12900,
        },
        {
          imageId: "9c8958145495e8f2cf70470195f7834a",
          name: "Soft Serve Hot Fudge (M)",
          description:
            "A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge. Always grab an extra spoon.",
          id: "112667471",
          price: 6600,
        },
        {
          imageId: "d7bd22aa47cffdcdde2d5b6223fde06e",
          name: "Soft Serve Strawberry (M)",
          description:
            "The cool vanilla soft serve ice cream with twirls of strawberry syrup.",
          id: "112667472",
          price: 6600,
        },
        {
          imageId: "3696da86802f534ba9ca68bd8be717ab",
          name: "Oreo Sundae ( M )",
          description:
            "Enjoy the classic McFlurry Oreo goodness with a drizzle of hot fudge sauce with the Oreo Sundae!",
          id: "121924799",
          price: 7200,
        },
        {
          imageId: "f513cc8c35cadd098835fb5b23c03561",
          name: "Black Forest McFlurry Medium",
          description: "A sweet treat to suit your every mood",
          id: "123196652",
          price: 13900,
        },
        {
          imageId: "6e00a57c6d8ceff6812a765c80e9ce74",
          name: "Brownie Hot Fudge (M)",
          description:
            "Luscious chocolate brownie and hot-chocolate fudge to sweeten your day",
          id: "123196654",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/eb789769-9e60-4a84-9c64-90887ca79d7c_86154b6a-146c-47e9-9bbe-e685e4928e2e.png",
          name: "Chocolate Overload McFlurry with Oreo Medium",
          description:
            "Indulge in your chocolatey dream with creamy soft serve, a rich Hazelnut brownie, and two decadent chocolate sauces. Tempting, irresistible, and unforgettable",
          id: "151005458",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/18/431024a3-945d-4e6b-aafe-d35c410ac513_1b01e6dc-90cc-411d-a75e-9b98b42e178d.png",
          name: "Chocolate Overload McFlurry with Oreo Small",
          description:
            "Indulge in your chocolatey dream with creamy soft serve, a rich Hazelnut brownie, and two decadent chocolate sauces. Tempting, irresistible, and unforgettable",
          id: "151005461",
          price: 10400,
        },
      ],
    },
  ],
  39677: [
    {
      title: "Recommended",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/9e5902f5-c942-4371-99cf-433bee88b8db_5463d28f-6503-4666-af67-419ebe262289.jpg",
          name: "Craving Saving meal",
          description:
            "Crave & Save whooping Rs. 213 on 4 Pc Hot & Crispy, 4 Pc Peri Peri Strips, Medium Popcorn, 2 Dips & a Pepsi PET 475ml [Serves 2-3]",
          id: "151079484",
          price: 77900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/6c1b2981-60c2-4bcf-8566-002519dccca1_67401533-ea91-49bd-9320-e55d22ae31f3.jpg",
          name: "Party Bucket Meal",
          description:
            "Party time Savings of Rs. 102 on 4 Pc Peri Peri Chicken Leg Pc, 2 Pc Peri Peri Strips, Regular Popcorn & a Pepsi PET 475ml [Serves 2]",
          id: "151079485",
          price: 64900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/a1ef4f33-ccae-4da1-b14e-d898046e4d8a_90e183d8-2b73-4edc-9fb1-1e70ea37df70.jpg",
          name: "Insta Reel Korean Roll Meal",
          description:
            "Flat Rs. 57 off on Tangy Korean Chicken Roll, 2 Pc Hot & Crispy, 7Up Zero Sugar Can [Serves 1]",
          id: "151079486",
          price: 34900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/eb4bf183-297e-4c7a-82db-6d2e0f787472_324a0669-3780-43d0-bfb3-2ff3483188c3.jpg",
          name: "Night Owl Roll combo",
          description:
            "Eye opener deal on Classic Chicken Roll & Medium Fries [Serves 1]",
          id: "151079487",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/b328f1b1-ed4e-4a95-9a8f-f02b071f7388_d001011b-08b5-469d-8d8e-0bb9643002e7.jpg",
          name: "Rice Krunch Bowl Combo",
          description:
            "Krunchy savings of Rs. 69 on Popcorn Chicken Rice Bowl and 4 Pc Peri Peri Strips [Serves 1-2]",
          id: "151079488",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/5399c2df-c3d8-4d02-b45b-97d662ac7a57_84ef2049-345c-4aa4-ac20-92b3e5f32b61.jpg",
          name: "Peri Peri Binge Watch combo",
          description:
            "Binge & Save Rs. 95 on 4 Pc Peri Peri Leg pc, 2 Pc Peri Peri Strips & Regular Popcorn",
          id: "151079490",
          price: 59900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/de2a7280-a059-40b1-9fda-8fef1a6b7660_e839fa2f-4777-4245-b109-2b7e8af9b997.jpg",
          name: "Thai Roll Dream meal",
          description:
            "Dream deal of Rs.74 on 2 units of Thai Spicy Chicken Roll, 2 units of Popcorn Rice Bowl and a Pepsi PET 475ml [Serves 2]",
          id: "151079492",
          price: 64900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/286a5a97-6656-42c9-aaa2-1ec3767be7f9_ed0959c9-9b5b-40e5-af19-fef57b4d822a.jpg",
          name: "Night Shift Zinger Pro Meal",
          description:
            "Relax in Night shift and save Rs. 66 on Zinger Pro Burger, Large Popocorn and 7Up Zero Sugar Can [Serves 1-2]",
          id: "151079494",
          price: 47900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/bcceee6c-627d-4708-ace4-8838694bf483_becfb89e-9d3e-4b52-afa6-6582f7ecad5e.jpg",
          name: "Rice & Bites combo",
          description:
            "Deal meal of Hot & Crispy Rice Bowl and Large Popcorn [Serves 1]",
          id: "151079496",
          price: 44900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/42e73ea0-0d4f-46b7-a179-ea106f37e874_9d4136ac-02c6-4fa9-a97e-5d9886412209.jpg",
          name: "Midnight Spicy Zinger & Popcorn Meal",
          description:
            "Midnight special savings of Rs. 66 on Spicy Zinger, Large Popcorn and Pepsi Black Can [Serves 1-2]",
          id: "151079498",
          price: 45900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/bf86f1c9-3182-4189-9a35-8c5f2ad63ba0_d12d07c2-dc58-4ee8-b182-5b11f17f973e.jpg",
          name: "Lazy BFF Rice combo",
          description:
            "BFF deal savings of Rs. 89 on 2 units of Popcorn Rice Bowl and 4 Leg Pc [Serves 2]",
          id: "151079504",
          price: 79900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/a39e1ee7-7f57-460a-aff5-e568c6c25b18_fa010fd0-0059-4be3-b193-6a4103fca417.jpg",
          name: "Night Bite Veg Roll combo",
          description:
            "Munching deal of Rs. 39 on Veg Spicy Roll & Large Fries [Serves 1]",
          id: "151079506",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/12/552c36a5-a81e-4ef2-b204-40a4d7ba63e0_c6ce48d6-f384-4ee0-9cd2-7380c77a0883.jpg",
          name: "Still Awake Veg Zinger Meal",
          description:
            "Special Veg deal with Rs. 66 off on Veg Zinger Burger, Large Fries & a Pepsi Black Can [Serves 1]",
          id: "151079507",
          price: 29900,
        },
        {
          imageId: "ebcda29a62123bbf8bb8a33bbe2ab847",
          name: "Double Chicken Roll",
          description:
            "Double fun with double chicken strip filling, layerful parantha onions and two spicy sauce [1 unit of Double Chicken Roll, Serves 1]",
          id: "63346483",
          price: 16857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/17/00af9641-700d-462f-890f-47e358b63bfb_68cecb16-fd2a-4d7d-9392-b5f83d72eaaf.jpg",
          name: "Double Chicken Roll Meal for 1",
          description:
            "Save Rs. 24 with a Double Chicken Roll with servings of 1 Large Fries, 2 delish dips and 1 Pepsi PET 475ml [1 unit of Double Chicken Roll, Serves 1]",
          id: "113965965",
          price: 37905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/10/183cb04b-d716-443a-91d9-27f26c566adc_e3c2c7c7-b9a8-4881-a4b5-05532b10ec0a.jpg",
          name: "Classic Chicken Roll Meal for 2",
          description:
            "2 units of The classic KFC Chicken Roll with servings of 1 Large Fries, 2 delish dips and 1 Pepsi PET 475ml [2 units of Classic Chicken Roll, Serves 2]",
          id: "113965967",
          price: 47905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/9/fa48d82c-2322-4ba7-b419-27e79ca1b217_0800d19e-02b8-45e2-ad64-21ee0d877821.jpg",
          name: "Thai Spicy Chicken Roll",
          description:
            "Fresh burst of Thai flavours and sauces in a flaky paratha, chicken strips and vegetables",
          id: "145447215",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/9/4c966f38-c191-4d0e-a54c-c70b832e4de1_69ee13c1-f267-4385-ab98-6efbc811de33.jpg",
          name: "Indian Tandoori Chicken Roll",
          description:
            "Flavorful roll made with flaky lachha paratha, perfectly fried chicken strips in rich and creamy tandoori sauce",
          id: "145447214",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/9/377309f8-992e-4fea-a461-1ab5d7218b5e_b814bc78-3961-4332-96df-8aefb9ba86e4.jpg",
          name: "Korean Tangy Chicken Roll",
          description:
            "Delicious new roll featuring tangy Korean kimchi, vegetables and crunchy chicken strips",
          id: "145447216",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/4c4e85fc-9a85-41b7-a9d6-644b92c144da_a8391eb4-db4c-41cc-b7d5-02114443fc5c.jpg",
          name: "Korean & Thai Roll Chicken Meal",
          description:
            "Rs. 114 Off on Korean Tangy Roll & Thai Spicy Roll, Large Popcorn, Large Fries & Pepsi PET 475ml",
          id: "147822666",
          price: 54900,
        },
      ],
    },
    {
      title: "Late Night Specials (Starting at 199)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/9e5902f5-c942-4371-99cf-433bee88b8db_5463d28f-6503-4666-af67-419ebe262289.jpg",
          name: "Craving Saving meal",
          description:
            "Crave & Save whooping Rs. 213 on 4 Pc Hot & Crispy, 4 Pc Peri Peri Strips, Medium Popcorn, 2 Dips & a Pepsi PET 475ml [Serves 2-3]",
          id: "151079484",
          price: 77900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/6c1b2981-60c2-4bcf-8566-002519dccca1_67401533-ea91-49bd-9320-e55d22ae31f3.jpg",
          name: "Party Bucket Meal",
          description:
            "Party time Savings of Rs. 102 on 4 Pc Peri Peri Chicken Leg Pc, 2 Pc Peri Peri Strips, Regular Popcorn & a Pepsi PET 475ml [Serves 2]",
          id: "151079485",
          price: 64900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/a1ef4f33-ccae-4da1-b14e-d898046e4d8a_90e183d8-2b73-4edc-9fb1-1e70ea37df70.jpg",
          name: "Insta Reel Korean Roll Meal",
          description:
            "Flat Rs. 57 off on Tangy Korean Chicken Roll, 2 Pc Hot & Crispy, 7Up Zero Sugar Can [Serves 1]",
          id: "151079486",
          price: 34900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/eb4bf183-297e-4c7a-82db-6d2e0f787472_324a0669-3780-43d0-bfb3-2ff3483188c3.jpg",
          name: "Night Owl Roll combo",
          description:
            "Eye opener deal on Classic Chicken Roll & Medium Fries [Serves 1]",
          id: "151079487",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/b328f1b1-ed4e-4a95-9a8f-f02b071f7388_d001011b-08b5-469d-8d8e-0bb9643002e7.jpg",
          name: "Rice Krunch Bowl Combo",
          description:
            "Krunchy savings of Rs. 69 on Popcorn Chicken Rice Bowl and 4 Pc Peri Peri Strips [Serves 1-2]",
          id: "151079488",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/5399c2df-c3d8-4d02-b45b-97d662ac7a57_84ef2049-345c-4aa4-ac20-92b3e5f32b61.jpg",
          name: "Peri Peri Binge Watch combo",
          description:
            "Binge & Save Rs. 95 on 4 Pc Peri Peri Leg pc, 2 Pc Peri Peri Strips & Regular Popcorn",
          id: "151079490",
          price: 59900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/de2a7280-a059-40b1-9fda-8fef1a6b7660_e839fa2f-4777-4245-b109-2b7e8af9b997.jpg",
          name: "Thai Roll Dream meal",
          description:
            "Dream deal of Rs.74 on 2 units of Thai Spicy Chicken Roll, 2 units of Popcorn Rice Bowl and a Pepsi PET 475ml [Serves 2]",
          id: "151079492",
          price: 64900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/286a5a97-6656-42c9-aaa2-1ec3767be7f9_ed0959c9-9b5b-40e5-af19-fef57b4d822a.jpg",
          name: "Night Shift Zinger Pro Meal",
          description:
            "Relax in Night shift and save Rs. 66 on Zinger Pro Burger, Large Popocorn and 7Up Zero Sugar Can [Serves 1-2]",
          id: "151079494",
          price: 47900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/bcceee6c-627d-4708-ace4-8838694bf483_becfb89e-9d3e-4b52-afa6-6582f7ecad5e.jpg",
          name: "Rice & Bites combo",
          description:
            "Deal meal of Hot & Crispy Rice Bowl and Large Popcorn [Serves 1]",
          id: "151079496",
          price: 44900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/42e73ea0-0d4f-46b7-a179-ea106f37e874_9d4136ac-02c6-4fa9-a97e-5d9886412209.jpg",
          name: "Midnight Spicy Zinger & Popcorn Meal",
          description:
            "Midnight special savings of Rs. 66 on Spicy Zinger, Large Popcorn and Pepsi Black Can [Serves 1-2]",
          id: "151079498",
          price: 45900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/bf86f1c9-3182-4189-9a35-8c5f2ad63ba0_d12d07c2-dc58-4ee8-b182-5b11f17f973e.jpg",
          name: "Lazy BFF Rice combo",
          description:
            "BFF deal savings of Rs. 89 on 2 units of Popcorn Rice Bowl and 4 Leg Pc [Serves 2]",
          id: "151079504",
          price: 79900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/a39e1ee7-7f57-460a-aff5-e568c6c25b18_fa010fd0-0059-4be3-b193-6a4103fca417.jpg",
          name: "Night Bite Veg Roll combo",
          description:
            "Munching deal of Rs. 39 on Veg Spicy Roll & Large Fries [Serves 1]",
          id: "151079506",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/12/552c36a5-a81e-4ef2-b204-40a4d7ba63e0_c6ce48d6-f384-4ee0-9cd2-7380c77a0883.jpg",
          name: "Still Awake Veg Zinger Meal",
          description:
            "Special Veg deal with Rs. 66 off on Veg Zinger Burger, Large Fries & a Pepsi Black Can [Serves 1]",
          id: "151079507",
          price: 29900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/140c9f75-811e-4d67-983a-19bfee65a0d9_278fffa2-1500-4732-a139-309c5df2914d.jpg",
          name: "Gaming Night Korean Roll meal",
          description:
            "Night fun savings of Rs. 74 on 2 units of Korean Tangy Chicken Roll, 2 units of Popcorn Rice Bowl and a Pepsi PET 475ml [Serves 2]",
          id: "151079502",
          price: 64900,
        },
      ],
    },
    {
      title: "New Chicken Rolls",
      items: [
        {
          imageId: "ebcda29a62123bbf8bb8a33bbe2ab847",
          name: "Double Chicken Roll",
          description:
            "Double fun with double chicken strip filling, layerful parantha onions and two spicy sauce [1 unit of Double Chicken Roll, Serves 1]",
          id: "63346483",
          price: 16857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/17/00af9641-700d-462f-890f-47e358b63bfb_68cecb16-fd2a-4d7d-9392-b5f83d72eaaf.jpg",
          name: "Double Chicken Roll Meal for 1",
          description:
            "Save Rs. 24 with a Double Chicken Roll with servings of 1 Large Fries, 2 delish dips and 1 Pepsi PET 475ml [1 unit of Double Chicken Roll, Serves 1]",
          id: "113965965",
          price: 37905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/10/183cb04b-d716-443a-91d9-27f26c566adc_e3c2c7c7-b9a8-4881-a4b5-05532b10ec0a.jpg",
          name: "Classic Chicken Roll Meal for 2",
          description:
            "2 units of The classic KFC Chicken Roll with servings of 1 Large Fries, 2 delish dips and 1 Pepsi PET 475ml [2 units of Classic Chicken Roll, Serves 2]",
          id: "113965967",
          price: 47905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/9/fa48d82c-2322-4ba7-b419-27e79ca1b217_0800d19e-02b8-45e2-ad64-21ee0d877821.jpg",
          name: "Thai Spicy Chicken Roll",
          description:
            "Fresh burst of Thai flavours and sauces in a flaky paratha, chicken strips and vegetables",
          id: "145447215",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/9/4c966f38-c191-4d0e-a54c-c70b832e4de1_69ee13c1-f267-4385-ab98-6efbc811de33.jpg",
          name: "Indian Tandoori Chicken Roll",
          description:
            "Flavorful roll made with flaky lachha paratha, perfectly fried chicken strips in rich and creamy tandoori sauce",
          id: "145447214",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/9/377309f8-992e-4fea-a461-1ab5d7218b5e_b814bc78-3961-4332-96df-8aefb9ba86e4.jpg",
          name: "Korean Tangy Chicken Roll",
          description:
            "Delicious new roll featuring tangy Korean kimchi, vegetables and crunchy chicken strips",
          id: "145447216",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/4c4e85fc-9a85-41b7-a9d6-644b92c144da_a8391eb4-db4c-41cc-b7d5-02114443fc5c.jpg",
          name: "Korean & Thai Roll Chicken Meal",
          description:
            "Rs. 114 Off on Korean Tangy Roll & Thai Spicy Roll, Large Popcorn, Large Fries & Pepsi PET 475ml",
          id: "147822666",
          price: 54900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/5d439a47-5bce-4010-b1b1-bc2f8344367b_8ed35bd6-33f3-419e-a5ee-62efb83a6a45.jpg",
          name: "Indian Tandoori Roll Chicken Meal",
          description:
            "Save Rs. 75 on Indian Tandoori Roll, Classic Zinger Burger, Medium Fries & Pepsi PET 475ml",
          id: "147822665",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/d980ce4c-4c08-4522-8467-3370e1e3a54f_c0843f3c-59f5-4037-9e65-0193e7ff16a7.jpg",
          name: "Korean Tangy Roll & Popcorn Chicken Meal",
          description:
            "Save Rs. 56 with Korean Tangy Chicken Roll, Medium Popcorn and Pepsi PET 475ml",
          id: "147822664",
          price: 29900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/e0406e96-cf1e-4b8e-a5ac-b4b146275c79_783e1b21-34c8-49dc-8b65-d1d0e9516028.jpg",
          name: "Thai Spicy Roll & Zinger Chicken Meal",
          description:
            "Save Rs. 75 with Thai Spicy Roll with Classic Zinger Burger, Medium Fries and Pepsi PET 475ml",
          id: "147822663",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/5c2e6a8e-c457-4206-ba9c-671bed55def8_7a5456db-4ab5-4f45-be97-40a6a366de83.jpg",
          name: "American Roll & Popcorn Chicken Meal",
          description:
            "Save Rs. 56 with American Nashville Chicken Roll, Medium Popcorn and Pepsi PET 475ml",
          id: "147822662",
          price: 29900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/2b00f8ae-9a6c-48f3-adb9-e225523fde77_3b233f9f-ebed-490d-bcab-76d908b3c120.jpg",
          name: "Thai Spicy Roll & Popcorn Chicken Meal",
          description:
            "Save Rs. 56 with Thai Spicy Chicken Roll, Medium Popcorn and Pepsi PET 475ml",
          id: "147822661",
          price: 29900,
        },
        {
          imageId: "ebd8e706049e4fd5ca79ecf708f8ecba",
          name: "Classic Chicken Roll",
          description:
            "Street style roll with single chicken strip, onions and two spicy sauce [1 unit of Classic Chicken Roll]",
          id: "120700870",
          price: 11905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/19/0de51acd-e5e9-49fc-b792-8f0d858e5d2b_7be9cfd1-b442-4f02-bd98-feb37de91305.jpg",
          name: "Korean Tangy Roll & Zinger Chicken Meal",
          description:
            "Save Rs. 75 with Korean Tangy Roll with Classic Zinger Burger, Medium Fries and Pepsi PET 475ml",
          id: "147822660",
          price: 39900,
        },
      ],
    },
    {
      title: "Korean Chicken Popcorn",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/1/b1de9c9b-fa2a-4463-b46e-98d9891b6d6f_6ccf9f19-357e-4f9e-a514-e71abffc37b8.jpg",
          name: "K-Pop Large",
          description:
            "A Korean Twist on iconic signature bite-sized boneless chicken, with special spices in Large Size",
          id: "144872234",
          price: 25900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/1/d251580e-3be6-4127-865d-c8c1468b4220_59edb377-8624-4147-8801-852239d732ef.jpg",
          name: "K-Pop med",
          description:
            "A Korean Twist on iconic signature bite-sized boneless chicken, with special spices in Medium Size",
          id: "144872233",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/1/b5ec5341-4a03-44e4-9c5a-1bbf4752e13a_42f700f6-7d44-44bc-aa71-54d1f45dc9b1.jpg",
          name: "K-Pop reg",
          description:
            "A Korean Twist on iconic signature bite-sized boneless chicken, with special spices in Small Size",
          id: "144872232",
          price: 12500,
        },
      ],
    },
    {
      title: "Burgers",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/4/56c5c073-4ac4-4c43-990e-16a558cf3877_87868b65-5a9c-4dd4-8f2e-e47ad6ee57d2.jpg",
          name: "Paneer Zinger Burger",
          description:
            "It's Back! Crunchy Indian Paneer Patty Burger with tangy sauce and Veggies",
          id: "137763210",
          price: 20857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/9/37fde1f3-777c-48be-8d96-6c5b5d5de72a_14bce274-6cbc-432f-9f98-75000feb041b.jpg",
          name: "Spicy Zinger Burger and Popcorn Meal",
          description:
            "Caribbean Spicy Zinger Burger with Medium Popcorn and Pepsi PET 475ml at a deal price",
          id: "122151812",
          price: 43905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg",
          name: "Spicy Zinger Burger",
          description:
            "New Caribbean Spicy Zinger Burger with Spicy Bun & Spicy chilli sauce with Zinger Fillet, Lettuce, Onion and Tomatoes",
          id: "137763211",
          price: 21905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/97be0ab8-8b40-41fc-926d-5a0da1feda91_b258475e-5a12-46d1-a5a5-618b3c49e62e.jpg",
          name: "Spicy Zinger Burger and Chicken Meal",
          description:
            "New Caribbean Spicy Zinger Burger with 1 Pc Hot & Crispy and Pepsi PET 475ml at a deal price",
          id: "122151807",
          price: 37905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/10/1437d0b9-3525-461d-a867-85f8d27a466d_f114bdd6-67c6-4857-9200-47e8b570bd17.jpg",
          name: "Zinger Pro Burger & Popcorn Meal",
          description:
            "New Zinger Pro premium Burger with Medium Popcorn and Pepsi PET 475ml at a deal price",
          id: "122151837",
          price: 45905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/b6406471-3fb9-4502-812c-688bb8c71157_cd0c1da5-6324-4dfc-9e11-20c2d9265ba8.jpg",
          name: "Mexican Zinger Pro Pepsi Bottle Combo",
          description:
            "Get Pepsi 330ml Reusable Bottle with Mexican Zinger Pro Burger",
          id: "144760561",
          price: 31900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/20/d1f17f11-61b1-4b56-8f34-37aa194cee5f_531f6d07-242b-4f67-8d3f-9769a26ddd30.jpg",
          name: "Zinger Pro Burger & Chicken Meal",
          description:
            "New Zinger Pro premium Burger with 1 Pc Hot & Crispy and Pepsi PET 475ml at a deal price",
          id: "122151818",
          price: 39905,
        },
        {
          imageId: "8f9137a6bae94a4d61fcc4fa1c3c15cd",
          name: "Chicken Burger Buddy Meal",
          description:
            "Save Rs. 28 & Share 2 American Classic Chicken Zinger Burgers & a Medium Chicken Popcorn in this delightful combo for 2",
          id: "66498578",
          price: 52857,
        },
        {
          imageId: "dd434d7cd80de42b3d04cb979aeacb46",
          name: "Mixed Chicken Zinger Burger Doubles",
          description:
            "Save Rs.41 on Best-seller combo of classic chicken Zinger & Tandoori zinger burgers",
          id: "62207690",
          price: 36857,
        },
        {
          imageId: "418e7dc325cf65d7c1d9faab2e646421",
          name: "Chicken Zinger Burger - Classic with Cheese",
          description:
            "Signature burger with a crunchy chicken fillet, cheese slice, veggies & a delicious mayo sauce",
          id: "115704167",
          price: 22405,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/21cc85c4-0597-47f9-bd05-bb951d082aa1_f4c3f20b-2200-4f1d-9fb6-87a37cc1ab75.jpg",
          name: "American Classic Zinger Mojito Combo",
          description:
            "Get All New Mojito Reusable Bottle with American Classic Chicken Zinger Burger",
          id: "144760560",
          price: 29723,
        },
        {
          imageId: "6d8c645fcd7d5368741ccc61933fafed",
          name: "Veg Zinger Burger with Cheese",
          description:
            "Signature veg burger with crispy patties, cheese slice, veggies & a tangy sauce",
          id: "115704169",
          price: 21357,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/13/d6b9be59-10a4-420d-9ff6-44f91b87c7c0_4f367b42-73b8-428c-a801-8f0cf51021b3.jpg",
          name: "Chicken Zinger Burger - Classic",
          description:
            "Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
          id: "66498586",
          price: 19905,
        },
        {
          imageId: "a403a55dc5b74cc6acfcfa755f30c165",
          name: "Veg Zinger Burger",
          description:
            "Signature veg burger with crispy patties, veggies & a tangy sauce",
          id: "13446524",
          price: 18857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/13/9ec4aae7-63f0-4d7e-8b32-843e21edeed1_5bb6b22e-3935-4be6-b014-4b7ff5e81a6c.jpg",
          name: "Chicken Zinger Burger - Tandoori",
          description: "Chicken zinger with a  delicious tandoori sauce",
          id: "62207688",
          price: 20857,
        },
        {
          imageId: "cvqb24o2vlkd967jzzas",
          name: "2 X Veg Krisper Burgers",
          description: "2 delicious veg value burgers - at a deal price",
          id: "66006825",
          price: 18857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/13/9025314a-59fe-467c-9d72-83b5a3c7c2f6_67f0fed4-d987-4e78-8622-f4d15f69ba3f.jpg",
          name: "Zinger Pro Burger",
          description:
            "New premium zinger with crunchy zinger fillet,cheese,lettuce,tomatoes,sauce in sesame bun!",
          id: "122151835",
          price: 23905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/17/6170613a-c811-4615-933d-7f0bb52a05b6_4e8b26a4-cbc5-4b4f-b945-602a3edb0bb3.jpg",
          name: "2 Classic Chicken Krisper Burgers",
          description:
            "2 units of delicious chicken value burgers featuring delicious sauce & 2 chicken strips",
          id: "147502351",
          price: 28957,
        },
        {
          imageId: "7af6cdbf96ad445ebfce65f568fd0adf",
          name: "Chicken Zinger Burger - Tandoori with Cheese",
          description:
            "Chicken zinger with delicious tandoori sauce & cheese slice",
          id: "115704168",
          price: 23357,
        },
      ],
    },
    {
      title: "Peri Peri Chicken Strips & Leg Pc (up to 25%)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/17/5b8ef1ad-e639-4cc0-b27b-82d1e3eff5d3_f3ba29f9-2f81-4c93-8089-d7c3e1d38bd2.jpg",
          name: "Peri Peri Chicken 5 Leg Piece Meal",
          description:
            "Leg before any wicket! Save Rs. 131 on 5 Spicy Peri Peri Leg Pieces, 2 Dips (20gm each), 1 Med Fries & a Pepsi PET 475ml [serves 2]",
          id: "99618412",
          price: 65905,
        },
        {
          imageId: "a0feef07b2a9d72ba02f4a7d53e46948",
          name: "Peri Peri 10 Pc Chicken Strips & 2 Dips",
          description:
            "Howzatt Deal!! Save Rs. 122 with the indulging 10 Piece Peri Peri Boneless Strips and 2 Dips [Serves 2-3]",
          id: "113689483",
          price: 51905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/13c992c9-fb32-4b7d-bf6e-462da52f1c09_bfddcafd-ba5d-4617-8e65-f7b087e2eba7.jpg",
          name: "5 Leg Pc & 2 Dips Pepsi Bottle Combo",
          description:
            "Get Pepsi 330ml Reusable Bottle with 5 Pc Peri Per Chicken Leg Piece and 2 Dips (20gms each) [serves 1-2]",
          id: "144760559",
          price: 59900,
        },
        {
          imageId: "ye1imbdqn5efc7vheuah",
          name: "Peri Peri Chicken 10 Leg Pc & 4 Dips",
          description:
            "Save Rs. 334 on 10 Spicy Peri Peri Leg Pieces & 4 Dips (20gm each) [serves 3-4]",
          id: "99618413",
          price: 96857,
        },
        {
          imageId: "qsmfyjef2hbu05emuu2c",
          name: "Peri Peri chicken strips - 6 Pc",
          description:
            "Save 13% with on savouring 6 Spicy Peri Peri chicken boneless strips [serves 2]",
          id: "99618410",
          price: 30857,
        },
        {
          imageId: "dxzn6bfxdqcyda1gqrct",
          name: "Peri Peri Chicken 5 Leg Piece & 2 Dips",
          description:
            "Save Rs 104 on 5 Spicy Peri Peri Leg Pieces, paired with 2 delicous dips (20gm each) [serves 2]",
          id: "99618411",
          price: 52857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/73a317da-c734-4f7e-a209-c95a2df43c04_a313ba1c-1dcb-451e-9baa-4fb204a625b4.jpg",
          name: "6 Pc Strips & Pepsi Bottle Combo",
          description:
            "Get Pepsi 330ml Reusable Bottle with 6 Pc Spicy Peri Peri Strips [serves 1-2]",
          id: "144760558",
          price: 37900,
        },
      ],
    },
    {
      title: "Buckets/ Meals for 1-2 (up to 15% off)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/9/ca7755e3-00d7-4608-8f31-4797b8e59975_92d0dad6-550c-4f37-a38c-6c5ec3b1c462.jpg",
          name: "Classic Chicken Krisper Burger Combo",
          description:
            "Deal combo of 2 chicken krispers burgers, 2 pc Hot & Crispy, 2 dips (20gm each) & a chilled Pepsi PET 475 ml [Serves 1-2]",
          id: "147502350",
          price: 58000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/f4df5370-33d4-4691-b04e-40480720ba68_38a7c498-13ce-4044-8aaa-ebb19bd2c3ce.jpg",
          name: "4 Pc Hot & Crispy Pepsi Bottle Combo",
          description:
            "Get Pepsi 330ml Reusable Bottle with 4 Pc Chicken Hot & Crispy",
          id: "144760557",
          price: 51900,
        },
        {
          imageId: "yevv9gwjyqzyljujngvs",
          name: "Chicken Solo Feast",
          description:
            "Treat yourself with 1 Hot & Crispy chicken, 2 chicken Strips, 2 chicken Wings, 1 Buttered Bun, 1 Dip & Pepsi PET [serves 1] ",
          id: "97836959",
          price: 39905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/44d5a7e4-325c-4a36-8b7e-1d9e4e656783_e0aca84c-2116-4e5b-825d-04bf23b4dc51.jpg",
          name: "Classic Roll Mojito Meal",
          description:
            "Get All New Mojito Reusable 330ml Bottle with Large Fries and Classic Chicken Roll",
          id: "144760556",
          price: 34287,
        },
        {
          imageId: "pasdg6owucvi23hcp9eb",
          name: "Chicken & French Fries Bucket",
          description:
            "Crowd-favorite combo of 2pc Hot & Crispy Chicken with Medium French Fries ",
          id: "52277521",
          price: 29905,
        },
        {
          imageId: "raq6sxtwfb9fvbd6bakq",
          name: "Chicken Popcorn & French Fries Bucket",
          description:
            "Large Chicken Popcorn with Med French Fries - at a deal price",
          id: "66498468",
          price: 32857,
        },
        {
          imageId: "xdzkcjjgypmjcwhikqae",
          name: "2 X Veg Krispers Burger Meal",
          description:
            "Save Rs. 39 with 2 veg value burgers, crispy Medium French Fries & 2 delicious Dips at a deal price! [Serves 1-2]",
          id: "66006826",
          price: 29905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/16a37348-80ab-41a4-b53f-bd82e658367d_64691b72-be0b-47fc-b1ce-a4359f0de178.jpg",
          name: "Classic Zinger Pepsi Bottle Combo",
          description:
            "Get Pepsi 330ml reusable bottle with Classic chicken Zinger Burger",
          id: "144760555",
          price: 27900,
        },
        {
          imageId: "wmn6qpsqazt1ln8hylum",
          name: "Chicken Bucket for Two",
          description:
            "Flat Rs. 115 off with this variety combo of 2pc Hot & Crispy Chicken, 2 pc Smoky Red Chicken & a Large Popcorn [serves 2-3]",
          id: "69948191",
          price: 59905,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/10/083d6310-fd4b-4a15-a546-37d9cc97dc99_0db16331-66f1-483b-afd1-d2c1b326aa62.jpg",
          name: "Chicken Mingles Bucket Meal",
          description:
            "Save Rs. 43 on this crowd favorite combo of 4 Hot Wings, 2 Chicken Peri Peri Boneless Strips, a Reg Popcorn, medium fries & a chilled Pepsi PET 475ml [serves 2 ]",
          id: "99618420",
          price: 51905,
        },
        {
          imageId: "udmgrvfuwd000kvvqrjf",
          name: "Chicken Mingles Bucket",
          description:
            "Mingle with 4 Chicken Hot Wings, 2 Chicken peri peri boneless strips & a Regular Popcorn at a deal price [serves 1-2]",
          id: "120700865",
          price: 39905,
        },
      ],
    },
    {
      title: "Buckets/ Meals for 3-4 (up to 32% off)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/15/514ac4ef-0ff9-4e78-b118-10ba644d54bb_5e50748c-fc45-4d11-be03-ace7d41abb10.jpg",
          name: "All in One Chicken Bucket",
          description:
            "Save 21% with variety bucket of 1 Leg Pc, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips [20gm each] & 1 Pepsi 475 ml [Serves 2-3]",
          id: "117820659",
          price: 56857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/17/f3e80102-a334-4d97-aa96-f3fdba2f6e5a_7c604003-37d8-4fb8-8c2f-ac26bd6eb6be.jpg",
          name: "Ultimate Savings Chicken Bucket",
          description:
            "Savings of 32% on signature bucket of 4pc Hot & crispy chicken, 6 Pc Wings, 4 Chicken Peri Peri Boneless strips, 2 Dips (20 gms each) & a Pepsi PET 475ml [serves 2-3 ]",
          id: "125825789",
          price: 72857,
        },
        {
          imageId: "nku1xlhmmifu1hxoiugt",
          name: "Stay Home Chicken Bucket",
          description:
            "Save Rs. 232 & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken peri peri boneless strips & 2 delicious dips (20gm each) [serves 3]",
          id: "67882358",
          price: 81905,
        },
        {
          imageId: "yqxxwbdxoaconjcyb7ka",
          name: "Big 12 - Chicken Bucket",
          description:
            "Save 24% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips (20gm each) [serves 2- 3] ",
          id: "95991025",
          price: 76857,
        },
        {
          imageId: "yiozpo7vfq8t5s4hns1v",
          name: "Big 8 - Chicken Bucket",
          description:
            "Save 24% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]",
          id: "41089570",
          price: 72857,
        },
      ],
    },
    {
      title: "Rice Bowlz",
      items: [
        {
          name: "Classic Chicken Rice Bowlz Combo",
          description:
            "Save 25% on Large portions of our beloved Chicken Rice Bowlz, served with 2 pc Hot & Crispy Chicken, 4pc Chicken Strips & a Pepsi PET [serves 2-3]",
          id: "127833952",
          price: 74000,
        },
        {
          name: "Smoky Red Grilled Chicken Rice Bowlz Combo",
          description:
            "Save Rs. 221 with Large portions of our beloved Chicken Rice Bowlz, served with 2 pc Smoky Red Grilled Chicken, Medium Popcorn & a Pepsi PET [serves 2-3]",
          id: "127833951",
          price: 74000,
        },
        {
          name: "Chicken Strips & Rice Bowlz Combo",
          description:
            "Combo of  4 chicken peri peri boneless strips, 1 Dips (20gm), flavorful Rice at a deal price [serves 1-2]",
          id: "127833950",
          price: 35905,
        },
        {
          name: "Classic Chicken Rice Bowlz - Large",
          description:
            "Large portions of our beloved Chicken Rice Bowlz served with 2 pc Hot & Crispy Chicken [serves 2] ",
          id: "127833949",
          price: 47524,
        },
        {
          name: "Popcorn Chicken Rice Bowlz - Large",
          description:
            "Large portions of our beloved Chicken Rice Bowlz served with double portions of Chicken Popcorn [serves 2]",
          id: "127833948",
          price: 47524,
        },
        {
          name: "Smoky Red Grilled Chicken Rice Bowlz - Large",
          description:
            "Large portions of our beloved Chicken Rice Bowlz served with 2 pc Smoky Red [serves 2]",
          id: "127833946",
          price: 47524,
        },
        {
          imageId: "a74de1a2b59bf60d616d458b7e78bd1a",
          name: "HC Rice Bowlz",
          description:
            "Aromatic Hot & Crispy Chicken rice bowl mixed with spicy gravy [serves 1] ",
          id: "127833942",
          price: 22952,
        },
        {
          imageId: "a74de1a2b59bf60d616d458b7e78bd1a",
          name: "Classic Chicken Rice Bowlz Bucket",
          description:
            "Our beloved Chicken Rice Bowlz served with 1 pc Hot & Crispy Chicken [serves 1] ",
          id: "127833945",
          price: 22952,
        },
        {
          imageId: "t8ufbpqvs8twatdx2hb6",
          name: "Smoky Red Chicken Rice Bowl",
          description:
            "Aromatic Smoky Red Chicken rice bowl mixed with spicy gravy [serves 1]",
          id: "64902416",
          price: 22952,
        },
        {
          imageId: "9e57b3b9478a4a0b114b8ba4e1b5be89",
          name: "PC Rice Bowlz",
          description:
            "Aromatic Poprcorn Chicken rice bowl mixed with spicy gravy [serves 1] ",
          id: "127833943",
          price: 22952,
        },
        {
          imageId: "b55628a57b4ae927013617605d4db6e6",
          name: "Veg Rice Bowlz",
          description:
            "Aromatic Veg rice bowl mixed with spicy gravy [serves 1] ",
          id: "127833944",
          price: 19905,
        },
        {
          imageId: "03649c4133bebb162b016bdf2fcb1afa",
          name: "Smokey Rice Bowlz",
          description:
            "Our beloved Chicken Rice Bowlz served with 1 pc Smoky Red Chicken [serves 1] ",
          id: "127833941",
          price: 22952,
        },
        {
          imageId: "91d90868dbe5fdddd039e5fb38e3830e",
          name: "Plain Rice Bowl",
          description: "New Plain Rice Bowlz",
          id: "131050215",
          price: 13905,
        },
      ],
    },
    {
      title: "Value Snackers (Save upto 25%)",
      items: [
        {
          imageId: "f6db48f08a27a8bf10ce1ad5567da0e6",
          name: "2 X VegRoll",
          description: "Try the amazing Veg Roll [2 units of Veg Roll]",
          id: "124549242",
          price: 22857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/10/6ad7e927-58a2-44c8-b7ef-d4c729bb23c3_1282c64c-c950-433c-ab48-bda874bc135b.jpg",
          name: "Veg Roll Meal",
          description:
            "Deal meal of 2 Veg Rolls, Large Fries and a Pepsi PET 475ml [Serves 1-2]",
          id: "124491027",
          price: 39905,
        },
        {
          imageId: "e344aa3aac91a825e9d0d0e3f60eda4b",
          name: "Chicken Longer Burger & 2 Strips Combo",
          description:
            "Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips",
          id: "118346389",
          price: 21905,
        },
        {
          imageId: "866ef0fcc37944827cf419f6d9783d97",
          name: "2 X Veg Longer Burger",
          description:
            "The really long burger with Veg Patty, Onion, Lettuce and two sauces",
          id: "118346388",
          price: 19810,
        },
        {
          imageId: "xzzsjnmakrosu2i5qatn",
          name: "Chicken Popcorn - Regular",
          description:
            "Signature bite-sized boneless chicken, with special spices",
          id: "58107481",
          price: 11524,
        },
      ],
    },
    {
      title: "Hot & Crispy Chicken, Wings",
      items: [
        {
          imageId: "uspplszjphtrwqn1alef",
          name: "Hot & Crispy Chicken - 8 pcs",
          description:
            "Save Rs. 123 & get 8pc signature Hot & crispy chicken [serves 3-4]",
          id: "66865543",
          price: 79905,
        },
        {
          imageId: "ygv0a2rzffhnfgbfajz4",
          name: "Hot & Crispy Chicken -6pc",
          description:
            "Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]",
          id: "64902496",
          price: 62857,
        },
        {
          imageId: "m7q813n17jh4nrhtt7ss",
          name: "Hot & Crispy Chicken-4pc",
          description:
            "Save Rs. 24 on 4 pc of signature Hot & Crispy Chicken at a deal price",
          id: "50806395",
          price: 43905,
        },
        {
          imageId: "n8ictcqllyfu5ojx3oci",
          name: "Hot & Crispy Chicken -2pc",
          description: "Signature Hot & crispy chicken",
          id: "64902398",
          price: 22952,
        },
        {
          imageId: "ubpofq5tlhdgwh2lzo8d",
          name: "Hot Chicken Wings - 4pc",
          description: "Seasoned, signature KFC chicken wings",
          id: "64902342",
          price: 17905,
        },
        {
          imageId: "scl1wyh0yg3saadaakbk",
          name: "Hot & Crispy Chicken-1pc",
          description: "Signature Hot & crispy chicken",
          id: "66498476",
          price: 11524,
        },
      ],
    },
    {
      title: "Boneless Chicken Popcorn",
      items: [
        {
          imageId: "xwunbsyx5mjosb47pgpi",
          name: "Chicken Popcorn - Large",
          description:
            "Signature bite-sized boneless chicken, with special spices in Large Size",
          id: "14879372",
          price: 24857,
        },
        {
          imageId: "vq4hhfaphd4fam2kieqq",
          name: "Chicken Popcorn - Medium",
          description:
            "Signature bite-sized boneless chicken, with special spices in Medium Size",
          id: "58107478",
          price: 17905,
        },
      ],
    },
    {
      title: "Sides and Dips",
      items: [
        {
          imageId: "fgtsqzqqxxtzxu0p0acw",
          name: "Peri Peri chicken strips - 3 pc",
          description: "3 Pieces Spicy Peri Peri chicken boneless strips ",
          id: "99618358",
          price: 17905,
        },
        {
          imageId: "v9thnyukkkv47ifzmxfa",
          name: "2 pc Veg Patty",
          description: "Delicious, crispy, veg add-on",
          id: "66620027",
          price: 15524,
        },
        {
          imageId: "c5c0c3tmnchhiqmizxsx",
          name: "Spicy Mix French Fries - Large",
          description: "Crispy french fries with a spicy chilli lime sprinkle",
          id: "95990766",
          price: 13905,
        },
        {
          imageId: "r93ljtqjnlpn2xr24dln",
          name: "French Fries - Large",
          description: "Jazz up your meal with crispy large fries!",
          id: "62921460",
          price: 11905,
        },
        {
          imageId: "wrh1fdjs1uynfefykyok",
          name: "Spicy Mix French Fries - Medium",
          description: "Crispy french fries with a spicy chilli lime sprinkle",
          id: "95990764",
          price: 11429,
        },
        {
          imageId: "n4ry9mep4uisjri10uqp",
          name: "French Fries - Medium",
          description: "Jazz up your meal with crispy french fries",
          id: "51244141",
          price: 9905,
        },
        {
          imageId: "2a7a207a21279ef61087d021a97d8329",
          name: "Pack of 4 Dips -20gm each",
          description: "Adding dips is always a good idea! (Save Rs. 5)",
          id: "54976431",
          price: 10952,
        },
        {
          imageId: "yblqo1sys6x3sdszulqq",
          name: "Pack of 2 Dips-20gm each",
          description: "Adding dips is always a good idea!",
          id: "64902316",
          price: 5714,
        },
        {
          imageId: "icpcqoet1ssvzkvd4g3m",
          name: "Tandoori Flavour Dip - 20 gm",
          description:
            "Special tandoori flavored dip, to add a twist to your meal!",
          id: "63004253",
          price: 2857,
        },
      ],
    },
    {
      title: "Desserts & Beverages",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/1fd2be8a-a6eb-4040-8642-40f8d0be97d4_3e5339fa-82c1-45e9-babd-d6caec807b44.jpg",
          name: "Virgin Mojito Reusable Bottle",
          description: "A refreshing drink with lime and soda to beat the heat",
          id: "145720440",
          price: 10500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/a4424da2-081b-4460-929b-ba17e895404a_a8e10971-4716-4c5f-a007-71c4875e8a8d.jpg",
          name: "Masala Pepsi Reusable Bottle",
          description: "A spicy kick to everyone's favourite drink",
          id: "150410554",
          price: 10500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/f5ec69be-9b8c-4354-a46c-ec6d4b1d9a78_1efc7453-acf3-49f9-a6e5-c874c38e2e97.jpg",
          name: "Masala Mirinda Reusable Bottle",
          description:
            "A refreshing drink with Mirinda, masala lime and soda to beat the heat",
          id: "150410553",
          price: 10500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/5317553a-e734-4573-aef3-98062b605f08_0c42a855-0102-445c-ae24-78c21e1b509e.jpg",
          name: "Dew Mojito Reusable Bottle",
          description:
            "A refreshing drink with Mountain Dew, lime and soda to beat the heat",
          id: "150410552",
          price: 10500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/12/fc8404c7-520f-47a5-b69c-6067893dde21_34f3cb4a-a9ee-4206-a602-5a1d2cd230c3.jpg",
          name: "Pepsi Reusable Bottle",
          description: "Pepsi in a KFC reusable bottle",
          id: "145720439",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/896bf2b6-0c88-4225-843d-8db8b187c3c2_5716c158-58bb-48d3-88ec-671b97da8aa3.jpg",
          name: "7Up Resuable Bottle",
          description: "7Up in a KFC reusable bottle",
          id: "150410551",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/aceb4f26-7e0b-4c1c-940f-8b3f731efebe_606b5305-f6eb-49d8-9d77-895303d72fa9.jpg",
          name: "Mirinda Reusable Bottle",
          description: "Mirinda in a KFC reusable bottle",
          id: "150410550",
          price: 9900,
        },
        {
          imageId: "thb7rrdooctsnknsnatz",
          name: "Chocolate Lava Cake",
          description:
            "New Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal",
          id: "120545107",
          price: 10857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/14571d11-acd1-4670-abdb-1944d220c4a4_a4ce2314-81e3-48af-adf4-72f0efb0a33c.jpg",
          name: "Mountain Dew Resuable Bottle",
          description: "Mountain Dew in a KFC reusable bottle",
          id: "150410549",
          price: 9900,
        },
        {
          imageId: "d7e156f4831f451253174db52e8a8dcd",
          name: "Choco Lava Cake",
          description:
            "Chocolate lovers unite! Say hello to our chocolate & cake dessert- a must try! ",
          id: "150410548",
          price: 10857,
        },
        {
          imageId: "fhtrvjerl7l2ck1crwhp",
          name: "Choco Mud Pie",
          description:
            "Chocolate lovers unite! Say hello to our delicious, new, creamy chocolate & cake dessert- a must try! ",
          id: "69509433",
          price: 12857,
        },
        {
          imageId: "cb0kmlqdl0kjiri0qii9",
          name: "Mousse Cake (Coffee flavoured",
          description:
            "Coffee, chocolate, cake?what's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
          id: "69509432",
          price: 12857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/7/dc23843d-5fdc-4f94-a852-ab140ee2ec96_c68da80e-4ffa-4901-a6e6-13b2284de59c.jpg",
          name: "Pepsi PET 475ml",
          description:
            "Cheers to fizz that makes you Rise Up Baby! Order Pepsi to make your food rise up to your level of awesome!",
          id: "64902307",
          price: 5714,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/12/90a37264-cc9f-4a0e-ae02-e7a6cbcbae4e_9e4a6c10-13b0-4271-a2e5-5415fd924c15.jpg",
          name: "Pepsi Can 300 ml",
          description:
            "Cheers to fizz that makes you Rise Up Baby! Order Pepsi to make your food rise up to your level of awesome!",
          id: "67030065",
          price: 5714,
        },
        {
          imageId: "qn00mdssgatf9yjauq8o",
          name: "7UP Can 300 ml",
          description:
            "7UP is the ultimate Super-Duper Refresher. Every sip of this crisp lemon flavour refreshes you to the core.",
          id: "67030064",
          price: 5714,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/15/e55c98fd-63b1-465d-ac8f-cbddff020c17_62384ee0-1c37-4fbd-9f6a-b5f350567cda.jpg",
          name: "Pepsi Black Can 300 ml",
          description:
            "Enjoy Pepsi Black to make your food rise up to max levels of awesome with Zero sugar and Zero guilt!",
          id: "64902302",
          price: 5714,
        },
        {
          imageId: "zcwmo9x7sbvhehuz59td",
          name: "Mirinda Can 300 ml",
          description:
            "Great orange taste and sparking bubbles encourage you to be carefree, spontaneous and playful!",
          id: "64902297",
          price: 5714,
        },
      ],
    },
    {
      title: "All Day Lunch Special Meal Box",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/20/d389059e-c4e5-4b04-b4e5-4989a0599ff8_88bb15e9-b4ad-409f-816b-5b41c484c20f.jpg",
          name: "All Chicken Box",
          description:
            "Save Rs. 107 with special Chicken Box of 2 Pc Hot & Crispy, 2 Pc Peri Peri Strips, Medium Fries & a Pepsi PET 475ml [Serves 1-2]",
          id: "137919133",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/20/930821a8-05cd-4138-9322-6ec73b062028_6a395eea-3f19-4e48-8ed7-2b802d6e3d8d.jpg",
          name: "Rice Box Meal",
          description:
            "Save Rs. 106 with special Rice Box Meal of a Popcorn Rice Bowl, 2 Pc Peri Peri Strips, Medium Fries & a Pepsi PET 475ml [Serves 1-2]",
          id: "137919131",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/17/042acd2b-085f-4400-8b38-397dcb5a0aa1_fc1bae99-1e56-4a60-94d5-574f48e2c50c.jpg",
          name: "Roll Meal Box",
          description:
            "Save Rs. 95 with special Roll Box Meal of a Classic Chicken Roll , 2 Pc Hot Wings, 2 Pc Peri Peri Strips, Medium Fries & a Pepsi PET 475ml [Serves 1-2]",
          id: "139007262",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/9/f92325b1-84f8-4e3d-ad6a-2b8bb5a377c2_3876238a-bc22-49ba-b10a-56e8d947b5ac.jpg",
          name: "Veg Box Meal",
          description:
            "Enjoy special Veg Box Meal with savings of Rs. 101 on Veg Zinger Burger, 2 Pc Veg patty, Medium Fries & a Pepsi PET 475ml [Serves 1]",
          id: "137919130",
          price: 39900,
        },
      ],
    },
    {
      title: "Grilled Smoky Red Chicken",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/8edafd40-b398-4e43-8b5c-ba797c750496_ea1f71d8-b156-40ee-ae53-d32d5c77e0bf.jpg",
          name: "5 Pc Smoky Chicken Mojito Combo",
          description:
            "Get All New Mojito Reusable Bottle with 5 Pc Smoky Red Grilled Chicken",
          id: "144760554",
          price: 62766,
        },
        {
          imageId: "ewi33xnqju9f6ezzwhbk",
          name: "Smoky Red Grilled Chicken - 5 pc",
          description:
            "Save Rs. 85 on 5pc Smoky red grilled chicken [serves 2]",
          id: "64902483",
          price: 53905,
        },
        {
          imageId: "e2gbhuf1hprednohf5yt",
          name: "Smoky Red Grilled Chicken - 2 pc",
          description: "Spicy, red, grilled chicken",
          id: "50806536",
          price: 24857,
        },
        {
          imageId: "wfmeqvdcmqmv1wpshbqh",
          name: "Smoky Red Grilled Chicken - 1 pc",
          description: "Spicy, red, grilled chicken",
          id: "64902352",
          price: 12476,
        },
      ],
    },
  ],
  221810: [
    {
      title: "Recommended",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
          name: "Crispy Veg Burger",
          description:
            "Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197350",
          price: 7000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/9cd490f9-f191-49c2-9043-6dc3e7e58166_34badbda-4128-45d4-87e2-e9c580e8db43.jpg",
          name: "Crispy Veg Double Patty Burger",
          description:
            "Double Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 204 Gms| Kcal: 531.4 | Carbs 70.6 Gms| Sugar: 9.1 Gms| Fat: 22.7 Gms| Saturated fat: 9.2 Gms| Protein: 11.2 Gms| Sodium: 1068 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197351",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg",
          name: "Crispy Chicken Burger",
          description:
            "Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 125 Gms| Kcal: 359.1 | Carbs 44.3 Gms| Sugar: 7.5 Gms| Fat: 15.1 Gms| Saturated fat: 4.8 Gms| Protein: 11.5 Gms| Sodium: 592.4 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197420",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/060b47f3-77d6-4d92-8de2-d237fc2f0c33_441107a3-0545-4235-881c-08f1a21598c2.jpg",
          name: "Crispy Chicken Double Patty Burger",
          description:
            "Double Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce.\nQty: 182 Gms| Kcal: 535.1 | Carbs 52.7 Gms| Sugar: 10.2 Gms| Fat: 28.3 Gms| Saturated fat: 10.4 Gms| Protein: 17.4 Gms| Sodium: 887.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197428",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/acd65607-5910-4170-b3f9-4b7196cbbca6_01f38b7e-785c-4241-9e7a-3647ea947e35.jpg",
          name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
          description:
            "2 Crispy Veg Double patty \nQty: 408 Gms| Kcal: 1062.8 | Carbs 141.2 Gms| Sugar: 18.2 Gms| Fat: 45.4 Gms| Saturated fat: 18.4 Gms| Protein: 22.4 Gms| Sodium: 2136 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "62094217",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/7b7d7c01-d1f5-4983-a49a-55ae6dec0e85_29587c5e-1372-4e3a-956d-f4a2dd78ebdf.jpg",
          name: "Veg Makhani Burst + Whopper Jr Veg",
          description:
            "Veg Makhani + Whopper Jr Veg \nQty: 329 Gms| Kcal: 771 | Carbs 110.1 Gms| Sugar: 17.2 Gms| Fat: 29.2 Gms| Saturated fat: 15.3 Gms| Protein: 16.8 Gms| Sodium: 2196.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "66984937",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/26/35fd0ea5-d817-451b-bb22-01124511706b_9c70609b-9ae0-40c7-8701-45dc15b7e9c8.jpg",
          name: "4 Crispy Veg + 2 Medium Fries",
          description:
            "4 Crispy Veg + 2 Medium Fries \nQty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "77831652",
          price: 40000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
          name: "Medium Fries",
          description:
            "The Perfect Crispy Partner.\nQty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg \nContains: Gluten",
          id: "101197496",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
          name: "King Fries",
          description:
            "The Perfect Crispy Partner \nQty: 156 Gms| Kcal: 455 | Carbs 609.48 Gms| Sugar: 0 Gms| Fat: 19.7 Gms| Saturated fat: 9.31 Gms| Protein: 8 Gms| Sodium: 723.7 Mg \nContains: Gluten",
          id: "101197497",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/fa747205-3c4d-497c-a948-65f3c224a4cf_11129959-8182-4b8c-bbb5-db49665fba19.jpg",
          name: "King Peri Peri Fries",
          description:
            "Crispy Fries With Tangy Peri Peri Spice.  \nQty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg \nContains: Gluten, Soybean",
          id: "72692511",
          price: 15900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/cddbd1f0-c2fc-4af3-a108-b482cc0027e2_0564277b-594b-4aa9-a7cd-6796803092fc.jpg",
          name: "Chocolate Thick Shake",
          description:
            "Qty:  Gms300 ML| Kcal: 496.08 | Carbs 87.69 Gms| Sugar: 61.44 Gms| Fat: 11.28 Gms| Saturated fat: 7.17 Gms| Protein: 10.95 Gms| Sodium: 10.68 Mg \nContains: , Soybean , Milk",
          id: "47184195",
          price: 18900,
        },
      ],
    },
    {
      title: "Rs 99 Deal Of The Day",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/788d4363-50c2-4b63-b049-f7eb5f6da1b9_9bc014a8-214f-448a-9d3b-e1a8af76b9f5.jpg",
          name: "Whopper Jr Veg.",
          description:
            "Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces \nQty: 194 Gms| Kcal: 456 | Carbs 61.6 Gms| Sugar: 9.2 Gms| Fat: 20 Gms| Saturated fat: 11.9 Gms| Protein: 7.2 Gms| Sodium: 1428.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "148404764",
          price: 14900,
        },
        {
          imageId: "232c7e1b2b74dfc2851556a255e148a2",
          name: "BK Chicken Burger.",
          description:
            "BK Chicken Patty, Lettuce, Tomato(Seasonal) & Our Signature Mayo Sauce. \nQty: 164 Gms| Kcal: 415 | Carbs 39 Gms| Sugar: 7.2 Gms| Fat: 21.2 Gms| Saturated fat: 7.2 Gms| Protein: 17 Gms| Sodium: 283.9 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "148404766",
          price: 14900,
        },
        {
          imageId: "bs5oedbj1ihduwvbuj8z",
          name: "Saucy Fries.",
          description: "Crispy French Fries, Loads of Cheese, Yum!",
          id: "148404767",
          price: 14500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/3408bb90-e96a-42e3-abe2-0381dd1230d1_08dadded-e4ce-4be6-8ff9-0935033d8887.jpg",
          name: "Medium Peri Peri Fries.",
          description:
            "Crispy Fries With Tangy Peri Peri Spice.  \nQty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg \nContains: Soybean, Milk",
          id: "102005832",
          price: 14400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/5e75dd3d-62a7-4fc2-bd58-c3204f867447_76039877-8060-4f52-b7a3-fa7a9659ca51.jpg",
          name: "BK Veggie Burger.",
          description:
            "BK Veg Patty, Lettuce, Tomato(Seasonal) & Our Signature Mayo Sauce. \nQty: 152 Gms| Kcal: 352.5 | Carbs 45.4 Gms| Sugar: 7.8 Gms| Fat: 13.6 Gms| Saturated fat: 4.7 Gms| Protein: 12 Gms| Sodium: 593.8 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "113305851",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/060b47f3-77d6-4d92-8de2-d237fc2f0c33_441107a3-0545-4235-881c-08f1a21598c2.jpg",
          name: "Crispy Chicken Double Patty Burger.",
          description:
            "Our best-selling burger with crispy chicken patty, onion and classic mayo sauce.",
          id: "102005814",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/8/65762d68-ae5c-4fff-a786-8a4b5f9bd969_b6acc3e8-4ad0-4c73-bcc2-c0d9f7aef127.jpg",
          name: "Crispy Veg+Veggie Strips.",
          id: "148404769",
          price: 12900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/8/2b72076c-9a4d-4eb6-b2eb-1b6e71ca9a6a_30762b06-f212-49c2-ace4-bc9766080533.jpg",
          name: "Crispy Veg Burger+BK Veg Pizza Puff.",
          id: "148404770",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8fd81f5a-696a-49d2-848b-cb625c422361_6c43b654-322c-493f-9a28-75def2eb4dd9.jpg",
          name: "Cappuccino Small.",
          id: "148404771",
          price: 15900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/81541a93-e9b8-426d-8e82-9bfce4dab532_80fd29fb-e5c9-4979-9f81-ab642b67f3c1.jpg",
          name: "BK Veg Pizza Puff+Coke.",
          id: "150392721",
          price: 14400,
        },
        {
          imageId: "892cc87c97a1d6a5bb1ef8b6b813c56a",
          name: "Vanilla Chocolate Muffin.",
          id: "148404772",
          price: 12900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/8/2761de79-f8be-466b-822f-72c9e200082b_0d114865-2a36-4794-9da3-2ef780b9e908.jpg",
          name: "Crispy Veg Double Patty Burger with Double Cheese Slice.",
          id: "148404773",
          price: 14900,
        },
      ],
    },
    {
      title: "Rs 139 Deal Of The Day",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/31/6e8947ce-a25d-4bd6-a5a1-117af58504c4_fe69fcc7-1c3a-4b2f-a473-ea88a5bc8697.jpg",
          name: "Veg Whopper Jr+Coca Cola Medium.",
          id: "137495805",
          price: 24400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/c505c034-f3c2-46ab-be5d-09fadcee6bdb_aa606839-2a3f-4b5d-9873-0202f6eeb26b.jpg",
          name: "2 Med Fries.",
          description: "The perfect crispy partner.",
          id: "110697285",
          price: 23800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/97298a91-0225-4387-8af6-6f8b6d968094_e4991abe-e9c4-4b0a-b700-3b430340964d.jpg",
          name: "BK Veggie Burger + Veg Taco.",
          id: "110697319",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/0b6bdb0a-e200-4c46-bdc7-9ad5b4116219_c22fa91b-cda9-4848-9244-6e081af63f09.jpg",
          name: "Veg Makhani Burst Burger+ Medium Peri Peri Fries.",
          description: "Veg Makhani Burst Burger+ Medium Peri Peri Fries",
          id: "110697292",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/6/7e46c376-0ca1-4e16-ae55-e5c20619074c_d7a529d0-2f51-462c-834d-cb9b5dbf26e7.jpg",
          name: "Crispy Veg Double Patty Burger with Double Cheese Slice+Cola Medium.",
          id: "137883098",
          price: 21900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/20daf947-13d0-46ef-a84b-aab684a3f51d_1c893ec1-e78f-4e81-8e38-a0944eea9d61.jpg",
          name: "Chicken Whopper Jr Double Patty.",
          id: "129526906",
          price: 21900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/e2495856-954b-4996-b1e0-2734ba9a8a23_700fca02-a124-40e8-a0d7-106a749c3a7b.jpg",
          name: "Whopper Jr Veg+ Crispy Veg.",
          description:
            "Our signature veg whopper in a smaller size + Crispy veg patty  burger",
          id: "110697283",
          price: 21900,
        },
        {
          imageId: "635a3067995d10a6fc5d6a78a1b8c993",
          name: "Crispy Chicken + Crunchy Chicken Taco.",
          id: "128841900",
          price: 21800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/31/1fdf00d6-4d44-434d-8dfb-f4700e9a25e2_a5308f4e-d753-4465-9d20-61492459919b.jpg",
          name: "Chicken Makhani Burst Burger+Fries(Reg)+Peri Peri Sachet.",
          id: "138064025",
          price: 20757,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/fca82ef6-b565-462e-82bc-1c5f7b71e668_a1ae315f-af19-4f80-9b73-f8039e9f88cf.jpg",
          name: "1Crispy Veg Double Patty + 1Med Fries.",
          description:
            "Double up the crispy veg patty burger in our best selling burger with fries on the side",
          id: "110697277",
          price: 21800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/31/c9629866-8e44-4130-a692-38905715223a_e3560153-eb80-4735-9edb-f67b989833fc.jpg",
          name: "Crispy Veg Burger+Fries(M)+Peri Peri Sachet.",
          id: "138064027",
          price: 21757,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/5/0e94cddb-765d-4cbf-a1e7-276365c5a3a4_e1b081b3-0b13-4bd1-9583-165a25f04399.jpg",
          name: "BK Veggie Double Patty Burger with Double Cheese Slice.",
          id: "137495807",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/6ab19185-6340-4d2f-a62f-2a8037ca1bf1_7b884241-b2ed-4b01-ad1a-8cc11a04e63b.jpg",
          name: "BK Veggie Burger + Crispy Veg Burger.",
          id: "110697316",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/403d8d68-e302-49be-aa69-999444801194_ab659491-bf9a-4687-98dc-226a276105e2.jpg",
          name: "Crispy Chicken + Med Fries.",
          description: "Crispy Chicken patty burger with fries on the side.",
          id: "110697273",
          price: 21800,
        },
        {
          imageId: "2ece2c5f21d615e1bb12163a495bbcbc",
          name: "Chicken Whopper.",
          description:
            "Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. \nQty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "132689744",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/4cbfee8b-6c9d-41b4-9f1e-cacffd38bc85_0240561a-17e0-4168-883c-640554b20242.jpg",
          name: "Mocha Cappuccino (Small).",
          id: "137495808",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/cb0437d2-713a-4f0a-86e0-d4c09522fb47_4c9ccd82-0b11-4103-a334-a9ddea879c49.jpg",
          name: "Classic Cold Coffee.",
          description:
            "Our signature BK Café Coffee ice blended with milk & cream",
          id: "127472138",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/17cffbd3-8aaa-4c1f-b0fc-7a2f459c382b_d6af02eb-1d48-42a6-8eb9-f4752dc2524a.jpg",
          name: "Crispy Chicken + Crispy Chicken.",
          description:
            "Crispy Chicken patty burger, our best seller. Enjoy Twice.",
          id: "110697276",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/a11dc0a4-42b7-4789-8acf-805844069c8f_9fff961c-5b02-4e6a-9db2-16b4f0dcb22f.jpg",
          name: "Whopper Jr Chicken with Cheese Slice.",
          id: "110697341",
          price: 19400,
        },
        {
          imageId: "6481474be0224c91bc1128e0846ed821",
          name: "Crispy Chicken + Chicken Nuggets (4Pcs).",
          id: "128841901",
          price: 19400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0b022437-aea3-4032-aa68-de76c4ae47f1_ee51dcfc-1155-4a54-8ffb-5909dd1080e3.jpg",
          name: "Double Crispy Veg + Double Crispy Veg.",
          description: "crispy veg patty burger, our best seller! !",
          id: "110697271",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/6/a292e722-34a5-40b7-b9df-fb4dd22e85af_7aa832ac-e2c3-415d-9392-aad37fe1d4db.jpg",
          name: "Crispy Chicken Double Patty Burger with Double Cheese Slice.",
          id: "137883099",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8fd81f5a-696a-49d2-848b-cb625c422361_6c43b654-322c-493f-9a28-75def2eb4dd9.jpg",
          name: "Cappuccino Reg.",
          id: "137495810",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d790bb3b-50e3-482c-a5ba-c758e564a280_8104e55f-de03-41eb-a9e9-5eb3399c75aa.jpg",
          name: "Crispy Veg Double Patty Burger+Veg Crunchy Taco.",
          id: "110697330",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/cddbd1f0-c2fc-4af3-a108-b482cc0027e2_0564277b-594b-4aa9-a7cd-6796803092fc.jpg",
          name: "Chocolate Shake.",
          description: "Our signature chocolate thick shake.",
          id: "110697289",
          price: 18900,
        },
        {
          imageId: "ac05fa2401fa65ee95cbddbba7ed3d25",
          name: "Crispy Chicken with Cheese Slice + Fries (Reg).",
          id: "128841902",
          price: 19400,
        },
        {
          imageId: "f10379c6bd1edbbb7ee38da07c78058f",
          name: "Veg Whopper.",
          description:
            "Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. \nQty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "110697272",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/debc0834-e6b1-4ebb-ad6c-0222fc3f9cc3_e6ab0c64-00d5-4280-9863-4d86a46cb956.jpg",
          name: "Whopper Jr Veg with Cheese Slice.",
          id: "110697344",
          price: 17400,
        },
        {
          imageId: "b5eb8f54277f8d8a1cadc4c993618a2c",
          name: "(6Pc) Crunchy Chicken Nuggets + 1 Dip.",
          description:
            "Tender Juicy Crunchy Chicken Nuggets fried to golden brown perfection. Served with Fiery Hell Dip",
          id: "128167740",
          price: 16900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0d444afb-ce8a-494c-bb43-e3c3d7398445_952e62b5-ff48-4bf4-b2f7-7efff2f6b60f.jpg",
          name: "Veggie Strips - 5Pcs + Chocolate Mousse Cup.",
          description: "Veggie Strips - 5Pcs + Chocolate Mousse cup",
          id: "110697311",
          price: 16800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/f84ea647-2dbd-4660-b726-881e7d8a8b18_7ee78e65-1d02-412f-8e23-2631e8439128.jpg",
          name: "Veggie Strips - 5Pcs + Choco Lava Cup.",
          description: "Veggie Strips - 5Pcs + Choco Lava Cup",
          id: "110697308",
          price: 16800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/9d569500-1505-4d4c-a25b-cad67011116e_0572632e-672d-4a13-b94c-d2b815e7b210.jpg",
          name: "Boneless Wings Regular.",
          id: "110697290",
          price: 16900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0879980b-5f95-459b-b995-48d42143a3c6_aab3a5ad-b4be-45fe-b5ab-a9bae30d64af.jpg",
          name: "Chicken Wings Fried - Four Pieces.",
          description: "Juicy chicken wings cooked to perfection.",
          id: "128167741",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8b4f61be-e218-4a8e-8548-193b08dc6a37_84575246-015c-471f-9d5b-28d4c90c0c49.jpg",
          name: "Mango Shake.",
          description: "Our signature mango thick shake.",
          id: "110697287",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/cca1652d-1336-466c-9c39-2b043cf34e40_3027a8d5-a6be-4f46-847d-a3eeab921a1b.jpg",
          name: "Veg Whopper Jr + BK Veg Pizza Puff.",
          description: "Veg Whopper Jr + Pizza Puff",
          id: "147513460",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/140148ea-0892-49d3-b4b3-3458dd7b4964_f30ee5fe-758a-4eb9-b2ea-7888572ba8a7.jpg",
          name: "BK Veggie Burger + BK Veg Pizza Puff.",
          description: "BK Veggie Burger + Pizza Puff",
          id: "147513461",
          price: 18800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/d320824a-4ca6-42a2-bc48-cf26b43255d1_2c1aaf53-e10c-47b1-8a47-d01c07b88679.jpg",
          name: "BK Veg Pizza Puff + Peri Peri Fries(M).",
          description: "Pizza Puff + Peri Peri Fries(M)",
          id: "147513462",
          price: 19300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/f3c71b67-3a8c-413d-8c66-0db0f23f29bb_86eb02fe-241b-45f6-b0ee-3b657c989c37.jpg",
          name: "BK Chicken Burger + BK Veg Pizza Puff.",
          description: "BK Chicken Burger + Pizza Puff",
          id: "147513463",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/09364f2c-4eb0-46e7-a1c7-f66817f4cfb1_2836124a-4d46-4a81-914e-b100fbcf710c.jpg",
          name: "Hot Chocolate.",
          description: "Hot Chocolate",
          id: "144965149",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/14/6be9a774-f62e-4eb3-8893-d6bbe90ddd60_6280dee6-41d3-4dbf-8208-dcb8bfe698a2.jpg",
          name: "Iced Americano.",
          description:
            "Our signature Arabica espresso with ice\nQty: 330 GmsML| Kcal: 9.9 | Carbs 0.19 Gms| Sugar: 0 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 2.31 Gms| Sodium: 4.7 Mg",
          id: "140625159",
          price: 18000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/48ca2150-ef26-4794-b7ab-25681a35e938_eeac68a2-3dbc-4c80-bcdb-917ab6723dce.jpg",
          name: "Fries(M)Peri Peri+Fries(Reg).",
          id: "147178897",
          price: 21400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/84df8e48-3d27-45f0-989d-3980b47fef51_5b0521c5-4c39-46be-8261-81f85d0152cc.jpg",
          name: "BK Veggie Burger+Veg Makhani Burst Burger.",
          id: "147178898",
          price: 21900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/7327254f-2197-494a-8161-ddee3475c52b_77d27b0b-2b56-47ee-bc3e-5a8438a710c9.jpg",
          name: "Crispy Veg Burger+Coke+Masala Hashbrown.",
          id: "147567567",
          price: 21400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/dde1136d-2592-49ef-b260-6259e06e5dc5_8b5f03be-2db6-4888-af0a-efae153973e3.jpg",
          name: "Crispy Veg Double Patty Burger+Peri Peri Fries(Reg).",
          id: "147178899",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/8ac1921c-6d3c-40ff-bdad-255ebe2efd58_c78127c6-ac8b-4196-8b0f-6c93e156037f.jpg",
          name: "Crispy Chicken Burger+Peri Peri Fries(Reg).",
          id: "147178900",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/9e0d4afd-03cc-4109-8ea9-421148a23bbe_f47636ce-51fc-4aa3-ba67-493eb13b3e90.jpg",
          name: "Iced Latte.",
          id: "147178901",
          price: 19900,
        },
      ],
    },
    {
      title: "Rs 169 Deal Of The Day",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/bb68770b-4ae2-46f9-a3b7-0c7da191895b_85af5dc2-b532-4e10-970f-de8af1b162bf.jpg",
          name: "BK Veggie Burger+Fries(Reg)+Coca Cola,",
          description:
            "Kcal: 683.63 | Carbs 353.64 Gms | Sugar: 42.39 Gms | Fat: 22.48 Gms | Saturated fat: 8.88 Gms | Protein: 15.6 Gms | Sodium: 944.2 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "138064029",
          price: 31400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/e7b916eb-9016-4c9a-98fb-4d396f7d3c50_40850c8c-f8f7-47e9-8e50-1ab83f8d558a.jpg",
          name: "2 Veg Whopper Jr,",
          description:
            "Qty: 317 Gms | Kcal: 797.1 | Carbs 77.50 Gms | Sugar: 13.05 Gms | Fat: 44.31 Gms | Saturated fat: 15.86 Gms | Protein: 22.48 Gms | Sodium: 1412.94 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954831",
          price: 29800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/3e252ad9-83ef-4e02-9688-171c2bedb99a_0e2e49fd-9570-4420-ad87-1880d778671e.jpg",
          name: "Classic Cold Coffee+Fries(Reg),",
          description:
            "Qty: 422 Gms | Kcal: 419.3 | Carbs 297.75 Gms | Sugar: 8.855 Gms | Fat: 18.3 Gms | Saturated fat: 25.145 Gms | Protein: 10.565 Gms | Sodium: 465 Mg \nContains: Gluten, Milk",
          id: "138064033",
          price: 27900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/aeee6222-2636-435e-8c06-e78d1b3edc48_60e71616-7839-43d8-86b7-adc75b731c9c.jpg",
          name: "2 BK Veggie Burgers,",
          id: "128841909",
          price: 27800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/11bcff14-91c4-4f29-82d7-6fcec2444ee7_50b02a2b-e0d6-4c7c-86d3-655c371715cd.jpg",
          name: "Crispy Chicken Burger+Fries(Reg)+Coca Cola,",
          description:
            "Kcal: 690.2 | Carbs 352.5 Gms | Sugar: 42.1 Gms | Fat: 24 Gms | Saturated fat: 9 Gms | Protein: 15.1 Gms | Sodium: 942.8 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "138064034",
          price: 27400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/1643b219-3058-4b75-8bc0-2094433242da_2a3ea726-4d22-4c9c-9172-c3d9f8e4ce0c.jpg",
          name: "Crispy Veg Double Patty Burger+Fries(Reg)+Coca Cola,",
          description:
            "Kcal: 862.5 | Carbs 378.8 Gms | Sugar: 43.7 Gms | Fat: 31.55 Gms | Saturated fat: 13.38 Gms | Protein: 14.8 Gms | Sodium: 1418.4 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "138064035",
          price: 27400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/619b8495-f688-4efa-a502-4f0e84e30aa3_fdc46d6b-341d-4a84-a4d6-e0014962af8c.jpg",
          name: "Mocha Frappe,",
          description:
            "Qty: 350 Gms | Kcal: 328 | Carbs 48.3 Gms | Sugar: 10.4 Gms | Fat: 10.2 Gms | Saturated fat: 38.2 Gms | Protein: 8.7 Gms | Sodium: 94.5 Mg \nContains: , Milk",
          id: "136954832",
          price: 26900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/bcfa0d8d-0032-4179-b81c-6cd2e0af686f_e88a0203-3f3d-42c9-a2a3-a7f292fcd918.jpg",
          name: "Crispy Veg Burger+Classic Cold Coffee,",
          description:
            "Qty: 487 Gms | Kcal: 577.2 | Carbs 77.6 Gms | Sugar: 15.4 Gms | Fat: 22.3 Gms | Saturated fat: 25.8 Gms | Protein: 15.4 Gms | Sodium: 938.2 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954833",
          price: 26900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/35915710-f6bb-4a85-90ff-d1a72d107bc0_d96d012b-d34e-4353-b295-b38944d0b192.jpg",
          name: "2 King Fries,",
          description: "MRP. 260 | Save Rs. 91,  The perfect crispy partner.",
          id: "105420923",
          price: 26000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/4ef07b70-537e-43e1-853c-979b02f1aa03_c1425e37-7889-47e9-9335-b4d6c8309d7d.jpg",
          name: "2 Crunchy Veg Taco+Fries(M),",
          description:
            "Qty: 324 Gms | Kcal: 1004.7 | Carbs 0 Gms | Sugar: 128.2 Gms | Fat: 56 Gms | Saturated fat: 34.6 Gms | Protein: 13.1 Gms | Sodium: 1708 Mg \nContains: Gluten, Soybean , Milk",
          id: "136954834",
          price: 26000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/ae6a64b9-e285-4985-9be6-5284a93d3925_4755a50a-53fb-454e-a609-aaca85bdfc62.jpg",
          name: "Saucy Fries+Fries(M),",
          id: "136998012",
          price: 26000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/1e87af12-8449-456e-8020-cb3257905e0a_c0d9d7cc-54b3-42ca-94ad-4e74a024ceaa.jpg",
          name: "Chocolate Thick Shake + Crispy Veg Burger,",
          description:
            "MRP. 259 | Save Rs. 90, Chocolate Thick Shake + Crispy Veg Burger",
          id: "105420931",
          price: 25900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/bb51ff38-58fe-4e1c-8b85-f91425b0ea80_a19d8bcf-a8ac-4bd2-85a4-3977539eaded.jpg",
          name: "Crispy Chicken Burger + BK Chicken Burger,",
          id: "128841912",
          price: 24800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/4f46ca42-37fd-46c3-8580-5b5d6ef3773b_c7448c19-7ab7-4e2a-9912-2772a9186ae2.jpg",
          name: "Chicken Whopper Jr +Chicken Fried Wings(2pcs),",
          description:
            "Qty: 237 Gms | Kcal: 519 | Carbs 51.5033 Gms | Sugar: 8.35 Gms | Fat: 23.0274 Gms | Saturated fat: 9.7623 Gms | Protein: 33.936 Gms | Sodium: 1718.29 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954838",
          price: 24800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/99ae1e6d-ea91-4969-9e6b-33cbfab71534_b7451b54-2ea8-433c-96a9-be820563b6ca.jpg",
          name: "Crispy Chicken Double Patty Burger+Crunchy Chicken Taco,",
          description:
            "Qty: 317 Gms | Kcal: 797.1 | Carbs 77.50 Gms | Sugar: 13.05 Gms | Fat: 44.31 Gms | Saturated fat: 15.86 Gms | Protein: 22.48 Gms | Sodium: 1412.94 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954839",
          price: 24800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/d908d237-2661-41a4-b1ae-fab228a079f0_dfa9038c-fc30-4c59-a9ea-0ed729e430f1.jpg",
          name: "Crispy Veg Burger+Fries(Reg)+Coca Cola,",
          description:
            "Kcal: 693.3 | Carbs 361.6 Gms | Sugar: 41.1 Gms | Fat: 21.7 Gms | Saturated fat: 9 Gms | Protein: 12 Gms | Sodium: 1148.6 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "138064036",
          price: 24500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/607a93dd-fc28-4454-88f1-095457b40bac_79af99d4-f38e-468d-b714-d94055181622.jpg",
          name: "Crispy Chicken+Crunchy Chicken Nuggets(6Pcs),",
          description:
            "Qty: 251 Gms | Kcal: 695.91 | Carbs 69.35 Gms | Sugar: 9.68 Gms | Fat: 33.9 Gms | Saturated fat: 11.79 Gms | Protein: 28.25 Gms | Sodium: 875.37 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954840",
          price: 24449,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/167598a3-9025-4d22-a7db-5b58b232535c_87d5530c-cf4f-48d7-9f49-533f19d9ef46.jpg",
          name: "BK Chicken+Crunchy Chicken Nuggets(4pcs),",
          description:
            "Qty: 234 Gms | Kcal: 583.7 | Carbs 53.3 Gms | Sugar: 7.5 Gms | Fat: 28.7 Gms | Saturated fat: 11 Gms | Protein: 27.9 Gms | Sodium: 289.8 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954841",
          price: 24449,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/b290a98e-4926-434f-9d00-4fc776bae654_e2590e76-85ea-47e1-a9f4-b80bba8886f4.jpg",
          name: "Crispy Veg Double Patty Burger+Saucy Fries,",
          description:
            "Qty: 358 Gms | Kcal: 992.4 | Carbs 110.7 Gms | Sugar: 12.4 Gms | Fat: 45.6 Gms | Saturated fat: 18.7 Gms | Protein: 18.2 Gms | Sodium: 1545.2 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136998013",
          price: 24400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/8ee3249a-479b-4b58-9507-43596f2c9a3b_960ab26c-d4f5-4de6-befa-adf20c2e7900.jpg",
          name: "Crispy Chicken Burger+Saucy Fries,",
          description:
            "Qty: 279 Gms | Kcal: 820.05 | Carbs 84.43 Gms | Sugar: 10.77 Gms | Fat: 38 Gms | Saturated fat: 14.28 Gms | Protein: 18.45 Gms | Sodium: 1069.6 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136998014",
          price: 24400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/d5d26ffc-6282-4163-9465-018836d4f886_ddc642a3-3a7f-4da1-8444-2b8298091773.jpg",
          name: "Veg Whopper Jr + Crunchy Veg Taco,",
          id: "128841911",
          price: 23900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/6ab6fbf2-fe23-4a6e-9caf-e4fca4e65a30_f1f8d178-0e01-4fde-b496-dd9eae25aae1.jpg",
          name: "Chicken Makhani Burst Burger + Crunchy Chicken Taco,",
          id: "128841917",
          price: 22800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/b21b279d-1f65-43b1-8ef6-b426a70adc97_fcc2b5ce-5f64-470c-84a7-19ca66aa2d40.jpg",
          name: "Crispy Veg Double Patty burger+Crispy Chicken Double Patty Burger,",
          description:
            "Qty: 386 Gms | Kcal: 1066.5 | Carbs 123.3 Gms | Sugar: 19.3 Gms | Fat: 51 Gms | Saturated fat: 19.6 Gms | Protein: 28.6 Gms | Sodium: 1955.06 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954843",
          price: 22800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/0e63d4a1-3232-4239-9045-e82d54947563_0a3a6422-e7ea-408f-9c93-1eb860886eb0.jpg",
          name: "Chicken Whopper with Cheese Slice,",
          description:
            "Qty: 292 Gms | Kcal: 708.2 | Carbs 59.6 Gms | Sugar: 9.2 Gms | Fat: 39.5 Gms | Saturated fat: 10.1 Gms | Protein: 28.6 Gms | Sodium: 1200.7 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954844",
          price: 22400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/1efde887-24d7-4e0b-acb5-53b41104ecb4_950dfbb8-2a21-497b-ad86-192f6ce1529b.jpg",
          name: "2 Crunchy Chicken Taco,",
          id: "128841918",
          price: 22000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/e82d113f-7f7d-4675-9b8a-233e544a65a1_c0c7716f-a5cd-40ca-8362-e3053ac80858.jpg",
          name: "Fiery Chicken Wrap,",
          description:
            "Qty: 252 Gms | Kcal: 483.8 | Carbs 50.6 Gms | Sugar: 9.3 Gms | Fat: 22.5 Gms | Saturated fat: 8.2 Gms | Protein: 19.8 Gms | Sodium: 1176.5 Mg \nContains: Gluten, Soybean , Milk",
          id: "136954845",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/0e5eac46-639d-405f-9913-87f1019b9cc3_671dd5fc-17ec-4fbc-bcde-8a376da5430f.jpg",
          name: "Veg Whopper with Cheese Slice,",
          description:
            "Qty: 297 Gms | Kcal: 753.2 | Carbs 88.3 Gms | Sugar: 9 Gms | Fat: 37.3 Gms | Saturated fat: 16.9 Gms | Protein: 16.2 Gms | Sodium: 1014.3 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "136954846",
          price: 20400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/669301f9-ebf7-4196-99b8-ebe68095fe8e_01ed8a02-a371-40b3-9724-02bb6e07c6d5.jpg",
          name: "Chicken Tandoori Burger,",
          description:
            "Flame Grilled Tandoori Chicken, veg khurchan, soft square masala buns. It's Tandoorilicious.",
          id: "105420907",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/d3390432-999c-4280-9101-f27b6b0ab97e_ebe2433d-6a93-409b-9cb2-75f76ee54858.jpg",
          name: "Paneer Royale Burger,",
          description:
            "Thick Paneer Patty, loads of sauces in soft square masala buns. It's Royally Paneer.",
          id: "128749906",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/082ecaca-d67f-4a04-8998-69058a2f4257_0fbea65f-8f76-4102-bf80-be03e2efc6bf.jpg",
          name: "Hot 'N' Saucy Burger,",
          description:
            "Chilli Saucy patty, spicy sauce, soft square masala buns. It's saucy & spicy.",
          id: "101165719",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/27/f9371e06-5326-4bb7-8583-10bc16e7608a_c6c72ce5-db68-44cf-8370-e3a3d95d60a6.jpg",
          name: "Fiery Chicken Burger,",
          description:
            "Spicy Fried Chicken, loads of sauces in soft square masala buns. It's hot and happening.",
          id: "127287253",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/6/ebe060e0-09bc-472d-ace1-da27ac653858_f7017d98-1bcb-4065-b244-da87b521264e.jpg",
          name: "(9Pc) Crunchy Chicken Nuggets + 2 Dips,",
          description:
            "Qty: 200 Gms | Kcal: 548.3 | Carbs 39.3 Gms | Sugar: 4 Gms | Fat: 32 Gms | Saturated fat: 11.2 Gms | Protein: 25.4 Gms | Sodium: 401.3 Mg \nContains: , Soybean , Milk",
          id: "145300874",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/9c4f99c7-57d1-4579-807f-4b20b7614c63_be865ea9-34c3-4a7f-bdf3-b4acf6c256f7.jpg",
          name: "Crispy Veg Double Patty Burger + BK Veg Pizza Puff + Coke,",
          description:
            "Crispy Veg Double Patty Burger + BK Veg Pizza Puff + Coke",
          id: "147513464",
          price: 24300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/b4af8272-08b3-4424-a3f1-beaa336d9f5f_bda5aa02-deb0-4f44-a231-34f0fdfb37e9.jpg",
          name: "Crispy Chicken Burger + BK Veg Pizza Puff + Coke,",
          description: "Crispy Chicken Burger +BK Veg Pizza Puff + Coke",
          id: "147513465",
          price: 28300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/4b52f11a-7e1f-420a-9149-5f04d725f4da_8c5411be-33b3-4c39-98e5-eff7532bce16.jpg",
          name: "Cappuccino(S) + BK Veg Pizza Puff,",
          description: "Cappuccino(S) + Pizza Puff",
          id: "147513466",
          price: 20800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/ecf8a37b-2c46-4db7-ab65-2e884eba01b5_64846c0c-bf0d-4dce-87cf-9da4d2fb954c.jpg",
          name: "Chicken Whopper Jr + BK Veg Pizza Puff,",
          description: "Chicken Whopper Jr + Pizza Puff",
          id: "147513467",
          price: 21800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/ec81df3f-a2ba-49a2-9e48-74034f946308_59ed074c-c6de-4414-82c1-87283ddf233a.jpg",
          name: "Chicken Makhani Burst+Fries(Reg)+Coke,",
          id: "147178902",
          price: 28400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/2a98f81a-13e3-4bc2-b014-34c161a93e7b_55340aff-cd6f-4aed-b166-ccc91b322b40.jpg",
          name: "2 Peri Peri Fries(M),",
          id: "147178903",
          price: 28700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/aaa7870c-4c0f-4696-b727-ffd3c1bf44d9_dc2be1c1-8f9b-4a75-8b49-37fb70d06ef9.jpg",
          name: "Whopper Jr Veg+Fries(M),",
          id: "147178904",
          price: 26400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/bf642489-df09-4a1d-bc04-eac660cca622_ad6359bc-d1a7-449a-8e10-9ce87df0d28a.jpg",
          name: "Crunchy Chicken Taco+Fries(M),",
          id: "147178905",
          price: 23400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/e688571f-6c1c-4fd7-8227-e499d9d040a2_ad71e460-d9a1-43a5-9d49-6bbbeb31219e.jpg",
          name: "Crispy Chicken Double Patty Burger+Fries(Reg),",
          id: "147178906",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/c4f50954-884c-4702-afcd-8ce23d78dfcb_0850fcfc-23f3-4c31-ba72-7a25c80135c2.jpg",
          name: "3 Veg Makhani Burst Burger,",
          id: "147178907",
          price: 24000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/f63eea1e-09d8-488b-bb71-217daa5fe778_8aa721db-bfea-4133-b7c4-ea3459ddf15b.jpg",
          name: "2 Veg Crunchy Tacos+Crispy Veg Burger,",
          id: "147178908",
          price: 25000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/30/f58caf8a-86e5-42ea-8b14-e251d9481b01_a62e52b8-d9fc-452c-9ccf-686f230f5960.jpg",
          name: "Crispy Veg Burger+Iced Latte,",
          id: "147178909",
          price: 26900,
        },
      ],
    },
    {
      title: "Crispy Meal Deals (Save upto 47%)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/29/0ff3e581-85f1-4c43-8d8b-28440391a52c_7f8da1eb-3b29-4996-bd66-202d787fd139.jpg",
          name: "Crispy Veg Burger + Fries (Reg) + Coca Cola",
          description:
            "Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Served with Crispy Fries & Cola. \nKcal: 693.3 | Carbs 361.6 Gms| Sugar: 41.1 Gms| Fat: 21.7 Gms| Saturated fat: 9 Gms| Protein: 12 Gms| Sodium: 1148.6 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "134611323",
          price: 12900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/29/1b2fb863-204d-4c06-b67b-3e7c7c98ca1d_58cfc75f-09d2-48b4-b23f-1367bbefaab7.jpg",
          name: "Crispy Chicken Burger + Fries (Reg) + Coca Cola",
          description:
            "Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. Served with Crispy Fries & Cola. \nKcal: 690.2 | Carbs 352.5 Gms| Sugar: 42.1 Gms| Fat: 24 Gms| Saturated fat: 9 Gms| Protein: 15.1 Gms| Sodium: 942.8 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "134611324",
          price: 16900,
        },
      ],
    },
    {
      title: "Chicken Wing Deal (Save upto 30%)",
      items: [
        {
          imageId: "615526d92bf62a45c983f58e0c994c60",
          name: "11Pc Boneless Wings",
          description: "Save Rs 108 | 11pcs Boneless Bites",
          id: "140625161",
          price: 32900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/f8ce2a8b-cd64-4293-a669-0807faf66e08_934da033-107b-494c-bbe7-09d0d53f14d0.jpg",
          name: "2 Crispy Chicken Burger + 4Pc Fried Wings + 2 Coca Cola",
          description:
            "Save Rs 160 | 2Crispy Chicken Burger + 4Pc Fried Wings + 2 Coca Cola",
          id: "140625162",
          price: 35900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/63fbeca4-b7ab-4d9c-a39a-46d5262694a3_faa31675-d5a5-4697-8311-6c93071a13c9.jpg",
          name: "2Pc Fried Wings+4Pc Boneless+4Pc Nuggets+3 Dips+1 Coca Cola",
          description:
            "Save Rs153 | 2Pc Fried Wings + 4Pc Boneless + 4Pc Nuggets + 3 Dips + 1 Coca Cola",
          id: "140625163",
          price: 39900,
        },
      ],
    },
    {
      title: "Whopper Stackers",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/28/00cab9c2-72f2-4ff1-a200-12f05f813fea_c28eb2d0-051a-4d12-8cf8-7bf6277985f9.jpg",
          name: "Jr Whopper Stacker- Veg",
          description: "Jr Veg Whopper Double Patty with Cheese Slice",
          id: "141539356",
          price: 14900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/28/1f1ee63d-abc2-46c8-a8bf-b02df61a8911_11adc7b3-dde3-4cd3-b3b7-563fb712c287.jpg",
          name: "Jr Whopper Stacker – Chicken",
          description: "Jr Chicken Whopper Double Patty with Cheese Slice",
          id: "141539357",
          price: 16900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/28/b3f7e64b-9664-4441-b626-a61a21f3b581_4957c93e-5752-4710-bee9-9746b1308562.jpg",
          name: "Veg Whopper Stacker",
          description: "Veg Whopper Double Patty with Cheese Slice",
          id: "141539358",
          price: 28300,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/28/155053a8-284d-435e-9c9d-b051b31c6197_4e6ae6e9-5bcb-4eae-a4b5-21261b252e8b.jpg",
          name: "Chicken Whopper Stacker",
          description: "Chicken Whopper Double Patty with Cheese Slice",
          id: "141539359",
          price: 31300,
        },
      ],
    },
    {
      title: "Whopper",
      items: [
        {
          imageId: "5b62c9147712a4744c398f9761bd665b",
          name: "Veg Whopper with Cheese Slice",
          description:
            "Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns and Cheese Slice. Served With Crispy Fries & Cola. \nQty: 297 Gms| Kcal: 753.2 | Carbs 88.3 Gms| Sugar: 9 Gms| Fat: 37.3 Gms| Saturated fat: 16.9 Gms| Protein: 16.2 Gms| Sodium: 1014.3 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "71132318",
          price: 21400,
        },
        {
          imageId: "2120ea6ddc4bb465ef401d75d34b50f9",
          name: "Chicken Whopper with Cheese Slice",
          description:
            "Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns and Cheese Slice. Served With Crispy Fries & Cola. \nQty: 292 Gms| Kcal: 708.2 | Carbs 59.6 Gms| Sugar: 9.2 Gms| Fat: 39.5 Gms| Saturated fat: 10.1 Gms| Protein: 28.6 Gms| Sodium: 1200.7 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "71132320",
          price: 23400,
        },
        {
          imageId: "957c088b2c68ba2bd57fe1cd03730f82",
          name: "Veg Whopper Double Patty",
          description:
            "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Double Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It'S Not A Burger, It'S A Whopper",
          id: "47184211",
          price: 25800,
        },
        {
          imageId: "896b0d8059a658a8330ed6499923c432",
          name: "Chicken Whopper Double Patty",
          description:
            "Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Double Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It'S Not A Burger, It'S A Whopper",
          id: "47184213",
          price: 28800,
        },
        {
          imageId: "40ab573c44eada77c739509fdc03807f",
          name: "Mutton Whopper",
          description:
            "Our Signature Whopper with Flame Grilled Mutton Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. \nQty: 292 Gms| Kcal: 662.7 | Carbs 52.2 Gms| Sugar: 8.4 Gms| Fat: 39.1 Gms| Saturated fat: 12.6 Gms| Protein: 25.6 Gms| Sodium: 1025.9 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "48961742",
          price: 31900,
        },
        {
          imageId: "2b7e9081f78e16ff787fe1f5b74a79fe",
          name: "Mutton Whopper Double Patty",
          description:
            "Two Much Mutton As Delicious Flame-Grilled Patties, Farm-Fresh Veggies And Mayo Is What Makes This Mutton Double Whopper A Feast For The Beast",
          id: "47184216",
          price: 38900,
        },
      ],
    },
    {
      title: "Burgers & Wraps",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8b7dceef-fbec-498a-86eb-dbecaf159788_a1a97496-211d-4e86-8237-a79e9de4d183.jpg",
          name: "Paneer Royale Wrap",
          description:
            "60 gm Paneer Patty, Sauces In Soft Tortilla Wrap. \nQty: 234 Gms| Kcal: 676.2 | Carbs 63.2 Gms| Sugar: 9.7 Gms| Fat: 35.6 Gms| Saturated fat: 18 Gms| Protein: 25.3 Gms| Sodium: 1077.9 Mg \nContains: Gluten, Soybean, Milk",
          id: "116076958",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
          name: "Crispy Veg Burger",
          description:
            "Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197350",
          price: 7000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/637ffd1f-d7a5-4ff0-aa31-b72e0810007c_0347c370-2105-4b19-aef3-5ad469e0bb4f.jpg",
          name: "Chicken Makhani Burst Burger",
          description:
            "2 Crunchy Veg taco + med fries \nQty: 125 Gms| Kcal: 316 | Carbs 41.7 Gms| Sugar: 8 Gms| Fat: 11.1 Gms| Saturated fat: 4.3 Gms| Protein: 10.7 Gms| Sodium: 780.5 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "117499243",
          price: 10900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/78a66e43-ca80-443f-bf86-de612f72ab86_0b86d9e4-755d-49d1-b1dc-6c47e61cbe36.jpg",
          name: "Fiery Chicken Wrap",
          description:
            "Spicy Fried Chicken, Loads Of Sauces In Soft Tortilla Wrap. \nQty: 252 Gms| Kcal: 483.8 | Carbs 50.6 Gms| Sugar: 9.3 Gms| Fat: 22.5 Gms| Saturated fat: 8.2 Gms| Protein: 19.8 Gms| Sodium: 1176.5 Mg \nContains: Gluten, Soybean, Milk",
          id: "128755373",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/9cd490f9-f191-49c2-9043-6dc3e7e58166_34badbda-4128-45d4-87e2-e9c580e8db43.jpg",
          name: "Crispy Veg Double Patty Burger",
          description:
            "Double Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 204 Gms| Kcal: 531.4 | Carbs 70.6 Gms| Sugar: 9.1 Gms| Fat: 22.7 Gms| Saturated fat: 9.2 Gms| Protein: 11.2 Gms| Sodium: 1068 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197351",
          price: 9900,
        },
        {
          imageId: "424358cb32c40669f3aab9ba92d27141",
          name: "Veg Crunchy Taco",
          description:
            "Crunchy Taco Shell Filled With Beans & Veg Mix, Chef'S Secret Sauce, Onion & Lettuce. \nQty: 105 Gms| Kcal: 336.1 | Carbs 33.7 Gms| Sugar: 7.1 Gms| Fat: 20.8 Gms| Saturated fat: 13.9 Gms| Protein: 3.6 Gms| Sodium: 589.6 Mg \nContains: Soybean, Milk",
          id: "101197462",
          price: 9000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0c8fa5a6-d138-4ea8-aade-f403b504aaee_e7edfd78-ccd7-4448-951d-36d9f6b3ea67.jpg",
          name: "Veg Makhani Burst Burger",
          description:
            "Enjoy Makhani Flavour With Mix Veg Patty Topped Up With Onion \nQty: 135 Gms| Kcal: 315 | Carbs 48.5 Gms| Sugar: 8 Gms| Fat: 9.2 Gms| Saturated fat: 3.4 Gms| Protein: 9.6 Gms| Sodium: 768 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "117499241",
          price: 8000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg",
          name: "Crispy Chicken Burger",
          description:
            "Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 125 Gms| Kcal: 359.1 | Carbs 44.3 Gms| Sugar: 7.5 Gms| Fat: 15.1 Gms| Saturated fat: 4.8 Gms| Protein: 11.5 Gms| Sodium: 592.4 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197420",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8283b997-88ff-4fbb-a872-f65c35b95908_26b4808c-b6ae-4a45-a91d-26587bd2b875.jpg",
          name: "Crispy Veg with Cheese Slice",
          description:
            "Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. \nQty: 149 Gms| Kcal: 403.2 | Carbs 53.9 Gms| Sugar: 7 Gms| Fat: 16 Gms| Saturated fat: 6.9 Gms| Protein: 10.8 Gms| Sodium: 980.2 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "118538125",
          price: 9500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/7970699f-3c2e-42f3-9e67-eb8a086eb8e2_2c1d90c8-1abc-49e8-86bd-9ee801e2f66d.jpg",
          name: "BK Veggie Double Patty Burger",
          description:
            "Our Tribute To Classic American Taste. Bk Veg Double Patty, Garden Fresh Crispy Lettuce, Juicy Tomato(seasonal) & Our Signature Sauce",
          id: "101197371",
          price: 15900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/5b69c7d1-9595-4ad0-9650-e75be5dcea8b_cac20295-967f-4632-95f5-334be98442c4.jpg",
          name: "Crunchy Chicken Taco",
          description:
            "Crunchy Taco Shell With Chicken Patty, Veggies And Spicy Sauce. \nQty: 135 Gms| Kcal: 262 | Carbs 24.8 Gms| Sugar: 2.9 Gms| Fat: 16 Gms| Saturated fat: 5.5 Gms| Protein: 5.1 Gms| Sodium: 525.9 Mg \nContains: Soybean, Milk",
          id: "101197472",
          price: 11900,
        },
        {
          imageId: "ndp3akjkdainthdpugjp",
          name: "Crispy Veg Double Patty with Cheese Slice",
          description:
            "Crispy Veg Double Patty with Cheese Slice \nQty: 216 Gms| Kcal: 572.4 | Carbs 71.1 Gms| Sugar: 9.6 Gms| Fat: 25.9 Gms| Saturated fat: 11.2 Gms| Protein: 13.6 Gms| Sodium: 1250 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "101197373",
          price: 12400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/060b47f3-77d6-4d92-8de2-d237fc2f0c33_441107a3-0545-4235-881c-08f1a21598c2.jpg",
          name: "Crispy Chicken Double Patty Burger",
          description:
            "Double Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce.\nQty: 182 Gms| Kcal: 535.1 | Carbs 52.7 Gms| Sugar: 10.2 Gms| Fat: 28.3 Gms| Saturated fat: 10.4 Gms| Protein: 17.4 Gms| Sodium: 887.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197428",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/22390fa7-f853-49a3-82c4-e7264567605d_53544dc6-67ab-440a-8fb0-d34c6619b2a5.jpg",
          name: "Crispy Chicken with Cheese Slice",
          description:
            "Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce with Cheese Slice. \nQty: 137 Gms| Kcal: 400.1 | Carbs 44.8 Gms| Sugar: 8 Gms| Fat: 18.3 Gms| Saturated fat: 6.8 Gms| Protein: 13.9 Gms| Sodium: 774.4 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "102671396",
          price: 12400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/788d4363-50c2-4b63-b049-f7eb5f6da1b9_9bc014a8-214f-448a-9d3b-e1a8af76b9f5.jpg",
          name: "Whopper Jr Veg",
          description:
            "Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces \nQty: 194 Gms| Kcal: 456 | Carbs 61.6 Gms| Sugar: 9.2 Gms| Fat: 20 Gms| Saturated fat: 11.9 Gms| Protein: 7.2 Gms| Sodium: 1428.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197390",
          price: 14900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/551c9156-d9af-4f9d-a071-538c2ed2ea76_09564ec7-ccd3-48f9-a8dd-356736311cfb.jpg",
          name: "Whopper Jr Chicken",
          description:
            "Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces \nQty: 167 Gms| Kcal: 369 | Carbs 43.4 Gms| Sugar: 8.4 Gms| Fat: 13.7 Gms| Saturated fat: 6.2 Gms| Protein: 18 Gms| Sodium: 1314.3 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "62370193",
          price: 16900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/5e75dd3d-62a7-4fc2-bd58-c3204f867447_76039877-8060-4f52-b7a3-fa7a9659ca51.jpg",
          name: "BK Veggie Burger",
          description:
            "BK Veg Patty, Lettuce, Tomato(Seasonal) & Our Signature Mayo Sauce. \nQty: 152 Gms| Kcal: 352.5 | Carbs 45.4 Gms| Sugar: 7.8 Gms| Fat: 13.6 Gms| Saturated fat: 4.7 Gms| Protein: 12 Gms| Sodium: 593.8 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197372",
          price: 13900,
        },
        {
          imageId: "232c7e1b2b74dfc2851556a255e148a2",
          name: "BK Chicken Burger",
          description:
            "BK Chicken Patty, Lettuce, Tomato(Seasonal) & Our Signature Mayo Sauce. \nQty: 164 Gms| Kcal: 415 | Carbs 39 Gms| Sugar: 7.2 Gms| Fat: 21.2 Gms| Saturated fat: 7.2 Gms| Protein: 17 Gms| Sodium: 283.9 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "101197380",
          price: 14900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/b97af845-e275-473f-847a-e553a3e713fa_35cb4b18-1874-49ae-87b5-6cfb65199d3f.jpg",
          name: "Crispy Chicken Double Patty with Cheese Slice",
          description:
            "Crispy Chicken Double Patty with Cheese Slice \nQty: 194 Gms| Kcal: 576.1 | Carbs 53.2 Gms| Sugar: 10.7 Gms| Fat: 31.5 Gms| Saturated fat: 12.4 Gms| Protein: 19.8 Gms| Sodium: 1069.1 Mg \nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "102671397",
          price: 16400,
        },
        {
          imageId: "33c28282a0b1fafa3a1fd2e781833f7d",
          name: "BK Chicken Double Patty Burger",
          description:
            "BK Chicken Double patty\nQty: | Kcal: 0 | Carbs 0 Gms| Sugar: 0 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 0 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "85587032",
          price: 17900,
        },
      ],
    },
    {
      title: "Burger Doubles.",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/c6fee2f9-e698-42f1-a4d0-570d475ad5ca_26e96bbb-1161-48cc-b7df-b72931e835fe.jpg",
          name: "2 Crispy Veg",
          description:
            "2 Crispy Veg \nQty: 274 Gms| Kcal: 724.4 | Carbs 106.8 Gms| Sugar: 13 Gms| Fat: 25.6 Gms| Saturated fat: 9.7 Gms| Protein: 16.8 Gms| Sodium: 1596.4 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "111414575",
          price: 14000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/acd65607-5910-4170-b3f9-4b7196cbbca6_01f38b7e-785c-4241-9e7a-3647ea947e35.jpg",
          name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
          description:
            "2 Crispy Veg Double patty \nQty: 408 Gms| Kcal: 1062.8 | Carbs 141.2 Gms| Sugar: 18.2 Gms| Fat: 45.4 Gms| Saturated fat: 18.4 Gms| Protein: 22.4 Gms| Sodium: 2136 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "62094217",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/7b7d7c01-d1f5-4983-a49a-55ae6dec0e85_29587c5e-1372-4e3a-956d-f4a2dd78ebdf.jpg",
          name: "Veg Makhani Burst + Whopper Jr Veg",
          description:
            "Veg Makhani + Whopper Jr Veg \nQty: 329 Gms| Kcal: 771 | Carbs 110.1 Gms| Sugar: 17.2 Gms| Fat: 29.2 Gms| Saturated fat: 15.3 Gms| Protein: 16.8 Gms| Sodium: 2196.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "66984937",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/28d79e01-5c9d-47a7-9726-8452d7244cf3_bcd24e4e-5b53-4df3-b3aa-50fa62ca11e8.jpg",
          name: "BK Veggie Burger + BK Veggie Burger",
          description:
            "2 BK Veggie \nQty: 304 Gms| Kcal: 705.1 | Carbs 90.9 Gms| Sugar: 15.6 Gms| Fat: 27.3 Gms| Saturated fat: 9.4 Gms| Protein: 24 Gms| Sodium: 1187.6 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "62380752",
          price: 27800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/4b176b98-0bb9-4e8d-8e6c-f34dc980c01f_5c1b0d2c-8ae7-43b8-af78-cce6b1fc2752.jpg",
          name: "Crispy Chicken Double Patty + Crispy Chicken Double Patty",
          description:
            "2 Crispy Chicken Double Patty \nQty: 364 Gms| Kcal: 1070.2 | Carbs 105.4 Gms| Sugar: 20.4 Gms| Fat: 56.6 Gms| Saturated fat: 20.8 Gms| Protein: 34.8 Gms| Sodium: 1774.1 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "62094216",
          price: 27800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d41a7c48-3621-475e-8e19-a755ac60c8a7_93d7f9a1-1120-4fc3-a4d2-ad6876eda144.jpg",
          name: "Chicken Makhani Burst + Whopper Jr Chicken",
          description:
            "Chicken Makhani Burst + Whopper Jr Chicken \nQty: 292 Gms| Kcal: 685 | Carbs 85.1 Gms| Sugar: 16.4 Gms| Fat: 24.8 Gms| Saturated fat: 10.5 Gms| Protein: 28.7 Gms| Sodium: 2094.8 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "66984939",
          price: 27800,
        },
        {
          imageId: "686e605a3fb8a6ebbd93751a25182bb2",
          name: "BK Chicken Burger + BK Chicken Burger",
          description:
            "2 BK Chicken \nQty: 328 Gms| Kcal: 830 | Carbs 78 Gms| Sugar: 14.4 Gms| Fat: 42.4 Gms| Saturated fat: 14.4 Gms| Protein: 34 Gms| Sodium: 567.8 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "62380750",
          price: 29800,
        },
        {
          imageId: "667922098ad03c21e2176c3f52b432c0",
          name: "Veg Whopper + Veg Whopper",
          description:
            "2 Veg Whopper \nQty: 570 Gms| Kcal: 1362.4 | Carbs 194.2 Gms| Sugar: 46.2 Gms| Fat: 50.8 Gms| Saturated fat: 19.6 Gms| Protein: 31.6 Gms| Sodium: 1975.6 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "59386389",
          price: 37800,
        },
        {
          imageId: "83fbae6d81b544b68562cffd4b380482",
          name: "Chicken Whopper + Chicken Whopper",
          description:
            "2 Chicken Whopper \nQty: 560 Gms| Kcal: 1334.4 | Carbs 118.2 Gms| Sugar: 17.4 Gms| Fat: 72.6 Gms| Saturated fat: 16.2 Gms| Protein: 52.4 Gms| Sodium: 2037.4 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "55201980",
          price: 41800,
        },
      ],
    },
    {
      title: "BK Cafe",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/14/6be9a774-f62e-4eb3-8893-d6bbe90ddd60_6280dee6-41d3-4dbf-8208-dcb8bfe698a2.jpg",
          name: "Iced Americano",
          description:
            "Our signature Arabica espresso with ice\nQty: 330 GmsML| Kcal: 9.9 | Carbs 0.19 Gms| Sugar: 0 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 2.31 Gms| Sodium: 4.7 Mg",
          id: "140345146",
          price: 18000,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/63049b6a-d048-4d69-b625-07c395431dc2_ccfe6fd3-2656-4522-ad53-76464c3cc286.jpg",
          name: "Masala Chai",
          description:
            "Masala Chai \nQty: 200 Gms| Kcal: 84 | Carbs 15.8 Gms| Sugar: 1.1 Gms| Fat: 2.7 Gms| Saturated fat: 11.2 Gms| Protein: 0.7 Gms| Sodium: 36.2 Mg \nContains: Milk",
          id: "109038230",
          price: 10900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/269763e3-57e2-408c-8794-fa1d93f6557f_1f856e6d-1ae2-4189-a2ee-9632454304bd.jpg",
          name: "Café Latte (Small)",
          description:
            "Our Signature Bk Café© Coffee With Steamed Milk. \nQty: 240 Gms| Kcal: 110 | Carbs 9.8 Gms| Sugar: 4.9 Gms| Fat: 6.5 Gms| Saturated fat: 0 Gms| Protein: 3.4 Gms| Sodium: 79.2 Mg \nContains: Milk",
          id: "149370801",
          price: 15900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8fd81f5a-696a-49d2-848b-cb625c422361_6c43b654-322c-493f-9a28-75def2eb4dd9.jpg",
          name: "Cappuccino (Small)",
          description:
            "Small Cappuccino @ 99 \nQty: 240 Gms| Kcal: 101 | Carbs 9.8 Gms| Sugar: 4.3 Gms| Fat: 5.8 Gms| Saturated fat: 0 Gms| Protein: 3 Gms| Sodium: 72 Mg \nContains: Milk",
          id: "125956403",
          price: 15900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/09364f2c-4eb0-46e7-a1c7-f66817f4cfb1_2836124a-4d46-4a81-914e-b100fbcf710c.jpg",
          name: "Hot Chocolate",
          description:
            "Creamy Chocolate With Steamed Milk. \nQty: 240 Gms| Kcal: 209 | Carbs 36.2 Gms| Sugar: 4.2 Gms| Fat: 6.6 Gms| Saturated fat: 22.5 Gms| Protein: 2.9 Gms| Sodium: 81.6 Mg \nContains: Milk",
          id: "125956407",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8fd81f5a-696a-49d2-848b-cb625c422361_6c43b654-322c-493f-9a28-75def2eb4dd9.jpg",
          name: "Cappuccino (Regular)",
          description:
            "Espresso With Steamed Milk & Milk Froth. \nQty: 330 Gms| Kcal: 138.9 | Carbs 13.5 Gms| Sugar: 5.9 Gms| Fat: 7.9 Gms| Saturated fat: 0 Gms| Protein: 4.1 Gms| Sodium: 99 Mg \nContains: Milk",
          id: "125956404",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/4cbfee8b-6c9d-41b4-9f1e-cacffd38bc85_0240561a-17e0-4168-883c-640554b20242.jpg",
          name: "Mocha Cappuccino (Small)",
          description:
            "Our Signature Bk Café© Coffee With Chocolate Flavour \nQty: 240 Gms| Kcal: 246 | Carbs 41 Gms| Sugar: 6.6 Gms| Fat: 5.8 Gms| Saturated fat: 26.4 Gms| Protein: 4.3 Gms| Sodium: 57.6 Mg \nContains: Soybean, Milk",
          id: "125956405",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/269763e3-57e2-408c-8794-fa1d93f6557f_1f856e6d-1ae2-4189-a2ee-9632454304bd.jpg",
          name: "Café Latte (Regular)",
          description:
            "Our Signature Bk Café© Coffee With Steamed Milk. \nQty: 330 Gms| Kcal: 151 | Carbs 13.5 Gms| Sugar: 6.8 Gms| Fat: 8.9 Gms| Saturated fat: 0 Gms| Protein: 4.8 Gms| Sodium: 108.9 Mg \nContains: Milk",
          id: "149370802",
          price: 18900,
        },
        {
          imageId: "spupzyvwrsv4yjegs4gf",
          name: "Classic Cold Coffee",
          description:
            "Our signature BK Café Coffee ice blended with milk & cream. Qty: 350 Gms| Kcal: 215 | Carbs 24.2 Gms| Sugar: 8.9 Gms| Fat: 9.5 Gms| Saturated fat: 21 Gms| Protein: 7 Gms| Sodium: 140 Mg \nContains: Soybean, Milk",
          id: "127472139",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/4cbfee8b-6c9d-41b4-9f1e-cacffd38bc85_0240561a-17e0-4168-883c-640554b20242.jpg",
          name: "Mocha Cappuccino (Regular)",
          description:
            "Our Signature Bk Café© Coffee With Chocolate Flavour \nQty: 330 Gms| Kcal: 338.5 | Carbs 56.4 Gms| Sugar: 9 Gms| Fat: 7.9 Gms| Saturated fat: 36.4 Gms| Protein: 5.9 Gms| Sodium: 79.2 Mg \nContains: Soybean, Milk",
          id: "125956406",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/58da1529-7c19-4302-a6b6-0bf329c9438f_bdbf7b22-4d31-4eeb-bae4-d0bf028a2aac.jpg",
          name: "Mocha Frappe",
          description:
            "Chocolate Flavoured Cold Coffee Topped With Cream \nQty: 350 Gms| Kcal: 328 | Carbs 48.3 Gms| Sugar: 10.4 Gms| Fat: 10.2 Gms| Saturated fat: 38.2 Gms| Protein: 8.7 Gms| Sodium: 94.5 Mg \nContains: Milk",
          id: "127472140",
          price: 26900,
        },
        {
          imageId: "892cc87c97a1d6a5bb1ef8b6b813c56a",
          name: "Vanilla Chocolate Muffin",
          description:
            "New Softer And Fluffer Buttery Vanilla Cake Topped With Chocolate Chips. Contains Egg. \nQty: 80 Gms| Kcal: 289.5 | Carbs 42 Gms| Sugar: 21.1 Gms| Fat: 12 Gms| Saturated fat: 5.1 Gms| Protein: 4.3 Gms| Sodium: 218.8 Mg \nContains: Soybean, Milk",
          id: "128073300",
          price: 12900,
        },
        {
          imageId: "ed2b1f89b7a41a771b9cafbadc4e20c4",
          name: "Choco Chip Muffin",
          description:
            "New Softer And Fluffer Chocolate Cake Topped With Chocolate Chips. Contains Egg. \nQty: 80 Gms| Kcal: 291.9 | Carbs 42 Gms| Sugar: 15.9 Gms| Fat: 11.9 Gms| Saturated fat: 4.5 Gms| Protein: 0 Gms| Sodium: 253.9 Mg \nContains: Soybean, Milk",
          id: "128073301",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/23/acb451ce-f37a-4ad3-975a-16a403ade1d1_05296321-5493-4013-9302-3572814f0254.jpg",
          name: "Iced Latte",
          description:
            "100% Arabica Espresso poured over milk and ice. | Qty: 330 Gms| Kcal: 141.9 | Carbs 22.18 Gms| Sugar: 19.47 Gms| Fat: 2.97 Gms| Saturated fat: 0 Gms| Protein: 6.3 Gms| Sodium: 6.17 Mg\nContains: Gluten, Soybean , Milk , Sesame seeds",
          id: "146633548",
          price: 19900,
        },
      ],
    },
    {
      title: "Meal Combos(Save Rs. 60)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/29/c34ab585-5ae0-4db3-bdf5-b14b32da7064_d7dac769-ede7-4bcd-ab98-72c84b873589.jpg",
          name: "Crispy Chicken Combo",
          description:
            "Crispy Chicken Patty, Onion & Our Signature Tomato Herby Sauce. Served with Crispy Fries & Cola. \nKcal: 881.7 | Carbs 541.7 Gms| Sugar: 59.5 Gms| Fat: 29.5 Gms| Saturated fat: 11.6 Gms| Protein: 17.4 Gms| Sodium: 1159.2 Mg \nContains: Gluten, Soybean, Milk, Sesame seeds",
          id: "47184233",
          price: 26700,
        },
      ],
    },
    {
      title: "Sides",
      items: [
        {
          imageId: "bc9b17fa358d5638113f40bea4b16e50",
          name: "(4Pc) Crunchy Chicken Nuggets",
          description:
            "Tender Crunchy Chicken Nuggets Fried To Golden Brown Perfection. \nQty: 70 Gms| Kcal: 168.7 | Carbs 14.3 Gms| Sugar: 0.3 Gms| Fat: 7.5 Gms| Saturated fat: 3.8 Gms| Protein: 10.9 Gms| Sodium: 5.9 Mg \nContains: Soybean, Milk",
          id: "127472141",
          price: 9500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/16/01dd4eb7-20a4-48e4-8ab9-eb1813af3376_8f4c0a4e-84eb-4d90-8a09-659b2938a7a9.jpg",
          name: "BK Veg Pizza Puff",
          description:
            '"Crispy savoury pastry with a filling of tomato sauce with corn, carrots, bell peppers, peas and mozzarella. Caution: Served Hot. \nQty: 80 Gms| Kcal: 208 | Carbs 27.56 Gms| Sugar: 1.28 Gms| Fat: 8.04 Gms| Saturated fat: 4.6 Gms| Protein: 6.3 Gms| Sodium: 341 Mg \nContains: Gluten, Soybean , Milk "',
          id: "147513471",
          price: 4900,
        },
        {
          imageId: "b5eb8f54277f8d8a1cadc4c993618a2c",
          name: "(6Pc) Crunchy Chicken Nuggets + 1 Dip",
          description:
            "Tender Crunchy Chicken Nuggets Fried To Golden Brown Perfection. Served With 1 Dip \nQty: 126 Gms| Kcal: 336.9 | Carbs 25 Gms| Sugar: 2.2 Gms| Fat: 18.8 Gms| Saturated fat: 7 Gms| Protein: 16.8 Gms| Sodium: 283 Mg \nContains: Soybean, Milk",
          id: "127472142",
          price: 16900,
        },
        {
          imageId: "nsqnarjlxmzioj5zotty",
          name: "Fiery Hell Dip",
          description:
            "Qty: 20 Gms| Kcal: 81.4 | Carbs 3.3 Gms| Sugar: 1.8 Gms| Fat: 7.4 Gms| Saturated fat: 1.3 Gms| Protein: 0.3 Gms| Sodium: 194 Mg \nContains:  Soybean , Milk",
          id: "101197488",
          price: 2381,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/2b23de82-807f-4a2b-bf24-5819aeb95989_960f4062-c049-4bc2-b90b-69690014d5fe.jpg",
          name: "Masala Hashbrown",
          description:
            "Fried golden brown potatoes with a desi masala twist.\nQty: 60 Gms| Kcal: 158 | Carbs 19.7 Gms| Sugar: 1 Gms| Fat: 8.1 Gms| Saturated fat: 3.9 Gms| Protein: 1.7 Gms| Sodium: 500 Mg\nContains: Gluten, Soybean",
          id: "101197494",
          price: 4900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/90596c36-c40b-44e1-a87b-556104893347_81a2c8d2-e722-473a-a52a-aab5bc44ae95.jpg",
          name: "Peri Peri Spice Mix",
          description:
            "Peri Peri Spice Mix. \nQty: 5 Gms| Kcal: 12.8 | Carbs 2.2 Gms| Sugar: 0.9 Gms| Fat: 0.3 Gms| Saturated fat: 0 Gms| Protein: 0.4 Gms| Sodium: 470 Mg \nContains:  Soybean",
          id: "111845951",
          price: 2857,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/aeac450c-d789-4c00-a593-05e352a5b325_4eab783e-7b7d-4401-b8e4-64b1fba9bbf5.jpg",
          name: "Veggie Strips(5 Pcs)",
          description:
            "Qty: 85 Gms| Kcal: 246.8 | Carbs 30.1 Gms| Sugar: 3.5 Gms| Fat: 11.9 Gms| Saturated fat: 5.7 Gms| Protein: 4.8 Gms| Sodium: 441.4 Mg \nContains: Gluten, Soybean",
          id: "101197495",
          price: 5900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
          name: "Medium Fries",
          description:
            "The Perfect Crispy Partner.\nQty: 114 Gms| Kcal: 332.5 | Carbs 445.39 Gms| Sugar: 0 Gms| Fat: 14.4 Gms| Saturated fat: 6.8 Gms| Protein: 5.9 Gms| Sodium: 528.8 Mg \nContains: Gluten",
          id: "101197496",
          price: 11900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
          name: "King Fries",
          description:
            "The Perfect Crispy Partner \nQty: 156 Gms| Kcal: 455 | Carbs 609.48 Gms| Sugar: 0 Gms| Fat: 19.7 Gms| Saturated fat: 9.31 Gms| Protein: 8 Gms| Sodium: 723.7 Mg \nContains: Gluten",
          id: "101197497",
          price: 13900,
        },
        {
          imageId: "bs5oedbj1ihduwvbuj8z",
          name: "Saucy Fries",
          description: "Crispy French Fries, Loads of Cheese, Yum!",
          id: "136451185",
          price: 14500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/3408bb90-e96a-42e3-abe2-0381dd1230d1_08dadded-e4ce-4be6-8ff9-0935033d8887.jpg",
          name: "Medium Peri Peri Fries",
          description:
            "Crispy Fries With Tangy Peri Peri Spice.  \nQty: 119 Gms| Kcal: 345.3 | Carbs 447.6 Gms| Sugar: 0.9 Gms| Fat: 14.7 Gms| Saturated fat: 6.8 Gms| Protein: 6.3 Gms| Sodium: 998.8 Mg \nContains: Soybean, Milk",
          id: "101197498",
          price: 14400,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/fa747205-3c4d-497c-a948-65f3c224a4cf_11129959-8182-4b8c-bbb5-db49665fba19.jpg",
          name: "King Peri Peri Fries",
          description:
            "Crispy Fries With Tangy Peri Peri Spice.  \nQty: 161 Gms| Kcal: 467.8 | Carbs 611.7 Gms| Sugar: 0.9 Gms| Fat: 20 Gms| Saturated fat: 9.3 Gms| Protein: 8.4 Gms| Sodium: 1193.7 Mg \nContains: Gluten, Soybean",
          id: "72692511",
          price: 15900,
        },
        {
          imageId: "mgipyyoulmma7rjwofoj",
          name: "Peri Peri Fries",
          description: "Crispy fries with peri peri spice. Hot indeed.",
          id: "51876584",
          price: 14400,
        },
      ],
    },
    {
      title: "Beverages",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
          name: "Coca Cola Medium",
          description:
            "Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38",
          id: "77589084",
          price: 9500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/4/c31f456d-3e06-41cf-bc2b-1219e2c18f28_76e2a34b-0158-4df7-9320-c7f188810bfc.jpg",
          name: "Fanta Medium",
          id: "138609328",
          price: 9500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/cddbd1f0-c2fc-4af3-a108-b482cc0027e2_0564277b-594b-4aa9-a7cd-6796803092fc.jpg",
          name: "Chocolate Thick Shake",
          description:
            "Qty:  Gms300 ML| Kcal: 496.08 | Carbs 87.69 Gms| Sugar: 61.44 Gms| Fat: 11.28 Gms| Saturated fat: 7.17 Gms| Protein: 10.95 Gms| Sodium: 10.68 Mg \nContains: , Soybean , Milk",
          id: "47184195",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/8b4f61be-e218-4a8e-8548-193b08dc6a37_84575246-015c-471f-9d5b-28d4c90c0c49.jpg",
          name: "Mango Thick Shake",
          description:
            "Our Signature Mango Thick Shake. \nQty: 300 ML| Kcal: 393.3 | Carbs 65.2 Gms| Sugar: 57.5 Gms| Fat: 10 Gms| Saturated fat: 6.4 Gms| Protein: 10.7 Gms| Sodium: 8.9 Mg \nContains: Soybean, Milk",
          id: "47184193",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/689abf51-2fb7-4b92-8cae-e629dce1ea23_d5f2c362-edb4-4ab8-b87c-2cd708c668c5.jpg",
          name: "Berry Blast Thick Shake",
          description:
            "Our Signature Black Currant Thick Shake \nQty: 300 ML| Kcal: 474 | Carbs 90.9 Gms| Sugar: 68.2 Gms| Fat: 8.8 Gms| Saturated fat: 6 Gms| Protein: 7.9 Gms| Sodium: 150.9 Mg \nContains: Soybean, Milk",
          id: "71899402",
          price: 18900,
        },
        {
          name: "Medium Thums Up",
          id: "140340998",
          price: 9500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/9/11dabd42-5108-4f5d-a078-c5c8f7cbccdd_47da71ba-8478-4dd4-aa38-37652d1a5f26.jpg",
          name: "Coke Zero Can",
          description: "Coca Cola Zero Can 330ml",
          id: "150368828",
          price: 6667,
        },
      ],
    },
    {
      title: "Chicken Wings.",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/bc4b7857-eaed-4186-8283-56ce3f43cc2f_7f032f25-ae37-4eff-9815-c8301b85b831.jpg",
          name: "Chicken Wings Fried - Two Pieces",
          description:
            "Chicken Wings Fried To Perfection. \nQty: 70 Gms| Kcal: 150 | Carbs 8.1 Gms| Sugar: 0 Gms| Fat: 9.3 Gms| Saturated fat: 3.6 Gms| Protein: 15.9 Gms| Sodium: 404 Mg \nContains: Gluten, Soybean, Milk",
          id: "123900559",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/0879980b-5f95-459b-b995-48d42143a3c6_aab3a5ad-b4be-45fe-b5ab-a9bae30d64af.jpg",
          name: "Chicken Wings Fried - Four Pieces",
          description:
            "Chicken Wings Fried To Perfection. \nQty: 140 Gms| Kcal: 300 | Carbs 16.2 Gms| Sugar: 0 Gms| Fat: 18.6 Gms| Saturated fat: 7.2 Gms| Protein: 31.8 Gms| Sodium: 807.8 Mg \nContains: Gluten, Soybean, Milk",
          id: "123881717",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/3549624e-e8c0-4d62-af4d-dbb4db34523b_5c26679f-f445-4e09-a710-412c3970ac2a.jpg",
          name: "Chicken Wings Fried - Ten Pieces",
          description:
            "Chicken Wings Fried To Perfection. \nQty: 350 Gms| Kcal: 750 | Carbs 40.1 Gms| Sugar: 0 Gms| Fat: 47 Gms| Saturated fat: 18.5 Gms| Protein: 79.9 Gms| Sodium: 2020 Mg \nContains: Gluten, Soybean, Milk",
          id: "56584339",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/3549624e-e8c0-4d62-af4d-dbb4db34523b_5c26679f-f445-4e09-a710-412c3970ac2a.jpg",
          name: "Chicken Wings Fried - Fifteen Pieces",
          description:
            "Chicken Wings Fried To Perfection. \nQty: 525 Gms| Kcal: 1125 | Carbs 60.8 Gms| Sugar: 0 Gms| Fat: 69.8 Gms| Saturated fat: 27 Gms| Protein: 119.3 Gms| Sodium: 3030 Mg \nContains: Gluten, Soybean, Milk",
          id: "56584338",
          price: 57900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/9d569500-1505-4d4c-a25b-cad67011116e_0572632e-672d-4a13-b94c-d2b815e7b210.jpg",
          name: "Boneless Wings Regular",
          description:
            "4Pcs Boneless Chicken Bites \nQty: 95 Gms| Kcal: 213 | Carbs 16 Gms| Sugar: 0 Gms| Fat: 9.2 Gms| Saturated fat: 5.2 Gms| Protein: 16.8 Gms| Sodium: 555 Mg \nContains: Gluten, Soybean, Milk",
          id: "64907039",
          price: 16900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/7a1ef1a7-8d6b-4126-9658-8e953901fa37_c8fc335b-7b6d-45ff-8843-cbeaf10fb9d8.jpg",
          name: "Boneless Wings Large",
          description:
            "7Pcs Boneless Chicken Bites \nQty: 165 Gms| Kcal: 371 | Carbs 27.9 Gms| Sugar: 0 Gms| Fat: 16 Gms| Saturated fat: 9.1 Gms| Protein: 29.2 Gms| Sodium: 963.8 Mg \nContains: Gluten, Soybean, Milk",
          id: "64907038",
          price: 26900,
        },
      ],
    },
  ],
  48750: [
    {
      title: "Extras",
      items: [
        {
          imageId: "sxwrsgtz0a6uqce4cdne",
          name: "Fried Noodles",
          id: "11261333",
          price: 3000,
        },
        {
          imageId: "x16teudemychgktovru9",
          name: "Sichuan Sauce",
          description: "| serves 1",
          id: "106425931",
          price: 3000,
        },
        {
          imageId: "qkziojrlqig2lgqwtl9o",
          name: "Steamed Rice",
          id: "11261330",
          price: 20000,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          imageId: "bkjexbspqu9aszs1efp1",
          name: "Choco Lava Rolls",
          id: "11871430",
          price: 28000,
        },
        {
          imageId: "zjp2ix8anx7zjuhc0e6x",
          name: "Crispy Honey Noodles",
          description: "| serves 1 |",
          id: "11261334",
          price: 20000,
        },
      ],
    },
  ],
  60181: [],
  31489: [
    {
      title: "Pot Rice",
      items: [
        {
          imageId: "9e2e059b65d3855823ca507595ebe350",
          name: "Chicken Pot Rice",
          description: "Serves 2",
          id: "118214253",
        },
        {
          imageId: "b070b7161ba21152911305c9ef19d383",
          name: "Veg Manchurian Pot Rice",
          description: "Serves 1",
          id: "118214248",
          price: 42500,
        },
        {
          imageId: "a2fe0e7f6d4250df5ba4c37feb936f72",
          name: "Paneer Pot Rice",
          description: "Serves 1",
          id: "118214250",
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          imageId: "c421918afec28477d19a4fd1726f5cbb",
          name: "7 Up",
          description: "Serves 1",
          id: "126666288",
          price: 6000,
        },
        {
          imageId: "88ac3e904d023c08fab7760349831143",
          name: "Coolberg Cranberry",
          description: "Serves 1",
          id: "115271945",
          price: 12500,
        },
        {
          imageId: "c625bfc8302aee8b090fd08ac485cb6d",
          name: "Coolberg Peach",
          description: "Serves 1",
          id: "115271944",
          price: 12500,
        },
        {
          imageId: "b20438df296526bbc0493fef83368cbe",
          name: "Masala Shikanji",
          description: "Serves 1",
          id: "121918247",
          price: 9900,
        },
        {
          imageId: "4078524cba8676a8a807681708cd4f3b",
          name: "Peach Ice Tea",
          description: "Serves 1",
          id: "121918245",
          price: 9900,
        },
        {
          imageId: "fac1ddd7b1728bb4b6dfd4f54c134ab2",
          name: "Aam Panna",
          description: "Serves 1",
          id: "121918246",
          price: 9900,
        },
        {
          imageId: "bb6b1ef0841d211b629719a4c3deb623",
          name: "Lemon Ice Tea",
          description: "Serves 1",
          id: "121918248",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/26/8746c52c-c218-45cb-931f-a6f35a9bd419_52d649a7-0d8f-473d-b92c-992d17300eca.jpg",
          name: "Water",
          description: "Serves 1",
          id: "138164329",
          price: 3000,
        },
      ],
    },
    {
      title: "Dessert",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/21/3aeaee91-6bce-45f1-bad4-0ee4da6e3fef_7a319038-77af-47d2-b67b-b5868a48f668.jpg_compressed",
          name: "Black forest Mousse Cake",
          description:
            "Serves 1 | Evergreen cake recipe, served in a mousse style dessert",
          id: "133607723",
          price: 5900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/8d88c9a8-e8fc-437b-9ecd-d49caebeb971_fd0cb446-3c27-45fe-a35f-81c12883d03e.jpg_compressed",
          name: "Choco Lava",
          description:
            "Serves 1 | Rich chocolate cake with molten chocolate center, served warm.",
          id: "80594032",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/99e4d3ff-d474-4665-bc1b-25a172302149_836b958b-9e77-496c-a7a0-a1fc6d7cae2e.jpg_compressed",
          name: "Salted Caramel Choco Mousse",
          description:
            "Serves 1 | Layers of Salted Caramel mousse and Choco mousse served chilled",
          id: "133607724",
          price: 5900,
        },
      ],
    },
    {
      title: "Extras",
      items: [
        {
          imageId: "ee5eff88d414fbb62db96955497b3506",
          name: "Crispy Noodles",
          description: "Serves 1",
          id: "123355668",
          price: 2000,
        },
        {
          imageId: "7fad74d38be24e7be6ebc8eebbb3ee4e",
          name: "Extra Schezwan Dip",
          description: "Serves 1",
          id: "104899838",
          price: 2000,
        },
        {
          imageId: "756739f826fd170b5ed4644f61a2d824",
          name: "Extra Sweet Chilli Dip",
          description: "Serves 1",
          id: "104899840",
          price: 2000,
        },
        {
          imageId: "b7590e951c596a6c3afa775d445e5e72",
          name: "Extra Momo Chutney",
          description: "Serves 1",
          id: "104899844",
          price: 2000,
        },
        {
          imageId: "8389646190f90fdc187c9e4bc3f79b0c",
          name: "Extra Mayo Dip",
          description: "Serves 1",
          id: "104899839",
          price: 2000,
        },
      ],
    },
  ],
  31983: [],
  53642: [
    {
      title: "Recommended",
      items: [
        {
          imageId: "68e17b6856045111d70d4e8d2b105ed2",
          name: "Happiness in mini version + 1 FREE Delight",
          description:
            "Buy Chocolate Mini Waffle Combo pack of 6 and select 1 FREE waffle or pancake from our top picks.",
          id: "80512552",
          price: 51119,
        },
        {
          imageId: "c09a7c9a2104893edc7c800a1f38d858",
          name: "Mini Treats",
          description:
            "Treat your tribe! Save Rs. 67 flat & enjoy Mini Waffle pack of 4 (assorted) + Mini Waffle pack of 4 (chocolate).",
          id: "92660694",
          price: 59944,
        },
        {
          imageId: "fc529e8c5a543ceb729d7786d1b01858",
          name: "Best Of The Best",
          description:
            "Share our besties with your besties! Choose any 5 best-selling Waffle from below list for a flat price! (Naked Nutella or Triple Chocolate or Belgian Chocolate Milk or Belgian Chocolate Dark or KitKat Waffle or Red Velvet).",
          id: "96363990",
          price: 66000,
        },
        {
          imageId: "31ce167dc68121669c2f4a7f7ca469c0",
          name: "Keep Cake & Celebrate + 1 FREE Delight",
          description:
            "Choose any one double layer waffle cake- Death by chocolate Waffle Cake (Double Layer)/ Red velvet waffle Cake (Double Layer)/ Kiki and Oreo Cream waffle cake (Double Layer) and select 1 FREE waffle or pancake from our top picks.",
          id: "92660686",
          price: 58052,
        },
        {
          imageId: "84d1b25b2937208843debf5e27449c8d",
          name: "The Belgian Club + 1 Free Delight (Dark)",
          description:
            "Buy 3 Belgian Chocolate waffle (Dark) and get a free delight (Free Delight: kiki and oreo cream pancake or triple chocolate pancake or belgian chocolate waffle or maple butter waffle)",
          id: "80512577",
          price: 46713,
        },
        {
          imageId: "c8d290dc8bc090cc9e4e70a5f5f039fd",
          name: "The Belgian Club + 1 Free Delight (Milk)",
          description:
            "Buy Belgian chocolate [Milk] waffle and select 1 FREE waffle or pancake from our top picks.",
          id: "80512554",
          price: 46713,
        },
        {
          imageId: "8fb65da221d2a8ca558109ebfb896ddb",
          name: "Treats For Two",
          description:
            "1 for you, 1 for me & 1 for us. Save Rs. 52 flat & enjoy Belgian Chocolate Milk Waffle + Red Velvet Waffle + Signature Cold Coffee.",
          id: "96295047",
          price: 40910,
        },
        {
          imageId: "b335b375069d6afd70920379a397a587",
          name: "Make At Home @ Rs.375",
          description:
            "Save Rs. 72. Make our delicious waffles or pancakes in the comfort\nof your home with our Chocolate Oats Pancake & Waffle Mix !",
          id: "96295093",
          price: 37500,
        },
        {
          imageId: "18c3d1aa70f3f6e4fcb4a0a8ed99774b",
          name: "The WaffShake Duo",
          description: "Triple Chocolate Waffle + Belgian Chocolate Shake.",
          id: "80006915",
          price: 34667,
        },
        {
          imageId: "7d176da88367df0bbdcc1f8829231d29",
          name: "Make At Home @ Rs.349",
          description:
            "Save Rs. 78. Make our delicious waffles or pancakes in the comfort \nof your home with our Original Pancake & Waffle Mix !",
          id: "96295092",
          price: 34900,
        },
        {
          imageId: "hs4fcgudajhidwcn3xpy",
          name: "Mini Waffle Box of 4 - Chocolate",
          description:
            "Can't Pick One? Try A Carefully Curated Assortment of our Bestselling Chocolate Favorites. Includes Naked Nutella, Belgian Chocolate (Milk), Chocolate Overload (Dark) And Dark & White Fantasy Mini Waffles In An All-In-One Combo Pack.",
          id: "80006911",
          price: 33452,
        },
        {
          imageId: "d7kc3dqkztnvfmbq5tjc",
          name: "Mini Waffle Box of 6 - Chocolate",
          description:
            "Can't Pick One? Try A Carefully Curated Assortment of our Bestselling Chocolate Favorites. Includes Naked Nutella, Belgian Chocolate (Dark), Belgian Chocolate (Milk), Kit kat, Chocolate Overload (Milk) And Dark & White Fantasy Mini Waffles In An All-In-One Combo Pack.",
          id: "80006912",
          price: 51119,
        },
        {
          imageId: "nqtcnakfpwk4dhaum1uq",
          name: "Mini Waffle Box of 6 - Assorted",
          description:
            "In The Mood For Even More Variety? Try A Carefully Curated Assortment of Some of our Fan Favorites. Includes Naked Nutella, Belgian Chocolate (Milk), Chocolate Overload (Milk), Dark & White Fantasy, Red Velvet And Berry Red Velvet Mini Waffles In An All-In-One Combo Pack.",
          id: "80006914",
          price: 49005,
        },
        {
          imageId: "hiqwcprb2zpypkhgxoce",
          name: "Mini Waffle Box of 4 - Assorted",
          description:
            "In The Mood For Variety? Try A Carefully Curated Assortment Of Some Of Our Fan Favorites. Includes Belgian Chocolate (Milk), Almond Cocoa Butter, Red Velvet And Berry Red Velvet Mini Waffles In An All-In-One Combo Pack.",
          id: "80006913",
          price: 33190,
        },
        {
          imageId: "tvvdhhxv1ucm0xnhbdfx",
          name: "Death by Chocolate Waffle Cake (Single Layer)",
          description:
            "Signature dark chocolate single layer waffle cake layered with creamy White, Milk and Dark melted Belgian Chocolate. Triple the chocolate, triple the fun! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
          id: "80006905",
          price: 36048,
        },
        {
          imageId: "034cb07146e0fcca254a1334f71d2f9c",
          name: "Almond Brownie Waffle Cake (Single Layer)",
          description:
            "The Best Of Two Worlds In A Single Layer Cake - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
          id: "119009666",
          price: 38050,
        },
        {
          imageId: "bk95q53yhvqiqob2b4o9",
          name: "Kiki & Oreo Waffle Cake (Single Layer)",
          description:
            "Signature black velvet single layer waffle cake layered thick with Kiki spread and topped with Crushed Oreos. A universal favorite! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
          id: "80006907",
          price: 38048,
        },
        {
          imageId: "f0wxd5msxfmrwlbmto1v",
          name: "Berry Red Velvet Waffle Cake (Single Layer)",
          description:
            '"Original Red Velvet Single Layer Waffle Cake With Strawberry Compote + Creamy Cheesecake* filling And Melted White Chocolate Topped With Red Velvet Crumbs. A True Original - Enhanced!\n*Cheesecake flavour filling, contains spray dried cheese powder\n (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)"',
          id: "96295287",
          price: 36048,
        },
        {
          imageId: "g7v2sn7eezaricdwqcfz",
          name: "Death by Chocolate Waffle Cake (Double Layer)",
          description:
            "Signature dark chocolate double layer waffle cake layered inside and out with creamy White, Milk and Dark melted Belgian Chocolate. Triple the chocolate, triple the fun! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
          id: "80006908",
          price: 58052,
        },
        {
          imageId: "ca123c7d807dc099ca8673d9fbdcd025",
          name: "Almond Brownie Waffle Cake (Double Layer)",
          description:
            "The Best Of Two Worlds In A Double Layer Cake - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
          id: "119009664",
          price: 60050,
        },
      ],
    },
  ],
  76024: [
    {
      title: "500 Ml Ice Creams",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/54eaa560-3020-4673-8e25-f4ed972d4028_993d57a1-d87f-48dc-8d7a-0093966eaf25.jpg_compressed",
          name: "Coffee Walnut Ice Cream 500ml",
          description: "Serves 5 | Kcal/serving: 172",
          id: "98553760",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/73d99c5f-d3b9-4ca3-82b9-0e4ce50b447b_86d8a488-2f77-4b80-bb9f-b141b43ecc2b.jpg_compressed",
          name: "Chocochips Ice Cream 500ml",
          description:
            "Serves 7 | Melt in mouth chocolate chips in every spoon. Truly, a decadent ice cream experience. Kcal/serving: 204",
          id: "63623020",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/175854ba-e283-437c-82fb-da0155c4227c_6bf27cab-feba-45ef-9d05-b35e3eea7ef1.jpg_compressed",
          name: "Sitaphal Ice Cream 500ml",
          description:
            "Serves 5 | A delightful ice cream with a rich, creamy texture. It offers luscious chunks of sitaphal in a pack of 500 ml.",
          id: "98554032",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/6fa2256f-2797-40a2-bdd9-f5fb5885a1c7_6cdbfbf9-c4f2-43af-b27a-3f9e5e993d90.jpg_compressed",
          name: "Alphonso Mango Ice Cream 500ml",
          description:
            "Serves 5 | The king of fruits adds a delightful flavour to your scoop. The perfect taste of Rich and Pure Ratnagiri Alphonso Mango in every bite. Kcal/serving: 138",
          id: "63623026",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/6ae94540-f31c-4f79-acaa-c2091d51d89d_3f532a6c-0bc6-4ea5-aa38-3e78a3e6085f.jpg_compressed",
          name: "French Vanilla Ice Cream 500ml",
          description: "Serves 5 | Kcal/serving: 151",
          id: "98553839",
          price: 33898,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/75c409b7-a2a5-418a-98e3-b2d6c44fcccf_ab2d6357-6232-4431-9d81-c9a035e90b3d.jpg_compressed",
          name: "Anjeer Ice Cream 500ml",
          description:
            "Serves 5 | The smooth and creamy texture of Anjeer Ice Cream. Great for consuming anytime! Kcal/serving: 156",
          id: "98553710",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/fdd23dfd-fc74-4cb5-8bd0-46b613c4f2f4_f8e9f5f2-78da-4971-b7d5-656f3b71c7c2.jpg_compressed",
          name: "Madagascar Chocolate Ice Cream 500ml",
          description:
            "Serves 5 | Extra rich & smooth Madagascar Ice Cream, takes chocolate indulgence to a level beyond description. Kcal/serving: 173",
          id: "98553915",
          price: 38136,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/029f2b0f-4aa7-4772-980d-acc6528b8aee_0cc76566-9995-4756-9e3e-c88aa10b381f.jpg_compressed",
          name: "Belgian Chocolate Ice Cream 500ml",
          description: "Serves 5 | Kcal/serving: 178",
          id: "98553737",
          price: 38136,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/5eace734-6f56-4fa2-9e5c-b1a6fa793ee0_3f86480b-1b14-4688-82e1-46392f5521b9.jpg_compressed",
          name: "Strawberry Cheesecake Ice Cream 500ml",
          description:
            "Serves 5 | Super fruity, tangy, sweet and incredibly creamy - Nic's strawberry cheesecake variant contains all the essentials for a perfect dessert experience. Kcal/serving: 174",
          id: "98554036",
          price: 38136,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/7c8cc135-a1da-49d3-b6f1-38df66800a52_3586b738-78d8-4850-81cd-1b065ce40a55.jpg_compressed",
          name: "Mixed Berries Ice Cream 500ml",
          description:
            "Serves 5 | Crafted with imported Californian Cranberries, Blueberries and Strawberries. This ice cream is perfect to give you a berry rush! Kcal/serving: 153",
          id: "98553922",
          price: 33898,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/89cc7aa6-5b6f-4f96-90b7-b16b933d7cd4_15e2925b-5c55-405e-a7e1-79a9209873d5.jpg_compressed",
          name: "Sea Salt Caramel Ice Cream 500ml",
          description:
            "Serves 5 | A decadent swirl of Mediterranean sea salt & crunch of crispy pearls ice cream for a tantalizing combination of taste and texture. Kcal/serving: 179",
          id: "98553993",
          price: 38136,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/10/7d45055e-9dae-4d22-8b02-5b16468561fc_de219033-33b6-4803-ba31-a502aac16e48.jpg_compressed",
          name: "Roasted Almond Ice Cream 500ml",
          description:
            "Serves 5 | Roasted almonds is a must-have. Its crunchy texture with its singular flavour is unparalleled. Also available in sugarless. Kcal/serving: 172",
          id: "98553983",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/cc208e55-2bcc-4458-9329-638cbf25db3b_c82e6ec6-48ce-43d2-a255-df4c835d0f4e.jpg_compressed",
          name: "Paan Ice Cream 500ml",
          description:
            "Serves 5 | Dessert? Or Mouth-Freshner? A delightfully tasty combination giving you the best of both. Kcal/serving: 153",
          id: "98553960",
          price: 30932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/8924b143-9c78-42ae-ba9d-710046a64d0f_8c27f0ec-7ae9-482d-a492-dd454c9ed735.jpg_compressed",
          name: "Kesar Pista Ice Cream 500ml",
          description:
            "Serves 5 | A perfect combination of divine richness. Relish the royal treat of Kesar and Pista Ice Cream. Kcal/serving: 163",
          id: "98553912",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/8489f9de-faf6-496f-b97b-bd45bacedf2a_551b1606-07cc-4b15-a74d-0d957dacf3ee.jpg_compressed",
          name: "Cookies N Cream Ice Cream 500ml",
          description:
            "Serves 5 | Dedicated to lovers of cookies. A fun scoop of Oreo cookies in your Ice Cream. Kcal/serving: 167",
          id: "98553818",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/3c481ca9-1846-4d83-8a27-59e2bfbda16e_70b036dc-0844-4cb4-a15e-a980a3e78bc9.jpg_compressed",
          name: "Tender Coconut Ice Cream 500ml",
          description:
            "Serves 5 | Relish the refreshing and fresh bites of Tender Coconut, only in NIC's Tender Coconut. Kcal/serving: 143",
          id: "98554044",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/d7481db1-38ff-4825-8581-b292340e5bb1_29721ece-848a-45ad-a02b-a4228b7f3a6b.jpg_compressed",
          name: "Strawberry Ice Cream 500ml",
          description: "Serves 5 | Kcal/serving: 132",
          id: "98554041",
          price: 27542,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/11/40618f77-e078-4dd7-8a5f-c6d4c249bd71_927e15f0-dcdd-46f5-bcfe-06d27120f008.jpg_compressed",
          name: "Dryfruit Overload Ice Cream 500ml",
          description:
            "Serves 5 | A scoop of Ice Cream Loaded with Cashews, Almonds, Pistas and Kishmishs. Needs no further description. Kcal/serving: 172",
          id: "98553827",
          price: 33898,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/dccf5261-d4f0-4abe-af3e-56e72ee1f7cc_eabefdaf-3ec7-4d24-8e23-2f7a730ec9ff.jpg_compressed",
          name: "Jaggery Almond Ice Cream 500ml",
          description:
            "Serves 5 | Pure Jaggery and Crunchy Almond come together in this playful ice cream delight. Kcal/serving: 181",
          id: "98553861",
          price: 30932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/26/3136e37d-a12a-47db-acbc-9dbdef87efd2_1967d5c0-cdc0-48f5-bf12-045917641a91.png_compressed",
          name: "Velvety Nutella Ice Cream 500ml",
          description:
            "Serves 5 | Indulge in Creamy Bliss: Nutella Ice Cream Crafted with care, each scoop is a delightful balance of creamy dairy and Nutella's signature blend of cocoa and hazelnuts, creating a harmonious symphony of taste and texture. Whether enjoyed on its own or as a delightful complement to your favorite desserts, this ice cream promises a moment of pure indulgence.",
          id: "135328727",
          price: 33898,
        },
      ],
    },
    {
      title: "100 Ml Ice Creams",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/48f4ad8b-5d2b-4bd5-a179-b1c41a0b458a_6cadfac6-65ec-426c-937f-7eafdaf20ad4.jpg_compressed",
          name: "French Vanilla Ice Cream 100ml",
          description:
            "Serves 1 | Experience the bliss of pure vanilla beans extract in every bite of this Ice Cream. Kcal/serving: 151",
          id: "60093763",
          price: 8475,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/339e2e09-4914-4407-91e6-b1cf3540c9f1_a9db9a8d-9c99-4871-a837-161d58f38b36.jpg_compressed",
          name: "Chocochips Ice Cream 100ml",
          description:
            "Serves 1 | Melt in mouth chocolate chips in every spoon. Truly, a decadent ice cream experience. Kcal/serving: 204",
          id: "47098116",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/26/a9226fb8-b840-4049-b153-7b05c1e4df2c_bca9143b-f0e7-4e5d-b402-23bbb617ea5a.jpg_compressed",
          name: "Sitaphal Ice Cream 100ml",
          description:
            "Serves 1 | A tropical delight in a 100 ml tub. This one is hard to put down and made for every mood.",
          id: "47097995",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/c0539797-9a74-4f58-94bc-f229a905a597_8950ce42-480f-446f-83a0-086597da1477.jpg_compressed",
          name: "Anjeer Ice Cream 100ml",
          description:
            "Serves 1 | The smooth and creamy texture of Anjeer Ice Cream. Great for consuming anytime! Kcal/serving: 156",
          id: "47098120",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/24612c68-d24d-45cd-8459-e5cc06eb97d1_4b0fcb2b-57da-4c9d-ba92-4b668dea9c87.jpg_compressed",
          name: "Madagascar 100ml",
          description:
            "Serves 1 | Extra rich & smooth Madagascar Ice Cream, takes chocolate indulgence to a level beyond description. Kcal/serving: 173",
          id: "151991731",
          price: 10169,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/4213710c-a71f-405d-87c6-13f807d64877_5d9771e1-fff9-4eff-af70-d1981e026bd5.jpg_compressed",
          name: "Belgian Chocolate Ice Cream 100ml",
          description: "Serves 1 | Kcal/serving: 178",
          id: "92339904",
          price: 10169,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/2f51dcd3-e790-45a6-8b1e-cd319d1e9580_d29fc4c5-45a1-4624-8a95-b28c34ab10e9.jpg_compressed",
          name: "Strawberry Cheesecake Ice Cream 100ml",
          description:
            "Serves 1 | Super fruity, tangy, sweet and incredibly creamy - Nic's strawberry cheesecake variant contains all the essentials for a perfect dessert experience. Kcal/serving: 174",
          id: "84148734",
          price: 10169,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/94220103-c234-460b-9f39-a72fa2373df5_d1bcb987-bda9-4e06-b3e2-456b3aa2ccd8.jpg_compressed",
          name: "Tender Coconut Ice Cream 100ml",
          description:
            "Serves 1 | Relish the refreshing and fresh bites of Tender Coconut, only in NIC's Tender Coconut. Kcal/serving: 143",
          id: "47098081",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/143cff2d-e7f2-4a94-91c0-1c4b7b78961e_c7611f59-2cb4-44ef-bf8a-a8e13a888dad.jpg_compressed",
          name: "Mixed Berries Ice Cream 100ml",
          description:
            "Serves 1 | Crafted with imported Californian Cranberries, Blueberries and Strawberries. This ice cream is perfect to give you a berry rush! Kcal/serving: 153",
          id: "47098099",
          price: 8475,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/0011f6e5-4418-414f-95b8-81a2173a21e6_595b8f8c-cfc9-4bca-abdf-fd328494d86b.jpg_compressed",
          name: "Roasted Almond Ice Cream 100ml",
          description:
            "Serves 1 | Roasted almonds is a must-have. Its crunchy texture with its singular flavour is unparalleled. Also available in sugarless. Kcal/serving: 172",
          id: "47098093",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/371af225-c826-4fcb-a980-82ed2ddd81e9_663e74bc-8445-4ba1-a095-3f206f9a3bd1.jpg_compressed",
          name: "Paan Ice Cream 100ml",
          description:
            "Serves 1 | Dessert? Or Mouthfreshner? A delightfully tasty combination giving you the best of both. Kcal/serving: 153",
          id: "47098097",
          price: 7627,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/41cce767-0242-446a-9732-a8ac4a5660c9_25ac164d-4699-41cd-8bee-56626c9062f7.jpg_compressed",
          name: "Strawberry Ice Cream 100ml",
          description: "Serves 1 | Kcal/serving: 132",
          id: "47947101",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/6656f60f-b1b2-4d57-a90c-2f2a46376431_22e5262c-1b32-46b2-b734-39d0b4e04a1e.jpg_compressed",
          name: "Coffee Walnut Ice Cream 100ml",
          description:
            "Serves 1 | A crunch of rich walnut blended with the fine taste of coffee in your Ice Cream. Kcal/serving: 172",
          id: "63306899",
          price: 7203,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/c4e0158e-7494-4d82-84f5-f64e7aa56788_7af42ed2-7f57-4b62-8faf-53c92cf8906a.jpg_compressed",
          name: "Sea Salt Caramel Ice Cream 100ml",
          description:
            "Serves 1 | A decadent swirl of Mediterranean sea salt & crunch of crispy pearls ice cream for a tantalizing combination of taste and texture. Kcal/serving: 179",
          id: "47098091",
          price: 10169,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/11/f54ddceb-bc84-45a9-9935-bb1485eb78ad_4263cb90-12ce-4c30-8558-d8afa7af3b07.jpg_compressed",
          name: "Dryfruit Overload Ice Cream 100ml",
          description:
            "Serves 1 | A scoop of Ice Cream Loaded with Cashews, Almonds, Pistas and Kishmishs. Needs no further description. Kcal/serving: 172",
          id: "47098114",
          price: 8475,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/46e124f6-bced-4745-a68d-c3e6bd313f4d_8b3a0bfd-9d7a-46d3-833b-8ca0f91b6998.jpg_compressed",
          name: "Alphonso Mango 100ml",
          description:
            "Serves 1 | Indulge in the luscious delight of NIC Alphonso Mango Ice Cream – a creamy fusion of velvety textures and the rich, tropical sweetness of premium Ratnagiri Alphonso mangoes, creating a taste of pure bliss. Perfect for savoring the essence of summer in every spoonful.",
          id: "151991732",
          price: 7203,
        },
      ],
    },
    {
      title: "Kulfi",
      items: [
        {
          imageId: "pyu8kydimgfocuvmv8ol",
          name: "Stick Kesar Pista Kulfi",
          description: "Kcal/serving: 161",
          id: "47098016",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/af6a910a-6915-49e0-ad74-8c1c9fc066ca_e21b6a93-d4e9-468d-b670-9ab279503a11.jpg_compressed",
          name: "Matka Malai Kulfi [pack Of 2]",
          description: "Kcal/serving: 195",
          id: "47098036",
          price: 14407,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/5198a28a-eacb-4612-a126-955c0ebf88c4_d3e10435-6734-4411-9473-0183796e24ca.jpg_compressed",
          name: "Matka Dryfruit Malai Kulfi [pack Of 2]",
          description: "Kcal/serving: 224",
          id: "47098040",
          price: 16102,
        },
        {
          imageId: "37f4351ecc137694c4537927dca3fcc0",
          name: "Slice Malai Kulfi [pack Of 3]",
          description: "Kcal/serving: 215",
          id: "47098034",
          price: 16102,
        },
        {
          imageId: "cyxr8p6nzr6mukdpu08z",
          name: "Stick Jaggery Almond Kulfi",
          id: "47098020",
          price: 5932,
        },
        {
          name: "Stick Gulkand Kulfi",
          description: "Kcal/serving: 140",
          id: "47098025",
          price: 5932,
        },
      ],
    },
    {
      title: "750 Ml Ice Creams",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/5ee1bb12-abb6-454a-8251-a7776c8c8b0d_8b45be0e-4342-424d-8653-3b1e08c18b6d.jpg_compressed",
          name: "Madagascar Chocolate Ice Cream 750ml",
          description: "Serves 7 | Kcal/serving: 173",
          id: "47098059",
          price: 46610,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/dce0e2d1-a7f6-489b-a85a-fe01eb7768f9_9ce40499-8eed-4f1a-8045-c3284e58cdc2.jpg_compressed",
          name: "Chocochips Ice Cream 750ml",
          description: "Serves 7 | Kcal/serving: 204",
          id: "47098063",
          price: 34747,
        },
      ],
    },
    {
      title: "Sugarless",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/fb6db55d-b585-4663-a5e7-53a9134f7f97_400ae844-9cc0-4f9d-8d55-e8013e1f880c.jpg_compressed",
          name: "Alphonso Mango Sugarless Ice Cream 500ml",
          description:
            "Serves 5 | Indulge guilt-free with our sugarless(Lite) Alphonso Mango Ice Cream, crafted with the finest Alphonso mangoes for a burst of tropical flavor in every spoonful. Enjoy the rich, creamy texture without the added sugars, Serving; 5 serves, serving size :100/76,energy(kcal) :180,carbohydrate(gm):21.2,protein(gm): 5.5,dietary fiber(gm): 0. 3,fat(gm): 0. 2,allergen : contains milk. May contain traces of treenuts. [Energy: 180 kcal, Allergen: milk,nuts, Carbohydrates: 21.2g]",
          id: "112796480",
          price: 36017,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/10/98ab83fc-224e-45b9-8312-0a5bb9d5cabb_460d9626-4ff1-4378-9c03-1d4c78531dc0.jpg_compressed",
          name: "Tender Coconut Sugarless Ice Cream 500ml",
          description:
            "Serves 5 | Creamy tender coconut delight, devoid of sweetness; this ice cream offers a refreshing twist with tender coconut essence, a guilt-free indulgence for discerning palates, Serving; 5 serves, serving size :100/76,energy(kcal) :174,carbohydrate(gm):17.3,protein(gm): 5.2,dietary fiber(gm): 0. 1,fat(gm): 0. 0,allergen :contains milk. May contain traces of treenuts. [Energy: 174 kcal, Allergen: milk,nuts, Carbohydrates: 17.3g]",
          id: "112796486",
          price: 36017,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/c1b38e81-9484-4e6c-854f-4f9ceafa1bd3_cd55fdea-cf47-4fdb-a211-38f5a88dddbf.jpg_compressed",
          name: "Anjeer Sugarless Ice Cream 500ml",
          description:
            "Serves 5 | Indulge guilt-free with our sugarless(Lite) Anjeer Ice Cream, a delightful blend of creamy goodness and real sweetness from ripe figs, offering a refreshing treat without compromising on flavor, Serving; 5 serves, serving size :100/76,energy(kcal) :200,carbohydrate(gm):22.4,protein(gm): 5.6,dietary fiber(gm): 1. 1,fat(gm): 0. 0,allergen : contains milk. May contain traces of treenuts. [Energy: 200 kcal, Allergen: milk,nuts, Carbohydrates: 22.4g]",
          id: "112796482",
          price: 36017,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/26/94d6f7db-23f2-40b1-bc30-22c5515c32b2_9bfbd89e-3c8c-412a-a641-73ab76967a0d.jpg_compressed",
          name: "Roasted Almond Sugarless Ice Cream 100ml",
          description:
            "Serves 1 | Creamy almond ice cream with roasted almond pieces, sweetened without sugar for a guilt-free indulgence in every scoop, Serving; 1 serves, serving size :100/76,energy(kcal) :239,carbohydrate(gm):23.3,protein(gm): 6.9,dietary fiber(gm): 1.1,fat(gm): 0. 2,allergen : Contains Milk And Treenut.. [Energy: 239 kcal, Allergen: milk,nuts, Carbohydrates: 23.3g]",
          id: "112796483",
          price: 8475,
        },
      ],
    },
  ],
  17503: [
    {
      title: "Breakfast Specials",
      items: [
        {
          imageId: "85cf3218a4b4bf7d707be4ad8cf3720c",
          name: "DIY Paneer Classic Wrap and Beverage Breakfast Meal",
          description:
            "With savings of upto 10 percent this breakfast meal of your choice of a classic veg wrap, & 1 beverage is a perfect deal-breaker. Now order, save, repeat.",
          id: "117589928",
          price: 19500,
        },
        {
          imageId: "891317f4996d10fc349c6114b9cbdf58",
          name: "DIY Paneer Classic Wrap and Wedges Breakfast Meal",
          description:
            "Savings upto Rs 20 percent, this deal surely feels like a heaven. With your choice of a classic veg wrap, and a side, this will make you go wow.",
          id: "117589925",
          price: 17500,
        },
        {
          imageId: "35fc82c5c30e029d496b501544796ee2",
          name: "Double Omelette & Wedges with Masala Bread",
          description:
            "A protein-rich omelette with masala kulcha bread, Faasos' all-time favourite potato wedges, & butter on the side.",
          id: "124083186",
          price: 19500,
        },
        {
          imageId: "3af85673c0994ffc3407c17f86d41938",
          name: "Paneer Cheese Melt Wrap",
          description:
            "Make way for the star of the party! Paneer seasoned with select spices and cooked onion, drenched in gooey cream, and blanketed in a soft roti. An old classic with a hint of new flavours.",
          id: "140917866",
          price: 19900,
        },
        {
          imageId: "67d194fe0de3990c2ea49339bf200163",
          name: "DIY Egg Classic Wrap and Beverage Breakfast Meal",
          description:
            "No more wait, straightaway save upto 10 percent. Choose 1 non-veg wrap & 1 beverage, and switch that morning conquer-all mode ON right away.",
          id: "117589920",
          price: 17900,
        },
        {
          imageId: "14f8d8784936543c68dd5592f4465594",
          name: "DIY Egg Classic Wrap and Wedges Breakfast Meal",
          description:
            "FYI, this time you got savings upto 25 percent. Add your choice of a classic non-veg wrap and a side. Now dont let all that chomp chomp stop.",
          id: "117589929",
          price: 15900,
        },
        {
          imageId: "c1d55178e0092f1e058fcca61c3f3f04",
          name: "Egg Chicken Sausage Cheese Wrap",
          description:
            "When its about surprising your tastebuds, no one can beat us. This absolutely amazing wrap made with juicy sausages, omelette & lots of cheese is here to roll you up in exciting flavours & surprises.",
          id: "140917868",
          price: 16500,
        },
        {
          imageId: "a5be439e731c63a9cb6a914aebc21579",
          name: "Double Egg Chatpata Roll",
          description:
            "Why settle for something ordinary when you can get a snack that is eggstra ordinary! Like this yum wrap made with golden-fried eggs, drizzled with tangy, cheesy mayo and wrapped in a soft roti.",
          id: "140917869",
          price: 11900,
        },
        {
          imageId: "75ce6e473f169c7c82f9212c14655c74",
          name: "Pindi Chana Roll",
          description:
            "No one believed us when we said chole can be even more exciting. So we created a wrap that has a tangy burst of chole with flavorful Indian spices and crunchy onions, wrapped in a soft roti. Try it & get surprised.",
          id: "140917870",
          price: 12500,
        },
        {
          imageId: "1a7ceb1990fc30c3895ccbfa8e50c6b5",
          name: "Double Egg Cheese Melt Roll",
          description:
            "Golden-fried eggs are loaded with silky, creamy cheesy and wrapped in a soft roti. An overload of cheese, just like you wanted",
          id: "140917872",
          price: 15500,
        },
        {
          imageId: "264b73bc6b71ae5cb53d49ee61c241f5",
          name: "2 Wrap Breakfast Combo",
          description:
            "With savings of upto Rs 60, this breakfast meal of your choice of any 2 classic breakfast wraps. Now order, save, repeat.",
          id: "125467293",
          price: 20500,
        },
        {
          imageId: "649e7d3664bc1bd5e33ad50c8b91e60d",
          name: "Teekha Chaska Spicy Sausages",
          description:
            "Succulent chicken sausages, cut into small bite sized pieces is sprinkled with our signature Teekha Chaska and served with a mayonnaise dip.",
          id: "140917873",
          price: 13900,
        },
        {
          imageId: "8c559151a0af49fd083fec5fa8f4d0a0",
          name: "Meatballs Cheesy Omelette with Masala Bread",
          description:
            "Begin your day with fluffy eggs seasoned with meatballs and a generous layer of gooey cheesy sauce paired with soft Masala Kulchas creating a perfect harmony of flavors in every bite.",
          id: "131275773",
          price: 19900,
        },
        {
          imageId: "bacbc3171553c51ff9ebf379c46091fb",
          name: "Sausage Cheesy Omelette with Masala Bread",
          description:
            "Elevate your breakfast with our Sausage Cheesy Omelette served with soft Masala Kulchas! Fluffy eggs, savory sausage, and cheesy sauce - a delightful combination of hearty goodness to kickstart your day",
          id: "131275774",
          price: 19900,
        },
      ],
    },
    {
      title: "Shawarma Fest (11 Sep - 15 Oct)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/8400344e-b2c8-4b1e-9e16-52498ee01cbb_aeb51572-f101-4af3-a164-644e2d87b543.jpeg",
          name: "Classic Smoky Chicken Shawarma.",
          description:
            "Experience Arabic enchantment with soft kuboos or rumali wrapped with marinated grilled chicken and delish fillings loaded inside. Yalla Habibi!",
          id: "128650102",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/9af108f3-03ed-4bcc-bc22-35a32da62720_eef157d4-bcf1-40c6-aafa-42ba43ae4027.jpeg",
          name: "Classic Peppy Chicken Shawarma.",
          description:
            "Wrap your taste buds around warm kuboos or rumali loaded inside with spiced red chicken and yum shawarma fillings. You don't need a genie to satisfy this food craving!",
          id: "128650100",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/b54e0c88-c2f9-4a42-a31a-6062d3a349a7_06ad6a1e-60fb-41a1-b2b5-47dee1747a39.jpeg",
          name: "Paneer Tikka Shawarma.",
          description:
            "Your Lebanese cravings have met their match! Bite into a paneer shawarma wrapped in warm kuboos or rumali, loaded inside with marinated paneer tikka and lots of other yum fillings!",
          id: "128650094",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/4a751e96-8d25-46bc-a8cb-80c64428bff7_dfbf20bc-78c9-4d2d-8bcb-33669a6253a2.jpeg",
          name: "Special Smoky Chicken Shawarma",
          description:
            "Brace yourself for a Mediterranean treat inside warm kuboos or rumali, loaded with juicy, marinated grilled chicken, and crispy, creamy fillings!",
          id: "128650101",
          price: 21900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/0474fab3-04a4-48cd-ab07-37c28ef5e37a_f61461ff-0e7b-4f94-ad04-7a15a1efbb85.jpeg",
          name: "Special Peppy Chicken Shawarma",
          description:
            "Soft, warm kuboos or rumali, loaded inside with spiced chicken, creamy and crispy fillings. Talk about shawarma for days!",
          id: "128650097",
          price: 21900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/f46d948c-2447-49a7-b045-98da7790475d_ba58be1e-fce8-40c7-ae9a-361f3331ddb5.jpeg",
          name: "Sizzled Falafel Shawarma",
          description:
            "Experience Turkish magic wrapped in warm kuboos or rumali, loaded with fun toppings and crispy veg falafels.",
          id: "128650099",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/b7684420-c68a-4ed5-a0d6-d73f1fc84d85_d1cd389c-fdb3-498a-98d6-a113c46fbf32.jpeg",
          name: "Classic Smoky Chicken Shawarma with Fries & Coke Meal",
          description:
            "What is smokin hot This Classic Smoky Chicken Shawarma + Fries + Coke (475 ml) meal.",
          id: "153052030",
          price: 37900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/14/1bf7891a-fa62-4252-aeba-9ca758911f7a_73b4c885-bcf3-4d09-86a1-db5182190bcf.jpeg",
          name: "Classic Peppy Chicken Shawarma with Fries & Coke Meal",
          description:
            "Get ready to pawri with this Peppy Chicken Shawarma + Fries + Coke (475 ml) meal.",
          id: "153052031",
          price: 37900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/ffe3c7ce-62cc-45b1-a59a-d98b1591331c_e3cfe3c4-e7b2-44f0-8456-4d059dd65bbe.jpeg",
          name: "Paneer Shawarma with Fries & Coke Meal",
          description:
            "Veg Surprise Alert! Dig into this Paneer Tikka Shawarma + Fries + Coke (475 ml) meal.",
          id: "153052032",
          price: 36900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/b7684420-c68a-4ed5-a0d6-d73f1fc84d85_d1cd389c-fdb3-498a-98d6-a113c46fbf32.jpeg",
          name: "Non-Veg Shawarma with Side & Beverage Meal",
          description:
            "Feast like a royal with your fav non veg shawarma, choice of side and a beverage. Best part-Save up to Rs 94 with this wholesome meal!",
          id: "129591557",
          price: 27800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/ffe3c7ce-62cc-45b1-a59a-d98b1591331c_e3cfe3c4-e7b2-44f0-8456-4d059dd65bbe.jpeg",
          name: "Veg Shawarma with Side & Beverage Meal",
          description:
            "A meal fit for a Sheikh! Your choice of veg shawarma, side and beverage. Order now and save up to Rs 84 on this trio!",
          id: "129591555",
          price: 25800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/533a1146-930a-4b29-9147-4ff972b7898c_c7df81e4-15b8-4b0d-83b8-9713f2cb4f06.jpeg",
          name: "Non-Veg Shawarma & Side Meal",
          description:
            "Savour and save up to Rs 80 with a delicious non veg shawarma and choice of side! Your fav duo for Middle Eastern cravings!",
          id: "129591549",
          price: 25800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/11/9309193d-44e5-4cba-b22f-1ec31f31887f_f3656c1d-b6d5-4bc9-ae8b-8ee3b07331d5.jpeg",
          name: "Veg Shawarma & Side Meal",
          description:
            "Super savings of up to Rs 70 with your fav veg shawarma and a side of your choice! A feast from the Middle East!",
          id: "129591547",
          price: 23800,
        },
      ],
    },
    {
      title: "Newly Launched",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/da581f55-09a4-43ee-a3fb-c8f843cfdd04_99920250-57f2-419b-9e0d-efe54b9756ff.jpeg",
          name: "Chipotle Crunchy Chicken Wrap",
          description:
            "Take your tastebuds on a joy ride with this wrap loaded with the juicy & crispy chicken popcorn, sliced onion & topped with the yummy chipotle mayo sauce, blanketed inside a soft paratha.",
          id: "152640482",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/9b93414d-6426-45ad-b282-baaff5f12861_c1553c75-9ca3-4b8e-9d55-64224afb462c.jpeg",
          name: "Chilli Crunchy Chicken Wrap",
          description:
            "Crispy & tender chicken popcorn & sliced onions are loaded with gooey cheese & hot garlic sauce, blanketed inside a soft paratha. A cheesy-garlic treat you deserve.",
          id: "152640483",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/044364be-2bb5-4a9f-90a7-c64d634dbaa5_24ce9fc2-6447-4ec1-a492-feec96655c09.jpeg",
          name: "Spiced Chicken Burger Wrap.,",
          description:
            "It's crunchy, it's delicious, it's crunchilicious Crispy and tender chicken popcorns are layered with onion and lettuce for that extra crunch. Topped with mayonnaise and chipotle mayo and wrapped inside a flaky paratha.",
          id: "152640484",
          price: 23900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/f778c256-c126-4e42-9179-c342d1ca2652_164077ce-7294-4aa0-bc55-f8d6013f74d1.jpeg",
          name: "Cheese Jalapeno Chicken Burger Wrap",
          description:
            "You'll fall short of adjectives to describe this yum wrap. A combination of crispy, tender chicken popcorns, onion & lettuce drizzled with generous layer of jalapeno cheese wrapped in a flaky paratha.",
          id: "152640485",
          price: 23900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/3dc14a14-14a0-47ed-b8e1-ad63afd5c128_2eb9abca-2c3a-4569-99a3-38ce28d31f30.jpeg",
          name: "Veg Fingers Chipotle Burger Wrap.",
          description:
            "Lip-smacking veg patty is golden fried till its nice & crunchy and then generously drizzled with chipotle mayo followed by some crunchy onions togetehr wrapped in soft paratha. A riot of flavours is what you should expect.",
          id: "145697482",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/e1bb4ae6-9270-425c-914f-1dfb7df7f537_d91ae0ec-c385-4a77-827e-68aa2d742540.jpeg",
          name: "Aloo Patty Chipotle Burger Wrap.",
          description:
            "Crispy & flavourful aloo patty is amped up with a generous drizzle of chipotle mayo and then gently wrapped with crunchy onions in a supple paratha. Add this to your wrap-list right away.",
          id: "140576247",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/9ff1a93b-42b8-426b-831b-2fcff4758798_5f414c65-7ce9-49a2-9fa8-3345e5ae343b.jpeg",
          name: "Spicy Paneer Burger Wrap .",
          description:
            "Paneer coated & fried till golden brown is generously drizzled with spicy chipotle mayo & wrapped in a flaky paratha with crunchy lettuce & onion slices. The perfect textures & taste, all wrapped up!",
          id: "145551336",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/ee2bb107-5603-4be5-8b58-86534ffccf0b_bb45a561-950e-41a8-9095-4a4041ce5e93.jpeg",
          name: "Jalapeno Cheese Paneer Burger Wrap.",
          description:
            "Paneer deep fried till golden brown is drizzled with Jalapeno Cheese sauce & wrapped in a flaky paratha with crunchy lettuce & onion slices.",
          id: "145551337",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/12/6ddb7e61-2f11-45be-8288-45032f4e3ee6_1512923e-4286-4214-99e9-a223c254bf1f.jpeg",
          name: "Mac and Cheese Wrap",
          description:
            "Back on popular demand! Macaroni and veggies slow cooked with gooey liquid cheese, blanketed in a soft paratha is an OG classic comeback you'll love digging in.",
          id: "22882174",
          price: 21900,
        },
        {
          imageId: "e12b95741390f212d06f767703362d1c",
          name: "Diced Smoky Paneer Salad Wrap",
          description:
            "Smoked to perfection, soft cottage cheese is paired with crunchy capsicum, corn & onion salad then drizzled with mayo & wrapped in a flaky lachha paratha. Ticks all the right checkboxes.",
          id: "140576242",
          price: 22900,
        },
        {
          imageId: "b82d2047ffd9beb2490c3565cfcb5376",
          name: "Garlic Chilli Manchurian Wrap",
          description:
            "Mix vegetable manchurian balls tossed in a garlic sauce along with juliennes of fresh vegetables, fried noodles, mayo & sliced onions are wrapped in a flaky paratha. Indo-Chinese flavours done Faasos style!",
          id: "140576243",
          price: 20900,
        },
        {
          imageId: "voso9bicobmo9hf8xakw",
          name: "Garlic Cheese Manchurian Wrap",
          description:
            "Crispy fried Manchurian tossed in a garlic sauce with sliced vegetables, fried noodles, mayo & roasted peanuts are doused in cheese & wrapped in a flaky paratha. Get ready to feel the crunch and a world of exciting new flavours!",
          id: "140576244",
          price: 19900,
        },
        {
          imageId: "ed5c16c5c90ea26b1c4ed4062f012f8d",
          name: "Cheesy Zingy Chilli Manchurian Wrap",
          description:
            "Crunchy, fried to perfection manchurian balls when drizzled with perfectly balanced chilly cheese sauce is topped with crunchy onions & wrapped in soft paratha you get a perfectly umami wrap. Cravings done right.",
          id: "140576245",
          price: 18900,
        },
      ],
    },
    {
      title: "Super Saver Wrap Duos (starting at 198)",
      items: [
        {
          imageId: "0ffcb4a84f202b925b75795ead595ec2",
          name: "2 Classic Veg Rolls at 145 each",
          description:
            "Double surprises and amazing SAVINGS of Rs. 70 await you with this veg classic wraps. Choose 2 of your favourite now.",
          id: "125467396",
          price: 28900,
        },
        {
          imageId: "c0e16914d42ec123d43024b5888df708",
          name: "1 Cheesy Paneer Wrap + 1 Masala Paneer Tikka Wrap",
          description:
            "A paneer-lovers paradise. This Masala Paneer Tikka Wrap and Cheesy Paneer Wrap combo is the perfect deal. Now order, save and repeat.",
          id: "125316377",
          price: 31900,
        },
        {
          imageId: "0ffcb4a84f202b925b75795ead595ec2",
          name: "2 Classic Non-Veg Rolls at 155 each",
          description:
            "70 is your lucky number and thats exactly what youll SAVE by choosing any 2 of your favourite classic non-veg wraps.",
          id: "125467298",
          price: 30900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/8/1363ea2e-7fa1-46c3-8a87-7bec1fb378ad_bb60993c-45eb-48bc-8360-99eee832c296.jpeg",
          name: "2 Veg Shawarmas at 175 each",
          description:
            "Save upto Rs 80, and experience the magic of the Middle East with not one, but two sizzling veg shawarmas of your choice",
          id: "128328442",
          price: 34900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/8/8ea6eaac-9520-4549-8802-b6f5e3e626e3_05c182bc-63ce-4b9c-83a8-030ba3afe12c.jpeg",
          name: "2 Non-Veg Shawarmas at 190 each .",
          description:
            "With SAVINGS up to Rs 100, take a trip to Arabia with 2 sizzling non-veg shawarmas! Grab your favs and relish these sensational bites now.",
          id: "128328444",
          price: 37900,
        },
        {
          imageId: "1f7092394e90e08aa88fad469c123778",
          name: "1 Non-Veg Classic Wrap + 1 Non-Veg Rice Bowl",
          description:
            "With savings of upto Rs 70 this is the meal of your choice of 1 classic non-veg wrap with 1 classic non-veg bowl is a perfect deal-breaker. Now order, save, repeat.",
          id: "125316387",
          price: 28500,
        },
        {
          imageId: "271164fb6da0d822e7cda97c75aac79c",
          name: "1 Chicken Bhuna Wrap + 1 Masala Chicken Tikka Wrap",
          description:
            "No more wait, straightaway order your favourite Masala Chicken Tikka Wrap & Chicken Bhuna Wrap, and switch that conquer-all mode ON right away.",
          id: "125316389",
          price: 33900,
        },
        {
          imageId: "7e14ba31fc4a81376f3caeae0e6737bf",
          name: "1 Veg Classic Wrap + 1 Veg Rice Bowl",
          description:
            "Give a high-five to savings of upto Rs. 60. Choose 1 veg classic wrap & 1 veg classic rice bowl and tell yourself cest la vie.",
          id: "125316385",
          price: 29900,
        },
        {
          imageId: "81400f6b05445a859338cfafbe526f18",
          name: "2 Signature Veg Wraps at 188 each",
          description:
            "Amazing wraps and SAVINGS up to Rs. 78. What else can you ask for. Choose any two from our unique Signature Veg Wraps with delicious fillings & sauces all wrapped in a flaky paratha.",
          id: "114953087",
          price: 37500,
        },
        {
          imageId: "91aad97f254313cf75731d19857cb932",
          name: "2 Signature Non-Veg Wraps at 215 each",
          description:
            "Get spoiled with max SAVINGS of Rs. 70 & delicious surprises. Enjoy a delicious meal for two by choosing any two of our Signature Non-veg Wraps loaded with tender chicken & unique combinations of sauces.",
          id: "114953090",
          price: 42900,
        },
        {
          imageId: "b28036bbd27f5744ddc0213fab45558c",
          name: "3 Veg Classic Wraps at 102 each",
          description:
            "All hearts for SAVINGS up to Rs. 120 & all smiles for surprises. Choose any 3 from your favourite Classic Veg wraps loaded with unique ingredients and enjoy. Can we get a wow.",
          id: "125467356",
          price: 30600,
        },
        {
          imageId: "e44059e8072ff9aa9a00f9a0fce87837",
          name: "4 Classic Veg Wraps at 399",
          description:
            "All hearts for SAVINGS up to Rs. 176 & all smiles for surprises. Choose any 4 from your favourite Classic Veg wraps loaded with unique ingredients and enjoy. Can we get a wow.",
          id: "125467344",
          price: 39900,
        },
        {
          imageId: "0b537d59ebca78217ec8007358575899",
          name: "2 Classic Rolls (1 Veg + 1 Non-Veg) starting at 108 each",
          description:
            "SAVE up to Rs. 70 and surprise your tastebuds with any 1 each of your favorite nonveg and nonveg classic wraps. There is no reason to delay here.",
          id: "125771714",
          price: 21600,
        },
        {
          imageId: "289bc2a439fae995a6782d815126caef",
          name: "3 Non-Veg Classic Wraps at 99 each",
          description:
            "Lip-smacking flavours at jaw-dropping SAVINGS up to Rs. 120. Choose any 4 from your favourite Classic Non-Veg wraps with extraordinary flavours.",
          id: "125467306",
          price: 29700,
        },
        {
          imageId: "bd7d01026f06e1bb4696c5f8d9c6cbfc",
          name: "4 Classic Non-Veg Wraps at 380",
          description:
            "Lip-smacking flavours at jaw-dropping SAVINGS up to Rs. 176. Choose any 4 from your favourite Classic Non-Veg wraps with extraordinary flavours.",
          id: "125467312",
          price: 39900,
        },
      ],
    },
    {
      title: "Pocket Friendly Rolls",
      items: [
        {
          imageId: "a3bba75b8304313165b08f19a2f4c5d2",
          name: "2 Classic Veg Rolls at 150 each",
          description:
            "Double surprises and amazing SAVINGS of Rs. 70 await you with this veg classic wraps. Choose 2 of your favourite now.",
          id: "110859991",
          price: 29900,
        },
        {
          imageId: "75ce6e473f169c7c82f9212c14655c74",
          name: "Pindi Chole Roll",
          description:
            "No one believed us when we said chole can be even more exciting. So we created a wrap that has a tangy burst of chole with flavorful Indian spices and crunchy onions, wrapped in a soft roti. Try it & get surprised.",
          id: "107716379",
          price: 12500,
        },
        {
          imageId: "3c1c83ff8cd61e1f6097e31f5da6c5a4",
          name: "Spicy Indie Chatpata Aloo Wrap",
          description:
            "Well-seasoned potatoes gently seasoned with Indian spices are rolled with lip-smacking imli chutney & crunchy onion jullienes in a soft wrap that balances all the flavours together like a pro. Let your chatpata era begin.",
          id: "128091630",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/e1bb4ae6-9270-425c-914f-1dfb7df7f537_d91ae0ec-c385-4a77-827e-68aa2d742540.jpeg",
          name: "Aloo Patty Chipotle Burger Wrap",
          description:
            "Crispy & flavourful aloo patty is amped up with a generous drizzle of chipotle mayo and then gently wrapped with crunchy onions in a supple paratha. Add this to your wrap-list right away.",
          id: "127755673",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/3dc14a14-14a0-47ed-b8e1-ad63afd5c128_2eb9abca-2c3a-4569-99a3-38ce28d31f30.jpeg",
          name: "Veg Fingers Chipotle Burger Wrap",
          description:
            "Lip-smacking veg patty is golden fried till its nice & crunchy and then generously drizzled with chipotle mayo followed by some crunchy onions togetehr wrapped in soft paratha. A riot of flavours is what you should expect.",
          id: "128091629",
          price: 13900,
        },
        {
          imageId: "b8f7fb7a4326c7b2250ffdbed87209b2",
          name: "Chipotle Potato Shots Wrap",
          description:
            "Who knew potato shots could even do this. Wrapped in a paratha with crunchy onion, chipotle cheese and a drizzle of mint plus chatpata mayo makes this wrap exceptional.",
          id: "99012848",
          price: 16500,
        },
        {
          imageId: "f12e78ec446df91f1c7d56ded7c46dec",
          name: "2 Classic Non-Veg Rolls at 155 each .",
          description:
            "70 is your lucky number and thats exactly what youll SAVE by choosing any 2 of your favourite classic non-veg wraps.",
          id: "152277272",
          price: 30900,
        },
        {
          imageId: "a5be439e731c63a9cb6a914aebc21579",
          name: "Chatpata Double Egg Roll",
          description:
            "Why settle for something ordinary when you can get a snack that is eggstra ordinary! Like this yum wrap made with golden-fried eggs, drizzled with tangy, cheesy mayo and wrapped in a soft roti.",
          id: "85816031",
          price: 11900,
        },
        {
          imageId: "1a7ceb1990fc30c3895ccbfa8e50c6b5",
          name: "Cheese Melt Double Egg Roll",
          description:
            "Golden-fried eggs are loaded with silky, creamy cheesy and wrapped in a soft roti. An overload of cheese, just like you wanted",
          id: "117589923",
          price: 15500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/da581f55-09a4-43ee-a3fb-c8f843cfdd04_99920250-57f2-419b-9e0d-efe54b9756ff.jpeg",
          name: "Chipotle Crunchy Chicken Wrap.",
          description:
            "Take your tastebuds on a joy ride with this wrap loaded with the juicy & crispy chicken popcorn, sliced onion & topped with the yummy chipotle mayo sauce, blanketed inside a soft paratha.",
          id: "152640486",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/9b93414d-6426-45ad-b282-baaff5f12861_c1553c75-9ca3-4b8e-9d55-64224afb462c.jpeg",
          name: "Chilli Crunchy Chicken Wrap.",
          description:
            "Crispy & tender chicken popcorn & sliced onions are loaded with gooey cheese & hot garlic sauce, blanketed inside a soft paratha. A cheesy-garlic treat you deserve.",
          id: "152640487",
          price: 20900,
        },
      ],
    },
    {
      title: "Burger Wraps (Extra Crunch)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/da581f55-09a4-43ee-a3fb-c8f843cfdd04_99920250-57f2-419b-9e0d-efe54b9756ff.jpeg",
          name: "Chipotle Crispy Chicken Wrap .",
          description:
            "Take your tastebuds on a joy ride with this wrap loaded with the juicy & crispy chicken popcorn, sliced onion & topped with the yummy chipotle mayo sauce, blanketed inside a soft paratha.",
          id: "152640490",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/9b93414d-6426-45ad-b282-baaff5f12861_c1553c75-9ca3-4b8e-9d55-64224afb462c.jpeg",
          name: "Chilli Crispy Chicken Wrap .",
          description:
            "Crispy & tender chicken popcorn & sliced onions are loaded with gooey cheese & hot garlic sauce, blanketed inside a soft paratha. A cheesy-garlic treat you deserve.",
          id: "152640491",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/044364be-2bb5-4a9f-90a7-c64d634dbaa5_24ce9fc2-6447-4ec1-a492-feec96655c09.jpeg",
          name: "Spicy Chicken Burger Wrap .",
          description:
            "It's crunchy, it's delicious, it's crunchilicious Crispy and tender chicken popcorns are layered with onion and lettuce for that extra crunch. Topped with mayonnaise and chipotle mayo and wrapped inside a flaky paratha.",
          id: "152640492",
          price: 23900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/f778c256-c126-4e42-9179-c342d1ca2652_164077ce-7294-4aa0-bc55-f8d6013f74d1.jpeg",
          name: "Jalapeno Cheese Chicken Burger Wrap.",
          description:
            "You'll fall short of adjectives to describe this yum wrap. A combination of crispy, tender chicken popcorns, onion & lettuce drizzled with generous layer of jalapeno cheese wrapped in a flaky paratha.",
          id: "152640493",
          price: 23900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/3dc14a14-14a0-47ed-b8e1-ad63afd5c128_2eb9abca-2c3a-4569-99a3-38ce28d31f30.jpeg",
          name: "Chipotle Veg Fingers Burger Wrap",
          description:
            "Lip-smacking veg patty is golden fried till its nice & crunchy and then generously drizzled with chipotle mayo followed by some crunchy onions togetehr wrapped in soft paratha. A riot of flavours is what you should expect.",
          id: "145991540",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/e1bb4ae6-9270-425c-914f-1dfb7df7f537_d91ae0ec-c385-4a77-827e-68aa2d742540.jpeg",
          name: "Chipotle Aloo Patty Burger Wrap",
          description:
            "Crispy & flavourful aloo patty is amped up with a generous drizzle of chipotle mayo and then gently wrapped with crunchy onions in a supple paratha. Add this to your wrap-list right away.",
          id: "145991541",
          price: 13900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/9ff1a93b-42b8-426b-831b-2fcff4758798_5f414c65-7ce9-49a2-9fa8-3345e5ae343b.jpeg",
          name: "Spiced Paneer Burger Wrap",
          description:
            "Paneer coated & fried till golden brown is generously drizzled with spicy chipotle mayo & wrapped in a flaky paratha with crunchy lettuce & onion slices. The perfect textures & taste, all wrapped up!",
          id: "145991542",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/ee2bb107-5603-4be5-8b58-86534ffccf0b_bb45a561-950e-41a8-9095-4a4041ce5e93.jpeg",
          name: "Cheese Jalapeno Paneer Burger Wrap",
          description:
            "Paneer deep fried till golden brown is drizzled with Jalapeno Cheese sauce & wrapped in a flaky paratha with crunchy lettuce & onion slices.",
          id: "145991543",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/26/5e48bd7f-7b6f-42d5-a692-f1a475e79ff2_a75dad89-934b-4cd9-8bdc-7b039684cdeb.jpeg",
          name: "Non-Veg Burger Wrap and Side Meal",
          description:
            "Your search for delishh combo ends here. Save up to RS. 79 with this combo of non-veg Burger Wrap + sides of your choice.",
          id: "152640494",
          price: 25900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/26/f0bff0c5-9e96-4877-8539-bf52bb93c3fb_f835435a-3257-4cf7-82f6-daa451ac5e4c.jpeg",
          name: "Non-Veg Burger Wrap with Side and Beverage Meal",
          description:
            "Crunch, munch, slurp and chill with the ultimate non-veg Burger Wrap & sides & beverage trio of your choice. Also, save up to RS. 99",
          id: "152640495",
          price: 29900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/c1ed668a-122a-4c64-98db-e7e6cb30a976_5a2f1beb-7da7-4ed8-83fa-08d049963b6b.jpeg",
          name: "Veg Burger Wrap and Side Meal",
          description:
            "You know what's the real flex Grabbing veg Burger Wrap & side of your choice with savings up to RS. 95",
          id: "149132853",
          price: 19800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/27/45da2349-9472-4d63-b7ea-45d4878bb40f_12ec85e8-4579-4f7d-9ce2-36fe91a2daf0.jpeg",
          name: "Veg Burger Wrap with Side and Beverage Meal",
          description:
            "All hail the mighty trio! Grab a veg Burger Wrap & side & beverage of your choice and save up to RS. 125",
          id: "149132855",
          price: 22800,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/1/82962458-9c08-4b20-873c-563399398274_1ab8721d-9f85-44ae-8db0-910a603ea58e.jpeg",
          name: "Chipotle Veg Finger Burger Wrap & Chipotle Aloo Patty Burger Wrap",
          description:
            "Double the crunch with this ultimate chipotle veg fingers wrap & ultimate chipotle aloo patty wrap combo and save up to RS. 29",
          id: "146184971",
          price: 23900,
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/57bbda63-e1b4-471b-a4e7-3e68fdce5b3c_379fbf30-19c5-499d-a551-6409301e1a82.jpeg",
          name: "Hazelnut Brownie (Box of 2)",
          description:
            "Gooey & fudgy on the inside, nutty on the outside and amazingly delicious all over! Our melt-in-the-mouth Nutty Chocolate Brownie will give you serious dessert goals.",
          id: "100838444",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/30/4325a8a2-156c-4d26-8e54-ae87a1e6176c_7ea47053-7151-4d1e-be4a-6e52b3f0ce37.jpeg",
          name: "Choco Lava Cake",
          description:
            "A perfect match of Chocolate Cake on the outside and molten Chocolate on the inside, our Choco Lava cake is every dessert lovers dream come true.",
          id: "110853499",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/30/a950b2b0-5b99-469b-9b8d-5ddb3d1fd39b_6eff1134-7da2-4b57-a78f-5335c997da3c.jpeg",
          name: "New York Cheesecake",
          description:
            "The classic, melt-in-your-mouth New York cheesecake is the perfect combination of cream cheese and a crunchy cracker crust. (contains egg).",
          id: "85401105",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/30/b69aecb0-5aed-4723-9bf5-7e94d5827a62_9b3c362c-afd2-4c6d-ac06-59f37547c92a.jpeg",
          name: "Mango Cheesecake",
          description:
            "This New York Style Mango Cheesecake, made with premium quality mango infused cream cheese with the perfect cracker crust is every dessert lovers delight!",
          id: "83680154",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/30/cf9f870b-ebc5-42cf-8067-7a21018e5513_115d452e-f1bc-4d0a-902a-31d4e134a3bd.jpeg",
          name: "Blueberry Cheesecake",
          description:
            "The combination of delicious cream cheese and fresh blueberries is what makes our Blueberry cheesecake stand apart.",
          id: "136140877",
          price: 17900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/7f3c1879-2ea5-476c-9c3c-a8b0ac083c4d_ce309456-585a-4de2-b35e-fa3b725c9e4e.jpeg",
          name: "Choco Lava Cake (Box Of 2)",
          description:
            "A perfect match between Chocolate Cake on the outside and melted gooey chocolate on the inside is an irresistible indulgence for 2.",
          id: "110853496",
          price: 18900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/16/9ce4a2e0-0516-48dd-933b-728b7b0bb499_0adb547e-d27c-4d94-b179-a30e2648dee3.jpeg",
          name: "Chocolate Mocha Jar",
          description:
            "Feel like having coffee & dessert at the same time. Well, we have got you covered with our delicious Mocha jar made with richness of chocolate and goodness of coffee.",
          id: "114834312",
          price: 14900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/bbf9e416-826e-4a14-a25d-6a829b97bde9_af049f68-7390-40b3-85e2-b01536f7b2c8.jpeg",
          name: "Death by Chocolate Jar & Choco lava cake",
          description:
            "1 Death by Chocolate Jar + 1 Choco lava cake This combo is too much chocolate, But no ones complaining!",
          id: "127916739",
          price: 21900,
        },
        {
          imageId: "cb1a213e0c1a4075e597b2b561adf73c",
          name: "Rich Red Velvet Pastry",
          description:
            "Rich and moist Red Velvet cake layered with fresh cream cheese makes our Red Velvet pastry difficult to share. Youll think twice too.",
          id: "110853494",
          price: 14500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/30/8a89fb6f-5602-4315-9a50-3a3b0d4c225e_9500d150-5baf-4d77-9d61-1325233aadf6.jpeg",
          name: "Walnut Brownie",
          description:
            "Our Walnut Brownie is the perfect combination of Chocolate & Crunch, featuring a dense, fudgy loaded with walnuts for a treat that's pure bliss.",
          id: "150619846",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/6/ab718433-5cee-42a8-97e9-9616353523fa_e97943e4-dba1-4815-9074-a3bcff752ae1.jpeg",
          name: "Fried Modak (2 Pcs)",
          description:
            "(Pack of 2) Enjoy a twist on the classic Modak with our deep-fried delights. Each Modak is encased in a crispy, golden shell with a rich, sweet filling that adds an irresistible crunch to your Ganpati celebrations.",
          id: "150318229",
          price: 8900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/6/4f5a94da-3255-4953-ace0-b36e06ffccc1_20401483-3fb9-4d7c-ae82-ecc7b8fa8de0.jpeg",
          name: "Fried Modak (4 Pcs)",
          description:
            "(Pack of 4) Enjoy a twist on the classic Modak with our deep-fried delights. Each Modak is encased in a crispy, golden shell with a rich, sweet filling that adds an irresistible crunch to your Ganpati celebrations.",
          id: "150318230",
          price: 17900,
        },
      ],
    },
  ],
  16644: [
    {
      title: "Shahi Biryani (serves 1)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/5/6952f768-25b9-4828-8112-e1909e34551b_1b56235a-6d8a-4cec-8c7a-1349beff08ac.jpeg",
          name: "Khwaish-e-Kathal Biryani (Jackfruit Biryani Serves 1)",
          description:
            "(Served with Gulab Jamun and Raita) A masaledaar peshkash from our khansamas, prepared with raseele jackfruit chunks, aromatic basmati rice and a rich blend of shahi spices. Slow-cooked to perfection, add this dumdaar biryani to your vegetarian favourites.",
          id: "148101026",
          price: 40900,
        },
        {
          imageId: "htra1ceo32gospqkqalp",
          name: "Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 1)",
          description:
            "(Boneless, Served with 1 Gulab Jamun & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice.",
          id: "110852770",
          price: 39900,
        },
        {
          imageId: "caeef7009cc017a14a4ab2f6083af7d8",
          name: "Raan-E-Murgh Biryani (Chicken Whole Leg Biryani) (Serves 1)",
          description:
            "(With Bone, Served with 1 Gulab Jamun & Raita) A classic redefined with a touch of royalty! Entice your taste buds with the indulgent chicken whole leg, marinated in exquisite royal spices, laid atop a bed of fragrant, long-grain basmati rice.",
          id: "110852780",
          price: 49500,
        },
        {
          imageId: "9c48c8fc4562d134c6aab2058484e2ee",
          name: "Taj-e-Khumb Biryani (Mushroom Biryani - Serves 1)",
          description:
            "(Served with 1 Gulab Jamun & Mint Raita) Prepared with large chunks of tender, marinated mushrooms, this unique peshkash is adorned with the flavour of 23 shahi masalas and golden-hued basmati. Indulge in a ruhaani daawat with this flavourful veg biryani, as grand as the Taj!",
          id: "122800659",
          price: 39500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/c2ca3dc0-7da9-4688-8402-dba2257413a6_6ba625d0-42d4-4629-af82-1f59e3c78e59.jpeg",
          name: "Dum Gosht Biryani (Dum Mutton Biryani, Boneless - Serves 1)",
          description:
            "(Boneless, Served with 1 Gulab Jamun & Mint Raita) In this most enigmatic & treasured recipe of Behrouz, immaculately spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire.",
          id: "110852773",
          price: 56900,
        },
        {
          imageId: "xxwcydkccq651lzvrtkd",
          name: "Paneer Subz Biryani (Paneer Dum and Veg Biryani - Serves 1)",
          description:
            "(Served with 1 Gulab Jamun & Mint Raita) In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
          id: "110852790",
          price: 38900,
        },
        {
          imageId: "tej2ho3s9mbti5akvkcd",
          name: "Subz-e-Biryani (Dum Veg Biryani - Serves 1)",
          description:
            "(Served with 1 Gulab Jamun & Mint Raita) Adorned with fresh vegetables, golden-hued long-grain basmati, & the coveted Behrouz spice mix, this dish will lend you an experience unlike any other.",
          id: "110852782",
          price: 35500,
        },
        {
          imageId: "8141298d6e2fc40e01002cfda26b4d57",
          name: "Zaikedaar Paneer Biryani (Paneer Dum Biryani - Serves 1)",
          description:
            "(Served with 1 Gulab Jamun & Mint Raita) In this extravagant dish, soft & crumbly, fresh paneer is marinated with exquisite royal spices & layered with basmati to create a dish that is as delectable as it is extravagant.",
          id: "113407283",
          price: 38900,
        },
        {
          imageId: "xoefe7dlmthbizk6nils",
          name: "Tokhm-e-Biryani (Dum Egg Biryani - Serves 1)",
          description:
            "(Served with 1 Gulab Jamun & Mint Raita) A symphony of humble and intrinsic flavours it is. Hand-picked eggs are freshly boiled to perfection & later adorned with artfully ground fresh Behrouz spices & let to cook in its full glory with basmati rice.",
          id: "110852789",
          price: 38900,
        },
        {
          imageId: "n7khabrtrcenjnkbhmfe",
          name: "Murgh Afghani Tikka Biryani (Creamy Chicken Tikka - Serves 1)",
          description:
            "(Boneless, Served with 1 Gulab Jamun & Mint Raita) Legendary for its rich taste & creamy texture, tender chicken marinated in fresh creamy yoghurt & spices is layered with aromatic basmati. Let your tastebuds feel enchanted!",
          id: "110852786",
          price: 46900,
        },
        {
          imageId: "xpqih4lpjnrdae8fu7lg",
          name: "Murgh Tikka Biryani (Chicken Tikka Dum Biryani - Serves 1)",
          description:
            "(Boneless, Served with 1 Gulab Jamun & Mint Raita) A potpourri of extravagant flavours, tender chicken spiced with freshly ground Behrouz masala is charcoal-grilled then layered with fragrant basmati & dum-pukht in its full glory.",
          id: "110852787",
          price: 47500,
        },
        {
          imageId: "k1h5fhoymftcs6zdm2kz",
          name: "Do Gosht ki Dum Biryani (Mutton & Chicken Dum Biryani - Serves 1)",
          description:
            "(Boneless, Served with 1 Gulab Jamun & Mint Raita) Tantalise your tastebuds with this epicurean delight of succulent chicken & mutton pieces marinated in aromatic spices and dum-pukht with long-grain basmati.",
          id: "110852788",
          price: 51900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/19/5f79ec5d-9eda-45ec-8e55-8de981b5cbdb_8eb02086-50d2-40b1-a7fa-61aab873323a.jpeg",
          name: "Dumdaar Hyderabadi Biryani Rice",
          description:
            "The refined flavours of Hyderabadi spices infused with basmati rice dum pukht to perfection and topped with fresh coriander leaves",
          id: "150388311",
          price: 16900,
        },
      ],
    },
    {
      title: "Shaan Biryani (serves 2)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/5/47b0c409-93c4-4d6d-a973-94abdeaa876b_f56a082e-8817-43a8-8ea3-54ad28129e33.jpeg",
          name: "Khwaish-e-Kathal Biryani (Jackfruit Biryani Serves 2)",
          description:
            "(Served with 2 Gulab Jamuns and Raita) A masaledaar peshkash from our khansamas, prepared with raseele jackfruit chunks, aromatic basmati rice and a rich blend of shahi spices. Slow-cooked to perfection, add this dumdaar biryani to your vegetarian favourites.",
          id: "148101027",
          price: 81900,
        },
        {
          imageId: "hb4izlpgssdpielcpxgs",
          name: "Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 2)",
          description:
            "(Boneless, Served with 2 Gulab Jamuns & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice.",
          id: "110852794",
          price: 79900,
        },
        {
          imageId: "f0b6581bcb557796cb31f94fd0f26b26",
          name: "Raan-E-Murgh Biryani (Chicken Whole Leg Biryani) (Serves 2)",
          description:
            "(With Bone, Served with 2 Gulab Jamun & Raita) A classic redefined with a touch of royalty! Entice your taste buds with the indulgent chicken whole leg, marinated in exquisite royal spices, laid atop a bed of fragrant, long-grain basmati rice.",
          id: "110852796",
          price: 93900,
        },
        {
          imageId: "50528126ec357dbca5c8ae47fde0b838",
          name: "Taj-e-Khumb Biryani (Mushroom Biryani - Serves 2)",
          description:
            "(Served with 2 Gulab Jamuns & Mint Raita Prepared with large chunks of tender, marinated mushrooms, this unique peshkash is adorned with the flavour of 23 shahi masalas and golden-hued basmati. Indulge in a ruhaani daawat with this flavourful veg biryani, as grand as the Taj!",
          id: "122800657",
          price: 74900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/f0b049e8-2f83-432f-87ba-8dc4854068e7_42f8b1eb-b26e-4ca8-9811-c683af1acb2a.jpeg",
          name: "Dum Gosht Biryani (Dum Mutton Biryani, Boneless - Serves 2)",
          description:
            "(Boneless, Served with 2 Gulab Jamuns & Mint Raita) In this most enigmatic & treasured recipe of Behrouz, immaculately spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire.",
          id: "110852795",
          price: 98500,
        },
        {
          imageId: "ytmyobwx2ilwjrdu5xrx",
          name: "Paneer Subz Biryani (Paneer Dum and Veg Biryani - Serves 2)",
          description:
            "(Served with 2 Gulab Jamuns & Mint Raita) In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
          id: "110852829",
          price: 73900,
        },
        {
          imageId: "ov39z8btk6qbdyuskw5j",
          name: "Subz-e-Biryani (Dum Veg Biryani - Serves 2)",
          description:
            "(Served with 2 Gulab Jamuns & Mint Raita) Adorned with fresh vegetables, golden-hued long-grain basmati, & the coveted Behrouz spice mix, this dish will lend you an experience unlike any other.",
          id: "110852799",
          price: 68900,
        },
        {
          imageId: "gtetaljp9gkdys1a4i23",
          name: "Zaikedaar Paneer Biryani (Paneer Dum Biryani - Serves 2)",
          description:
            "(Served with 2 Gulab Jamuns & Mint Raita) In this extravagant dish, soft & crumbly, fresh paneer is marinated with exquisite royal spices & layered with basmati to create a dish that is as delectable as it is extravagant.",
          id: "110852797",
          price: 73900,
        },
        {
          imageId: "n0hkqgosirzuceg2irek",
          name: "Tokhm-e-Biryani (Dum Egg Biryani - Serves 2)",
          description:
            "(Served with 2 Gulab Jamuns & Mint Raita) Subtle flavours of hard-boiled eggs are adorned with exuberant spices & let to cook in its full glory with basmati rice.",
          id: "110852827",
          price: 73900,
        },
        {
          imageId: "eayqc49lmnbhyrvukxnf",
          name: "Murgh Afghani Tikka Biryani (Creamy Chicken Tikka - Serves 2)",
          description:
            "(Boneless, Served with 2 Gulab Jamuns & Mint Raita) Legendary for its rich taste & creamy texture, tender chicken marinated in fresh creamy yoghurt & spices is layered with aromatic basmati. Let your tastebuds feel enchanted!",
          id: "110852819",
          price: 89900,
        },
        {
          imageId: "ylc4rma8jaofxut7ifpf",
          name: "Murgh Tikka Biryani (Chicken Tikka Dum Biryani - Serves-2)",
          description:
            "(Boneless, Served with 2 Gulab Jamuns & Mint Raita) A potpourri of extravagant flavours, tender chicken spiced with freshly ground Behrouz masala is charcoal-grilled then layered with fragrant basmati & dum-pukht in its full glory.",
          id: "110852823",
          price: 89900,
        },
        {
          imageId: "c078ba89963d2ead6ac956bd93b1013c",
          name: "Do Gosht ki Dum Biryani (Mutton & Chicken Dum Biryani - Serves 2)",
          description:
            "(Boneless, Served with 2 Gulab Jamuns & Mint Raita) Tantalise your tastebuds with this epicurean delight of succulent chicken & mutton pieces marinated in aromatic spices and dum-pukht with long-grain basmati.",
          id: "110852826",
          price: 99500,
        },
      ],
    },
    {
      title: "Alishaan Biryani (Serves 4-5)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/5/b60bedf6-b5fb-4753-8c72-1f768bf3537b_36c04f03-5ae9-4d29-8f44-18db35b8d82a.jpeg",
          name: "Khwaish-e-Kathal Biryani (Jackfruit Biryani Serves 4)",
          description:
            "(Served with 4 Gulab Jamuns and Raita) A masaledaar peshkash from our khansamas, prepared with raseele jackfruit chunks, aromatic basmati rice and a rich blend of shahi spices. Slow-cooked to perfection, add this dumdaar biryani to your vegetarian favourites.",
          id: "148101028",
          price: 147900,
        },
        {
          imageId: "gsp9uaof3r8nt1qgxvz9",
          name: "Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 4-5)",
          description:
            "(Boneless, Served with 4 Gulab Jamuns & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice.",
          id: "110859640",
          price: 144900,
        },
        {
          imageId: "3e93013829ff5bf04a7995f066df6b36",
          name: "Raan-E-Murgh Biryani (Chicken Whole Leg Biryani) (Serves 4-5)",
          description:
            "(With Bone, Served with 4 Gulab Jamun & Raita) A classic redefined with a touch of royalty! Entice your taste buds with the indulgent chicken whole leg, marinated in exquisite royal spices, laid atop a bed of fragrant, long-grain basmati rice.",
          id: "110859646",
          price: 170900,
        },
        {
          imageId: "73a366c9c57b14d081a1ead4aecc0764",
          name: "Taj-e-Khumb Biryani (Mushroom Biryani - Serves 4-5)",
          description:
            "(Served with 4 Gulab Jamuns & Mint Raita) Prepared with large chunks of tender, marinated mushrooms, this unique peshkash is adorned with the flavour of 23 shahi masalas and golden-hued basmati. Indulge in a ruhaani daawat with this flavourful veg biryani, as grand as the Taj!",
          id: "122800654",
          price: 137900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/7/8303031e-daf2-42e7-8bc6-b96e438c439a_b55889e8-567e-43ab-86a4-01b233b56928.jpeg",
          name: "Dum Gosht Biryani (Dum Mutton Biryani, Boneless - Serves 4-5)",
          description:
            "(Boneless, Served with 4 Gulab Jamuns & Mint Raita) In this most enigmatic & treasured recipe of Behrouz, immaculately spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire.",
          id: "110859643",
          price: 186900,
        },
        {
          imageId: "lrqhac9tvu2qp5uydsct",
          name: "Paneer Subz Biryani (Paneer Dum and Veg Biryani - Serves 4-5)",
          description:
            "(Served with 4 Gulab Jamuns & Mint Raita) In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
          id: "110859677",
          price: 132900,
        },
        {
          imageId: "h8lo0zpbj6skv4ptcchk",
          name: "Subz-e-Biryani (Dum Veg Biryani - Serves 4-5)",
          description:
            "(Served with 4 Gulab Jamuns & Mint Raita) Adorned with fresh vegetables, golden-hued long-grain basmati, & the coveted Behrouz spice mix, this dish will lend you an experience unlike any other.",
          id: "110859656",
          price: 125900,
        },
        {
          imageId: "c9peytnshi9uqajxw0oh",
          name: "Zaikedaar Paneer Biryani (Paneer Dum Biryani - Serves 4-5)",
          description:
            "(Served with 4 Gulab Jamuns & Mint Raita) In this extravagant dish, soft & crumbly, fresh paneer is marinated with exquisite royal spices & layered with basmati to create a dish that is as delectable as it is extravagant.",
          id: "110859647",
          price: 133500,
        },
        {
          imageId: "949c90b2b6eca69fd057298cd287b9b8",
          name: "Tokhm-e-Biryani (Dum Egg Biryani - Serves 4-5)",
          description:
            "(Served with 4 Gulab Jamun & Mint Raita) A symphony of humble and intrinsic flavours. Hand-picked eggs are freshly boiled to perfection & later adorned with artfully ground fresh Behrouz spices & let to cook in its full glory with basmati rice.",
          id: "126340756",
          price: 133500,
        },
        {
          imageId: "zq5qnfrmpxfu9hen7yoj",
          name: "Do Gosht ki Dum Biryani (Mutton & Chicken Dum Biryani - Serves 4-5)",
          description:
            "(Boneless, Served with 4 Gulab Jamuns & Mint Raita) Tantalise your tastebuds with this epicurean delight of succulent chicken & mutton pieces marinated in aromatic spices and dum-pukht with long-grain basmati.",
          id: "110859663",
          price: 177900,
        },
        {
          imageId: "ybxivhdlbsopvguo0dnm",
          name: "Murgh Afghani Tikka Biryani (Creamy Chicken Tikka - Serves 4-5)",
          description:
            "(Boneless, Served with 4 Gulab Jamuns & Mint Raita) Legendary for its rich taste & creamy texture, tender chicken marinated in fresh creamy yoghurt & spices is layered with aromatic basmati. Let your tastebuds feel enchanted!",
          id: "110859661",
          price: 160500,
        },
        {
          imageId: "hl7ncvbafkoclogfz7cj",
          name: "Murgh Tikka Biryani (Chicken Tikka Dum Biryani - Serves 4-5)",
          description:
            "(Boneless, Served with 4 Gulab Jamuns & Mint Raita) Legendary for its rich taste & creamy texture, tender chicken marinated in fresh creamy yoghurt & spices is layered with aromatic basmati. Let your tastebuds feel enchanted.",
          id: "110859662",
          price: 160500,
        },
      ],
    },
    {
      title: "Nawabi Mehfil (FREE Kebabs upto Rs. 1800)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/2/ade93f66-c3b7-4254-aed5-c1597e77ed1a_c3219dd9-e5ce-4ec8-adc6-f7a86d3268e7.jpeg",
          name: "2 Nawabi Handi Mehfil with FREE Kebabs (serves 4-6)",
          description:
            "Dawat bnayein khaas with 2 Biryanis of your choice, Dumpukht and Served in a Royal Metal Handi. Relish these with your choice of kebabs and beverages on the house.",
          id: "147548309",
          price: 179900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/2/cfd970db-5a6e-4d2d-86cb-56401fb5fc10_9f14dee0-345e-4b95-9d4e-2decc745aee4.jpeg",
          name: "3 Nawabi Handi Mehfil with FREE Kebabs (serves 6-8)",
          description:
            "Dawat bnayein khaas with 3 Biryanis of your choice, Dumpukht and Served in a Royal Metal Handi. Relish these with your choice of kebabs and beverages on the house.",
          id: "147548310",
          price: 269900,
        },
      ],
    },
    {
      title: "Dastan-e-Kebab (Starters)",
      items: [
        {
          imageId: "ff823c99dfe17cfb3d4afde52b7c6f06",
          name: "Beetroot & Peanut Kebab",
          description:
            "Savour the flavours of handpicked fresh beetroots and roasted peanuts with a subtle hint of spices. These royal beetroot kebabs are crisp on the outside and soft on the inside.",
          id: "123061075",
          price: 13900,
        },
        {
          imageId: "c7b64b62f177eb8425bc3842ae777b3b",
          name: "Falafel-E-Khaas",
          description:
            "Savour the great taste with shallow fried chickpea nuggets with a blend of aromatic spices.",
          id: "123061080",
          price: 11900,
        },
        {
          imageId: "6ae995f6c03a1605cd9036e79444d043",
          name: "Dahi Labneh Kebab",
          description:
            "Crafted by Celebrity Chef Kunal Kapur and enriched with gentle flavours of Curd, this kebab is delicately spiced with cumin and ginger & beautifully complements the royal biryani",
          id: "123061087",
          price: 14900,
        },
        {
          imageId: "9986a4db47645e0552ec4c91585c1428",
          name: "Murgh Kefta (Chicken Meatball Kebab)",
          description:
            "Minced chicken kebabs cooked into soft delicious meatballs served with Minty dip.",
          id: "123061077",
          price: 15900,
        },
        {
          imageId: "d5632426308c2c9a74932100cb1e2b24",
          name: "Murgh Koobideh (Chicken Tikki Kebab)",
          description:
            "Ground chicken flavored with cardamom & green chilli and grilled to perfection.",
          id: "123061078",
          price: 13500,
        },
        {
          imageId: "ae5f27c741c628d8ec3020db25197a46",
          name: "Hara Bhara Kebab",
          description:
            "Savour the goodness of finely minced potatoes, garden-fresh spinach and green peas, gently spiced with shahi masalas and shallow-fried to perfection. Coated with a generous layer of bread crumbs, these tender yet crispy kebabs will brighten up your daawat.",
          id: "128140757",
          price: 15900,
        },
        {
          imageId: "0f5f80e21c9cc2f175d21e882eda0d89",
          name: "Gosht-E-Galouti Kebab (Mutton Galauti Kebab)",
          description:
            "A melt-in-mouth culinary delicacy it can take the most enigmatic feasts a notch above. Tenderest mutton is minced to perfection & cooked with delicate spices to offer you a truly exquisite culinary experience.",
          id: "123061079",
          price: 29900,
        },
        {
          imageId: "24d3e39ac0bc42548df7061714c79d26",
          name: "Murgh Seekh Kebab",
          description:
            "One of the most revered kebab delicacies, this culinary marvel is crafted with minced chicken that is elegantly spiced with royal spices and is served with a refreshing mint dip.",
          id: "128140756",
          price: 21500,
        },
        {
          imageId: "0e76d53ceb4f81019159dbc670671680",
          name: "Aloo Chaap Tikki",
          description:
            "A street favourite recipe that now resides in our royal kitchens. A mix of mashed potatoes, fresh coriander, chilies and onions, shallow-fried to form the perfect tea-time snack.",
          id: "123061076",
          price: 13900,
        },
        {
          imageId: "1941fd8f6b75175c6f529b1fdab1fbc6",
          name: "Murgh Malai Kebab (6 Pcs)",
          description:
            "(6 Pcs) Brimming with impeccable flavours this rich kebab delicacy is as delectable as it is charming. Succulent chicken pieces are eloquently spiced with royal spices and then grilled to perfection to lend it the fascinating smoky flavour.",
          id: "110859831",
          price: 39900,
        },
        {
          imageId: "c265fabda5c381395015d2c023b55268",
          name: "Dahi Labneh Kebab (6 pcs) & Beetroot and Peanut Kebab (6 pcs) Combo",
          description:
            "Subtly spiced with cumin and ginger, our Dahi Labneh Kebabs are served as a combo alongside kebabs made with handpicked fresh beetroots & crushed peanuts.",
          id: "83440909",
          price: 46900,
        },
        {
          imageId: "b97556f04f244fcc23244ee218891bb1",
          name: "Beetroot & Peanut Kebab (6 pcs) & Hara Bhara Kebab (6 Pcs) Combo",
          description:
            "Delicately spiced kebabs made with fresh beetroots & peanuts are served alongside the tender yet crispy Hara Bhara kebabs that are crafted with finely minced vegetables and shallow-fried to perfection.",
          id: "110859815",
          price: 48900,
        },
      ],
    },
    {
      title: "Haleem Specials",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/12/4c8ef940-7a3f-4336-a65d-a97d1ba7bf9e_c8196b3f-c666-4be4-acab-ca967f68af9a.jpeg",
          name: "Gosht Haleem (Mutton Haleem)",
          description:
            "A thick, creamy, porridge textured dish of slow-cooked tender mutton, prepared with a blend of lentils, barley and aromatic masalas. Relish this special peshkash as a main course or an accompaniment with your favourite biryani.",
          id: "135863266",
          price: 38900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/12/7f9394f1-7ab1-4655-b0e2-836d2f19b341_46b96ba0-621b-464e-bfb8-3575360281fa.jpeg",
          name: "Murgh Haleem (Chicken Haleem)",
          description:
            "A thick, creamy, porridge textured dish of slow-cooked tender chicken, prepared with a blend of lentils, barley and aromatic masalas. Relish this peshkash as a main course or an accompaniment with your favourite biryani.",
          id: "135863269",
          price: 31900,
        },
        {
          imageId: "6e9c7dac2d1d51926bbd3a035d31e7c5",
          name: "Shahi Biryani with Haleem Combo (Serves 1-2)",
          description:
            "Choice of Haleem (300g) along with Shahi Biryani (Serves 1, with Gulab Jamun and Raita)\nA khushnuma nazraana of slow-cooked haleem awaits you with your choice of royal biryani in this super saver combo.",
          id: "135863279",
          price: 66900,
        },
        {
          imageId: "3d4314bc48b3096788a05efe342a4d38",
          name: "Mini Kebabs with Haleem Combo (Serves 1-2)",
          description:
            "Choice of Haleem (300g), Kebabs and Beverage. Savour a bemisaal daawat with flavourful, slow-cooked haleem and pair it with your favourite delectable kebabs and beverage.",
          id: "135863282",
          price: 42900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/8/0c465c3a-791b-41d8-9315-e1257de83a9e_2b3ba1c7-672c-4937-a0e7-cdcef3308908",
          name: "Shahi Dawat with Haleem (Serves 2)",
          description:
            "Choice of Haleem (300g), Shahi Biryani (Serves 1, with Gulab Jamun and Raita), Murgh Curry (300g), breads. Indulge in slow-cooked haleem along with kulchas as you pair them with a dumdaar royal biryani and rivayati curry of your choice.",
          id: "135863288",
          price: 106900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/8/9bc83b5c-4040-45bb-a7d8-0c0f042c9ac8_80a41076-2bf0-48f3-aaf7-2940871b3692",
          name: "Shaandaar Dawat with Haleem (Serves 3)",
          description:
            "Choice of Haleem (300g), Shaan Biryani (Serves 2, with 2 Gulab Jamuns and Raita), Kebabs (6pcs) & Breads. Pesh-e-khidmat hai ek yaadgaar iftar with porridge-textured haleem and narm kulchas, along with a shaandaar dumpukht biryani and lajawab kebabs.",
          id: "135863291",
          price: 136900,
        },
      ],
    },
    {
      title: "Royal Curries & Breads",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/29/d5986fe2-6515-4aa9-b65a-c76cbfa80c2b_a7ddc834-48af-48b4-bf5d-bbfbd814b9e4.jpeg",
          name: "Royal Murgh Curry Combo (Serves 1)",
          description:
            "(1 Murgh Curry and Bread of your choice) Brighten your World Biryani Day daawat with this North Indian spread of delicious murgh curry and a soft, flaky bread.",
          id: "128691812",
          price: 36900,
        },
        {
          imageId: "ec91182bca7439bba599d7dc17b707b3",
          name: "Shabnami Murgh Lababdar",
          description:
            "Get ready for a shaandaar peshkash of this mildly sweet curry of tender chicken, kaju, tomatoes, chopped onions and shahi masalas. Pair this royal chicken curry with our biryanis & breads!",
          id: "128691811",
          price: 29900,
        },
        {
          imageId: "436d094318e2ecbf77e998506c3d9025",
          name: "Paneer Makhani",
          description:
            "Relish this mildly sweet curry of tender paneer with an aromatic blend of kaju, fresh tomatoes, sliced onions and shahi masalas. Make the most of this Punjabi peshkash with your favourite biryanis & breads!",
          id: "128691815",
          price: 27900,
        },
        {
          imageId: "749f4cf1166610558663e7022d2d7f12",
          name: "Aftaabi Murgh Tikka Masala",
          description:
            "Enjoy this royal curry made with authentic spicy masalas and juicy, succulent chicken tikka, char-grilled immaculately for the lajawab taste you've been waiting for!",
          id: "128722930",
          price: 29900,
        },
        {
          imageId: "43784ae691594300615a84d1a6b3a632",
          name: "Aftaabi Paneer Tikka Masala",
          description:
            "Savour tender, char-grilled paneer chunks with this authentic tikka masala curry. A mouthwatering combination of flavour and texture, indulge in this lajawab paneer peshkash for a royal daawat!",
          id: "128722929",
          price: 27900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/26/f807c774-d670-4203-aea9-5890ed1acfdc_1f570ddb-b9d2-41ff-b9c4-c04ee22f5a1f.jpeg",
          name: "Aftaabi Mushroom Masala",
          description:
            "Relish a melange of shahi masalas in this peshkash of delectable, bite-sized mushrooms. Savour this nayaab gravy along with parathas or kulchas for your royal dawat.",
          id: "139169508",
          price: 28900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/31/bdcea667-04c3-4465-997a-247db7811ea9_d9aebfd0-ebda-4978-b0fb-efc209d60f0f.jpeg",
          name: "Rumali Roti",
          description:
            "Indulge in the delicate layers of our Rumali Roti, crafted to perfection with tenderness in every bite. Pair this as a fine accompaniment to your choice of royal curries.",
          id: "141866041",
          price: 8900,
        },
        {
          imageId: "2df16c1b8544a6d7dfbbce799fb5f44b",
          name: "Nafees Laccha Paratha (Pack of 2)",
          description:
            "Make it an indulgent daawat with these flaky parathas, fried until crispy with desi ghee. Nothing beats these crowd favourite flatbreads for a wholesome meal.",
          id: "129744594",
          price: 8900,
        },
        {
          imageId: "01b79c40930e0539bb0514f17b7cf58c",
          name: "Nafees Laccha Paratha (Pack of 4)",
          description:
            "Make it an indulgent daawat with these flaky parathas, fried until crispy with desi ghee. Nothing beats these crowd favourite flatbreads for a wholesome meal.",
          id: "129744595",
          price: 16900,
        },
        {
          imageId: "e6f2e47e494a61c73a60975839e4516d",
          name: "Dilkhush Narm Kulcha (Pack of 2)",
          description:
            "Complete your daawat with this desi, soft-leavened bread. Pair your favourite curries and gravies with a side of these fluffy Kulchas,",
          id: "114187011",
          price: 8900,
        },
        {
          imageId: "381fab881d906ca3253a9c2be8531789",
          name: "Dilkhush Narm Kulcha (Pack of 4)",
          description:
            "Complete your daawat with this desi, soft-leavened bread. Pair your favourite curries and gravies with a side of these fluffy Kulchas.",
          id: "124114386",
          price: 16900,
        },
        {
          imageId: "03cd76684b1b5943022183f1680535f5",
          name: "Afreen Basmati Rice (300 gm)",
          description:
            "You cannot go wrong with this absolutely fine and flavourful rice. Enjoy the khusbudaar long-grain basmati rice with your favourite curries.",
          id: "110852767",
          price: 7900,
        },
        {
          imageId: "10e43a515407bd7fb7fffa60437f3767",
          name: "Durbari Tawa Paratha (Pack of 3)",
          description:
            "Have an indulgent and satisfying feast with these large, triangular shaped parathas seared on tawa until crispy. Nothing beats these crispy parathas for a wholesome meal.",
          id: "110852762",
          price: 8900,
        },
        {
          imageId: "e520eb9555cc4d2ee17e07c73ad865cd",
          name: "Shaandaar Murgh Curries Combo (Serves 2)",
          description:
            "1 Murgh Curry (500gm), Choice of Bread (Pack of 4), Kebab (6pcs) and a Beverage.\nDaawat ka aaghaz karein with your favourite murgh curry and bread and pair it with a lajawab kebab and beverage.",
          id: "130343341",
          price: 89900,
        },
        {
          imageId: "6d9e3139741e5845ebd5702b4614d261",
          name: "Shaandaar Paneer Curries Combo (Serves 2)",
          description:
            "1 Paneer Curry (500gm), Choice of Bread (Pack of 4), Kebab (6pcs) and a Beverage.\nDaawat ka aaghaz karein with your favourite paneer curry and bread and pair it with a lajawab kebab and beverage.",
          id: "130343343",
          price: 87900,
        },
        {
          imageId: "223727f2ce8780d17e40f9c2bc957f82",
          name: "Rivayati Murgh Curry Combo (Serves 2)",
          description:
            "Murgh Curry (500 gm) with Choice of Bread (Pack of 4).\nSet up a wholesome daawat for 2 with your choice of North Indian murgh curry and breads.",
          id: "130343345",
          price: 62500,
        },
        {
          imageId: "df4a91ed0210772c316f46d2a602786b",
          name: "Rivayati Paneer Curry Combo (Serves 2)",
          description:
            "Paneer Curry (500 gm) with Choice of Bread (Pack of 4).\nSet up a wholesome daawat for 2 with your choice of North Indian paneer curry and breads.",
          id: "130343346",
          price: 60500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/4/a286ab0d-0d62-44bf-8107-b17706a15636_35a1cf70-d5fb-441f-bc82-6cf9013e2982.jpeg",
          name: "Nawabi Handi Dum Biryani with Non-Veg Curry and Breads Combo (Serves 3-4)",
          description:
            "1 Nawabi Handi Dum Biryani (Non-Veg) served with Gulab Jamun and mint raita, 1 Murgh Curry and Breads.Let the nawabi andaaz of dum pukht biryani enchant your guests, with a murgh curry and choice of bread to complete the dawat.",
          id: "137740957",
          price: 156500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/29/d1c97ccd-967f-430d-bf22-311379bde0bd_8ad28698-14cf-4359-902c-6e2201265027.jpeg",
          name: "Royal Paneer Curry Combo (Serves 1)",
          description:
            "(1 Paneer Curry and Bread of your choice) The perfect companion for your World Biryani Day daawat - an indulgent paneer curry and bread of your choice. Relish this shandaar combo with your favourite biryani!",
          id: "128691816",
          price: 34900,
        },
        {
          imageId: "5a3e374a2f03c2e8d901a9e8de662e7f",
          name: "Royal Paneer Daawat Combo (Serves 2)",
          description:
            "(1 Shahi Biryani with choice of Paneer Curries & Breads) A khaas daawat for the paneer shaukeens! Relish your choice of royal paneer biryani, curry, and bread and add a refreshing beverage to sum up the feast!",
          id: "128691813",
          price: 64900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/4/14eba4ea-d65d-4846-a02a-4bac0970c77e_ff623b10-4ce4-436e-afc0-cf771e433da2.jpeg",
          name: "Nawabi Handi Dum Biryani with Veg Curry and Breads Combo (Serves 3-4)",
          description:
            "1 Nawabi Handi Dum Biryani (Veg) served with Gulab Jamun and mint raita, 1 Veg Curry and Breads.Let the nawabi andaaz of dum pukht biryani enchant your guests, along with a veg curry and choice of bread to complete the dawat.",
          id: "137740955",
          price: 144500,
        },
      ],
    },
    {
      title: "Hyderabad-e-Khaas (Spicy) Biryani",
      items: [
        {
          imageId: "zajzlb10h1bnvrcz7wg0",
          name: "Spicy Subz-E-Biryani (Hyderabadi Veg Biryani - Serves 1)",
          description:
            "(Spicy, Served with 1 Gulab Jamun & Mint Raita) Inspired by the Hyderabadi Style, fresh, crisp vegetables marinated in a spicier blend are layered & dum pukht with golden-hued basmati.",
          id: "110852878",
          price: 36900,
        },
        {
          imageId: "bjycbjklewqhh6oqv47u",
          name: "Spicy Zaikedaar Paneer Biryani (Hyderabadi Dum Paneer - Serves 1)",
          description:
            "(Spicy, Served with 1 Gulab Jamun & Mint Raita) Crafted in Hyderabadi style, this recipe cherishes the love for all things royal. Fresh paneer marinated with exquisite spices is layered with basmati & slow-cooked to perfection.",
          id: "110852886",
          price: 40500,
        },
        {
          imageId: "aacba91a7be9f9d9a44d06b73e3aff5a",
          name: "Spicy Lazeez Bhuna Murgh Biryani (Hyderabadi Dum Chicken - Serves 1)",
          description:
            "(Spicy & Boneless, Served with 1 Gulab Jamun & Mint Raita) Crafted in Hyderabadi style, tender chicken pieces are dum-pukht with aromatic rice & exuberant bhuna spices in full glory. It is an experience unlike any other.",
          id: "110852918",
          price: 41900,
        },
        {
          imageId: "df9ea2568329e594983ca7957f04bb07",
          name: "Spicy Dum Gosht Biryani (Hyderabadi Dum Mutton Biryani - Serves 1)",
          description:
            "(Spicy & Boneless, Served with 1 Gulab Jamun & Mint Raita) Inspired by the Hyderabadi Style, freshly marinated tender mutton pieces are laid on long-grain rice are slow cooked to create a special delicacy",
          id: "110852922",
          price: 58500,
        },
      ],
    },
    {
      title: "Solo Party Combos",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/8/537b2589-2279-4060-9f00-a6ab89d8c3ca_b9b376f7-6793-4075-84a9-af26b085caee.jpeg",
          name: "Toofani Veg Biryani Combo (Serves 1)",
          description:
            "(1 Veg Biryani served with Raita and Gulab Jamun and 1 Beverage) Indulge in your pasandeeda veg biryani and pair it with a tarotaaza beverage.",
          id: "142420630",
          price: 37900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/8/4ec901d3-7039-4baa-bce9-32e26b90a156_de1438bd-8e63-48c9-9357-a6280a7d0c47.jpeg",
          name: "Toofani Non-Veg Biryani Combo (Serves 1)",
          description:
            "(1 Non-Veg Biryani served with Raita and Gulab Jamun and 1 Beverage) Indulge in your pasandeeda non-veg biryani and pair it with a tarotaaza beverage.",
          id: "142420631",
          price: 44900,
        },
      ],
    },
    {
      title: "Sides, Desserts & Beverages",
      items: [
        {
          imageId: "9a1fbc69e5204881c164cd0dc54c5363",
          name: "Mughlai Gravy",
          description:
            "Mughlai Gravy, a classic popular North India dish has a thick & creamy gravy with a flavor of yogurt and the taste of ground and whole spices.",
          id: "22421235",
          price: 4900,
        },
        {
          imageId: "b4e76b431b5ac5098dc8a8087a6a467f",
          name: "Mirchi Ka Salan",
          description:
            "Indulge your taste buds in this masaledaar peshkash, made with fine groundnuts, sesame seeds, tamarind, coconut & a blend of royal aromatic spices. Pair this spicy, tangy salan made of curried green chillies with your favourite biryani.",
          id: "126913952",
          price: 4500,
        },
        {
          imageId: "9417c3bf51cd6575a63524853b8f2f1c",
          name: "Mint Raita",
          description:
            "Mint raita is a refreshing and cooling raita made with mint, whisk yogurt and cumin.",
          id: "22421230",
          price: 3900,
        },
        {
          imageId: "388bf5ed3fa93f63cc6b901466d016cf",
          name: "Moong Dal Halwa (100 gm)",
          description:
            "Add this rich & decadent Indian dessert made with moong lentils, ghee, milk, sugar, garnished with chopped dry-fruits. Perfect for one with Indian sweet cravings",
          id: "127605230",
          price: 9900,
        },
        {
          imageId: "416abae4196abaa36689ba3f11c0cb19",
          name: "Sitaphal Kheer (100 gms).",
          description:
            "(NO ONION, NO GARLIC & MADE WITH SENDHA NAMAK)\nMade with fresh custard apple pulp and cream, this Sitaphal Kheer is sure to give a sweet ending to your Navratri fasting meal.\n",
          id: "122960733",
          price: 9900,
        },
        {
          imageId: "2c2c0e4d03dde1b74c926d3b0ca9e2bf",
          name: "Gulab Jamun (Pack Of 2)",
          description:
            "Gulab Jamun. Soft. Plump and the way we are used to. There is nothing else in our gulab jamuns than authenticity and love.",
          id: "110859845",
          price: 6500,
        },
        {
          imageId: "cc6e9348bb748e745a3d28396ada6e79",
          name: "Gulab Jamuns (Pack Of 10)",
          description:
            "Gulab Jamun. Soft. Plump and the way we are used to. There is nothing else in our gulab jamuns than authenticity and love.",
          id: "110859850",
          price: 31500,
        },
        {
          imageId: "256de26bc2e91075641548e10ff999be",
          name: "Moong Dal Halwa (300gm)",
          description:
            "Add this rich & decadent Indian dessert made with moong lentils, ghee, milk, sugar, garnished with chopped dry-fruits. Perfect for one with Indian sweet cravings.",
          id: "127968493",
          price: 29900,
        },
        {
          imageId: "wttvnnzenyee9fsgvxda",
          name: "Ayran (Buttermilk)",
          description:
            "A popular drinks from the land of Behrouz, Ayran is a Persian take of buttermilk topped with mint.",
          id: "22421221",
          price: 6500,
        },
        {
          imageId: "51ecb60ce9170ef15788585d76571cc4",
          name: "Thums Up Can (330 mL)",
          description: "330 mL Thums Up Can",
          id: "126623339",
          price: 6650,
        },
        {
          imageId: "ydqqpussdhedmr5edm2b",
          name: "Coca Cola Bottle (475 mL)",
          description: "475 mL Coca Cola Bottle.",
          id: "76391558",
          price: 6650,
        },
        {
          imageId: "25b016a4f3021dad1923cf8d39f2378a",
          name: "Jeera Masala Soda (350 mL)",
          description:
            "Aerated drink with the added zing of jeera and masala, a perfect accompaniment to your meal.",
          id: "22421216",
          price: 5700,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/1/e8cee390-f088-4045-92d9-15780731a2f2_e1e7befb-a3d4-4828-af5c-87a292237f6f.jpeg",
          name: "Salted Caramel Ice Cream",
          description:
            "Sweet, Salty and a little scoop of happiness. This salted caramel ice cream is sure to melt your heart. Serving Size - 100ml",
          id: "137039529",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/1/e46a03e3-b09e-458f-a0b0-d3f78d25c3a4_ffa0fa11-ff96-450f-b771-94ce483abd58.jpeg",
          name: "Belgian Chocolate Ice Cream",
          description:
            "Treat yourself to a scoop of luxury: Belgian chocolate ice cream that's rich, creamy, and simply irresistible. Serving Size - 100ml",
          id: "137039530",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/10/516153ac-3005-4e1f-a78d-a0a15d922c3c_8eab094b-6c26-4f44-ba05-a3b4cfa39522.jpeg",
          name: "Masala Lemonade (200 mL)",
          description:
            "A refreshing classic drink with combined goodness of fresh lime, himalayan pink salt & infused spices.",
          id: "123398042",
          price: 4600,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/6/1c0c0e45-8873-4e16-ac3e-087ac56a1dd3_78d5d772-9976-48d7-9cc6-36549b75d5d0.jpeg",
          name: "Tender Coconut Water (200 mL)",
          description:
            "Every athlete's go-to natural energy drink, Coconut water (in collaboration with Raw Pressery) is a complete win-win for your everyday rehydration needs.",
          id: "139810551",
          price: 9524,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/30/8f052a67-3825-4871-83e3-a3ad153993f9_5e8fa8c5-cadf-4aaf-b367-9e831e8d9098.jpeg",
          name: "Aamras Drink (200 mL)",
          description:
            "This Aamras drink is pure deliciousness, a quick summer delight to satiate your mango cravings.",
          id: "139810552",
          price: 3900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/1/ab10c223-37d4-46b2-b407-53c2137fafcc_f9211711-07e3-4cd0-972b-d9ad8e5d616a.jpeg",
          name: "Dry Fruit Kulfi Ice Cream",
          description:
            "A creamy base, made from simmering milk to a thick, luscious consistency, with crunchy dry fruits makes for a perfect dessert for your cravings. Serving Size - 100ml",
          id: "137039527",
          price: 9900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/1/a7c7bc8d-f7d1-414d-9ade-c0accca257eb_c08b4f28-57ff-475d-9b99-c2cdde4b7ac2.jpeg",
          name: "Alphonso Mango Ice Cream",
          description:
            "Delicious Alphonso Mango based ice cream made with juicy, real Mango pulp and Mango chunks. This is pure heaven for all Mango lovers. Serving Size - 100ml",
          id: "137039528",
          price: 9900,
        },
        {
          imageId: "4fdd0d1329d39d35824c40df2e86004a",
          name: "Lemon Ice Tea (250 mL)",
          description:
            "Sip on this refreshing drink for a citrusy lemon punch, infused with brewed tea. This iced tea is a perfect way to re-energize you anytime of the day!",
          id: "152661389",
          price: 5900,
        },
      ],
    },
  ],
  305815: [
    {
      title: "Barbeque in a Box (Serves 2-3)",
      items: [
        {
          imageId: "suogu1jyv51m2eg7eirk",
          name: "Barbeque in a Box (Non Veg Overload)",
          description:
            "Serves 3 | [Five Starters] Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Tandoori Tangdi (2 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + [Main Course] Butter Chicken Masala + Mutton Rogan Josh + Egg Curry + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] Angoori Gulab Jamun (8 Nos) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad.",
          id: "80422250",
          price: 129900,
        },
        {
          imageId: "40fe28af93d3039bf6acdd47dc5b95ac",
          name: "Barbeque in a Box (Mutton Biryani Overload)",
          description:
            "Serves 3 | Mutton Dum Biryani (3 Portions) + Tandoori Tangdi (2 Pcs) + Chicken Tikka (4 Pcs) + Fish Tikka (6 Pcs) + Chilly Garlic Prawns(6 Pcs) + Chicken Wings (6 Pcs) + Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Raita, Salan, Dips & Salad. Relish biryani of Succulent mutton pieces marinated in freshly roasted spices and cooked with aromatic long grain Basmati rice in the Dum style. Earlier called as Biryanis and Kebabs Box (Mutton) Premium",
          id: "100350141",
          price: 129900,
        },
        {
          imageId: "bf6abe6380e4e127d6ed3fcebb2c35d8",
          name: "Barbeque in a Box - Chicken Overload",
          description:
            "Serves 3 | [Four Starters] - Chicken Wings (12 Pcs) + Chicken Tikka (4 Pcs) + Tandoori Tangdi (2 Pcs) + Chicken Seekh Kebab (6 Pcs) [Main Course] - Butter Chicken + Egg Curry + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] - Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. A special Box curated for chicken lovers.",
          id: "80422249",
          price: 126900,
        },
        {
          imageId: "708922a3eaae2198dfa7b8654e849015",
          name: "Barbeque in a Box (Non Veg) Premium (With Prawns and Mutton)",
          description:
            "Serves 3 | [Six Starters] - Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) [Main Course] - Butter Chicken + Mutton Rogan Josh + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] - Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie - Accompanied with Mint Chutney, Salan, Dips & Salad. A premium Barbeque Nation buffet served at home.",
          id: "100350133",
          price: 124900,
        },
        {
          imageId: "92af8caf8bcc17a562e3e66885513c81",
          name: "Barbeque in a Box (Chicken Biryani Overload)",
          description:
            "Serves 3 | Chicken Dum Biryanis (3 Portions) + Tandoori Tangdi (2 Pcs) + Chicken Tikka (4 Pcs) + Fish Tikka (6 Pcs) + Chilly Garlic Prawns (6 Pcs) + Chicken Wings (6 Pcs) + Angoori Gulab Jamun (8 Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. A perfect Biryani & Kebabs Feast. Earlier called as Biryanis and Kebabs Box (Chicken) Premium.",
          id: "100350140",
          price: 114900,
        },
        {
          imageId: "025951ca79adb71f6fdd346c5710b488",
          name: "Barbeque in a Box (Non Veg) Premium",
          description:
            "Serves 3 | [Six Starters] Chicken Tikka (4 Pcs) + Reshmi Chicken Wings (6 Pcs) + Fish Tikka (6 Pcs) + Veg Rolls (6 Pcs) + Veg Kebabs (6 Pcs) + Chicken Seekh Kebab (6 Pcs). [Main Course] - Chicken Butter Masala + Egg Curry + Dal Makhani + Chicken Dum Biryani + Whole Wheat Paratha (3 Pcs) [Three Desserts] -  Angoori Gulab Jamun (8Pcs) + Brownie + Moong Dal Halwa. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation Buffet served at Home.",
          id: "100350134",
          price: 104900,
        },
        {
          imageId: "ms4gatxolkuncr145vbz",
          name: "Barbeque In A Box (Veg) Premium",
          description:
            "Serves 3 | [Six Starters] - Tandoori Paneer Tikka (4 Pcs) + Churrasco Pineapple (6 Pcs) + Veg Kebabs (6 Pcs) + Veg Rolls (6 Pcs) + Cheese Triangle (6 Pcs) + Assorted Grilled Corn & Veg (2 Nos) [Main Couse] - Paneer Butter Masala + Mix Veg + Dal Makhani + Veg Dum Biryani + Whole Wheat Paratha (3 Nos) [Three Desserts] Angoori Jamun (8 Pcs) + Moong Dal Halwa + Brownie. Accompanied with Mint Chutney, Salan, Dips & Salad. Barbeque Nation buffet served at home.",
          id: "100350136",
          price: 99900,
        },
        {
          imageId: "22efc036a380e41feddcfa25e0057fd9",
          name: "Classic Meal Box (Veg) Premium",
          description:
            "Serves 3 | Scrumptious Box of India's Favourites - Paneer Butter Masala (2 Portions), Dal Makhani, Mix Veg, Barbecue Veg Dum Biryani, Steamed Basmati Rice, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Chocolate Brownie, Moong Dal Halwa, Mint Chutney, Raita, Garden Salad & Pickle. Share with your loved ones.",
          id: "106246373",
          price: 82900,
        },
        {
          imageId: "22592f4be247490b954da74f54d42ab7",
          name: "Classic Meal Box (Non Veg) Premium",
          description:
            "Serves 3 | Wholesome box of Curries & Biryani from the house of Barbeque Nation contains - Chicken Butter Masala (2 Portions), Egg Curry, Dal Makhani, Chicken Dum Biryani, Steamed Basmati Rice, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Chocolate Brownie, Moong Dal Halwa, Mint Chutney, Raita & Garden Salad. Share with your loved ones.",
          id: "106246374",
          price: 92900,
        },
      ],
    },
    {
      title: "Biryanis, Curries and Roti",
      items: [
        {
          imageId: "uld1cbbr0onwym3wtyda",
          name: "Chicken Tikka Biryani",
          description:
            "Serves 1 | Boneless Chicken chunks marinated in  authentic tikka masala and grilled on skewers and layered between aromatic rice. Served with Raita &  Salan. Kcal - 814",
          id: "78490596",
          price: 39900,
        },
        {
          imageId: "kdlhbpzgpaoy7zqhvv5y",
          name: "Prawns Biryani",
          description:
            "Serves 1 | For all the Prawns lovers, freshly spiced prawns (11-12Pcs)cooked with aromatic Basmati rice in the Dum style. Served with Raita.",
          id: "115807022",
          price: 45900,
        },
        {
          imageId: "jrznl7rbannkr9obnafu",
          name: "Paneer Tikka Biryani",
          description:
            "Serves 1 | Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor layered with aromatic rice. Served with Salan & Raita. Kcal - 803",
          id: "78490620",
          price: 32900,
        },
        {
          imageId: "oypa1whl9grzqx9vzyvs",
          name: "Mutton Rogan Josh",
          description:
            "Serves 1 | A  mutton delight slow cooked with a blend of Indian spices. Kcal - 643",
          id: "102946796",
          price: 49900,
        },
        {
          imageId: "sbsvnnp9rsgcrs0ajx4y",
          name: "Mutton Biryani",
          description:
            "Serves 1 | Succulent pieces of mutton slow cooked on bed of aromatic rice with in-house blend of spices and seasonings and served with raita. Kcal - 1227",
          id: "78490606",
          price: 42900,
        },
        {
          imageId: "ichhu25fx4xuewgyz3yg",
          name: "Butter Chicken",
          description:
            "Serves 1 | One of the most popular Punjabi style chicken dishes in the world , cooked in tomato puree, cream, butter and a host of masalas. Kcal - 663",
          id: "100350116",
          price: 39900,
        },
        {
          imageId: "gilsg4u3pv23avswifdf",
          name: "Boneless Chicken Biryani",
          description:
            "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita.",
          id: "115807021",
          price: 38900,
        },
        {
          imageId: "whgvtme1hhq9uxtpgjsg",
          name: "Chicken Biryani",
          description:
            "Serves 1 | Chicken marinated in house blend of Indian spices and layered between aromatic rice. Served with Raita.",
          id: "78490601",
          price: 33900,
        },
        {
          imageId: "b6itdmkcsd7twh2dcyoh",
          name: "Paneer Butter Masala",
          description:
            "Serves 1 | Rich creamy dish of cottage cheese chunks cooked  in a tomato  and cashew paste. mild sweet taste ,recommended with naan or flavoured rice. Kcal - 694",
          id: "100350101",
          price: 39900,
        },
        {
          imageId: "uioezl0tmy9dcp1xavaq",
          name: "Egg Masala",
          description:
            "Serves 1 | Flavorful, delicious  dish made with boiled eggs cooked in onion tomato gravy . A comfort food  goes well with any Indian bread or rice. Kcal - 753",
          id: "102946795",
          price: 29900,
        },
        {
          imageId: "db9pbvznhewszyap6axq",
          name: "Dal Makhani",
          description:
            "Serves 1 | India's most loved and sought after Dal. lentils slowly simmered in a very aromatic buttery, creamy tomato sauce.  Kcal - 429",
          id: "100350117",
          price: 31900,
        },
        {
          imageId: "zdhvp16taomwukt5tj8r",
          name: "Veg Biryani",
          description:
            "Serves 1 | For all the Barbeque lovers, an assortment of fresh vegetables barbecued with a smoky finesse and cooked with aromatic Basmati rice in the Dum style. Kcal - 1141",
          id: "78490613",
          price: 28900,
        },
        {
          imageId: "fnqt2uv3yb5lqpddrudk",
          name: "Dry Vegetable Mix",
          description:
            "Serves 1 | A mélange of garden vegetables cooked in  rich tomato & onion gravy finished with cream.",
          id: "100350103",
          price: 29900,
        },
        {
          imageId: "vqqmpdsu6p6amtqgydon",
          name: "Flavoured Rice",
          description:
            "Serves 1 | Basmati Rice Flavoured with aromats . A perfect accompaniment with Masala Gravies. Kcal - 325",
          id: "100350131",
          price: 14900,
        },
        {
          imageId: "kpu46sg8n5cvzyp3hehz",
          name: "Steamed Basmati Rice",
          description:
            "Serves 1 | Steamed Basmati rice, perfect & fluffy. A must try with our mains.",
          id: "100350127",
          price: 13900,
        },
        {
          imageId: "i1gwdtis91stjtywxy7d",
          name: "Butter Naan (1No)",
          description:
            "Serves 1 | Indian leavened, oven-baked flatbread topped with butter. Kcal - 445",
          id: "100350118",
          price: 4500,
        },
        {
          imageId: "eqjzqem69jeifzbbmvnh",
          name: "Whole Wheat Paratha (1 No)",
          description:
            "Serves 1 | Enjoy this warm, crispy layered flatbread delight with any of curries or Kebabs. Kcal - 3680",
          id: "100350129",
          price: 4500,
        },
      ],
    },
    {
      title: "Barbeque in a Box (Serves 1-2)",
      items: [
        {
          imageId: "e346f3d6fe123d732cb99463b8ccd070",
          name: "Barbeque in a Box (Veg Biryani) Regular",
          description:
            "Serves 2 | Kebabs & Biryani feast: [Two Starters] - Veg Rolls (6 Pcs) + Tandoori Paneer Tikka (4 Pcs) [Veg Dum Biryani- 2 Nos] [Dessert] - Angoori Gulab Jamun (8 Pcs) [Accompanied with Salan, Dips & Salad]. Earlier called as Biryanis and Kebabs Box (Veg) Regular",
          id: "80422314",
          price: 74900,
        },
        {
          imageId: "2d49cf7332f75cfe4770e451b606d704",
          name: "Barbeque in a Box (Chicken Biryani) Regular",
          description:
            "Serves 2 | Kebabs & Biryani Feast: [Two Starters] - Chicken Tikka (4 Pcs) - Kalmi Fish Tikka (6Pcs) [Chicken Dum Biryani - 2 Portions] [Dessert] - Angoori Gulab Jamun (8 Pcs) - Accompanied with Salan, Dips, Mint Chutney, Raita & Salad].",
          id: "80422294",
          price: 84900,
        },
        {
          imageId: "e45ca2e7322daca5a10c84537a2319fc",
          name: "Classic Meal Box (Non-Veg) Regular",
          description:
            "Serves 2 | King Size Meal - Chicken Butter Masala, Dal Makhani, Chicken Dum Biryani,  Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Raita & Garden Salad. Perfect to share with your bestie.",
          id: "106246372",
          price: 72900,
        },
        {
          imageId: "a249331eb4208e8f7816f72dcd64c2f0",
          name: "Classic Meal Box (Veg) Regular",
          description:
            "Serves 2 | King Size Meal – Paneer Butter Masala, Dal Makhani, Barbecue Veg Dum Biryani, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Raita & Garden Salad. Eat like a King with your favourite.",
          id: "106246371",
          price: 62900,
        },
      ],
    },
    {
      title: "Kebabs Platter and Starters",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/6/030e00df-5de4-4e88-bd5d-f0dc5a82d3d4_cc0a9242-24e8-4ecc-a74b-291e219836b8_compressed",
          name: "Kebabs in a Box (Non Veg Overload)",
          description:
            "Serves 2 | Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (4 Pcs) + Chicken Wings (6 Pcs) + Tandoori Tangadi (2Pcs) + Fish Tikka (6 Pcs) + Angoori Jamun (8 Pcs). Accompanied with Dips & Salad. Non Veg Overload in a Box.",
          id: "80422266",
          price: 92900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/6/f529d951-7465-406c-8c1f-cd06334a5fdc_b61f3937-a169-426b-9ff6-fbeb80791a7f_compressed",
          name: "Build your Own Kebab Platter (Non Veg)",
          description:
            "Serves 1 | Make you own  shareable Kebab  Combo. Served with Dips.",
          id: "124416008",
        },
        {
          imageId: "90071acd3832fda9e1a08519ce35d280",
          name: "Chicken Kebabs Platter- (Serves 2)",
          description:
            "Serves 2 | Chicken Tikka Boneless (4 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
          id: "100350047",
          price: 49900,
        },
        {
          imageId: "cogri8ggdjqz8elyaec8",
          name: "Build your Own Kebab Platter (Veg)",
          description:
            "A mighty shareable  starter platter served with Cajun Sauce, Salad & Mint Chutney.",
          id: "124416009",
        },
        {
          imageId: "rp6horwqxpsnbnupn44u",
          name: "Grilled Chilli Garlic Prawns (9Pcs)",
          description:
            "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.",
          id: "101625275",
          price: 38900,
        },
        {
          imageId: "cxnpmaw7shz2w1t9mvkf",
          name: "Tandoori Fish Tikka",
          description:
            "Serves 1 | Fish chunks (9Nos) marinated in Indian spices and hung curd  cooked in clay oven & served with Salad mix & Mint Chutney. Kcal - 366",
          id: "78490671",
          price: 37900,
        },
        {
          imageId: "bcirausndatlpylzwk4l",
          name: "Chicken Tikka (Boneless) (8 Pcs)",
          description:
            "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615",
          id: "101625270",
          price: 35900,
        },
        {
          imageId: "e7czdol0if4n5z5lrwov",
          name: "Tandoori Tangdi (3Pcs)",
          description:
            "Serves 1 | Chicken Drumstick marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney.  Tangadi Kabab for any occasion.",
          id: "101625269",
          price: 34900,
        },
        {
          imageId: "hgzvrddvithynrjkmuh4",
          name: "Tandoori Chicken Wings (12 Pcs)",
          description:
            "Serves 1 | Nothing better than a crispy yet juicy hot chicken wings, tossed in BBQ sauce,  will surely make you crave for more.",
          id: "100350100",
          price: 31900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/6/8c281208-a9d3-4dcf-81e7-695abc5df718_50231c7d-a562-423f-bd2c-724fccdd1972_compressed",
          name: "Tandoori Paneer Tikka (8 Pcs)",
          description:
            "Serves 1 | Cottage Cheese marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney. Kcal - 753",
          id: "78490661",
          price: 32900,
        },
        {
          imageId: "dh9cvytsu5ek2vp5q4ha",
          name: "Mutton Seekh Kebab",
          description:
            "Serves 1 | Scrumptious, full of juices & flavors- These mutton mince kebabs (6Nos) cooked with Indian aromatic spices are perfect as a starter. Kcal - 450",
          id: "78490675",
          price: 31900,
        },
        {
          imageId: "gijzyjxsc2dgcrysk2px",
          name: "Tandoori Mushroom",
          description:
            "Serves 1 | Button Mushrooms marinated with tandoori spice , grilled to golden brown perfection and brushed with butter. Kcal - 182",
          id: "94609973",
          price: 28900,
        },
        {
          imageId: "gbdv8mspt3rssw6g2nzg",
          name: "Chicken Seekh Kebab",
          description:
            "Serves 1 | Succulent kebabs (6Nos) made from tender meat, masalas and seasoning,grilled on skewers till perfection. Served with Mint Chutney &Lacha Onions. Kcal - 583",
          id: "78490682",
          price: 24900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/bb6a70e3-ba5f-48b6-a161-eeaaf57863c9_be66e2b0-e41b-4c3e-83ed-cc15fa55519d.jpg_compressed",
          name: "Cheesy Triangles (10 Pcs)",
          description:
            "Serves 1 | Crispy triangles filled with melted cheese, paired with zesty Cajun sauce for bold flavors.",
          id: "144643094",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/4/94b56f40-e857-4c64-886c-44decabf1d46_7bb2cef4-c490-4670-8a20-f0e92c458d9e.jpg_compressed",
          name: "Spring Rolls (10 Pcs)",
          description:
            "Serves 1 | Crispy rolls filled with vegetables and served with spicy Cajun dipping sauce for a flavorful appetizer.",
          id: "144643093",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/10/412cc20c-567b-45b8-afc9-feeb3662b7c3_7f2680d4-bedf-4f98-9763-fd1a682632bc.jpg_compressed",
          name: "Barbecue Pineapple (12 Pcs)",
          description:
            "Serves 1 | Grilled pineapple chunks with a caramelized sweetness, served with refreshing mint chutney.",
          id: "144643092",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/29/b7901d42-4b00-4825-8f5a-ae33a6a61788_e7793752-3d24-4799-b8eb-52b97eebbbac.jpg",
          name: "Steamed Masala Corn (Butter)",
          description:
            "Serves 1 | Tender corn kernels infused with creamy butter. Topped with a finely chopped onion, fresh coriander, and green chili. Served with Cajun Seasoning.",
          id: "144198851",
          price: 19900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/25/731db4b6-5e5b-48f4-9ad4-ed5b8e3bb4e1_2d976968-2c8c-40b0-8dc7-c7e358369636.jpg",
          name: "Steamed Masala Corn (Plain)",
          description:
            "Serves 1 | Tender corn kernels topped with a finely chopped onion, fresh coriander, and green chili. Served with Cajun Seasoning.",
          id: "144198853",
          price: 17900,
        },
      ],
    },
    {
      title: "Premium Thalis",
      items: [
        {
          imageId: "6f9802f2dc6532ac94b3eff6564f9385",
          name: "Premium Veg Thali - Serves 1",
          description:
            "Serves 1 | Veg Dum Biryani + Tandoori Paneer Tikka (3 Pcs) + Butter Paneer Masala + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad.",
          id: "100350045",
          price: 42900,
        },
        {
          imageId: "35884bffaba12971bd5491cddcb8be35",
          name: "Premium Non-Veg Chicken Thali - Serves 1",
          description:
            "Serves 1 | Chicken Dum Biryani  + Chicken Tikka Boneless (3 Pcs) + Butter Chicken Masala + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad.",
          id: "100350043",
          price: 49900,
        },
        {
          imageId: "1bd19d0b97ed99e76bf590573bd43a2e",
          name: "Premium Non-Veg Mutton Thali - Serves 1",
          description:
            "Serves 1 | Mutton Dum Biryani + Chicken Tikka Boneless (3 Pcs) + Mutton Rogan Josh + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs ). A wholesome North-Indian Thali served with Raita & Salad.",
          id: "100350044",
          price: 54900,
        },
      ],
    },
    {
      title: "Value Meals - Newly Launched",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/a0e21039-6a62-4293-a938-392c528c1e8e_86153f88-9312-4cad-921c-3dd2eb826f26.png_compressed",
          name: "Chicken Biryani and Butter Chicken Meal - Serves 1",
          description:
            "Serves 1 | Chicken Dum Biryani (2-3Pcs) + Butter Chicken Masala + Whole Wheat Paratha (1 No) + Raita - Mouth-watering combination of two of India's classic favorite dishes.",
          id: "100350059",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/f12cce2d-d35a-4cea-9c0e-309b3a151204_478c6aba-ffff-4e43-a5b3-035c44d1e7a5.jpg",
          name: "Butter Chicken Meal - Serves 1",
          description:
            "Serves 1 | Wholesome meal of Butter Chicken Masala and Dal Makhani. Served with Steamed Basmati Rice, Whole Wheat Paratha (1 No) & Angoori Gulab Jamun(3 Nos).",
          id: "136122187",
          price: 27900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/ec423c9c-9781-4c4e-869e-31f44c4f1e5b_42950f07-dd83-4624-9f31-494af9e17bbf.jpg_compressed",
          name: "Butter Chicken Mini Meal - Serves 1",
          description:
            "Serves 1 | Succulent boneless Chicken cooked in an irresistibly rich and flavourful gravy. Served with your choice of Steamed Basmati Rice OR Whole Wheat Paratha (3 Nos) and Raita.",
          id: "136122183",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/b14d997a-1312-4218-aab0-b8809f2017d4_01b7d650-8a7f-490d-95fa-f1c92d69c853.jpg",
          name: "Paneer Butter Masala Meal - Serves 1",
          description:
            "Serves 1 | Wholesome meal of Paneer Butter Masala  and Dal Makhani - Served with Steamed Basmati Rice, Whole Wheat Paratha (1 No) & Angoori Gulab Jamun(3 Nos).",
          id: "136122185",
          price: 25900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/9d91f301-4c6e-43cd-b529-fa1cfcac3167_de10afdb-3b27-4c42-b908-4a6061973754.jpg",
          name: "Egg Masala Meal - Serves 1",
          description:
            "Serves 1 | Wholesome meal of  Egg Curry and Dal Makhani. Served with Steamed Basmati Rice, Whole Wheat Paratha (1 No) & Angoori Gulab Jamun(3 Nos).",
          id: "136122186",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/d42e3be4-9bee-4441-b0f2-26d50c981c79_fa91e802-1c7e-47c7-89f2-77f47b8c6be9.jpg_compressed",
          name: "Egg Curry Mini Meal - Serves 1",
          description:
            "Serves 1 | A flavorful Egg Curry. Served with your choice of Steamed Basmati Rice OR  Whole Wheat Paratha (3 Nos) and Raita",
          id: "136122181",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/efb4cafc-7db0-4460-9c34-9be1bb2db145_5d74c8e1-bcd6-4769-810e-b173584fd5e3.jpg",
          name: "Veg Mix Meal - Serves 1",
          description:
            "Serves 1 | Wholesome meal of  Mix Veg Curry and Dal Makhani. Served with Steamed Basmati Rice , Whole Wheat Paratha (1 No) & Angoori Gulab Jamun(3 Nos)",
          id: "136122184",
          price: 20900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/3cd0bf36-6862-4df6-8397-3d601f03b16e_56e4706b-d06f-458c-a77e-0c9ef15dc0a4.jpg_compressed",
          name: "Paneer Butter Masala Mini Meal - Serves 1",
          description:
            "Serves 1 | Soft cubes of paneer cooked in a flavourful gravy. Served with your choice of Steamed Basmati Rice OR  Whole Wheat Paratha (3 Nos) and Raita",
          id: "136122182",
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/6e6aeaad-3ecd-488e-a446-9934578a4dad_b7f6780d-ffdf-4f57-b091-35607c29ff78.jpg_compressed",
          name: "Dal Makhani Mini Meal  - Serves 1",
          description:
            "Serves 1 | A flavorful Dal Makani. Served with your choice of Steamed Basmati Rice OR  Whole Wheat Paratha (3 Nos) and Raita",
          id: "136122180",
        },
      ],
    },
    {
      title: "Veg Specials",
      items: [
        {
          name: "Premium Veg Thali-Serves 1",
          description:
            "Serves 1 | Veg Dum Biryani + Tandoori Paneer Tikka (3 Pcs) + Butter Paneer Masala + Dal Makhani + Dry Mix Veg + Whole Wheat Paratha (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad.",
          id: "152378274",
          price: 42900,
        },
        {
          imageId: "a249331eb4208e8f7816f72dcd64c2f0",
          name: "Classic Meal Box (Veg)-Regular",
          description:
            "Serves 1 | King Size Meal – Paneer Butter Masala, Dal Makhani, Barbecue Veg Dum Biryani, Whole Wheat Paratha (3 Nos) Angoori Gulab Jamun (8 Nos), Raita & Garden Salad. Eat like a King with your favourite.",
          id: "147825219",
          price: 62900,
        },
        {
          imageId: "nkvwn1tswzkk0cwm4qb7",
          name: "Moong Dal Halwa.",
          description:
            "Serves 1 | Delicious golden brown Halwa  made from Moong lentils and clarified butter and garnished with pistachio. Kcal - 716",
          id: "152378275",
          price: 16900,
        },
      ],
    },
    {
      title: "Desserts & Beverages",
      items: [
        {
          imageId: "eqhsdrjeeleoklq3rww2",
          name: "Coke Can (6 Nos)",
          description: "Serves 1 | Pack of 6 coke cans. Kcal - 44",
          id: "78906723",
          price: 37900,
        },
        {
          imageId: "373755106e5df29ba8df765c254a1368",
          name: "Angoori Jamun (12 Nos)",
          description:
            "Serves 2 | A bliss to gobble up these small spongy pearl shaped slightly warm gulab jamuns (12 Nos). A perfect  mithai to conclude your meal. Kcal - 466",
          id: "69415920",
          price: 15900,
        },
        {
          imageId: "nkvwn1tswzkk0cwm4qb7",
          name: "Moong Dal Halwa",
          description:
            "Serves 1 | Delicious golden brown Halwa  made from Moong lentils and clarified butter and garnished with pistachio. Kcal - 716",
          id: "62486394",
          price: 16900,
        },
        {
          imageId: "vxenqjcqkim9vumjwzsr",
          name: "Kesar Pista Milkshake",
          description:
            "Serves 1 | Saffron Pista kulfi blened & thickened with Rabri-a shake that can be had anytime of the year. Kcal - 485",
          id: "85427040",
          price: 14900,
        },
        {
          imageId: "zvunhnypnkze9nf1nafe",
          name: "Mango Milkshake",
          description:
            "Serves 1 | A delicious blend of Mango Kulfi and fresh mangoes, this shake is perfect for a hot summer day.",
          id: "126412036",
          price: 14900,
        },
        {
          imageId: "yimyezlf2chvwud8rqu4",
          name: "Strawberry Milkshake",
          description:
            "Serves 1 | This Gem among milkshakes is perfect for any occasion-A smooth blend of Strawberry & Strawberry Kulfi. Kcal - 496",
          id: "85427038",
          price: 14900,
        },
        {
          imageId: "tclqpiigfh8nuz0x1mzy",
          name: "Chocolate Milkshake",
          description:
            "Serves 1 | This shake is fantabulous! Chocolate Kulfi & chocolate syrup whirled together with Rabri. Kcal - 501",
          id: "85427039",
          price: 14900,
        },
        {
          imageId: "zwj7h2gdkh7sbhipej7y",
          name: "Chocolate Brownie",
          description:
            "Serves 1 | Perfect fudge square of chocolate topped with hot chocolate sauce. Kcal - 674",
          id: "78490694",
          price: 14900,
        },
        {
          imageId: "uyrwne3ocamkldpn0dfo",
          name: "Coolberg Non Alcoholic Beer -Cranberry (330 Ml)",
          description:
            "Serves 1 | Coolberg Non-Alcoholic Beer-Cranberry (330 Ml)",
          id: "97156399",
          price: 9900,
        },
        {
          imageId: "eqhsdrjeeleoklq3rww2",
          name: "Coke Can",
          description:
            "Serves 1 | A deliciously fizzy go to companion. Kcal - 44",
          id: "78490695",
          price: 6700,
        },
        {
          imageId: "mqiknqggbntzl0fretm1",
          name: "Coolberg Non Alcoholic Beer -Malt (330 Ml)",
          description: "Serves 1 | Coolberg Non-Alcoholic Beer-Malt (330 Ml)",
          id: "97156398",
          price: 9900,
        },
        {
          imageId: "i2d4xz6ul96qj4xsy6ka",
          name: "Coolberg Non Alcoholic Beer -Ginger (330 Ml)",
          description: "Serves 1 | Coolberg Non-Alcoholic Beer-Ginger (330 Ml)",
          id: "97156400",
          price: 9900,
        },
        {
          imageId: "z0nwrcjzj8llcsl0vlr8",
          name: "Coolberg Non Alcoholic Beer -Mint (330 Ml)",
          description: "Serves 1 | Coolberg Non-Alcoholic Beer-Mint (330 Ml)",
          id: "97156401",
          price: 9900,
        },
        {
          imageId: "lbapguncj4elekjk0u42",
          name: "Coolberg Non Alcoholic Beer -Peach (330 Ml)",
          description: "Serves 1 | Coolberg Non-Alcoholic Beer-Peach (330 Ml)",
          id: "97156396",
          price: 9900,
        },
        {
          imageId: "v2jjjgucr5xcvszh4mbf",
          name: "Coolberg Non Alcoholic Beer -Strawberry (330 Ml)",
          description:
            "Serves 1 | Coolberg Non-Alcoholic Beer-Strawberry (330 Ml)",
          id: "97156397",
          price: 9900,
        },
      ],
    },
  ],
  328882: [
    {
      title: "Recommended",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/e860b0a9-831d-453f-a842-351744bd980e_8c07b5d2-591d-4815-8c42-2741d52c2602.jpg",
          name: "Mutton Galouti (6 Pcs)",
          description:
            "[6 pieces] a royal delicacy exquisitely tender, melt-in-the-mouth kebabs made from finely minced mutton infused with a blend of multiple spices, including saffron and rose water, accompanied by signature charcoal spicy chatpata chutney and onion salad. ",
          id: "97942832",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/2ffe83ae-4d43-4b9d-b8bd-eda29b147b2f_ea7a7436-5560-452a-954b-31dd60694fb9.jpg",
          name: "Beetroot Tikki (6 Pcs)",
          description:
            "[6 pieces] a vibrant blend of grated beetroot, potatoes, and aromatic spices shaped into patties, crisped to a golden hue. ",
          id: "125453373",
          price: 24900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/34e72fa0-7d09-4336-ad39-16911c4f227f_a35116f0-0e0f-4622-aaee-ff641ffee1dc.jpg",
          name: "Soya Keema Mini Samosa (6 Pcs) (New)",
          description:
            "[6 pieces] a bite size twist on the classic indian snack with a filling of minced soya, aromatic spices encased in a crispy pastry. ",
          id: "129753490",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/859a1481-349a-4f8c-8830-7da6947cf874_a5604b36-486b-4428-b8e0-f0fdffa5d842.jpg",
          name: "Veg Kebab (10 Pcs) (New)",
          description:
            "[10 pieces] succulent kebabs made from peas, green chilies, and a tantalizing blend of herbs and spices, featuring the sensual touch of nutmeg and mace with a dash of sourness from dry mango powder, transforming the humble pea into a gourmet delicacy from the royal kitchens. ",
          id: "129753489",
          price: 22900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/2be3d2d9-3e39-453c-9a1c-3c47d54f3040_5e86e738-4ab7-4d2c-8b69-9f521131092f.jpg",
          name: "Charcoal Chicken Biryani (Boneless, Serves 1)",
          description:
            "(600 gms),  [halal certified], [medium spiced] charcoal's signature chicken tikka cooked with basmati rice and a lightly smoked gravy packed with flavours of signature in-house aromatic spices, accompanied by raita. ",
          id: "112637264",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg",
          name: "Dum Chicken Tikka Biryani (Boneless, Serves 1)",
          description:
            "(600 gms),  [halal certified], [medium spiced] tandoori chicken tikka cooked with basmati rice and rich gravy with aromatic spices, accompanied by raita. ",
          id: "66315063",
          price: 42900,
        },
      ],
    },
    {
      title: "Kepsa Biryani (New) (600 Gms, Serves 1)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/1/84280004-4df0-424e-920f-00a2ec50b549_194fabc6-bfb2-48c1-92dd-cf8d06fb6099.jpg",
          name: "Charcoal Spicy Paneer Kepsa Biryani",
          description:
            "(600 gms), [medium spiced] a fragrant rice dish featuring paneer simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930272",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/4/44b628a1-ebac-4c25-8cd1-455d88968143_1b9ab92f-bef7-4e43-8ede-09aee510c813.jpg",
          name: "Paneer Nawabi Kepsa Biryani",
          description:
            "(600 gms),  a fragrant rice dish featuring paneer simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930278",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/5bc9444c-85ce-45fb-a198-1c3f0b9b1df1_6fa1e314-e941-4815-9af9-3be5c50e7d99.jpg",
          name: "Charcoal Spicy Chicken Kepsa Biryani",
          description:
            "(600 gms), [medium spiced] a fragrant rice dish featuring chicken simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930270",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/1/c3791dae-3aed-4195-bf86-825bd28dad53_15f9f230-6b0d-493c-acf8-c7c2d5fc3420.jpg",
          name: "Chicken Tikka Kepsa Biryani",
          description:
            "(600 gms),  a fragrant rice dish featuring chicken simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930274",
          price: 39900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/adcd9c1d-f453-4d10-af2f-929deb1a3143_fda2f3b0-db46-4fc2-92b2-a23101506966.jpg",
          name: "Charcoal Spicy Mutton Kepsa Biryani",
          description:
            "(600 gms), [medium spiced] a fragrant rice dish featuring mutton simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930275",
          price: 54900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/cdb74c7a-36ec-4e4d-a406-4a802752a949_3603b10a-7be9-4fd3-ab62-00fd5ba241ff.jpg",
          name: "Mutton Nawabi Kepsa Biryani",
          description:
            "(600 gms),  a fragrant rice dish featuring mutton simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930279",
          price: 54900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/4a97501c-3b43-4bde-8d20-1dcd6eeac93d_8c7dd67d-07ef-4bd1-8625-f9ccf1bc956c.jpg",
          name: "Charcoal Chicken Seekh Kepsa Biryani",
          description:
            "(600 gms), [medium spiced] a fragrant rice dish featuring chicken seekh simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930269",
          price: 37900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/3ee030de-759e-4313-adfc-02fac9e5ba18_3316eab7-8054-4cd0-867f-e23470fe4f98.jpg",
          name: "Nawabi Chicken Seekh Kepsa Biryani",
          description:
            "(600 gms),  a fragrant rice dish featuring chicken seekh simmered with a blend of aromatic spices, vegetables, and basmati rice, garnished with fresh herbs,accompanied by plain raita. ",
          id: "148930277",
          price: 37900,
        },
      ],
    },
    {
      title: "Biryani Meal Boxes & Combos",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/3/524768d3-1a4c-452f-b85c-ae6069fddd92_b97eb2dd-f5d4-4782-b368-1aeee8403d66.jpg",
          name: "Charcoal Meal Box - Veg",
          description:
            "Introducing our delectable signature meal box, crafted with love and precision to satisfy your cravings for authentic indian flavors. Choice of veg biryani, dum aloo starter, gulab jamun, accompanied by fresh raita, chatpata onion salad & mint chutney. ",
          id: "137026879",
          price: 54900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/8fed7270-8ec5-4b4f-a852-889fe7d56f11_9eb0cb38-1fc8-4ebb-a036-4b34d86c7c33.jpg",
          name: "Charcoal Meal Box - Chicken",
          description:
            "Introducing our delectable signature meal box, crafted with love and precision to satisfy your cravings for authentic indian flavors. Choice of chicken biryani, chicken seekh kebab starter, gulab jamun, accompanied by fresh raita, chatpata onion salad & mint chutney. ",
          id: "137026880",
          price: 59900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/8fed7270-8ec5-4b4f-a852-889fe7d56f11_9eb0cb38-1fc8-4ebb-a036-4b34d86c7c33.jpg",
          name: "Charcoal Meal Box - Mutton",
          description:
            "Introducing our delectable signature meal box, crafted with love and precision to satisfy your cravings for authentic indian flavors. Choice of mutton biryani, mutton seekh kebab starter, gulab jamun, accompanied by fresh raita, chatpata onion salad & mint chutney. ",
          id: "137026883",
          price: 69900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/b70b30ed-a603-4da7-8939-59ff0d29f98c_7352fc33-f601-4715-b27f-ba4728327069.jpg",
          name: "Veg Biryani Combo",
          description:
            "Make your veg biryani meal with your selected biryani, a mini starter, and a dessert that suits your taste. ",
          id: "125696527",
          price: 48900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/82787d25-ec36-46d7-8e2b-b8968490e4d4_b2584a0a-276b-43b9-aff3-a91b141ac763.jpg",
          name: "Chicken Biryani Combo",
          description:
            "Customize your dream chicken biryani meal by selecting your preferred biryani, a mini starter, and a dessert of your choice. ",
          id: "125696529",
          price: 49900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/23efd640-ab92-4741-bc0d-e1affbbbbbee_01f91b2f-1991-4205-a2d5-a2ea41b78bc7.jpg",
          name: "Mutton Biryani Combo",
          description:
            "Design your ultimate mutton biryani meal featuring your chosen biryani, a miniature starter, and a dessert of your liking. ",
          id: "125696526",
          price: 59900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/79fbfeef-06e5-43d1-8d38-1f066c9ee598_a7c1f98f-7004-4130-b5e6-41c3aeff775f.jpg",
          name: "Roll Combo",
          description:
            "Craft your ideal roll feast with your preferred roll, and a beverage of your choice. ",
          id: "126066177",
          price: 32900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/7/02af1263-16cb-418b-8b03-b370b00b1187_4bdb6cfd-2aab-4f98-8823-b6fe96a903d1.jpg",
          name: "Meal For 2-chicken",
          description:
            "Meal for 2  contains 1 dum chicken tikka biryani, 1 charcoal chicken biryani, lucknowi chicken seekh (4pcs), sugar free mithai (6pcs). ",
          id: "148633644",
          price: 139900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/7/0dec13c1-9f05-4fd5-ae65-92fd4de817e4_450878e8-81cb-4464-8eec-a00d573a277f.jpg",
          name: "Meal For 2-veg",
          description:
            "Meal for 2  contains 1 dum spicy paneer biryani,1 charcoal veg biryani,veg seekh ,sugar free mithai (6pcs). ",
          id: "148633646",
          price: 139900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/7/5b0f0f98-3d63-4e18-8780-f7512a3f492b_b8437319-5ca5-4903-941e-24f59ea3e14f.jpg",
          name: "Meal For 2-mutton",
          description:
            "Meal for 2  contains 1 mutton dum biryani, 1 charcoal mutton biryani, lucknowi chicken seekh (4pcs),sugar free mithai (6 pcs). ",
          id: "148633645",
          price: 159900,
        },
      ],
    },
    {
      title: "Party Packs (4.8 Kg,serves 8-10)",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/2/70d21e2d-aaf3-46ef-818f-a82657013b3a_465341d7-da44-412e-b18c-58138e7e0148.jpg",
          name: "Biryani Party Pack- Veg (For 8)",
          description:
            "(4. 8 kg), pack of 2 veg biryanis, 2. 4 kg each, cooked with basmati rice and authentic gravy loaded with aromatic spices, accompanied by 8 raita. ",
          id: "130950551",
          price: 278900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/2/e6d86335-ac84-4d51-a806-2c95b8bc150e_4d6f3add-83c5-4943-b3c4-17c4e2f65a74.jpg",
          name: "Biryani Party Pack- Chicken (For 8)",
          description:
            "(4. 8 kg), pack of 2 chicken biryanis, 2. 4 kg each, cooked with basmati rice and authentic gravy loaded with aromatic spices, accompanied by 8 raita. ",
          id: "130950547",
          price: 279900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/2/8a296392-bc6e-48bb-80a3-bb48c8c745ad_917b9e5a-a1bd-43eb-bf31-82f42c4758e6.jpg",
          name: "Biryani Party Pack- Mutton (For 8)",
          description:
            "(4. 8 kg), pack of 2 mutton biryanis, 2. 4 kg each, cooked with basmati rice and authentic gravy loaded with aromatic spices, accompanied by 8 raita. ",
          id: "130950554",
          price: 358900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/2ffe83ae-4d43-4b9d-b8bd-eda29b147b2f_ea7a7436-5560-452a-954b-31dd60694fb9.jpg",
          name: "Starter Party Pack- Veg (For 4)",
          description:
            "Pack of 4 veg starters of your choice, accompanied by green chutney",
          id: "130968910",
          price: 89900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/29/a931bf88-1f6a-4357-b852-61aa1305e0bd_b51c9bea-1ede-402c-8e56-fcb8840a7eeb.jpg",
          name: "Starter Party Pack- Non Veg (For 4)",
          description:
            "Pack of 4 non - veg starters of your choice, accompanied by green chutney",
          id: "130968911",
          price: 129900,
        },
      ],
    },
  ],
  487628: [],
  33828: [
    {
      title: "Recommended",
      items: [
        {
          imageId: "odiatlyndwmgmr68egz3",
          name: "Hot Chocolate",
          id: "6663287",
          price: 24900,
        },
        {
          imageId: "htnu86xcfl7xjdpopkyb",
          name: "Nutella Hot Chocolate",
          id: "38809644",
          price: 32900,
        },
        {
          imageId: "cfcrfsdtccvwrff40zrb",
          name: "Nutella Hazelnut Coffee",
          description:
            "For all chocolate and coffee lovers! a delightful hot beverage made with coffee and Nutella hazelnut paste. Coffee made from fresh cow milk.",
          id: "6663289",
          price: 27900,
        },
        {
          imageId: "wso6fvavtr8sfnqzuaso",
          name: "Cafe Mocha",
          description:
            "Coffee made from fresh cow milk. Topped with Chocolate Sauce .",
          id: "6663281",
          price: 24900,
        },
        {
          imageId: "goodtzvniyhctz8pucas",
          name: "Death By Chocolate Cappuccino",
          description:
            "A blend of whole milk, coffee & chocolate fudge, finished with a heaping peak of freshly whipped cream",
          id: "83832017",
          price: 27900,
        },
        {
          imageId: "ses2gj9mwx6vnj26grte",
          name: "International Cappuccino",
          id: "104471046",
          price: 26900,
        },
      ],
    },
    {
      title: "Mains",
      items: [
        {
          imageId: "xzq3ygmouciw3gdr4j39",
          name: "Grilled Teriyaki Chicken",
          description:
            "Grilled chicken served with exotic vegetable rice pilaf and teriyaki sauce",
          id: "83832026",
          price: 57900,
        },
        {
          imageId: "ounk7iyiu1mbtgfg03i9",
          name: "Fish And Chips",
          description:
            "Tempura fried fish served with French fries and tartar sauce with a side of fresh coleslaw salad.",
          id: "104471035",
          price: 64900,
        },
        {
          imageId: "zxiddchtdsvcphd9czq3",
          name: "Honey Mustard And Lemon Chicken",
          description:
            "Herb grilled chicken tossed in honey mustard and lemon cream sauce served with creamy mashed potatoes, pepperoncino pasta and sauteed veggies.",
          id: "104471038",
          price: 60900,
        },
        {
          imageId: "vj8dljy7b84ccfydoihz",
          name: "Chicken Strongoff",
          id: "104471034",
          price: 66900,
        },
        {
          imageId: "dha3zewwxhvqaepichxo",
          name: "Honey Mustard Grilled Fish",
          description:
            "Honey and mustard marinated grilled ?sh, served with saut",
          id: "6663275",
          price: 67900,
        },
        {
          name: "Grilled Chicken With Truffle Oil",
          description:
            "Grilled chicken with creamy mushroom sauce & truffle oil",
          id: "118381912",
          price: 70900,
        },
        {
          imageId: "z0rtdlq66qgph6kkzen7",
          name: "Prawns Thai Green Curry",
          id: "104471040",
          price: 63900,
        },
        {
          imageId: "pooi35y5obwmjy5u34es",
          name: "Pan Seared Fish With Black Pepper Sauce",
          description: "Served with basil mashed potato and sauteed vegetables",
          id: "104471039",
          price: 64900,
        },
        {
          imageId: "njbgfayitjimuug5jot9",
          name: "Herb Garlic Chicken",
          description:
            "Succulent chicken slices tossed in a rosemary ?avour brown jus served with grilled veggies and mashed potatoes.",
          id: "69803568",
          price: 57900,
        },
        {
          imageId: "w1nfmjfnvyxywpqlmkf2",
          name: "Chilli Parmesan Crusted Fish",
          description: "With yellow chilli risotto + orange veloute",
          id: "84170042",
          price: 64900,
        },
        {
          imageId: "jt1nkg4wyjymdqifvmft",
          name: "Chicken Thai Green Curry",
          description: "Served with fragrant steamed rice.",
          id: "84170035",
          price: 58900,
        },
        {
          imageId: "m4d0pzzv8ng06nv56e2y",
          name: "Chilli Parmesan Crusted Paneer",
          description: "With yellow chilli risotto + orange veloute",
          id: "104471041",
          price: 55900,
        },
        {
          imageId: "botc9jilor37fqfk3abm",
          name: "Grilled Veggie Provencale",
          description:
            "Grilled veggies tossed in a tomato ?avoured cream sauce and served with parsley rice.",
          id: "104471037",
          price: 58900,
        },
        {
          imageId: "eobplvegwoc0fjrkvwzf",
          name: "Green Veggie Steak",
          id: "105198244",
          price: 57900,
        },
        {
          name: "Garlic Chicken In White Sauce",
          id: "104471036",
          price: 59900,
        },
        {
          imageId: "dfjozzncakhbymlebco6",
          name: "Veg Thai Green Curry",
          description: "Served with fragrant steamed rice.",
          id: "104471043",
          price: 50900,
        },
        {
          imageId: "ovc1qjhdfesdn8qgsjdv",
          name: "Veggie Stroganoff",
          description:
            "Onion, bell pepper, baby corn, mushroom and broccoli tossed in herbed creamy sauce with parsley rice.",
          id: "83832031",
          price: 44900,
        },
        {
          imageId: "4194d460a960e2eccff371dbe763fac4",
          name: "Chilli Parmesan Crusted Chicken",
          id: "104471033",
          price: 61900,
        },
      ],
    },
    {
      title: "Quick Bites",
      items: [
        {
          imageId: "whxxqbx8vvwur9h8vmjr",
          name: "Cheesy Garlic Bread",
          id: "6663217",
          price: 30900,
        },
        {
          imageId: "d9syk03br0pfq7ukfeyp",
          name: "Exotic Stir Fried Veg",
          description:
            "Broccoli, babycorn, bell pepper, carrot, french beans & mushrooms, stir fried in garlic butter",
          id: "104471024",
          price: 34900,
        },
        {
          imageId: "jdpj6oic91ytauyhm31e",
          name: "Creamy Garlic Prawns",
          description:
            "Succulent prawns tossed with chilli flakes, double cream and cheese finished with mix herbs",
          id: "83832102",
          price: 54900,
        },
        {
          imageId: "vajqgsg5t8rtwh5aubyn",
          name: "Cajun Prawns",
          description:
            "Cajun spiced marinated fresh prawns, oven grilled and served with herbed remoulade sauce.",
          id: "6663230",
          price: 54900,
        },
        {
          imageId: "efh0atalvgkicyiij8kq",
          name: "Fish Fingers",
          description:
            "Golden juicy fish fingers served with tangy tartar sauce.",
          id: "6663229",
          price: 49900,
        },
        {
          imageId: "q5yimlo1gxzmpe9rrjxv",
          name: "Chicken Parmesan Meatballs",
          description:
            "Minced chicken and parmesan flavoured meatballs on a base of thick tomato concase topped with balsamic reduction",
          id: "60726280",
          price: 46900,
        },
        {
          imageId: "wqcmfdkjnxgt545ndhvu",
          name: "Grilled Chicken Supreme",
          description:
            "Chicken supreme in a homemade marinade made of coriander, chilli, cumin, garlic and lemon.",
          id: "83832241",
          price: 44900,
        },
        {
          imageId: "j0mlpwvji0btjlpmyhok",
          name: "One Pan Garlic Mushroom",
          description:
            "Sauteed button mushrooms with olive oil, chilli flakes, mixed herbs and garlic with balsamic reduction",
          id: "83832121",
          price: 46900,
        },
        {
          name: "Honey Chilli Glazed Chicken On Sourdough Toast",
          description: "With pumpkin seed & whipped goat cheese",
          id: "118381907",
          price: 50900,
        },
        {
          imageId: "d5snjeajmpxlpf6zkehm",
          name: "Jalapeno Nugget",
          description: "Served with thousand island dip.",
          id: "104471027",
          price: 32900,
        },
        {
          imageId: "yzetppeuiuk6xmzigynz",
          name: "Chicken Peri Peri",
          description:
            "Chicken marinade with homemade peri peri sauce, Served with garlic mayo.",
          id: "6663227",
          price: 43900,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/24/df5f8125-bc58-4621-9688-a170c93e2daa_4c29eed0-e1ca-4644-b4bf-80e0155a4a24.jpeg",
          name: "Chicken Quesadillas",
          id: "139076596",
          price: 45900,
        },
        {
          imageId: "f4en2qpqkgugxuufvu4d",
          name: "Crunchy Chicken Strips",
          description:
            "Moist crispy fried tender chicken with honey mustard mayo.",
          id: "83832240",
          price: 43900,
        },
        {
          imageId: "wvggysg851ehdks8qbug",
          name: "Veg Loaded Mexican Nachos",
          description:
            "Jalapeno flavour tortilla chips loaded with baked beans, cheese sauce & topped with sour cream.",
          id: "104471032",
          price: 42900,
        },
        {
          name: "Chicken Loaded Mexican Nachos",
          description:
            "Jalapeno flavour tortilla chips loaded with baked beans, cheese sauce & topped with sour cream and chicken bolognese.",
          id: "84170311",
          price: 44900,
        },
        {
          imageId: "qnirmoidmdzlrzso7nos",
          name: "Crispy Garlic Bread Thins",
          description: "Served with thousand island dip.",
          id: "6663212",
          price: 25900,
        },
        {
          name: "Chicken Popcorn",
          description:
            "Spicy chicken popcorn bites served with green chutney flavoured mayo dip",
          id: "118425208",
          price: 40900,
        },
        {
          imageId: "qku9tgcijc816xfqezlp",
          name: "Creamy Garlic Mushroom",
          description: "Served with toasted focaccia bread",
          id: "6663223",
          price: 34900,
        },
        {
          imageId: "pagsqj5pnx5amtd4swwj",
          name: "Grilled Cottage Cheese",
          description: "Grilled cottage cheese served on a bed of Mexican saut",
          id: "6663222",
          price: 33900,
        },
        {
          name: "Paneer Popcorn",
          id: "90507864",
          price: 35900,
        },
        {
          imageId: "sicakvthl3p3zdo7sqmf",
          name: "Quesadillas",
          description:
            "Toasted and stuffed with tasty cheese, peppers, capsicum, mushrooms and onions. Served with sour cream and tomato salsa.",
          id: "6663215",
          price: 33900,
        },
        {
          name: "Paneer Lollipop With Ranch Dip",
          description:
            "Chilli coriander flavoured paneer lollipops on satay stick served with ranch dip",
          id: "104471029",
          price: 30900,
        },
        {
          imageId: "jmsdonxt5bnpcrbsiyv6",
          name: "Potato Wedges",
          description:
            "Deep fried potato wedges, best had with some tangy tomato ketchup.",
          id: "6663210",
          price: 26900,
        },
        {
          imageId: "rcrg5ocp80q7oxx0rvas",
          name: "Garlic Bread",
          description: "Garlic Bread.",
          id: "104471025",
          price: 25900,
        },
        {
          imageId: "zb05e1rdc8t915pgxlzl",
          name: "Creole Potatoes",
          id: "83832023",
          price: 26900,
        },
        {
          imageId: "0dc1c477de0c34dde968431fd0afd4ef",
          name: "Peri Peri Potato Crispers - 279",
          id: "131838964",
          price: 27900,
        },
        {
          imageId: "uikhb9jgwzwwvz4vvhfa",
          name: "Schezwan French Fries",
          description:
            "French fries tossed in schezwan sauce. Served with garlic mayo.",
          id: "104471031",
          price: 27900,
        },
        {
          name: "Potato Crispers",
          id: "119747471",
          price: 26900,
        },
        {
          imageId: "ouv8scwqwrhfm8cs80ie",
          name: "French Fries",
          id: "6663208",
          price: 24900,
        },
        {
          name: "Nachos With Chicken Bolognaise",
          id: "104471028",
          price: 44900,
        },
      ],
    },
    {
      title: "Extras",
      items: [
        {
          name: "Extra Chicken Sausages",
          id: "105870771",
          price: 13900,
        },
        {
          imageId: "ip3hb5pshtbhgd1mqu6b",
          name: "Extra Sauteed Mushroom",
          id: "104508999",
          price: 13900,
        },
        {
          name: "Extra Chicken",
          id: "104508970",
          price: 9900,
        },
        {
          name: "Extra Pita Bread",
          id: "104508997",
          price: 9900,
        },
        {
          name: "Extra Cheese Sauce",
          id: "104508969",
          price: 10900,
        },
        {
          imageId: "pp74jkefvrmurbvafqdz",
          name: "Extra Vegetable",
          id: "104509004",
          price: 7900,
        },
        {
          name: "Extra Mushroom",
          id: "110132143",
          price: 7900,
        },
        {
          imageId: "y9cyz52u4gby4iqrl9ot",
          name: "Extra Process Cheese",
          id: "104508998",
          price: 8900,
        },
        {
          name: "Extra Garlic Bread",
          id: "104508980",
          price: 5900,
        },
        {
          name: "Pesto Sauce",
          id: "116930250",
          price: 5900,
        },
        {
          name: "Extra Vanilla Ice Cream",
          id: "104509003",
          price: 4900,
        },
        {
          name: "Mini Biscutti",
          id: "105870773",
          price: 1000,
        },
        {
          name: "Extra Caramel",
          id: "104508967",
          price: 5900,
        },
        {
          name: "Extra Cheese",
          id: "104508968",
          price: 7900,
        },
        {
          name: "Extra Chocolate Ice Cream",
          id: "104508971",
          price: 4900,
        },
        {
          name: "Extra Chocolate Sauce",
          id: "104508972",
          price: 4900,
        },
        {
          name: "Extra Coffee Short",
          id: "104508973",
          price: 6900,
        },
        {
          name: "Extra Corn",
          id: "104508974",
          price: 6900,
        },
        {
          imageId: "jestfpjpiivvdy6of1no",
          name: "Extra Creamy Spinach",
          id: "104508975",
          price: 14900,
        },
        {
          name: "Extra Hazelnut",
          id: "104508984",
          price: 5900,
        },
        {
          name: "Extra Honey",
          id: "104508985",
          price: 4900,
        },
        {
          name: "Extra Irish",
          id: "104508987",
          price: 5900,
        },
        {
          imageId: "nqjwh4xfks8wxzyxzuyt",
          name: "Extra Mozarella Cheese",
          id: "104508989",
          price: 9900,
        },
        {
          name: "Extra Nutella",
          id: "104508992",
          price: 6900,
        },
        {
          name: "Extra Olive Oil",
          id: "104508993",
          price: 6900,
        },
        {
          name: "Extra Olives",
          id: "104508994",
          price: 6900,
        },
        {
          name: "Extra Paneer",
          id: "104508995",
          price: 6900,
        },
        {
          name: "Extra Parmesan Cheese",
          id: "104508996",
          price: 14900,
        },
        {
          name: "Extra Shrim",
          id: "104509000",
          price: 11900,
        },
        {
          name: "Extra Salmon",
          id: "104509001",
          price: 24900,
        },
        {
          name: "Extra Vanilla Flavour",
          id: "104509002",
          price: 5900,
        },
        {
          name: "Extra Whip",
          id: "104509005",
          price: 4900,
        },
        {
          name: "Extra Egg",
          id: "105870772",
          price: 6900,
        },
        {
          name: "Extra Truffle Oil",
          id: "119595658",
          price: 26900,
        },
      ],
    },
  ],
  200279: [
    {
      title: "Recommended",
      items: [
        {
          imageId: "0a61984e9c25d6e94b94a99f878b326f",
          name: "Chicken Kheema Pav",
          description:
            "Bhuna chicken kheema served along with the perfectly baked pav | Serving 160g, Protein 7.95(g), Fat 3.51(g), Carbohydrates 1.24(g), Calorific value 114.68(kcal) |",
          id: "98410469",
          price: 11500,
        },
        {
          imageId: "bba6d057664ab4360341be38c30062a9",
          name: "Desi Chicken Burger",
          description:
            "Our grilled chicken burger patties paired with light fluffy pav smeared with our signature sauce | Serving 150g, Protein 14.12(g), Fat 5.70(g), Carbohydrates 2.63(g), Calorific value 118.36(kcal) |",
          id: "96642089",
          price: 11500,
        },
        {
          imageId: "7a08a6ae22a2da9f17f1150c939484db",
          name: "Tandoori Chicken Salad  (served Cold)",
          description:
            "|250 gms| |Not spicy| Chicken tikka pieces & freshly farmed veggies doused in low fat tandoori spiced dressing. |Served Dry ,Boneless| | Serving 250g, Protein 41.39(g), Fat 17.04(g), Carbohydrates 0.64(g), Calorific value 321.53(kcal) | | Served Cold |",
          id: "98410468",
        },
        {
          imageId: "6203fb0ece52dd73c952797e03e084ac",
          name: "Bistro Chicken Salad  (served Cold)",
          description:
            "Grilled chicken breast slices, bell pepper juliennes, American sweet corn & olives dressed in a zesty French vinagrette dressing | Serving 250g, Protein 36.09(g), Fat 14.88(g), Carbohydrate | Served Cold |",
          id: "96642035",
        },
        {
          imageId: "vqvjeibamyx2fvma3z1a",
          name: "Lebanese Chicken Wrap",
          description:
            "Grilled chicken chunks dressed in garlic aioli wrapped on a bed of multigrain wrap, eggs lettuce and tomatoes | Serving 315g, Protein 37.34(g), Fat 19.04(g), Carbohydrates 49.41(g), Calorific value 561.40(kcal) |",
          id: "98410459",
          price: 23500,
        },
        {
          imageId: "dweoax8ijoi81dwf8g7d",
          name: "Bhuna Chicken Wrap",
          description:
            "Chicken chunks coated with a rich fried onion and tomato gravy wrapped in a multigrain egg coated wrap | Serving 315g, Protein 39.40(g), Fat 19.81(g), Carbohydrates 49.24(g), Calorific value 575.83(kcal) |",
          id: "98410454",
          price: 23500,
        },
        {
          imageId: "lz9znyjuuqrbzbhyg7qe",
          name: "Tandoori Chicken Club Sandwich",
          description:
            "Tandoori chicken chunks dressed in Indian spiced low fat mayo sandwiched between multigrain bread along with eggs and lettuce.| Serving 180g, Protein 18.25(g), Fat 7.46(g), Carbohydrates 30.09(g), Calorific value 303.52(kcal) |",
          id: "98410460",
          price: 22400,
        },
        {
          imageId: "b85cab3cc1fce8e883f9c30885a464eb",
          name: "Butter Chicken Wrap",
          description:
            "Slow cooked tandoor grilled chicken chunks coated with a creamy tomato puree' wrapped in a multigrain egg coated wrap | Serving 315g, Protein 31.41(g), Fat 16.71(g), Carbohydrates 48.6(g), Calorific value 513.46(kcal) |",
          id: "98410455",
          price: 23500,
        },
        {
          imageId: "c4006b79ee9e4355a9ff9737c658a7a0",
          name: "Grilled Chicken & Veggie Meal Box",
          description:
            "Italian herb flavoured grilled chicken breast served with garden fresh vegetables and signature roast gravy | Serving 250g, Protein 24.83(g), Fat 10.17(g), Carbohydrates 3.73(g), Calorific value 205.85(kcal) |",
          id: "96642064",
          price: 31400,
        },
      ],
    },
    {
      title: "Chicken Pav Wow",
      items: [
        {
          imageId: "0a61984e9c25d6e94b94a99f878b326f",
          name: "Chicken Kheema Pav",
          description:
            "Bhuna chicken kheema served along with the perfectly baked pav | Serving 160g, Protein 7.95(g), Fat 3.51(g), Carbohydrates 1.24(g), Calorific value 114.68(kcal) |",
          id: "98410469",
          price: 11500,
        },
        {
          imageId: "bba6d057664ab4360341be38c30062a9",
          name: "Desi Chicken Burger",
          description:
            "Our grilled chicken burger patties paired with light fluffy pav smeared with our signature sauce | Serving 150g, Protein 14.12(g), Fat 5.70(g), Carbohydrates 2.63(g), Calorific value 118.36(kcal) |",
          id: "96642089",
          price: 11500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/16/a8e532e4-c495-4ec3-a381-9594e94ec8b3_f4e2b553-f3c7-4885-a53e-efc174cc6383.jpg",
          name: "Chicken Vada Pav",
          description:
            "Grilled juicy chicken patty served between freshly baked pav accentuated with our signature sauce. Mumbai's favourite snack now in chicken ! | Serving 125g, Protein 11.88(g), Fat 4.85(g), Carbohydrates 2.52(g), Calorific value 101.31(kcal) |",
          id: "42535826",
          price: 8500,
        },
        {
          imageId: "mtirekbv8qrk6umppu6i",
          name: "Chicken Seekh Pav",
          description:
            "Succulent chicken seekh kebabs served along with grilled pav and secret creamy dressing | Serving 160g, Protein 17.59(g), Fat 7.52(g), Carbohydrates 1.05(g), Calorific value 142.35(kcal) |",
          id: "42535809",
          price: 11500,
        },
      ],
    },
    {
      title: "Wraps, Sandwiches & Mealboxes",
      items: [
        {
          imageId: "vqvjeibamyx2fvma3z1a",
          name: "Lebanese Chicken Wrap",
          description:
            "Grilled chicken chunks dressed in garlic aioli wrapped on a bed of multigrain wrap, eggs lettuce and tomatoes | Serving 315g, Protein 37.34(g), Fat 19.04(g), Carbohydrates 49.41(g), Calorific value 561.40(kcal) |",
          id: "98410459",
          price: 23500,
        },
        {
          imageId: "dweoax8ijoi81dwf8g7d",
          name: "Bhuna Chicken Wrap",
          description:
            "Chicken chunks coated with a rich fried onion and tomato gravy wrapped in a multigrain egg coated wrap | Serving 315g, Protein 39.40(g), Fat 19.81(g), Carbohydrates 49.24(g), Calorific value 575.83(kcal) |",
          id: "98410454",
          price: 23500,
        },
        {
          imageId: "lz9znyjuuqrbzbhyg7qe",
          name: "Tandoori Chicken Club Sandwich",
          description:
            "Tandoori chicken chunks dressed in Indian spiced low fat mayo sandwiched between multigrain bread along with eggs and lettuce.| Serving 180g, Protein 18.25(g), Fat 7.46(g), Carbohydrates 30.09(g), Calorific value 303.52(kcal) |",
          id: "98410460",
          price: 22400,
        },
        {
          imageId: "b85cab3cc1fce8e883f9c30885a464eb",
          name: "Butter Chicken Wrap",
          description:
            "Slow cooked tandoor grilled chicken chunks coated with a creamy tomato puree' wrapped in a multigrain egg coated wrap | Serving 315g, Protein 31.41(g), Fat 16.71(g), Carbohydrates 48.6(g), Calorific value 513.46(kcal) |",
          id: "98410455",
          price: 23500,
        },
        {
          imageId: "c4006b79ee9e4355a9ff9737c658a7a0",
          name: "Grilled Chicken & Veggie Meal Box",
          description:
            "Italian herb flavoured grilled chicken breast served with garden fresh vegetables and signature roast gravy | Serving 250g, Protein 24.83(g), Fat 10.17(g), Carbohydrates 3.73(g), Calorific value 205.85(kcal) |",
          id: "96642064",
          price: 31400,
        },
      ],
    },
    {
      title: "Preservative Free Chicken Sausage & Salami",
      items: [
        {
          imageId: "8f171e10fe5d0e603e36ae0d7e476f2b",
          name: "Classic Chicken Sausages",
          description:
            "Served Chilled | A delicious low fat high protein chicken sausage, the perfect fit for any meal of the day | Serving 250g, Protein 37.54(g), Fat 16.61(g), Carbohydrates 0.50(g), Calorific value 301.72(kcal)",
          id: "96642031",
          price: 24000,
        },
        {
          imageId: "49e2fa86e27e242fd17de88c91bebf56",
          name: "Cocktail Chicken Sausages",
          description:
            "Served Chilled | Barbeque flavoured medium spiced bite size chicken sausages | Serving 250g, Protein 35.34(g), Fat 16.31(g), Carbohydrates 0.85(g), Calorific value 291.64(kcal) |",
          id: "98410473",
          price: 24000,
        },
        {
          imageId: "20c1c21336ad8caae01879824f5109b5",
          name: "Classic Chicken Salami",
          description:
            "Served Chilled | Mildly seasoned chicken salami slices perfect for sandwhiches, wraps, pizzas or salads | Serving 250g, Protein 37.56(g), Fat 16.62(g), Carbohydrates 0.50(g), Calorific value 301.87(kcal) |",
          id: "98410471",
          price: 24000,
        },
        {
          imageId: "74469f3bfafd2f3c00caf6ccae8a510c",
          name: "Cheese & Onion Chicken Sausages",
          description:
            "Served Chilled | Chicken sausages centred with creamy cheese & flavoured with sweet American onion | Serving 250g, Protein 34.08(g), Fat 15.06(g), Carbohydrates 0.42(g), Calorific value 273.64(kcal) |",
          id: "98410470",
          price: 24000,
        },
        {
          imageId: "227e964d0c197892767c894b94209667",
          name: "Chilli Cheese Chicken Sausages",
          description:
            "Served Chilled | Jalapeno spiced creamy cheese centered keto friendy chicken sausages | Serving 250g, Protein 33.08(g), Fat 27.81(g), Carbohydrates 1.48(g), Calorific value 388.58(kcal) |",
          id: "97892370",
          price: 24000,
        },
        {
          imageId: "28e0e91620d97d6b2f1de8028f51ec1f",
          name: "Smoked Chicken Hot Dog Sausages",
          description:
            "Served Chilled | Smoked chicken frankfurter recipe inspired all the way from Germany | Serving 250g, Protein 36.29(g), Fat 16.10(g), Carbohydrates 0.50(g), Calorific value 292.15(kcal) |",
          id: "96642015",
          price: 24000,
        },
        {
          imageId: "a401a834b667ec1192372d2f155b6648",
          name: "Cocktail Chicken Salami",
          description:
            "Served Chilled | Coin size zesty chicken salami | Serving 250g, Protein 35.39(g), Fat 16.33(g), Carbohydrates 0.85(g), Calorific value 292.01(kcal) |",
          id: "98410472",
          price: 24000,
        },
        {
          imageId: "5f90a780eb6711adf96cb14e86b6675e",
          name: "Smoked Chicken Ham Slices",
          description:
            "Served Chilled | Delectable smoked chicken breast slices | Serving 250g, Protein 40.40(g), Fat 16.67(g), Calorific value 311.71(kcal) |",
          id: "96642037",
          price: 24000,
        },
      ],
    },
    {
      title: "Super Saver Combos",
      items: [
        {
          imageId: "9a315e0382fbdbe5c20c28aaea78827a",
          name: "Classic Chicken Snacks & Seekh Combo",
          description: "Pick any 4 products of qty 250 grams each",
          id: "98410463",
          price: 82800,
        },
        {
          imageId: "1cf296b928fc14fc59a34bfbc114f641",
          name: "Marinated Chicken Combo",
          description: "Pick any 4 products of qty 250 grams each",
          id: "98410464",
          price: 78800,
        },
        {
          imageId: "2ed670a4ded4d45216f250d2da13134f",
          name: "Sausage & Salami Combo",
          description: "Pick any 4 products of qty 250 grams each",
          id: "98410462",
          price: 80800,
        },
      ],
    },
    {
      title: "Dips And Extras",
      items: [
        {
          imageId: "i5xjvao7ujbmwgiwnrje",
          name: "Garlic Mayo",
          description: "Garlic infused low fat aioli",
          id: "96642017",
          price: 2800,
        },
        {
          imageId: "d69te94t4w7vjohm3ptd",
          name: "Cheesy Schezwan Dip",
          description: "Tangy cheddar and schezwan fusion",
          id: "98410489",
          price: 2800,
        },
        {
          name: "White Pav ( 2 Piece)",
          id: "132200251",
          price: 2000,
        },
        {
          name: "Brown Pav (2 Piece)",
          id: "132200252",
          price: 3000,
        },
      ],
    },
    {
      title: "Shahi Biryani (newly Launched)",
      items: [
        {
          imageId: "65f38a8ef2068d736805821a0ef025e7",
          name: "Chicken Dum Biryani (boneless)",
          description:
            "Tender Boneless Chicken Chunks Marinated In Top Secret Fusion Of Flavor Packed Indian Herbs And Spices. Dum Cooked To Perfection With Basmati Rice Served With Chef'S Secret Gravy and Birista Raita",
          id: "125905490",
          price: 30900,
        },
      ],
    },
    {
      title: "Newly Launched",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/1/0a5efed3-c1bd-47f5-ad4f-307be0262090_3440c6ac-63c9-43f3-a12f-af67abc2f694.JPEG",
          name: "Fried Rice With Schezwan sauce",
          description:
            "Street Style Wok Tossed Fried Rice With The Goodness Of Chicken & Eggs. Served With Our House Blend Schezwan Sauce.",
          id: "147233960",
          price: 26500,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/207d6789-c7bb-4eb0-bfb0-b8cbff6f4e5f_2d3eac60-d8b3-40bb-83a6-46ef4104f6e8.jpeg",
          name: "Chicken Seekh Roll",
          description:
            "Succulent Chicken Seekh Wrapped In A Wholesome Egg Coated Paratha With Our Signature Chatpata Chutney.",
          id: "136065840",
          price: 21400,
        },
      ],
    },
  ],
  668979: [
    {
      title: "Match Day Mania Combos",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/3f2ec6c6-4ad5-4764-bca1-b47ac389170e_95724a58-da5e-4e64-8129-b5894eeff4dc.jpg",
          name: "Chocoholic (100 ml)+ Kulfi (100ml)",
          description:
            'Satisfy your sweet cravings with our Chocoholic and Kulfi ice cream combo! Dive into the decadent richness of chocolate alongside the traditional Indian flavors of kulfi. With no added sugar and low in calories, this indulgent treat is perfect for any occasion. Enjoy the creamy goodness guilt-free! (Per Serving: 75 Kcal. No added sugar, or preservatives)"',
          id: "135806701",
          price: 16100,
        },
      ],
    },
  ],
  351107: [
    {
      title: "Stick Kulfi",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/5db0f02f-808f-4c1e-b0f5-01f8352005b6_abb130ff-c691-4e05-a100-ce3956b7a7c8.jpg_compressed",
          name: "Shahi Gulkand Stick Kulfi",
          description:
            "Serves 1 | This desi kulfi is folded with aromatic Gulkand into 100% Pure milk Rabdi slow-churned for hours. Kcal/serving: 161",
          id: "66341110",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/f2b4c2db-de18-4292-b76c-3f3b63714b2d_2326074b-5fcd-426c-bb4a-556ba814ab79.png_compressed",
          name: "Desi Malai Stick Kulfi",
          description:
            "Serves 1 | The classic, authentic, rustic avatar of your favourite kulfi, in form of easy-to-devour slices. This one has been custom-made to deliver creamy perfection. Kcal/serving: 155",
          id: "66341130",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/2c0ef48a-1cb7-4cae-ad5b-f30edbb49fc8_bdae0a87-b055-498d-acb7-1158e33ecde6.jpg_compressed",
          name: "Thandai Stick Kulfi",
          description:
            "Serves 1 | Give-in to kulfi indulgence with this 100% Pure milk. Rabdi slow-churned for hours, made special with traditional Thandai & topped with Almond bits! Kcal/serving: 173",
          id: "66341117",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/36599e26-b075-4b1f-9d95-365bba04add3_c0359aaa-3518-4e32-81b6-1961274fad9e.jpg_compressed",
          name: "Kesar Pista Stick Kulfi",
          description:
            "Serves 1 | Revisit childhood with this rich kulfi made with 100% Pure milk Rabdi slow-churned for hours, loaded with crunchy Pista & bits of Kesar! Kcal/serving: 161",
          id: "66341126",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/75f586a4-866b-46dc-908d-11f9e0017709_d738bd24-646f-4f5f-b44a-7c7a5ca6d49b.jpg_compressed",
          name: "Alphonso Mango Stick Kulfi",
          description:
            "Serves 1 | Enjoy Summer-y Kulfi made with the King of Fruits -- Alphonso Mango pulp is combines with rich milk Rabdi, slow-churned for hours. Kcal/serving: 148",
          id: "66341108",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/b099e623-69aa-42a9-b69f-563d666fff17_00f7cb15-c8a2-43d5-9202-83fb2f672f7a.jpg_compressed",
          name: "Anjeer Stick Kulfi",
          description:
            "Serves 1 | This royal-like treat, is loaded with Anjeer (figs) folded into creamy 100% Pure milk Rabdi slow-churned for hours, fits perfectly for the small wins in life! Kcal/serving: 164",
          id: "66341105",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/b3d3bcfa-60d2-4384-9fbe-1ca70f6537db_48df362d-2e3f-4349-9c43-c027801242b9.jpg_compressed",
          name: "Butterscotch Stick Kulfi",
          description:
            "Serves 1 | Say Hi! to our kulfi made trendy, with crunchy Butterscotch bits folded into a creamy 100% Pure milk Rabdi slow-churned for hours. Kcal/serving: 163",
          id: "66341099",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/823a49bf-35da-4193-b573-f50e99ecc747_148123a6-84a3-4c65-b662-6281743894ec.jpg_compressed",
          name: "Sitaphal Stick Kulfi",
          description:
            "Serves 1 | The creamy and rich custard apple delight, hard to resist and even harder to share. This is one flavour to be simply not missed, when the season arrives.",
          id: "73404148",
          price: 5932,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/301d34c9-4362-4d35-95d9-1c6d28378c92_40b4b7b0-c698-4e6b-a1ed-ef9ca9151b19.jpg_compressed",
          name: "Chocolate Stick Kulfi",
          description:
            "Serves 1 | A Chocolate lover's delight, made special with decadent Chocolate folded into 100% pure milk Rabdi slow-churned for hours. Kcal/serving: 166",
          id: "66341097",
          price: 5932,
        },
      ],
    },
    {
      title: "Matka Kulfi",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/af6a910a-6915-49e0-ad74-8c1c9fc066ca_e21b6a93-d4e9-468d-b670-9ab279503a11.jpg_compressed",
          name: "Desi Malai Matka Kulfi (pack Of 2)",
          description:
            "Serves 1 | Our pack of 2 Kulfis, served in matkas, re-create the yester-years together. Enjoy these Desi Malai matkas made with special Rabdi slow-churned for hours. Kcal/serving: 195",
          id: "66341093",
          price: 14407,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/20e925cd-2233-479e-8ded-5e3050de6c44_1879166b-93d6-4f6f-ba84-9f84ebdd06b2.jpeg_compressed",
          name: "Shahi Gulkand Matka Kulfi (pack Of 2)",
          description:
            "Serves 1 | The rosy refreshment of Gulkand, served in the traditional matka, to make your day all the more special, no matter what the occasion is. Kcal/serving: 198",
          id: "87971823",
          price: 16102,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/364626c4-7d66-473d-b188-1ef1c946e94a_236fed75-478e-43e5-b474-df5da49d32de.jpg_compressed",
          name: "Alphonso Mango Matka Kulfi (pack Of 2)",
          description:
            "Serves 1 | The crowning flavour of the fruit kingdom is now in the soothing company of the soulful matka, to deliver a tasteful experience that's uniquely-delicious. Kcal/serving: 148",
          id: "87971825",
          price: 16102,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/17/9d3ec68c-8965-4a34-9a08-c01229855ddb_8118b907-284f-45ec-afbf-29d7c2e79c3b.jpeg_compressed",
          name: "Kesar Pista Matka Kulfi (pack Of 2)",
          description:
            "Serves 1 | The very irresistible combination of saffron and green, combining two very complimenting flavours, for a uniquely-flavourful experience. Kcal/serving: 218",
          id: "87971824",
          price: 16102,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/2152b387-7f5e-4f60-b4cd-5e00f4314b63_65909fcb-c264-4c7d-8192-d20afeb1a4e8.jpeg_compressed",
          name: "Gud Badaam Matka Kulfi (pack Of 2)",
          description:
            "Serves 1 | A very unique combination of two contrasting tastes – the sweet jiggery and the crunchy almond – served in the soothing matka. Kcal/serving: 208",
          id: "87971822",
          price: 16102,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/19/5198a28a-eacb-4612-a126-955c0ebf88c4_d3e10435-6734-4411-9473-0183796e24ca.jpg_compressed",
          name: "Dry Fruit Matka Kulfi (pack Of 2)",
          description:
            "Serves 1 | Our pack of 2 Kulfis, served in matka pots, re-create the yester-years together. Enjoy these childhood desi blasts from the past, with chunky Pista & Almond folded into 100% Pure milk Rabdi. Kcal/serving: 224",
          id: "66341088",
          price: 16102,
        },
      ],
    },
    {
      title: "Slice Kulfi",
      items: [
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/17/1fc29225-0f7d-4355-ab14-b0c96b872faf_6e6ff360-12d0-4a4a-be89-73b911246d49.jpeg_compressed",
          name: "Kesar Pista Slice Kulfi (pack Of 3)",
          description:
            "Serves 1 | The goodness of Kesar, blended with the authentic Pista, to formulate a regal combination quite unlike any other. Experience it, to feel the difference. Kcal/serving: 224",
          id: "92798127",
          price: 17797,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/17/d34a9d07-c3fe-4a51-b284-eaaa77ef1b5e_2942733f-d0ce-42ed-b811-8a00b8c6e3ac.jpg",
          name: "Alphonso Mango Slice Kulfi (pack Of 3)",
          description:
            "Serves 1 | The king of fruits is here to regale your senses, with its rich texture and fruity fervour. Enjoy it in its slice form, to experience an all-natural treat. Kcal/serving: 205",
          id: "96310404",
          price: 17797,
        },
        {
          imageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/17/8f129c5d-abf4-4106-944c-be34aabcf117_749406d8-ea60-4268-826d-3a7a906bcf65.jpg",
          name: "Shahi Gulkand Slice (pack Of 3)",
          description:
            "Serves 1 | If you'd like to experience the regal side of the good life, the Shahi Gulkand slice kulfi is an ideal pick that you can simply not afford to miss out on. Kcal/serving: 195",
          id: "96310406",
          price: 17797,
        },
      ],
    },
  ],
};
