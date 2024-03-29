import React from "react";
import { CatCard } from "../../components/catCard/CatCard";
import { Featured } from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import { Slide } from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";

import { cards } from "../../data";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                    <CatCard key={card.id} item={card} />))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>A whole world of freelance talent at your fingertips</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Quality work done quickly
                        </div>
                        <p>
                            Find the right freelancer to begin working on your project within
                            minutes.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Protected payments, every time
                        </div>
                        <p>
                            Always know what you'll pay upfront. Your payment isn't released
                            until you approve the work.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                    </div>
                    <div className="item">
                        <video src="./img/v1.mp4" controls />
                    </div>
                </div>
            </div>


            <div className="main-categories">
                <div className="container">
                <h1>Explore the marketplace</h1>
                <ul className="categories-list">
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                            <hr/>
                            <span>Graphics & Design</span>
                        </div>
                    </li>
                </ul>
                </div>
            </div>

            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>fiver business.</h1>
                        <h1>A business solution designed for teams</h1>
                        <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Connect to freelancers with proven business experience
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get matched with the perfect talent by a customer success manager
                        </div><div className="title">
                            <img src="./img/check.png" alt="" />
                            Manage teamwork and boost productivity with one powerful workspace
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;