import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from "../context";
import {LoginPage} from './Login/LoginIndex';

//check the storage with these queries
//import {getFromStorage} from "../utils/storage";


class ProductsList extends Component {
    state = {
        isLoading: true,
        token: '',
    };

    componentDidMount() {
        const token = this.props.state.token;
        if(token){
            //verify the token
            fetch("http://localhost:3001/users/verify?token=" + token)
               .then(res => res.json())
               .then(json => {
                   console.log(json);
                   if(json.success){
                       this.setState({
                           token: token,
                           isLoading: true,
                       })
                   } else {
                       this.setState({
                           isLoading: true,
                       })
                   }
               })
        } else {
            this.setState({
                isLoading: false,
            })
        }
    }

    render() {
        const { isLoding, token } = this.state;
        if (isLoding) {
            return (
               <div><p>Loading...</p></div>
            )
        }
        if(!token){
            return (
             <LoginPage/>
            )
        }

        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">

                        <Title name="Special" title="Cakes" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return (
                                        value.products.map(product => {
                                            if(product.id < 5) {
                                                return (
                                                    <Product key={product.id} product={product}/>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                        <Title name="Traditional" title="Cakes" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return (
                                        value.products.map(product => {
                                            if (product.id > 4) {
                                                return (
                                                    <Product key={product.id} product={product}/>
                                                )
                                            } else {
                                                return null
                                            }
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductsList;