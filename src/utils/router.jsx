import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import Error from "../components/Error";
import Body from "../components/Body";
import ResMenu from "../components/ResMenu";
// import Grocery from "../components/Grocery";

const Grocery = lazy(() => import("../components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback><Grocery /></Suspense> 
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      } 
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
