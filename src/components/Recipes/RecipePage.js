import React, {Component} from 'react';
import {RecipeList, RecipeDetails} from './index';
import {recipes} from './tempList';

export class RecipePage extends Component {
    state = {
        recipes: recipes,
        url: "https://www.food2fork.com/api/search?key=48548e8373e008b647d7525f1bc631aa",
        base_url: "https://www.food2fork.com/api/search?key=48548e8373e008b647d7525f1bc631aa",
        detail_id: 35382,
        pageIndex: 1,
        search: "",
        query: '&q=',
        error: '',

    };

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

    //this runs after the component did mount, so after the component mounted we get the data
    componentDidMount() {
        this.getRecipes();
    }

    displayPage = (index) => {
      switch(index){
          default:
          case 1:
              return <RecipeList recipes = {this.state.recipes}
                                    handleDetails={this.handleDetails} value={this.state.search}
                                    handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                                    error={this.state.error}/>;
          case 0:
              return <RecipeDetails id={this.state.detail_id}
                                    handleIndex={this.handleIndex}/>;
      }
    };

    handleIndex = index => {
        this.setState({
            pageIndex: index
        })
    };

    handleDetails = (index, id) => {
        this.setState({
            pageIndex: index,
            detail_id: id,
        })
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
        return (
            <React.Fragment>
                {this.displayPage(this.state.pageIndex)}
            </React.Fragment>
        );
    }
}