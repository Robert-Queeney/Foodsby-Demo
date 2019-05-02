import React from 'react';
import images from '../../Images';

// const images = []

const Partners = () => {

// componentDidMount(){
//     // iterate over images obj and render images into "partners-cards"
// }
        return (
            <div className="partners-div">
                <h1 className="mr-h1">Restaurant Partners</h1>
                <h3 className="mr-h3">Your favorite local and national restaurants – now delivering.</h3>
                    <div className="partners-cards" >
                        {images.map(image=> {
                            return <img className="partner-card" src={image} alt={image} />
                        })}
                    </div>
            </div>
        )
    }


export default Partners; 