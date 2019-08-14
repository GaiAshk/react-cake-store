import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from "../context";
import SessionExpired from './SessionExpired'

class ProductsList extends Component {
    state = {
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
            });
        }
    }

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
                   <div className="py-3">
                       <div className="container">

                           <Title name="Special" title="Cakes"/>
                           <div className="row">
                               <ProductConsumer>
                                   {value => {
                                       return (
                                          value.products.map(product => {
                                              if (product.id < 5) {
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
                           <Title name="Traditional" title="Cakes"/>
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
}

export default ProductsList;