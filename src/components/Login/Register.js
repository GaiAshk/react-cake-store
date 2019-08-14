import React from 'react';
import loginImg from '../../login.svg';

export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            token: '',
            signUpPassed: false,
    }
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

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/users/signup/", { method: "POST", headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then(res => res.json())
           .then(json => {
               console.log(json);
               if(json.success){
                   this.setState({
                       signUpPassed: true,
                       token: json.token,
                   });
                   this.props.updateParent();
               } else {
                   this.setState({
                       signUpPassed: false,
                   });
                   alert(json.message);
               }});
    };

    render() {
            //register screen
            return (
               <div className="base-container" ref={this.props.containerRef}>
                   <div className="header"> Special Cakes</div>
                   <div className="header">-Register-</div>
                   <div className="content">
                       <div className="image">
                           <img src={loginImg} alt="" />
                       </div>

                       <form onSubmit={this.handleSubmit.bind(this.props)} className="white">
                           <div className="form">
                               <div className="form-group">
                                   <label htmlFor="username">User Name:</label>
                                   <input type="username" name="username" placeholder="username" autoComplete={this.state.username} onChange={this.handleChangeUsername}/>
                               </div>

                               <div className="form-group">
                                   <label htmlFor="password">Password:</label>
                                   <input type="password" name="password" placeholder="password" autoComplete={this.state.password} onChange={this.handleChangePassword}/>
                               </div>
                           </div>

                           <div className="footer">

                               <div className="input-field">
                                   <button className="btn pink lighten-1 z-depth-0">Register</button>
                               </div>

                           </div>
                       </form>

                   </div>
               </div>
            )
    }
}
