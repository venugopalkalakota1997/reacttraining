import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Addproduct from './Addproduct';
import Home from './Home'
import EditProduct from './EditProduct'
import './style.css'
import { withRouter } from "react-router-dom"
import Dashboaed from "./Dashboard"


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: localStorage.getItem("username")
        }
    }


   logout=(e)=>{
     localStorage.removeItem("username")
     this.props.history.push('/')
   }

    render() {
        let username = localStorage.getItem("username")
        console.log(username);
        return (
            <div>

                <nav className="nav">

                    {username === null &&
                        <div className="custom-nav">
                            <Link  to="/">Product_Inventory</Link>
                            <Link  className="buttonnav" to='/register'>SignUp</Link> &nbsp;
                             <Link className="buttonnav" to='/login'>Login</Link>&nbsp;&nbsp;
                    </div>
                    }
                    {username !== null &&
                        <div className="custom-nav">
                            <Link to="/">Product_Inventory</Link>
                            <button type="button" className="buttonnav1" onClick={this.logout}> logout</button>&nbsp;&nbsp;
                           <Link className="buttonnav" disabled={true}>{username} </Link>&nbsp;
                    </div>
                    }

                </nav>

                <div>
                    <Switch>
                        <Route exact path='/'  component={Home}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Signup}></Route>
                        <Route path='/add' component={Addproduct}></Route>
                        <Route path='/editproduct' component={EditProduct}></Route>
                        <Route path='/dashboard' component={Dashboaed}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);