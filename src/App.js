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
import {LoginPage} from './components/Login/index';

//recipes
import './recipes.css'
import {RecipePage} from './components/Recipes/index'

//Game of Life
import './components/GameOfLife/gameoflife.css';
import {GameOfLifePage} from "./components/GameOfLife/GameOfLifePage";


class App extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                {/* the Route searches if the path matches and if it does it displaies the component
              the Switch iterates over all Routes*/}
                <Switch>
                    {/* exact makes the path match the exact path, and not only the begining as the defult does*/}
                    <Route exact path="/" component={LoginContainer}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route component={DefaultContainer}/>
                </Switch>
                {/*model is outside switch because we are not doing routing to it we only display it */}
                <Modal/>
            </React.Fragment>
        );
    }
}

const LoginContainer = () => {
    return (
        <React.Fragment>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
        </React.Fragment>

    )
};

const DefaultContainer = () => (
    <React.Fragment>
        <Navbar />
        <Switch>

            <Route exact path="/products" component={ProductList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/recipeList" component={RecipePage}/>
            <Route path="/gameoflife" component={GameOfLifePage}/>
            <Route component={Default}/>
        </Switch>
    </React.Fragment>
);

export default App;