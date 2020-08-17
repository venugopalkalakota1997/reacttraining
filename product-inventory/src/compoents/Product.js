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
        let username=localStorage.getItem("username")
        return (
            <div className="individual">
                <img src={this.props.image} className="image" alt="imagenotfound"></img>
                <h2>{this.props.name}</h2>
                <p>{this.props.id}</p>
                <p>Category :{this.props.category} </p>
                <p className="description">Description :{this.props.productdetails} </p>
                <p >
                    <span style={{float:"left" ,padding: "0px 2px"}}>Price:Rs.{this.props.price}  </span>
                    
                   <span  style={{float:"right",padding: "0px 32px"}}>  Quantity:{this.props.quantity}</span>
                    
                </p>
                
                <span><br></br><br></br>
                {username !== null && 
                <span>
                <button className="btnmodify" onClick={this.editProductWithId}>Modify</button>
                <button className="btndelete" onClick={this.deleteCurrentProduct}>Delete</button> </span>
                  } 
                </span>      
            </div>
        );
    }
}

export default Product;