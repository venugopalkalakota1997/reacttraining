import React from 'react';
import { connect } from 'react-redux';

class Detail extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                First:{this.props.firstname}{this.props.lastname}{this.props.score}
            </div>
         );
    }
}
function convertStoreToPropsForFriendDetail(store){
   
    console.log(store);
    return {
        firstname: store.firstname,
        lastname:store.lastname,
        score:store.scoreplus
    }}
export default connect(convertStoreToPropsForFriendDetail)(Detail);