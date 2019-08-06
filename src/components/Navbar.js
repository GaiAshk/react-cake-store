import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//logo is the picture of the phone
import logo from '../logo.svg';
import styled from 'styled-components';
//when improt is in {???} it is a specific import, if it is not then default import, which imports the whole page
import {ButtonContainer} from './Button';



class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* This comment below is here because the site i took the icon form. iconfinder, requests it*/}
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}

                {/* Link points to the page we want to go to*/}
                <Link to="/products">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/products" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    
    // 1 rem is 16px, we use rem because rem is responsive, if we change screens rem still will look the same
    font-size: 1.3rem;
    
    text-transform: capitalize;
}
`;

export default Navbar;