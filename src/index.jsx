import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail"
import App from "./App"
import Contacto from "./Routes/Contacto"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import { DentistContextProvider } from "./Contexts/dentistContext";
import { ThemeProvider } from "./Contexts/themeContext";


const router = createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    children:[{
      
        path:"/home",
        element:<Home/>
      },
      {
       path:"/dentist/:id",
       element:<Detail/>
      },
      {
      path:"/contacto",
      element:<Contacto/>
      },
      {path:"/favs",
      element:<Home/>},
    ],
  },



])



const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <ThemeProvider> 
        <DentistContextProvider>
          

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
        </DentistContextProvider>
        </ThemeProvider>
);
