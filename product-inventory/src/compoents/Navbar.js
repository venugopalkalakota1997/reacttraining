import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Addproduct from './Addproduct';
import './style.css'


class Navbar extends React.Component {
    state = {}
    render() {
        return (
            <div>

                <nav className="nav">
                    <Link className="Link" to="/signup">Signup  |  </Link>&nbsp;&nbsp;
                   <Link className="Link" to="/login">Login  |   </Link>&nbsp;&nbsp;
                   <Link className="Link" to="/add">  Add Product |</Link>&nbsp;
                </nav>
                <Switch>
                    <Route path='/login' exact component={Login}> </Route>
                    <Route path='/signup' exact component={Signup}> </Route>
                    <Route path='/add' exact component={Addproduct}> </Route>
                </Switch>
            </div>
        );
    }
}

export default Navbar;