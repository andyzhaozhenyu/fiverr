import React from "react";
import { Link, createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "./catCard.scss"

export const CatCard= ({item}) => {
    return (
        <Link to="/gigs?cat=design">
        <div className="catCard">
            <img src={item.img} alt=""/>
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
        </div>
        </Link>
    )
}