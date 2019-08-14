import React from 'react';
import loginImg from '../../login.svg';

export class Login extends React.Component{
    state ={
        username: '',
        password: '',
        signInError: '',
        isLoading: true,
    };

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3001/users/signin/", { method: "POST", headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
           }).then(res => res.json())
           .then(json => {
               console.log(json);
               if(json.success){
                   this.setState({
                       signInError: json.message,
                       isLoading: false,
                   });
                   this.props.updateParent(json.token, json.JWTtoken, json.userId);
               } else {
                   this.setState({
                       signInError: json.message,
                       isLoading: true,
                   });
                   alert(json.message);
               }});
    };


    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"> Special Cakes</div>
                <div className="header">-LogIn-</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="" />
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this.props)} className="white">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">User Name:</label>
                                <input type="username" name="username" placeholder="username" autoComplete={this.state.username} onChange={this.handleChangeUsername} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" placeholder="password" autoComplete={this.state.password} onChange={this.handleChangePassword} />
                            </div>
                        </div>
                    <div className="footer">

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
