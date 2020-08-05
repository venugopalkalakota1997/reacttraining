import React from 'react';
import ProductTitle from './producttitle';
import ProductPrice from './productprice';
import ProductRating from './rating';

class ProductDetail extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <ProductTitle title={this.props.name}></ProductTitle>
                <br></br>
                <ProductPrice cost={this.props.price}></ProductPrice>
                <br></br>
                <ProductRating rating={this.props.rating}></ProductRating>
            </div>
          );
    }
}
 
export default ProductDetail;