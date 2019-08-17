// store
import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/Store/ProductsList';
import Details from './components/Store/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Store/Default';
import Modal from './components/Store/Modal';
import { Redirect } from 'react-router-dom';
import SessionExpired from "./components/SessionExpired";

//Log in
import './App.scss';
import {LoginPage} from './components/Login/LoginIndex';

//recipes
import './recipes.css'
import {RecipePage} from './components/Recipes/RecipeIndex'

//Game of Life
import './components/GameOfLife/gameoflife.css';
import {GameOfLifePage} from "./components/GameOfLife/GameOfLifePage";

//Create Recipe Page
import CreateRecipesPage from "./components/CreateRecipes/CreateRecipesPage";
import AdminScreen from "./components/Admin/AdminScreen";


class App extends Component {

    state = {
       //access should be false, for production
       access: false,
       //should be false for production
       isVerified: false,
       token: '',
       JWTtoken: '',
       adminToken: '5d516bfe2370fe2f48829038',
       userId: '',
    };


   updateParentFromLogIN(token, JWTtoken, userId) {
      this.setState({
         access: true,
         token: token,
         JWTtoken: JWTtoken,
         userId: userId,
      });
   }

   updateCookies(JWTtoken){
      this.setState({
         JWTtoken: JWTtoken
      })
   }

   jumpToLogIn() {
      this.setState({
         access: false,
      });
   }

   logOut = () => {
      this.setState({
         access: false,
         isVerified: false,
         JWTtoken: '',
      });
   };

    render() {

      if(!this.state.access){
         return (
            <React.Fragment>
               {/* the Route searches if the path matches and if it does it displays the component
              the Switch iterates over all Routes*/}
               <Switch>
                  {/* exact makes the path match the exact path, and not only the beginning as the default does*/}
                  <Route exact path="/" component={LoginContainer}/>
                  <Route exact path="/login" render={() => (<LoginPage grantAccess={this.updateParentFromLogIN.bind(this)} state={this.state} />) }/>
                  <Route render={() => (<SessionExpired jumpToLogIn={this.jumpToLogIn.bind(this)} /> )}/>
               </Switch>
            </React.Fragment>
         );
      } else {
         return(
               <React.Fragment>
                  <Navbar token={this.state.token} admin={this.state.userId} logOutButton={this.logOut.bind(this)}/>
                  <Switch>
                     <Route exact path="/login" component={DefaultRedirect}/>
                     <Route exact path="/products" render={() => (<ProductList updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route exact path="/details" render={() => (<Details updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route exact path="/cart" render={() => (<Cart updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route exact path="/recipeList" render={() => (<RecipePage updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route exact path="/createRecipe" render={() => (<CreateRecipesPage updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route exact path="/gameoflife" render={() => (<GameOfLifePage updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route exact path="/admin" render={() => (<AdminScreen updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
                     <Route render={() => (<Default updateCookies={this.updateCookies.bind(this)} jumpToLogIn={this.jumpToLogIn.bind(this)} state={this.state}/>)} />
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