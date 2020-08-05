import React from 'react';
import './style.css';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:''
        }
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({username: event.target.value})

    }

    getPassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({password: event.target.value})

    }
    login=(event)=>{
        console.log(event.target.value)
        this.setState({password: event.target.value})
        this.setState({username: event.target.value})
    }
    render() { 
        return (
            <div className="login">
                <h3>login Component</h3>
                <form>
                    <label className="namepass">Name </label><br></br>
                    <input type='text' id="username" onChange={this.getName}></input>
                    <br></br>
                     Username Name: { this.state.username }
                    <br></br>
                    <br></br>
                    <label  className="namepass">Password </label><br></br>
                    <input type='password' id="password" onChange={this.getPassword}></input>
                    <br></br>
                     password: { this.state.password }
                    <br></br>
                <button onClick={this.login}>Login</button>
                </form>
  
            </div>        );
    }
}
 
export default Login;