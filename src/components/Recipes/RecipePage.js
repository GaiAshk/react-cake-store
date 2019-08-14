import React, {Component} from 'react';
import {RecipeList, RecipeDetails} from './RecipeIndex';
import {recipes} from './tempList';
import SessionExpired from "../SessionExpired";

export class RecipePage extends Component {
    state = {
        recipes: recipes,
        url: "https://www.food2fork.com/api/search?key=48548e8373e008b647d7525f1bc631aa",
        base_url: "https://www.food2fork.com/api/search?key=48548e8373e008b647d7525f1bc631aa",
        detail_id: 0,
        pageIndex: 1,
        search: "",
        query: '&q=',
        error: '',
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
                       this.getRecipes();
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

    //async await, allows as to preforme actions like they are synchronized (in order)
    //await has to be used inside the async function

    async getRecipes() {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            if(jsonData.recipes.length === 0){
                this.setState(() => {
                    return {error: 'sorry, your search did not return any results'}
                })
            } else {
                this.setState(() => {
                    return{
                        recipes: jsonData.recipes}
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    displayPage = (index) => {
      switch(index){
          default:
          case 1:
              return <RecipeList recipes = {this.state.recipes}
                                    handleDetails={this.handleDetails} value={this.state.search}
                                    handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                                    error={this.state.error} handleIndex={this.handleIndex}/>;
          case 0:
              return <RecipeDetails id={this.state.detail_id}
                                    handleIndex={this.handleIndex}/>;
      }
    };

    handleIndex = (index, id) => {
        this.setState({
            pageIndex: index,
            detail_id: id,
        })
    };

    handleDetails = (index, id) => {
        this.setState({
            pageIndex: index,
            detail_id: id,
        });
        window.scrollTo(500, 0);
    };


    handleChange = (e) => {
        this.setState({
            search: e.target.value,
        })
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const {base_url, query, search} = this.state;
      this.setState(() => {
          return {
              url: `${base_url}${query}${search}`,
              search: "",
          }}, () => {
           this.getRecipes();
          }
      )
    };

    render() {
        const { isLoading, isVerified } = this.state;
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
               <React.Fragment>
                   {this.displayPage(this.state.pageIndex)}
               </React.Fragment>
            );
        }
    }
}