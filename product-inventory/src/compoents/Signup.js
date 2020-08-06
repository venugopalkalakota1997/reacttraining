import React from 'react'
import './style.css';
import axios from "axios";

class Signup extends React.Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            contactNumber: '',
            signSuccess: false
        }
    }

    getName = (event) => {
        console.log(event.target.value)
        this.setState({ username: event.target.value })

    }

    getconfirmPassword = (event) => {
        console.log(event.target.value)
        this.setState({ confirmPassword: event.target.value })

    }
    getPassword = (event) => {
        console.log(event.target.value)
        this.setState({ password: event.target.value })

    }
    getcontactNumber = (event) => {
        console.log(event.target.value)
        this.setState({ contactNumber: event.target.value })
    }

    intializeState = () => {
        setTimeout(() => {
            this.setState({ signSuccess: false })
        }, 2000)
    }

    signup = () => {
        let userRequestBody = {
            "name": this.state.username,
            "password": this.state.password,
            "contactNumber": this.state.contactNumber,
        }
        axios.post('http://localhost:3000/userdetails/', userRequestBody)
            .then(response => {
                console.log(response);
                this.setState({ signSuccess: true })
                this.intializeState()
                this.props.history.push('/')
            }, error => {
                console.error(error);
            })
    }

    render() {
        return (
            <div>

                <form className="form">
                    <h2>Signup Component</h2>
                    <p >Name </p>
                    <input className="input" type='text' id="username" onChange={this.getName}></input>

                    <p >Contact Number </p>
                    <input className="input" type='text' id="contactNumber" onChange={this.getcontactNumber}></input>

                    <p>Password </p>
                    <input className="input" type='password' id="password" onChange={this.getPassword}></input>


                    <p>Confirm Password </p>
                    <input className="input" type='password' id="confirmPassword" onChange={this.getconfirmPassword}></input>
                    <br></br>

                    <br></br>
                    <button className="button" onClick={this.signup}>Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup;