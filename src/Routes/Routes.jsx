import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AnimalToys from "../Pages/Category/AnimalToys";
import Qustion from "../Pages/Qustion/Qustion";
import BookService from "../Pages/BookService/BookService";
import ToyBooking from "../Pages/ToyBooking/ToyBooking";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
       {
        path:'/animaltoys',
        element: <AnimalToys></AnimalToys>,
        },
        {
        path:'/qustion',
        element:<Qustion></Qustion>
        },
        
        {
          path:'/book',
          element:<BookService></BookService>,
          // loader: ({params}) => fetch(`https://happy-toy-house-server-mdjewel999.vercel.app/carhouse/${params.id}`)
        },
        {
          path:'/adtoy',
          element:<PrivateRoute><ToyBooking></ToyBooking></PrivateRoute>,
        }
       
        
      ],
      
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]);


  export default router;