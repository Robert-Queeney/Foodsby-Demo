import React from 'react';

const InputArea = ({ handleSubmit, handleChange }) => {
    return (
        <div className="input-area">
            <div className="H2-div">
                <h2>Login</h2>
            </div>
            <form className="input-form" onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="email">Email Address*</label>
                <input type="text" name="email" onChange={(event) => handleChange(event)} />
                {/* <div className="password-label"> */}
                    <label htmlFor="password">Password*</label>
                    {/* <div className="show-password">Show Password</div> */}
                {/* </div> */}
                <input type="text" name="password" onChange={(event) => handleChange(event)} />
                <button className="login-button">Login</button>
            </form>
        </div>
    )
}

export default InputArea; 