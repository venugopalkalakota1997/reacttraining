import React from 'react';
import axios from "axios";
import { Bar, Pie } from 'react-chartjs-2';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            totalproducts: 0,
            totalquantity: 0,
            category: '',
            noproduct: [],
            noproductcategory: [],

            data: {
                labels: ['Televison', 'Mobile', 'Furniture', 'Computer Accesories'],
                datasets: [
                    {
                        borderWidth: 1,
                        label: 'All Categories',
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ],
                        data: []
                    }
                ]
            },
            datacategory: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        backgroundColor: 'blue',
                        data: []
                    }
                ]

            },

        }
    }



    componentWillMount() {

        this.getAllProducts()

    }

    getAllProducts = (event) => {

        axios.get('http://localhost:3000/productdetails')
            .then(response => {
                this.setState({
                    products: response.data,
                    totalproducts: response.data.length,
                })


                this.gettotalproductpie()
                if (event === "Televison") {
                    this.setState({
                        datacategory: {
                            labels: [],
                            datasets: [
                                {
                                    label: '',
                                    backgroundColor: 'blue',
                                    data: ''
                                }
                            ]
                        }
                    })
                    this.getcategoryproductTelevisionbar()
                }
                else if (event === "Mobile") {
                    this.setState({
                        datacategory: {
                            labels: [],
                            datasets: [
                                {
                                    label: '',
                                    backgroundColor: 'blue',
                                    data: ''
                                }
                            ]
                        }
                    })
                    this.getcategoryproductMobilebar()
                }
                else if (event === "Furniture") {
                    this.setState({
                        datacategory: {
                            labels: [],
                            datasets: [
                                {
                                    label: '',
                                    backgroundColor: 'blue',
                                    data: ''
                                }
                            ]
                        }
                    })
                    this.getcategoryproductFurniturebar()
                }
                else if (event === "Computer Accessories") {
                    this.setState({
                        datacategory: {
                            labels: [],
                            datasets: [
                                {
                                    label: '',
                                    backgroundColor: 'blue',
                                    data: ''
                                }
                            ]
                        }
                    })
                    this.getcategoryproductComputerbar()
                }

                this.state.products.map((product) => {
                    this.setState({

                        totalquantity: this.state.totalquantity + Number(product.quantity)
                    })

                    return this.state.totalquantity;
                })

            }, error => {
                console.error(error);
            })

    }


    gettotalproductpie() {

        let Televisontotal = 0;
        let mobiletotal = 0;
        let computertotal = 0;
        let furnituretotal = 0;
        this.state.products.map((product) => {
            if (product.category === "Televison") {
                Televisontotal = Televisontotal + Number(product.quantity)

            }
            else if (product.category === "Mobile") {
                mobiletotal = mobiletotal + Number(product.quantity)
            }
            else if (product.category === "Computer Accessories") {
                computertotal = computertotal + Number(product.quantity)
            }
            else if (product.category === "Furniture") {
                furnituretotal = furnituretotal + Number(product.quantity)
            }

            return null;
        })

        this.setState({
            data: {
                datasets: [
                    {
                        borderWidth: 1,
                        backgroundColor: [
                            'indigo',
                            'red',
                            'blue',
                            'orange'
                        ],
                        data: [Televisontotal, mobiletotal, furnituretotal, computertotal]
                    }
                ]
            },
        })
    }

    getcategory = (event) => {
        console.log(event.target.value)
        if (event.target.value === "Televison") {

            this.getAllProducts("Televison")
        }
        else if (event.target.value === "Mobile") {

            this.getAllProducts("Mobile")
        }
        else if (event.target.value === "Furniture") {

            this.getAllProducts("Furniture")
        }
        else if (event.target.value === "Computer Accessories") {

            this.getAllProducts("Computer Accessories")
        }
    }

    getcategoryproductTelevisionbar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Televison") {
                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {

                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })

                if (product.quantity === '0') {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }


            }

            return this.state.datacategory;
        })
    }
    getcategoryproductMobilebar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Mobile") {
                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {
                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })
                if (product.quantity === '0') {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }
            }
            return this.state.datacategory;
        })
    }
    getcategoryproductFurniturebar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Furniture") {
                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {
                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })
                if (product.quantity === '0' || product.quantity === 0) {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }
            }
            return this.state.datacategory;
        })
    }
    getcategoryproductComputerbar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Computer Accessories") {

                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {
                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })
                if (product.quantity === '0') {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }
            }
            return this.state.datacategory;
        })
    }

    render() {
        return (

            <div>
                <label className="dashboard">Total Products : {this.state.totalproducts}</label>
                <label className="dashboardtotal">Total Quantity : {this.state.totalquantity}</label>
                <br></br><br></br>

                <div className="dashboardpie">
                    <p >Total Number of Products in Each Category</p>
                    <Pie data={this.state.data}   ></Pie>
                </div>

                <div className="dashboardbar">

                    <h3>Product Quantity of Idividual Category</h3>

                    <select id="productquantity" className="input" onChange={this.getcategory}>
                        <option id="productcategory">Select Category</option>
                        <option id="productcategory">Televison</option>
                        <option id="productcategory">Mobile </option>
                        <option id="productcategory">Furniture</option>
                        <option id="productcategory">Computer Accessories</option>
                    </select><br></br>

                    {this.state.noproduct.length !== 0 &&
                        <label>Products out of stock: <p style={{ color: "red" }}>{this.state.noproduct.map(product => { return <label>{product}, &nbsp;</label> })}
                        </p></label>
                    }
                    {this.state.datacategory.labels.length !== 0 &&
                        <Bar data={this.state.datacategory} width={100} height={50} options={{ maintainAspectRatio: false }}>  </Bar>
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;
