import React from 'react';
import loginImg from '../../login.svg';
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Button";

export class Login extends React.Component{
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">LogIn</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">User Name:</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Link to="/products" className="ml-auto">
                        <ButtonContainer>
                            Log-in
                        </ButtonContainer>
                    </Link>
                </div>
            </div>
        )
    }
}
