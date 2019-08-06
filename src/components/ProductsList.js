import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from "../context";

class ProductsList extends Component {
    render() {
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