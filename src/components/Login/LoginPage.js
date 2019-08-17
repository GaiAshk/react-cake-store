import React, {Component} from 'react';
import {Login} from "./Login";
import {Register} from "./Register";
import logo from "../../logo.svg";
import styled from "styled-components";

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginActive: true,
        }
    }

    changeState() {
        const {isLoginActive} = this.state;
        if(isLoginActive){
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState((prevState) => ({
            isLoginActive: !prevState.isLoginActive
        }))
    }

    updateParent(){
        this.changeState();
    }

    render() {
        const {isLoginActive} = this.state;
        const appCheckAccess = this.props.grantAccess;
        return (
            <React.Fragment>
                <DivWrapper className="expand-sm py-3 mb-5 px-sm-5">
                    <img src={logo} alt="store" className="navbar-brand" />
                </DivWrapper>

                <div className="App">
                    <div className="login">
                        <div className="container">
                            {isLoginActive && (<Login updateParent={appCheckAccess} containerRef={(ref) => {this.current = ref}} />)}
                            {!isLoginActive && (<Register updateParent={this.updateParent.bind(this)} containerRef={(ref) => {this.current = ref}}/>)}
                        </div>
                        <RightSide current={isLoginActive ? "Register" : "Login"} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const RightSide = props => {
    return (
        <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
            <div className="inner-container text-right">
                <div className="div text">{props.current}</div>
            </div>
        </div>
    )};

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
