import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";
import SessionExpired from "./SessionExpired";



class Details extends Component {
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
        const {isLoading, isVerified} = this.state;
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
               <ProductConsumer>
                   {(value) => {
                       const {id, company, img, info, price, title, inCart} = value.detailProduct;
                       return (
                          <div className="container py-5">
                              {/* title */}
                              <div className="row">
                                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                      <h1>{title}</h1>
                                  </div>
                              </div>
                              {/* end title */}
                              {/* product info */}
                              <div className="row">
                                  <div className="col-10 mx-auto col-md-6 my-3">
                                      <img src={img} className="img-fluid" alt="product"/>
                                  </div>
                                  {/*product text */}
                                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                      <h2>model : {title}</h2>
                                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                          made by : <span className="text-uppercase"> {company} </span></h4>
                                      <h4 className="text-blue"><strong> price : <span> {price} </span></strong></h4>
                                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                          some info about the product:
                                      </p>
                                      <p className="text-muted lead">
                                          {info}
                                      </p>
                                      {/* buttons */}
                                      <div className="">
                                          <Link to='/products'>
                                              <ButtonContainer> back to products </ButtonContainer>
                                          </Link>
                                          <ButtonContainer cart disabled={inCart} onClick={() => {
                                              value.addToCart(id);
                                              value.openModal(id);
                                          }}>
                                              {inCart ? "inCart" : "add to cart"}
                                          </ButtonContainer>
                                      </div>


                                  </div>
                              </div>
                          </div>
                       )
                   }}
               </ProductConsumer>
            );
        }
    }
}

export default Details;