import React from 'react';
import axios from "axios";


class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: '',
            productdetails: '',
            quantity: 0,
            price: 0,
            category: "",
            deleteSuccess:props.deleteSuccess
        }

    }

    componentWillMount() {
       
        if (this.props.location.state !== undefined) {
            axios.get('http://localhost:3000/productdetails/' + this.props.location.state.myid)
                .then(response => {
                    
                   
                    this.setState({
                        id: response.data.id,
                        name: response.data.name,
                        productdetails: response.data.productdetails,
                        quantity: response.data.quantity,
                        price: response.data.price,
                        category: response.data.category,

                    })
                }, error => {
                    console.error(error);
                })
        }
        else{
            this.props.history.push('/')
        }
    }

    editProduct=()=>{
       
        let productRequestBody = {
            "name": this.state.name,
            "productdetails": this.state.productdetails,
            "quantity": this.state.quantity,
            "price": this.state.price,
            "category": this.state.category
        }
        axios.put('http://localhost:3000/productdetails/'+this.state.id, productRequestBody)
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

            <form className="form" action="home.html">
                <h2 >Update Product</h2>
                <br></br>

                <input type="hidden" value={this.state.id} readOnly></input>
                <br></br>
                <p>Product name</p>
                <input className="input" type="text" id="productname" value={this.state.name} onChange={this.getName}></input>
                <p>Product Description</p>
                <textarea id="productdetails" value={this.state.productdetails} onChange={this.getproductdetails}> </textarea><br></br>

                <p>Price</p>
                <input type="number" className="input" id="productprice" value={this.state.price} onChange={this.getPrice}></input>

                <p>Quantity</p>
                <input type="number" className="input" id="productquantity" value={this.state.quantity} onChange={this.getquantity}></input>

                <p>Categorey</p>
                <select className="input" onChange={this.getcategory}>
                    <option id="productcategory" >{this.state.category}</option>
                    <option id="productcategory">Televison</option>
                    <option id="productcategory">Mobile </option>
                    <option id="productcategory">Furniture</option>
                    <option id="productcategory">Computer Accessories</option>
                </select><br></br>
                <button type="button" className="button" onClick={this.editProduct}>Update</button>
            </form>

        );
    }
}

export default EditProduct;