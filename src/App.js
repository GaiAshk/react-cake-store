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


function App() {
  return (
      <React.Fragment>
          {/* Navbar is outside the switch tag because it is going to appeare in all pages*/}
        <Navbar/>
          {/* the Route searches if the path matches and if it does it displaies the component
              the Switch iterates over all Routes*/}
          <Switch>
              {/* exact makes the path match the exact path, and not only the begining as the defult does*/}
              <Route exact path="/" component={ProductList}/>
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
