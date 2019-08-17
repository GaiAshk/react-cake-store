import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

//context api is a neat way to pass states across the app without using props
//if there are not to many layers to pass
const ProductContext = React.createContext();
//Provider - this should provide the whole app so it should sit as high as possible in the app hierarchy
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };

    // this fix is because earlier I referenced, pointer, the data and now it is a new fresh copy
    //fix started
    componentDidMount() {
        this.setProducts();

        if ( (localStorage.getItem('cart') === null) || (localStorage.getItem('cartSubTotal' === null)) ||
           ( localStorage.getItem('cartTotal') === null ) || ( ( localStorage.getItem('cartTax') === null )) ) {
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
            const token = localStorage.getItem('token');
            localStorage.setItem('currentToken', token);
            localStorage.setItem('cartSubTotal', JSON.stringify(this.state.cartSubTotal));
            localStorage.setItem('cartTax', JSON.stringify(this.state.cartTax));
            localStorage.setItem('cartTotal', JSON.stringify(this.state.cartTotal));
        } else {
            if(localStorage.getItem('token') === localStorage.getItem('currentToken')){
                this.setState({
                    cart: JSON.parse(localStorage.getItem('cart')),
                    cartSubTotal: JSON.parse((localStorage.getItem('cartSubTotal'))),
                    cartTotal: JSON.parse((localStorage.getItem('cartTotal'))),
                    cartTax: JSON.parse((localStorage.getItem('cartTax')))
                });
            }

        }
    }


    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => {
            return {products: tempProducts}
        })
    };
    //fix ended

    //this function return the item we are looking for by the id
    getItem = (id) => {
        //inside find there is a callback function
      return this.state.products.find(item => item.id === id);
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct: product}
        })
    };

    updateDB() {
        const token = localStorage.getItem('token')? localStorage.getItem('token') : false;
        if(token) {
            fetch("http://localhost:3001/users/updatecart?token=" + token, {
                   method: "POST", headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                   body: JSON.stringify({
                       cart: this.state.cart,
                   })
               }
            ).then(res => res.json())
               .then(json => {
                   console.log(json);
               });
        }

    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(()=> {
            return {product: tempProducts, cart: [...this.state.cart, product] };
        },  () => {
            this.addTotals();
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
            const token = localStorage.getItem('token');
            localStorage.setItem('currentToken', token);
            this.updateDB();
        });
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        });
    };

    closeModal = () => {
      this.setState(()=> {
          return {modalOpen: false,}
      });
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count += 1;
        product.total = product.price * product.count;

        this.setState(() => {return{cart: [...tempCart]}},
            ()=> {
            this.addTotals();
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
                const token = localStorage.getItem('token');
                localStorage.setItem('currentToken', token);
            this.updateDB();
        });
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count -= 1;
        if(product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.price * product.count;
            this.setState(() => {return{cart: [...tempCart]}},
                ()=> {
                this.addTotals();
                localStorage.setItem('cart', JSON.stringify(this.state.cart));
                const token = localStorage.getItem('token');
                localStorage.setItem('currentToken', token);
                this.updateDB();
            })
        }
    };

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts],
            }
        }, () => {
            this.addTotals();
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
            const token = localStorage.getItem('token');
            localStorage.setItem('currentToken', token);
            this.updateDB();
        });
    };

    clearCart = () => {
        this.setState(() => {
            return {cart: []};
        }, () => {
            this.setProducts();
            this.addTotals();
            localStorage.removeItem('cart');
            localStorage.removeItem('cartSubTotal');
            localStorage.removeItem('cartTotal');
            localStorage.removeItem('cartTax');
            this.updateDB();
            });
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.075;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=> {
            localStorage.setItem('cartSubTotal', JSON.stringify(this.state.cartSubTotal));
            localStorage.setItem('cartTax', JSON.stringify(this.state.cartTax));
            localStorage.setItem('cartTotal', JSON.stringify(this.state.cartTotal));
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    };


    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};