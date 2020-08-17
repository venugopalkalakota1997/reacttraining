import React from 'react';
import './style.css';
import axios from "axios";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            username: '',
            password: '',
            logindetails: [],
            nameError: '',
            passwordError: '',
            buttonStatus:true,
            loginstatus:false
        }
    }
    componentWillMount(){
        localStorage.removeItem("username",this.state.username)
    }
   
    getName = (event) => {
        console.log(event.target.value)
        this.setState({ username: event.target.value })
        this.checkValidation(event)
    }

    getPassword = (event) => {
        console.log(event.target.value)
        this.setState({ password: event.target.value })
        this.checkValidation(event)
    }
    getblurName = (event) => {
       
        this.setState({ username: event.target.value })
        this.checkValidation("username")
    }
    
    getblurPasswword = (event) => {
        
        console.log(event.target.value)
        this.setState({ password: event.target.value })
        this.checkValidation('password');
    }


    checkValidation(event) {
        console.log(event)
        let nameerror = ''
        let passworderror = ''
        if (event==='username' && this.state.username === '') {
            console.log('set state for nameError');
            nameerror = 'Name is Required'
        }
        else if (event==='password' && this.state.password === '') {
            console.log('set state for passwordError');
            passworderror = 'Password is Required'
        }
        //check for other conditions!
        if (nameerror || passworderror) {
           
            this.setState({
                nameError: nameerror,
                passwordError: passworderror,
                buttonStatus:true
            })

            return false
        }
        this.setState({
            nameError: '',
            passwordError: '',
            buttonStatus:false
        })
        return true

    }
    setlocalstorage(){
        localStorage.setItem("username",this.state.username)
    }



    login = (event) => {
        

        axios.get('http://localhost:3000/userdetails/?q=' + this.state.username)
            .then(response => {
                console.log(response)
                this.setState({
                    logindetails: response.data
                })
                this.state.logindetails.map(logindetail => {
                    console.log(logindetail)
                   
                    if (logindetail.name === this.state.username && logindetail.password === this.state.password) {
                        localStorage.setItem("username",this.state.username)
                        this.props.history.push('/')
                       
                        
                    }
                    else {
                        this.setState({
                            username: '',
                            password: '',
                            loginstatus:true
                        })
                       
                      
                    }
                   return null;
                })
            }, error => {
                console.error(error);
            })
            
    }


    render() {
        return (
            <form className="form">
                {this.state.loginstatus &&
                    <div >
                        <h5 className="loginerror">Invalid UserName/Password</h5>
                    </div>
                }
                <h3>login Component</h3>
                <p >Name </p>
                <input className="input" type='text' id="username" onChange={this.getName} onBlur={this.getblurName}></input>
                <p className="error">{this.state.nameError}</p>
                <p >Password </p>
                <input className="input" type='password' id="password" onChange={this.getPassword} onBlur={this.getblurPasswword}></input>
                <br></br>
                <p  className="error">{this.state.passwordError}</p>
                <br></br>
                <button type="submit" className="button" onClick={this.login} disabled={this.state.buttonStatus}>Login</button>
            </form>

        );
    }
}

export default Login;