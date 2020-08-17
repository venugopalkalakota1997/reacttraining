import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import scoreplusclicked from '../actions/boradcastscore'

class Score extends React.Component {
    state = {}
    render() {
        return (
            <div>
                Score :
                <button type="button" onClick={() => this.props.scoreplus()}> +</button>
               
            </div>
        );
    }
}

function convertStoreToProps(store) {
    return {

        scoreplus: store.scoreplus
    }
}
function convertEventToPropsAndDispatch(dispatch) {

    return bindActionCreators({
        scoreplus: scoreplusclicked
    }, dispatch)

}
export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(Score);