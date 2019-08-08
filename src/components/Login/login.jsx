import React from 'react';
import loginImg from '../../login.svg';
//import {Link} from "react-router-dom";
//import {ButtonContainer} from "../Button";

export class Login extends React.Component{
    state ={
        username: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    };
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">LogIn</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={this.handleSubmit} className="white">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">User Name:</label>
                                <input type="username" name="username" placeholder="username" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                            </div>
                        </div>
                    <div className="footer">

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>

                        {/* this was the first log in button, no changing to tutorial button*/}
                        {/*<Link to="/products" className="ml-auto">*/}
                            {/*<ButtonContainer>*/}
                                {/*Log-in*/}
                            {/*</ButtonContainer>*/}

                        {/*</Link>*/}

                    </div>
                </form>
                </div>
            </div>
        )
    }
}
