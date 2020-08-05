import React from 'react';

class ProductTitle extends React.Component {
    state = {  }
    render() { 
        return (
            <span>{this.props.title}</span>
          );
    }
}
 
export default ProductTitle;