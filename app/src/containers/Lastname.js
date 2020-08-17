import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import lastnameClicked from '../actions/boradcastlastname'


class Lastname extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               Lastname: <input type="text" onChange={(event) => this.props.lastname(event.target.value)}></input> 
              
            </div>
         );
    }
}
function convertStoreToProps(store) {
    return {
        valuelast: store.lastname
    }
}
function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        lastname: lastnameClicked
    }, dispatch)

}
export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(Lastname);