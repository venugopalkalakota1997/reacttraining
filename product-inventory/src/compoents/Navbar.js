import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Addproduct from './Addproduct';
import Home from './Home'
import EditProduct from './EditProduct'
import './style.css'



class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="nav">
                    <button className="button"><Link to="/">Product_Inventory</Link></button>
                    <button className="buttonnav"><Link to='/register'>SignUp</Link> </button>&emsp;&nbsp;
                    <button className="buttonnav"> <Link to='/login'>Login</Link></button>&nbsp;&nbsp;
                </nav>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}></Route> 
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Signup}></Route>
                        <Route path='/add' component={Addproduct}></Route>
                        <Route path='/editproduct' component={EditProduct}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Navbar;