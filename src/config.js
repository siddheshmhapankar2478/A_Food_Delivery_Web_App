export const CDN_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2622342&lng=72.9735531&page_type=DESKTOP_WEB_LISTING";
export const CARD_IMG_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const MENU_IMAGE_ITEM_URL ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
export const MENU_CDN_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2183307&lng=72.9780897&restaurantId=";
export const RESTAURANT_MENU_URL ="https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.8973944&lng=78.0880129&restaurantId=";
export function filterData(allRestroData, searchTxt) {
    const data = allRestroData.filter((restro) => {
        const d = restro?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase());
        return d;
    });
    return data;

}
export const name="Siddhesh Mhapankar";
export const mail="siddheshmhapankar2478@gmail.com";
export const linkedin="https://www.linkedin.com/in/siddheshmhapankar2478/";
export const github="https://github.com/siddheshmhapankar2478/";
export const restaurantListMain=[
    {
      "info": {
        "id": "32133",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.9,
        "sla": {
          "slaString": "26 mins",
        },
      },
    },
    {
      "info": {
        "id": "23744",
        "name": "McDonald's",
        "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "sla": {
          "slaString": "18 mins",
        },
      }
    },
    {
      "info": {
        "id": "39677",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "costForTwo": "₹750 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "sla": {
          "slaString": "18 mins",
        },
      }
    },
    {
      "info": {
        "id": "221810",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "sla": {
          "slaString": "28 mins",
        },
      }
    },
    {
      "info": {
        "id": "48750",
        "name": "Meraki",
        "cloudinaryImageId": "zlg9ivz8tsouustzf2r4",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Chinese",
          "Thai",
          "Burmese",
          "Pan-Asian",
          "Asian"
        ],
        "avgRating": 4.1,
        "sla": {
          "slaString": "30 mins",
        },
      }
    },
    {
      "info": {
        "id": "60181",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "sla": {
          "slaString": "21 mins",
        },
      }
    },
    {
      "info": {
        "id": "31489",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4,
        "sla": {
          "slaString": "22 mins",
        },
      }
    },
    {
      "info": {
        "id": "31983",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "ts7etbvrvqq0gclxkdfl",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "sla": {
          "slaString": "20 mins",
        },
      }
    },
    {
      "info": {
        "id": "53642",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "sla": {
          "slaString": "27 mins",
        },
      }
    },
    {
      "info": {
        "id": "76024",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "sla": {
          "slaString": "16 mins",
        },
      }
    },
    {
      "info": {
        "id": "17503",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "sla": {
          "slaString": "21 mins",
        },
      }
    },
    {
      "info": {
        "id": "16644",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "North Indian",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "sla": {
          "slaString": "20 mins",
        },
      }
    },
    {
      "info": {
        "id": "305815",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "bgdbwat8mps7zgzsxlay",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.7,
        "sla": {
          "slaString": "21 mins",
        },
      }
    },
    {
      "info": {
        "id": "328882",
        "name": "Charcoal Eats - Biryani & Beyond",
        "cloudinaryImageId": "d796c32a336dcce6814de6921d916966",
        "costForTwo": "₹499 for two",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Hyderabadi",
          "North Indian"
        ],
        "avgRating": 4.1,
        "sla": {
          "slaString": "24 mins",
        },
      }
    },
    {
      "info": {
        "id": "487628",
        "name": "Poetry By Love & Cheesecake",
        "cloudinaryImageId": "d63c7c51ff0962f22d30957ba3f1ff74",
        "costForTwo": "₹900 for two",
        "cuisines": [
          "Desserts"
        ],
        "avgRating": 4.4,
        "sla": {
          "slaString": "23 mins",
        },
      }
    },
    {
      "info": {
        "id": "33828",
        "name": "Aromas Cafe & Bistro",
        "cloudinaryImageId": "jvmgd55cwtfpywyvb6zv",
        "costForTwo": "₹1000 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Middle Eastern",
          "Continental",
          "Beverages"
        ],
        "avgRating": 4.4,
        "sla": {
          "slaString": "29 mins",
        },
      }
    },
    {
      "info": {
        "id": "200279",
        "name": "Nothing but Chicken",
        "cloudinaryImageId": "rgiz2uz44dm7ol6oytpt",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Salads",
          "Biryani",
          "Kebabs",
          "Fast Food",
          "Healthy Food"
        ],
        "avgRating": 4.4,
        "sla": {
          "slaString": "22 mins",
        },
      }
    },
    {
      "info": {
        "id": "668979",
        "name": "The Brooklyn Creamery - Healthy Ice Cream",
        "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Healthy Food"
        ],
        "avgRating": 4.5,
        "sla": {
          "slaString": "15 mins",
        },
      }
    },
    {
      "info": {
        "id": "351107",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "kv1kef6gpag9fj5qsecu",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "sla": {
          "slaString": "15 mins",
        },
      }
    }
  ];
