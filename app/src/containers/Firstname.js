import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import fristNameClicked from '../actions/boradcastfirstname'

class Firstname extends React.Component {


    render() {
        return (
            <div>
                Firstname: <input type="text" onChange={(event) => this.props.firstname(event.target.value)}></input>
            </div>
        );
    }
}
function convertStoreToProps(store) {
    return {
        valuefirst: store.firstname
    }
}
function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        firstname: fristNameClicked
    }, dispatch)

}
export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(Firstname);