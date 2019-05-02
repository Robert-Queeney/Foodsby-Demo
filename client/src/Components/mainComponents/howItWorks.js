import React from 'react'; 

const HowItWorks = () => {
    return (
        <div className="mr-div">
            <h1 className="mr-h1">How It Works</h1>
            <h3 className="mr-h3">Foodsby is a lunch delivery service specifically for office professionals.</h3>
            <div className="mr-cards">
                <div className="mr-card">
                    <div className="mr-card-image">
                        <img src="https://images.foodsby.com/www/theme/cart.svg" alt="cart" />
                    </div>
                    <div className="mr-card-body">
                        <h4>Order Online</h4>
                        Normal menu prices <br></br>
                        and $1.99 delivery 
                    </div>
                </div>
                <div className="mr-card">
                    <div className="mr-card-image">
                        <img src="https://images.foodsby.com/www/theme/car.svg" alt="car" />
                    </div>
                    <div className="mr-card-body">
                        <h4>Restaurant Delivers</h4>
                        No tipping and <br />
                        no minimums

                    </div>
                </div>
                <div className="mr-card">
                    <div className="mr-card-image">
                        <img src="https://images.foodsby.com/www/theme/bag.svg" alt="takeout" />
                    </div>
                    <div className="mr-card-body">
                        <h4>Enjoy Your Meal</h4>
                        We’ll notify you <br />
                        when your meal arrives
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks; 