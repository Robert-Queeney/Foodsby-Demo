import React from 'react';
import PageHeader from '../Components/loginComponents/PageHeader';
import LoginArea from '../Components/loginComponents/LoginArea';
import BuildingSearch from '../Components/loginComponents/BuildingSearch';


const LoginPage = ({handleChange, handleSubmit}) => {
    return (
        <div>
            <PageHeader />
            <div className="login-area">
                <LoginArea
                    // state={this.state}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <BuildingSearch />
            </div>
            </div>
            )
        }

        export default LoginPage;
