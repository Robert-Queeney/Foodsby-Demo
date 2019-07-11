import React from 'react';
import MainJumbo from '../Components/mainComponents/mainJumbotron';
import MainReasons from '../Components/mainComponents/MainReasons';
import MainSlider from '../Components/mainComponents/mainSlider';
import Partners from '../Components/mainComponents/Partners';
import Testimonials from "../Components/mainComponents/testimonials";
import HowItWorks from '../Components/mainComponents/howItWorks';
import SellingPoints from '../Components/mainComponents/sellingPoints';
import Footer from '../Components/mainComponents/footer';




const HomePage = ({ handleChange, handleSubmit, onTextChange, state }) => {
    // console.log({ this.props.state })
    return (
        <div>
            <div className="main-area">
                <MainJumbo
                    text={state.text}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    // onTextChange={onTextChange}
                />
                <MainReasons />
                <MainSlider />
                <Partners />
                <Testimonials />
                <HowItWorks />
                <SellingPoints />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;
