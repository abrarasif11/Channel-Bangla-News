import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "./Component/Layout/Main.jsx";
import Home from "./Component/Home/Home.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path : '/category/:id',
        element: <p>category 1</p>
      },
      {
        path:'',
        element: <Navigate to={'/category/01'}></Navigate>
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);
