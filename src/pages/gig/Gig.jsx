import React from "react";
import Slider from 'infinite-react-carousel';
import "./Gig.scss"

export const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadCrumbs">FIVERR > GRAPHICS & DESIGN ></span>
                    <h1>I will create ai generated art for you</h1>

                    <div className="user">
                        <img className="pp" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e75fecb3052d17e4c8bf7a668df2e4e7-1671555703064/10c4f643-439c-4c01-bbd3-187e607db856.jpg" alt="" />
                        <span>John Doe</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider className="slider" slideToShow={1} arrowScroll={1}>
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280008577/original/b0b838df933966b8bd41280c97609cbca1f2a82b/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280008577/original/b0b838df933966b8bd41280c97609cbca1f2a82b/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280008577/original/b0b838df933966b8bd41280c97609cbca1f2a82b/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280008577/original/b0b838df933966b8bd41280c97609cbca1f2a82b/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/280008577/original/b0b838df933966b8bd41280c97609cbca1f2a82b/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                    </Slider>
                    <h2>About This Gig</h2>
                    <p>I use AI to generate illustrations that best fit your marketing needs. Tell me about your brand and current marketing campaign, and I will use Artificial Intelligence to produce the perfect illustrations for your campaign.</p>
                    <div className="seller">
                        <h2>About the seller</h2>
                        <div className="user">
                            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e75fecb3052d17e4c8bf7a668df2e4e7-1671555703064/10c4f643-439c-4c01-bbd3-187e607db856.jpg" alt="" />
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <div className="title">From</div>
                                    <div className="desc">Palestinian Territories</div>
                                </div>
                                <div className="item">
                                    <div className="title">From</div>
                                    <div className="desc">Palestinian Territories</div>
                                </div>
                                <div className="item">
                                    <div className="title">From</div>
                                    <div className="desc">Palestinian Territories</div>
                                </div>
                                <div className="item">
                                    <div className="title">From</div>
                                    <div className="desc">Palestinian Territories</div>
                                </div>
                                <div className="item">
                                    <div className="title">From</div>
                                    <div className="desc">Palestinian Territories</div>
                                </div>
                            </div>
                            <hr />
                            <p>
                                I've worked with design, animation, motion graphics, and video editing for 4 years. I am proficient with Adobe Creative Suite. My primary objective is to improve my talents and to ensure that the buyer is satisfied with my work.
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e75fecb3052d17e4c8bf7a668df2e4e7-1671555703064/10c4f643-439c-4c01-bbd3-187e607db856.jpg" alt="" />
                                <div className="info">
                                    <span>
                                        John Doe
                                    </span>
                                    <div className="country">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Just amazing again! It’s just the beginning of a long Serie of working together with Nir! You will not regret to choose him, guarantee !</p>
                            <div className="helpful">
                                <span>Helpful</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="item">
                            <div className="user">
                                <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e75fecb3052d17e4c8bf7a668df2e4e7-1671555703064/10c4f643-439c-4c01-bbd3-187e607db856.jpg" alt="" />
                                <div className="info">
                                    <span>
                                        John Doe
                                    </span>
                                    <div className="country">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Just amazing again! It’s just the beginning of a long Serie of working together with Nir! You will not regret to choose him, guarantee !</p>
                            <div className="helpful">
                                <span>Helpful</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="item">
                            <div className="user">
                                <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e75fecb3052d17e4c8bf7a668df2e4e7-1671555703064/10c4f643-439c-4c01-bbd3-187e607db856.jpg" alt="" />
                                <div className="info">
                                    <span>
                                        John Doe
                                    </span>
                                    <div className="country">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>Just amazing again! It’s just the beginning of a long Serie of working together with Nir! You will not regret to choose him, guarantee !</p>
                            <div className="helpful">
                                <span>Helpful</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>1 AI generated imgae</h3>
                        <h2>$ 59.99</h2>
                    </div>
                    <p>I will train AI to draw portrait of you or any face you would like, and I will generate a 100 image</p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Propmpt Writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Propmpt Writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Propmpt Writing</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}