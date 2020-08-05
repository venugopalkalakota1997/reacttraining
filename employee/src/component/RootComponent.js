import React from 'react';
import Header from './header/header'
import Content from './contentcontainer/content'

class RootComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header></Header>
                <Content></Content>
            </div>
         );
    }
}
 
export default RootComponent;