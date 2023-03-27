import React from "react";
import {BrowserRouter, createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Home from "./pages/home/Home.jsx";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Gigs } from "./pages/gigs/Gigs.jsx";
import { Gig } from "./pages/gig/Gig.jsx";
import { MyGigs } from "./pages/myGigs/MyGigs.jsx";
import { Orders } from "./pages/orders/Orders.jsx";
import { Messages } from "./pages/messages/Messages.jsx";
import { Message } from "./pages/message/Message.jsx";
import { Add } from "./pages/add/Add.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Login} from "./pages/login/Login.jsx";
import "./App.scss";

function App() {
  
  const Layout = ()=>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>

    )
  }  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs/>,
        },
        {
          path: "/myGigs",
          element: <MyGigs/>,
        },
        {
          path: "/orders",
          element: <Orders/>,
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router}/>
    </div>  
  )
}


export default App