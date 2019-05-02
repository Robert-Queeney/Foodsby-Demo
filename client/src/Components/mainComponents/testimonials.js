import React from 'react'; 
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Testimonials extends React.Component{
    render(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 5000
    };

    const info = [
        {
           quote: "1",
           text: "Foodsby has made lunch simple, easy and convenient. The best thing about Foodsby is -- they save me a ton of time so that I can spend on other things. Thanks, Foodsby!", 
           name: "Darcy K.", 
           title: "VP/Relationship Manager"

       },
       {
            quote: "2",
            text: "Foodsby helps me stay productive because they take the guesswork out of lunch. I know what it’s going to be and when it is going to arrive.", 
            name: "Tzu W.", 
            title: "Account Manager"
       },
       {
           quote: "3",
           text: "Foodsby is a low cost and convenient option for our employees to order lunch! This is a great office amenity that really improved our overall employee satisfaction and business operations.", 
           name: "Michaela M.",
           title: "HR Professional"
       }
   ]

    return (
            <Slider {...settings}>
            {
                info.map(quote => 
                    <div className="slide-cont test">
                    <div className="testimonials">
                        <div className="quotes">{quote.text}</div>
                        <div className="quote-reference">
                            <div className="quote-name">{quote.name} | {quote.title}</div>
                        </div>
                    </div>
                    </div>
                    )
            }
            
            </Slider>
    )
    }
}

export default Testimonials;