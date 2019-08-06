import React from 'react';
import loginImg from '../../login.svg';
import {ButtonContainer} from "../Button";
import {Link} from "react-router-dom";

export class Register extends React.Component{
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="" />
                    </div>

                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>

                    </div>
                </div>

                <div className="footer">
                    <Link to="/products" className="ml-auto">
                        <ButtonContainer>
                           Register
                        </ButtonContainer>
                    </Link>

                </div>
            </div>
        )
    }
}
