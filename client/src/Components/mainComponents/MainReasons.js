import React from 'react'; 

const MainReasons = () => {
    return (
        <div className="mr-div">
            <h1 className="mr-h1">Lunch should be simple</h1>
            <h3 className="mr-h3">And that's why we're here.</h3>
            <div className="mr-cards">
                <div className="mr-card">
                    <div className="mr-card-image">
                        <img src="https://images.foodsby.com/www/theme/stopwatch.svg" alt="foodsby stopwatch" />
                    </div>
                    <div className="mr-card-body">
                        <h4>Time is Money</h4>
                        More "you time" to <br></br>
                        do what is important
                    </div>
                </div>
                <div className="mr-card">
                    <div className="mr-card-image">
                        <img src="https://images.foodsby.com/www/theme/click.svg" alt="foodsby click" />
                    </div>
                    <div className="mr-card-body">
                        <h4>Easy to Use</h4>
                        The lunch you want <br />
                        in a few simple clicks

                    </div>
                </div>
                <div className="mr-card">
                    <div className="mr-card-image">
                        <img src="https://images.foodsby.com/www/theme/thumbsup.svg" alt="foodsby thumbsup" />
                    </div>
                    <div className="mr-card-body">
                        <h4>Peace-of-Mind</h4>
                        Reliable delivery <br />
                        from the brands you trust
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainReasons; 