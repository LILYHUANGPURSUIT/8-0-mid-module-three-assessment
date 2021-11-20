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

    handleUserInput = (e) => {
        e.preventDefault();
        this.setState ({
            [e.target.name]: e.target.value,
        })
    }



    render(){
        let {firstName, lastName, email, creditCard, zipCode} = this.state;
        return (
            <form id="checkout" onSubmit={(e)=>this.props.handleSubmit(e, firstName, lastName, email, creditCard, zipCode)}>
                <h2>Checkout Form</h2>
                <label htmlFor = "first-name">First Name</label>
                <input 
                    onInput={this.handleUserInput}
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    id="first-name">
                </input>
                <label htmlFor = "last-name">Last Name</label>
                <input 
                    onInput={this.handleUserInput}
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    id="last-name">
                </input>
                <label htmlFor = "email">Email</label>
                <input 
                    onInput={this.handleUserInput}
                    type="email"
                    value={this.state.email}
                    name="email"
                    id="email">
                </input>
                <label htmlFor = "credit-card">Credit Card</label>
                <input 
                    onInput={this.handleUserInput}
                    type="number"
                    value={this.state.creditCard}
                    name="creditCard"
                    id="credit-card">
                </input>
                <label htmlFor = "zip-code">Zip Code</label>
                <input 
                    onInput={this.handleUserInput}
                    type="number"
                    value={this.state.zipCode}
                    name="zipCode"
                    id="zip-code">
                </input>
                

                <button type="submit">Buy Now</button>
            </form>
        )
    }
}

export default CheckoutForm;