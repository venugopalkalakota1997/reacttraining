import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Employeelist from './employeelist';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <span>
                    < Link to="/employee">Employees</Link>
                </span>
                <span>
                    <Switch>
                        <Route path='/employee' exact component={Employeelist}></Route>
                    </Switch>
                </span>
            </div>
        );
    }
}

export default Home;