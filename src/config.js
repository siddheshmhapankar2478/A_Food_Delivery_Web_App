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
  ]
