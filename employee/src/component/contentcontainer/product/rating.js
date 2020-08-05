import React from 'react';



class ProductRating extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            newrating: parseInt(this.props.rating),
            reviewcount: 55
        }
    }

    changeReviewCount =()=>{
        console.log(this.state.reviewcount)
        //this.state.reviewcount = this.state.reviewcount +1
        this.setState({reviewcount: this.state.reviewcount + 1})
        console.log(this.state.reviewcount)
    }
    
    changeRating=()=>{
        this.setState({
            newrating: this.state.newrating + 1
        })
    }

    render() { 
        return ( 
            <span>
                Ratings received: {this.state.newrating}  <button onClick={this.changeRating}>Change Rating</button>
                <br></br>
                Reviews: {this.state.reviewcount} 
                <button onClick={this.changeReviewCount}>Change Review Count</button>
            </span>
         );
    }
}
 
export default ProductRating 