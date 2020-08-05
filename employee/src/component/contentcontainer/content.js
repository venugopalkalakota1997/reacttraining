import React from 'react';
import AllProducts from './product/allproducts';
import { Switch, Route } from "react-router-dom";
import Home from './home/home';
import Register from './register/register';
import Login from './login/login';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div>
            Content component!
            <Switch>
                <Route exact path='/' component={Home}></Route>    
                <Route path='/products' component={AllProducts}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
            </Switch>   
          
        </div>
         );
    }
}
 
export default Content;