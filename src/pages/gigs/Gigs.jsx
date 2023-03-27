import React, { useEffect, useState } from "react";
import "./Gigs.scss";
import {gigs} from "../../data.js";
import {GigCard} from "../../components/gigCard/GigCard.jsx";

export const Gigs = () => {

    const [open, SetOpen] = useState(false);
    const [sort, SetSort] = useState("sales");



    const reSort = (type)=>{
        SetSort(type);
        SetOpen(false);
    }
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN > </span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Fiverr's AI Artists</p>
                <div className="menu">
                    <div className="left">
                        <span> Budged </span>
                        <input type="text" placeholder="min"></input>
                        <input type="text" placeholder="max"></input>
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">SortBy</span>
                        <span className="sortType">{sort === "sales" ? "Best Selling":"Newest" }</span>
                        <img src="./img/down.png" alt="" onClick={()=>{SetOpen(!open)}}/>
                        {open && (<div className="rightMenu">
                            {
                                sort === "sales" ? <span onClick={()=>{reSort
                                    ("createdAt")}}>Newest</span> : <span onClick={()=>{reSort
                                        ("sales")}}>Best Selling</span>
                            }
                        </div>)}
                    </div>
                </div>
                <div className="cards">
                    {
                        // didnt know what ( here 
                        gigs.map(gig => (
                            <GigCard key={gig.id} item={gig}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}