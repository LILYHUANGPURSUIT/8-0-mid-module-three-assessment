import React from "react";

class CheckoutForm extends React.Component{
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName:"",
            email:"",
            creditCard: "",
            zipCode: ""
        }
    }

    handleCheckout = (event) =>{
        event.preventDefualt();

    }

    render(){
        return (
            <form>
                <h2>Checkout Form</h2>
                <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Credit Card</label>
                <input type="number"></input>
                <label>Zip Code</label>
                <input type="number"></input>

                {/* <button type="submit" onSubmit="handleCheckout">buy now</button> */}
            </form>
        )
    }
}

export default CheckoutForm;