import React from 'react';
import Product from './Product';
import axios from "axios";
import { Link } from 'react-router-dom';

import './style.css';


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            permenantproducts: [],
            products: [],
            deleteSuccess: false,
            updateSuccess: false,
            search: '',
            selectedOption: false,
            categorystatus: false

        }

    }

    componentWillMount() {

        this.getAllProducts()
    }
    getAllProducts = () => {
        axios.get('http://localhost:3000/productdetails')
            .then(response => {

                console.log(response.data)
                this.setState({
                    products: response.data,
                    permenantproducts: response.data
                })

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
                    image={product.image}
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
        if (event.target.value !== '') {
            let filteredvalues = this.state.permenantproducts.filter((fproduct) => {

                return fproduct.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            this.setState({
                products: filteredvalues
            })
        }
        else {
            this.getAllProducts()
        }
    }
    getcategorysearch = (event) => {


        if (event.target.value !== 'Select Category' && !this.state.selectedOption) {

            let filteredvalues = this.state.permenantproducts.filter((fproduct) => {

                return (
                    fproduct.category.includes(event.target.value)
                )

            })
            this.setState({
                products: filteredvalues,
                category: true,
                selectedOption: false
            })
        }
        else {
            this.setState({ category: false })
            this.getAllProducts()
        }

    }

    onValueChange = (event) => {

        this.setState({

            selectedOption: !this.state.selectedOption
        });
        this.avalabilestock()
    }
    avalabilestock() {
        if (!this.state.selectedOption) {
            let filteredvalues = this.state.permenantproducts.filter((fproduct) => {
                return (fproduct.quantity !== "0")
            })
            this.setState({
                products: filteredvalues
            })
        }
        else {
            this.getAllProducts();
        }
    }

    render() {
        let username = localStorage.getItem("username")
        return (
            <div className="home">
                <input type="text" className="searchtext" placeholder="Search.." name="search" onChange={this.getsearch}></input>
                <button type="submit" className="searchbutton" onClick={this.getsearch}>Search</button>
                <br></br>
                <br></br>
                <span>
                    <div className="filter">
                        <p>Filter by:</p>
                        {!this.state.selectedOption &&
                            <select id="productcategory" onChange={this.getcategorysearch}>
                                <option id="productcategory">Select Category</option>
                                <option id="productcategory">Televison</option>
                                <option id="productcategory">Mobile </option>
                                <option id="productcategory">Furniture</option>
                                <option id="productcategory">Computer Accessories</option>
                            </select>
                        } &emsp;
                        {!this.state.category &&
                            <label>
                                Product in stock :
                        <input type="checkbox" defaultChecked={this.state.selectedOption} onChange={this.onValueChange} />Yes
                         </label>
                        }
                    </div>
                    {username !== null &&
                        <div className="addproduct">

                            <button className="buttonadd" ><Link to='/add'>Addproduct&nbsp;&nbsp;</Link></button>
                            <button className="buttonadd"><Link to='/dashboard'>Dashboard</Link></button>
                        </div>
                    }
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