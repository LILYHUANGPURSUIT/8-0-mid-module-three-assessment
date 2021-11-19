import React from "react";
import "./App.css";
// import data from "./data/productData"
import CheckoutForm from "./components/CheckoutForm";
import Products from "./components/Products";
import ShoppingCard from "./components/ShoppingCart";

class App extends React.Component {
// constructor(){
//   super();
//   this.state = {
//     productList: data,
//     selectedProductList: [],
//   }
// }


  render(){
    return (
      <div>
        <Products />
        <ShoppingCard />
        <CheckoutForm />
      </div>
    )
  }
}

export default App;
