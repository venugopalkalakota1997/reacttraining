import React from 'react'

class Employee extends React.Component {
    state = {}
    render() {
        return (
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.salary}</td>
                    <td>{this.props.age}</td>
                </tr>
        );
    }
}

export default Employee;