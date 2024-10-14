import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestroMenu from "./component/RestroMenu";
import { lazy,Suspense } from "react";
import Instamart from "./component/Instamart";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./component/Cart";
import Login from "./component/Login";
// const Instamart=lazy(()=>import('./component/Instamart'));

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Provider store={store}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </div>
    </>
  );
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:id",
                element:<RestroMenu/>,
            },
            {
                path:"/instamart",
                element:<Instamart/>
                // element:(<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>),
            },
            {
                path:"/cart",
                element:<Cart/>,
            },   
            {
                path:"/login",
                element:<Login/>,
            },       
        ]
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);