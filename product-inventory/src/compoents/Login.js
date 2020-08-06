import React from 'react';
import './style.css';
import axios from "axios";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id:0,
            username: '',
            password: '',
            logindetails:[]
        }
    }

    getName = (event) => {
        console.log(event.target.value)
        this.setState({ username: event.target.value })
    }

    getPassword = (event) => {

        console.log(event.target.value)
        this.setState({ password: event.target.value })

    }
    login = (event) => {
        
        axios.get('http://localhost:3000/userdetails/?q=' + this.state.username)
            .then(response => {
                console.log(response)
                this.setState({
                   logindetails:response.data
                })
                this.state.logindetails.map(logindetail=>{
                    console.log(logindetail)
                if(logindetail.name===this.state.username && logindetail.password === this.state.password){
                   
                    this.props.history.push('/')
                }
                else{
                    this.props.history.push('/login')
                }
            })
            }, error => {
                console.error(error);
            })
    }
    render() {
        return (


            <form className="form">
                <h3>login Component</h3>
                <p >Name </p>
                <input className="input" type='text' id="username" onChange={this.getName}></input>

                <p >Password </p>
                <input className="input" type='password' id="password" onChange={this.getPassword}></input>
                <br></br>

                <br></br>
                <button className="button" onClick={this.login}>Login</button>
            </form>

        );
    }
}

export default Login;