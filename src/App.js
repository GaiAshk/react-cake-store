import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductsList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import './App.scss';
import {LoginPage} from './components/Login/index';


function App() {
  return (
      <React.Fragment>
          {/* Navbar is outside the switch tag because it is going to appeare in all pages*/}
        <Navbar/>
          {/* the Route searches if the path matches and if it does it displaies the component
              the Switch iterates over all Routes*/}
          <Switch>
              {/* exact makes the path match the exact path, and not only the begining as the defult does*/}
              <Route exact path="/" component={LoginPage}/>
              <Route exact path="/products" component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
          </Switch>
          {/*model is outside switch because we are not doing routing to it we only display it */}
          <Modal/>

      </React.Fragment>
  );
}

export default App;


// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoginActive: true,
//         }
//     }
//
//     changeState() {
//         const {isLoginActive} = this.state;
//         if(isLoginActive){
//             this.rightSide.classList.remove("right");
//             this.rightSide.classList.add("left");
//         } else {
//             this.rightSide.classList.remove("left");
//             this.rightSide.classList.add("right");
//         }
//         this.setState((prevState) => ({
//             isLoginActive: !prevState.isLoginActive
//         }))
//     }
//
//     render() {
//         const {isLoginActive} = this.state;
//         return (
//             <div className="App">
//                 <div className="login">
//                     <div className="container">
//                         {isLoginActive && (<Login containerRef={(ref) => {this.current = ref}} />)}
//                         {!isLoginActive && (<Register containerRef={(ref) => {this.current = ref}}/>)}
//                     </div>
//                     <RightSide current={isLoginActive ? "Register" : "Login"} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// const RightSide = props => {
//     return (
//         <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
//             <div className="inner-container">
//                 <div className="div text"> {props.current} </div>
//             </div>
//         </div>
//     )};
//
// export default App;