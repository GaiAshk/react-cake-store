import React, {Component} from 'react';
import {Login} from "./Login";
import {Register} from "./Register";

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
        console.log(this.props)
    }

    render() {
        const {isLoginActive} = this.state;
        const appCheckAccess = this.props.grantAccess;
        return (
            <React.Fragment>
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
            <div className="inner-container">
                <div className="div text">{props.current}</div>
            </div>
        </div>
    )};
