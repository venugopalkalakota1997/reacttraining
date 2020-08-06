import React from 'react'
import axios from "axios";

class Addproduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: '',
            productdetails: '',
            quantity: 0,
            price: 0,
            category: ""
        }
    }
    addProduct=()=>{
        let productRequestBody = {
            "name": this.state.name,
            "productdetails": this.state.productdetails,
            "quantity": this.state.quantity,
            "price": this.state.price,
            "category": this.state.category
        }
        axios.post('http://localhost:3000/productdetails/', productRequestBody)
                .then(response=>{
                    console.log(response);
                   
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }
    getName = (event) => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
    }
    getproductdetails = (event) => {   
        console.log(event.target.value)
        this.setState({ productdetails: event.target.value })
    }
    getPrice = (event) => {     
        console.log(event.target.value)
        this.setState({ price: event.target.value })
    }
    getquantity = (event) => {
      
        console.log(event.target.value)
        this.setState({ quantity: event.target.value })
    }
    getcategory = (event) => {
    
        console.log(event.target.value)
        this.setState({ category: event.target.value })
    }
    render() {
        return (
            <form className="form" >
                <h2 >Add Product</h2>
                <br></br>
                <p>Product name</p>
                <input className="input" type="text" id="productname" onChange={this.getName}></input>
                <p>Product Description</p>
                <textarea id="productdetails" onChange={this.getproductdetails} value={this.state.productdetails}> </textarea><br></br>

                <p>Price</p>
                <input type="number" className="input" id="productprice" onChange={this.getPrice}></input>

                <p>Quantity</p>
                <input type="number" className="input" id="productquantity" onChange={this.getquantity}></input>

                <p>Categorey</p>
                <select className="input" onChange={this.getcategory}>
                    <option id="productcategory">Televison</option>
                    <option id="productcategory">Mobile </option>
                    <option id="productcategory">Furniture</option>
                    <option id="productcategory">Computer Accessories</option>
                </select><br></br>
                <button type="button" className="button" onClick={this.addProduct}>Add</button>
            </form>

        );
    }
}

export default Addproduct;