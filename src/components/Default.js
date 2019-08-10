import React, {Component} from 'react';

class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase mt-4">
                        <h1 className="display-3"> 404 error </h1>
                        <h3 className="mt-4 text-center text-blue">the requested URL
                            <span className="text-danger"> {this.props.location.pathname} </span>
                            was not found</h3>
                        <h3 className="mt-4 text-center text-blue">you must be logged in to use the site </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;