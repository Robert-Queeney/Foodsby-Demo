import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class MainSlider extends React.Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: 0

        };

        const info = [
            {
                name: "div1",
                number: "27",
                top_text: "Minutes Saved",
                bottom_text: "Per Food Order"
            },
            {
                name: "div2",
                number: "98.3",
                top_text: "% Lunches Delivered",
                bottom_text: "Accurately and on-time"
            },
            {
                name: "div3",
                number: "12",
                top_text: "Restaurant",
                bottom_text: "Options per week (on average)"
            }
        ]

        return (
                <Slider {...settings}>
                    {
                        info.map(obj =>
                            <div className="slide-cont">
                                <div className="ms-stats">
                                        <div className="ms-number-div">{obj.number}</div>
                                        <div className="ms-text-div">
                                            <div className="ms-top-text">{obj.top_text}</div>
                                            <div className="ms-bottom-text">{obj.bottom_text}</div>
                                        </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
        )
    }
}

export default MainSlider; 