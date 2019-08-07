import React, {Component} from 'react';
import {Recipe} from './Recipe';
import {RecipeSearch} from './RecipeSearch'

export class RecipeList extends Component {
    render() {
        const { recipes, handleDetails, value, handleChange, handleSubmit, error } = this.props;
        return (
            <React.Fragment>
                <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className="container my-5">
                    {/*title*/}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <div className="h1 text-slanted">recipe list</div>
                        </div>
                    </div>
                    {/*end of title*/}
                    <div className="row">
                        {error ? ( <h1 className="text-danger text-center"> {error}</h1> ) :
                            ( recipes.map((recipe, i) => {
                                //this i controls the number of images displayed, bcause im using an API key i have a
                                // limit of 50 accesses per day
                                if(i < 6) {
                                    i++;
                                    return(<Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails} />)
                                } else {
                                    return null;
                                }
                            }))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
