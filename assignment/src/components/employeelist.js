import React from 'react';
import Employee from './Employee';
import "./employee.css"
import axios from "axios";

class Employeelist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allemployees: []
        }
    }
    componentWillMount() {
        this.getemployees()
    }
    getemployees() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response) => {
                console.log(response)
                console.log(response.data)
                this.setState({ allemployees: response.data.data })
                console.log(this.state.allemployees)
            }, (error) => {
                console.log(error)
            })
    }



    allemployeelist = () => {
        console.log('in employye')
        return (
            <table className="ta">
                <thead>
                    <tr>
                        <th>employee_id</th>
                        <th>employee_name</th>
                        <th>employee_salary</th>
                        <th>employee_age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.allemployees.map(emp =>
                        <Employee key={emp.id} id={emp.id} name={emp.employee_name}
                            salary={emp.employee_salary} age={emp.employee_age}></Employee>)
                    }
                </tbody>
            </table>
        );
    }
    render() {
        return (
            <div>
                <h3 className="ta">List of all Employees</h3>
                {this.allemployeelist()}
            </div>
        );
    }
}

export default Employeelist;