import React from "react";
import "./App.css";
import data from "./data/productData"
import CheckoutForm from "./components/CheckoutForm";
import formatPrice from "./helpers/formatPrice";
// import Products from "./components/Products";
// import ShoppingCard from "./components/ShoppingCart";

class App extends React.Component {
constructor(){
  super();
  this.state = {
    productList: data,
    selectedProductList: [],

    subtotal: 0,
    tax: 0,
    total: 0,
  }
}

handleSubmit = (e, firstName, lastName, email, creditCard, zipCode) => {
  e.preventDefault();
  if(firstName.length === 0 || lastName.length === 0 || email.length === 0) {
    alert("Input is not valid")
  } else if(creditCard.length !== 16){
    alert("Credit card number is not valid")
  } else if (zipCode.length !== 5){
    alert("Zip code is not valid")
  } else {
    alert(`Purchase complete! You will be charged ${this.state.total}`)
  }
 
}


handleAddToCart = (e, name, price) => {
  e.preventDefault();
  console.log("trigger")
  this.setState ({
    selectedProductList: [...this.state.selectedProductList, {"name":name, "price":price}],
    subtotal: this.state.subtotal + price,
    tax: (this.state.subtotal + price)*0.05,
    total: (this.state.subtotal + price)*1.05,
  })

}
  render(){
        let allProductInfo = this.state.productList.map(productInfo => {
            let {name, price, img, description} = productInfo;
            return (
                <div className="products" >
                    <form>
                        <h2>My Garage Sale</h2>
                        <h3 >{name}</h3>
                        <div>Price: {formatPrice(price)}</div>
                        <br />
                        <button onClick={(e)=>this.handleAddToCart(e, name, price)}>Add To Cart</button>
                        <br />
                        <br />
                        <img src={img} alt={name} />
                        <br />
                        <br />
                        <div>{description}</div>
                    </form>
                </div>
            )
        })

        let selectedProductInfo = this.state.selectedProductList.map((selectedProduct,i) => {
          return <li key={selectedProduct.name+i}>{selectedProduct.name}: {formatPrice(selectedProduct.price)}</li>
        })

    return (
      <div>
        {allProductInfo }
        <div id="shopping-cart">
          <h2>Cart</h2>
          <ul>{selectedProductInfo}</ul>
          <h3>Subtotal: {formatPrice(this.state.subtotal)}</h3>
          <h3>Tax: {formatPrice(this.state.tax)}</h3>
          <h3>Total: {formatPrice(this.state.total)}</h3>
        </div>
        <CheckoutForm hanleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
