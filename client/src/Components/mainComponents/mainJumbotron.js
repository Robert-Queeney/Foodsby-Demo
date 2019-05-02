import React from 'react';

const MainJumbo = () => {
    return (
        <div className="main-jumbo">
            <div className="jumbo-image" style={{ 'background-image': 'url(https://images.foodsby.com/www/theme/consumer_page_banner.png)' }}>
                <div className="jumbo-content"><h1 className="main-h1">Office Lunch.  Delivered</h1>
                    <h3 className="main-h3">Lunch from local restaurants delivered straight to your office</h3>
                    <div className="search-input-div">
                        <i class="material-icons main-icon">place</i>
                        <input type="text" className="main-input" placeholder="Find your building" />
                        <button className="search-button">Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainJumbo; 