import React, { useEffect, useState } from "react";
import { Link, createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";



import "./Navbar.scss"


export const Navbar = () =>{


    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()


    const isActive = ()=>{
        window.scrollY > 0? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    },[])


    const currentUser={
        id: 1,
        username: 'Andy',
        isSeller: true
    }


    return (
        <div className={active || pathname !== "/" ? "navbar active": "navbar"}>
            <div className="container">
                <Link to="/"className="link">
                    <div className="logo">
                        <span className="text"> fiverr </span>
                        <span className="dot"> .</span>
                    </div>
                </Link>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                            <div className="user" onClick={()=>setOpen(!open)}>
                                <img src="/img/p1.jpg" alt="" />
                                <span>{currentUser?.username}</span>
                                {open &&
                                    <div className="options">
                                    {
                                        currentUser?.isSeller && (
                                            <>
                                                <Link className="link" to="/mygigs">Gigs</Link>
                                                <Link className="link" to="/add">Add New Gig</Link>
                                            </>
                                        )
                                    }
                                    <Link className="link" to="orders">Orders</Link>
                                    <Link className="link" to="messages">Messages</Link>
                                    <Link className="link" to="link">Logout</Link>
                                </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {(active || pathname !== "/") &&(
                <>
                    <hr />
                    <div className="menu">
                        <span>Test1</span>
                        <span>Test2</span>
                    </div>   
                </>
            )}
        
        </div>
    )
}