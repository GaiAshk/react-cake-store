import React, {Component} from 'react';
import Title from '../Store/Title';
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals';
import SessionExpired from "../SessionExpired";


class Cart extends Component {
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
         })
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
             <section>
                <ProductConsumer>
                   {value => {
                      const {cart} = value;
                      if (cart.length > 0) {
                         return (
                            <React.Fragment>
                               <Title name="your" title="cart"/>
                               <CartColumns> </CartColumns>
                               <CartList value={value}> </CartList>
                               <CartTotals value={value} history={this.props.history} />
                            </React.Fragment>
                         );
                      } else {
                         return <EmptyCart/>;
                      }
                   }}
                </ProductConsumer>
             </section>
          );
       }
    }
}

export default Cart;