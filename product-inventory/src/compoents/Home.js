import React from 'react';
import Product from './Product';
import axios from "axios";
import { Link } from 'react-router-dom';

import './style.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            deleteSuccess: false,
            updateSuccess: false,
            search: ''
        }
    }

    componentWillMount() {
        this.getAllProducts()
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/productdetails')
            .then(response => {

                console.log(response.data)
                this.setState({ products: response.data })

            }, error => {
                console.error(error);
            })
    }
    intializeState = () => {
        setTimeout(() => {
            this.setState({ deleteSuccess: false })
        }, 2000)
    }

    deleteProductWithId = (id) => {
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/productdetails/' + id)
            .then(response => {
                console.log(response)
                //show deleteSuccess message
                this.setState({ deleteSuccess: true })
                this.getAllProducts()
                //remove deleteSuccess message after 2000 millisecond
                this.intializeState()
            }, error => {
                console.error(error)
            })
    }
    editProductWithId = (id) => {
        this.setState({ myid: id })
        this.props.history.push({
            pathname: '/editproduct',
            state: { myid: id }
        })

    }
    renderAllProducts = () => {
        return this.state.products.map(product => {

            return (

                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    productdetails={product.productdetails}
                    quantity={product.quantity}
                    price={product.price}
                    category={product.category}
                    deleteId={this.deleteProductWithId}
                    editId={this.editProductWithId}
                >

                </Product>

            )
        })
    }

    getsearch = (event) => {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
        if (this.state.search === ' ') {
            this.getAllProducts()
        }
        else {
            axios.get('http://localhost:3000/productdetails/?q=' + this.state.search)
                .then(response => {
                    console.log(response.data)
                    this.setState({ products: response.data })
                }, error => {
                    console.error(error);
                })
        }
    }


    render() {
        return (
            <div className="home">
                <input type="text" className="searchtext" placeholder="Search.." name="search" onChange={this.getsearch}></input>
                <button type="submit" className="searchbutton" onClick={this.getsearch}>Search</button>
                <br></br>
                <br></br>
                <span>
                    <button className="buttonadd"><Link to='/add'>Addproduct&nbsp;&nbsp;</Link></button>
                </span><br></br><br></br>
                {this.state.deleteSuccess &&
                    <div className="alert">
                        <h5>Product deleted successfully</h5>
                    </div>
                }
                {this.renderAllProducts()}
            </div>
        );
    }
}

export default Home;