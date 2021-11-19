import React from "react";
// import ProductCard from "./ProductCard";
import data from "../data/productData";
import formatPrice from "../helpers/formatPrice";


class Products extends React.Component{

    constructor(){
        super();
        this.state = {
          productList: data,
          selectedProductList: [],
        }
      }

    handleAddToCart = (name, price)=> {
        this.setState ({
            selectedProductList: [...this.state.selectedProductList, {[name]: name, [price]:price}]
        })
        console.log(this.state.selectedProductList)
    }

    render(){
         
        let allProductInfo = this.state.productList.map((productInfo) => {
            let {name, price, img, description} = productInfo;
            return (
                <div>
                    <form>
                        <h2>My Garage Sale</h2>
                        <h3 >{name}</h3>
                        <div>Price: {formatPrice(price)}</div>
                        <button onClick={()=>this.handleAddToCart(name, price)}>Add To Cart</button>
                        <img src={img} alt={name} />
                        <div>{description}</div>
                    </form>
                </div>
            )
        })
        
        return <div className="products">{allProductInfo}</div>
    }
}

export default Products;