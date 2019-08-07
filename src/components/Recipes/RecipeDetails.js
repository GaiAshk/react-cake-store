import React, {Component} from 'react';
import {recipe} from "./tempDetails";

export class RecipeDetails extends Component {
    state = {
        recipe: recipe,
        url:`https://www.food2fork.com/api/get?key=48548e8373e008b647d7525f1bc631aa&rId=${this.props.id}`,
    };

    // async await, allows as to preforme actions like they are synchronized (in order)
    // await has to be used inside the async function
    // this runs after the component did mount, so after the component mounted we get the data
    // async componentDidMount() {
    //     try {
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //
    //         this.setState({
    //             recipe: jsonData.recipe,
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    render() {
        if(this.state.recipe === undefined) return <h1 className="text-center text-capitalize mt-5">API key is limited to 50 accesses, please continue later</h1>;

        const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe;
        const {handleIndex} = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={() => {handleIndex(1)}}> back to recipe list </button>
                            <img src={image_url} className="d-block w-100" alt="recipe"/>
                        </div>
                        {/*detail section*/}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">probided by {publisher}</h6>
                            <a href={publisher_url} target="_black" rel="noopener norefereer"
                               className="btn btn-primary mt-2 text-capitalize">publishers web page</a>

                            <a href={source_url} target="_black" rel="noopener norefereer"
                               className="btn btn-success mx-3 mt-2 text-capitalize">recipes web page</a>

                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {ingredients.map((item, index) => {
                                    return(
                                        <li key={index} className="list-group-item text-slanted">
                                            {item}
                                        </li>
                                    )
                                } )}
                            </ul>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}