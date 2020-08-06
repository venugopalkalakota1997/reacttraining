import React from 'react';

class Product extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
        }
    }
    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }
    editProductWithId=()=>{
        console.log("edit product with id: " + this.props.id);
        this.props.editId(this.props.id)
    }
    
    render() {
        return (
            <div className="individual">
                <h2>{this.props.name}</h2>
                <p>{this.props.id}</p>
                <p>Category :{this.props.category} </p>
                <p>Description :{this.props.productdetails} </p>
                <p>Price:Rs.{this.props.price} &emsp; &emsp; &emsp; &emsp;  &emsp;  &emsp; &emsp; &nbsp; Quantity:{this.props.quantity}</p>
                <button className="btnmodify" onClick={this.editProductWithId}>Modify</button>
                <button className="btndelete" onClick={this.deleteCurrentProduct}>Delete</button>         
            </div>
        );
    }
}

export default Product;