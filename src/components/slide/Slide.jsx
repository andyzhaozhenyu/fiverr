import React from "react";
import Slider from 'infinite-react-carousel';
import "./slide.scss"

export const Slide = ({children, slidesToShow, arrowsScroll}) => {
    return (
        <div className="slide">
            <div className="container">
            <Slider slidesToShow={slidesToShow}  arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
            </div>
        </div>
    )
}