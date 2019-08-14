import React, {Component} from 'react';
import SessionExpired from "./SessionExpired";

class Default extends Component {
    state = {
        isLoading: true,
        isVerified: (this.props.state === undefined)? false : this.props.state.isVerified,
        token: '',
        JWTtoken: (this.props.state === undefined)? '' : this.props.state.JWTtoken,
    };

    componentDidMount() {
        const token = (this.props.state === undefined)? false : this.props.state.token;
        if(token){
            //verify the token
            fetch("http://localhost:3001/users/verify?token=" + token, {method: 'GET', headers:{'auth-token': this.state.JWTtoken}})
               .then(res => res.json())
               .then(json => {
                   console.log(json);
                   if(json.success){
                       this.setState({
                           token: token,
                           isVerified: true,
                           JWTtoken: json.JWTtoken,
                       });
                       this.props.updateCookies(json.JWTtoken);
                       console.log(this.state);
                   } else {
                       this.setState({
                           isVerified: false,
                       })
                   }
               })
               .then(() => this.setState({isLoading: false,}))
        } else {
            this.setState({
                isLoading: false,
            })
        }
    }

    render() {
        const {isLoading, isVerified} = this.state;
        const {jumpToLogIn} = this.props;

        if (isLoading) {
            return (
               <div><p>Loading...</p></div>
            )
        } else {

            if (!isVerified) {
                return <SessionExpired jumpToLogIn={jumpToLogIn}/>
            }
            return (
               <div className="container">
                   <div className="row">
                       <div className="col-10 mx-auto text-center text-uppercase mt-4">
                           <h1 className="display-3"> 404 error </h1>
                           <h3 className="mt-4 text-center text-blue">the requested URL
                               <span className="text-danger"> {this.props.location.pathname} </span>
                               was not found</h3>
                           <h3 className="mt-4 text-center text-blue">you must be logged in to use the site </h3>
                       </div>
                   </div>
               </div>
            );
        }
    }
}

export default Default;