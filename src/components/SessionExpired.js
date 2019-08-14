import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import logo from '../logo.svg';


class SessionExpired extends Component {
   render() {
      return (
         <React.Fragment>
            <DivWrapper className="expand-sm py-3 mb-5 px-sm-5">
               <img src={logo} alt="store" className="navbar-brand" />
            </DivWrapper>

            <div className="container mt-5 pt-5">
               <div className="row">
                  <div className="col-10 mx-auto text-center text-uppercase mt-4">
                     <h1 className="display-3"> Session Expired </h1>
                     <h3 className="my-4 text-center text-blue">you must be logged in to use the site </h3>

                     <Link to="/login" className="ml-auto">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.props.jumpToLogIn}>Log In</button>
                     </Link>

                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}


const DivWrapper = styled.nav`
position: absolute;
top: 0;
width: 100%;
z-index: 2;
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    
    // 1 rem is 16px, we use rem because rem is responsive, if we change screens rem still will look the same
    font-size: 1.3rem;
    
    text-transform: capitalize;
}
`;

export default SessionExpired;