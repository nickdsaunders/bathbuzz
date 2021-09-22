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
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
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

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity)
      }
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });

    this.toggleCart();
  };

  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
  };

  updateLineItem = async (id, quantity) => {
    const lineItemsToUpdate = [
      {
        id,
        quantity: parseInt(quantity)
      }
    ];

    const checkout = await client.checkout.updateLineItems(
      this.state.checkout.id,
      lineItemsToUpdate
    );
    this.setState({ checkout: checkout });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });

    return product;
  };

  toggleCart = () => {
    this.setState((prevState) => {
      return { isCartOpen: !prevState.isCartOpen };
    });
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { isMenuOpen: !prevState.isMenuOpen };
    });
  };

  // closeCart = () => {
  //   this.setState({ isCartOpen: false });
  // };

  // openCart = () => {
  //   this.setState({ isCartOpen: true });
  // };

  // closeMenu = () => {};

  // openMenu = () => {};

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          updateLineItem: this.updateLineItem,
          // closeCart: this.closeCart,
          // openCart: this.openCart,
          // closeMenu: this.closeMenu,
          // openMenu: this.openMenu,
          toggleCart: this.toggleCart,
          toggleMenu: this.toggleMenu
        }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
