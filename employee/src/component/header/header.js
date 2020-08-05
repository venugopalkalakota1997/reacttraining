import React from 'react';
import NavigationBar from './navbar';


class Header extends React.Component {
   
    render() { 
        return ( 
            <div>
             <NavigationBar></NavigationBar>       
            <h1>This is header!!!!</h1>
            </div>
         );
    }
}
 
export default Header;