import React from 'react'; 

const BuildingSearch = () => {
    return (
        <div className="input-area">
            <div className="H2-div">
                <h2>Not a member? Find your building</h2>
            </div>
            <form className="input-form">
                <label htmlFor="address">Search for an address</label>
                <input type="text" name="address" placeholder="Enter an Address"></input>

                <button className="login-button"><i class="material-icons">place</i>Search</button>
            </form>
        </div>
    )
}

export default BuildingSearch; 