import React from 'react';
import Navbar from './Navbar';



class Home extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h3 > Home Component </h3>
            </div>
        );
    }
}

export default Home;