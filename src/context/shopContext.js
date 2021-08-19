import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_KEY,
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN
});

class ShopProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      products: [],
      checkout: {},
      isCartOpen: false,
      isMenuOpen: false
    };
  }
  

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      this.createCheckout()
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id)
    this.setState({ checkout: checkout });
  };

  fetchCheckout = (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((error) => console.log(error));
  };

  addItemToCheckout = async () => {};

  removeLineItem = async () => {};

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });

    return product;
  };

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {

    return (
      <ShopContext.Provider 
      value={{
        ...this.state,
        fetchAllProducts: this.fetchAllProducts,
        fetchProductWithHandle: this.fetchProductWithHandle, 
        addItemToCheckout: this.addItemToCheckout, 
        removeLineItem: this.removeLineItem, 
        closeCart: this.closeCart, 
        openCart: this.openCart,
        openMenu: this.openMenu
      }}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
