// main project
import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductsList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import { Redirect } from 'react-router-dom';

//Log in
import './App.scss';
import {LoginPage} from './components/Login/LoginIndex';

//recipes
import './recipes.css'
import {RecipePage} from './components/Recipes/RecipeIndex'

//Game of Life
import './components/GameOfLife/gameoflife.css';
import {GameOfLifePage} from "./components/GameOfLife/GameOfLifePage";


class App extends Component {
    state = {
       //access shuold be false, for production
       access: true,
       token: '',
    };

   updateParentfromLogIN(token) {
      this.setState({
         access: true,
         token: token,
      });
   }

    render() {
      if(!this.state.access){
         return (
            <React.Fragment>
               {/* the Route searches if the path matches and if it does it displaies the component
              the Switch iterates over all Routes*/}
               <Switch>
                  {/* exact makes the path match the exact path, and not only the begining as the defult does*/}
                  <Route exact path="/" component={LoginContainer}/>
                  <Route exact path="/login" render={() => (<LoginPage grantAccess={this.updateParentfromLogIN.bind(this)} state={this.state} />) }/>
                  <Route component={Default}/>
               </Switch>
            </React.Fragment>
         );
      } else {
         return(
               <React.Fragment>
                  <Navbar />
                  <Switch>
                     <Route exact path="/login" component={DefaultRedirect}/>
                     <Route exact path="/products" render={() => (<ProductList state={this.state}/>)} />
                     <Route exact path="/details" component={Details}/>
                     <Route exact path="/cart" component={Cart}/>
                     <Route exact path="/recipeList" component={RecipePage}/>
                     <Route exact path="/gameoflife" component={GameOfLifePage}/>
                     <Route component={Default}/>
                  </Switch>
                  {/*model is outside switch because we are not doing routing to it we only display it */}
                  <Modal/>
               </React.Fragment>
         )
      }
    }
}

const LoginContainer = () => {
    return (
       <Route exact path="/" render={() => <Redirect to="/login" />} />
    )
};

const DefaultRedirect = () => {
   return (
      <Route exact path="/login" render={() => <Redirect to="/products" />} />
   )
};

export default App;