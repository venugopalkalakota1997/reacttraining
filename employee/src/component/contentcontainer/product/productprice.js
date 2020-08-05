import React from 'react';

class ProductPrice extends React.Component {
    state = {  }
    render() { 
        return (
            <span>USD {this.props.cost}</span>
          );
    }
}
 
export default ProductPrice;