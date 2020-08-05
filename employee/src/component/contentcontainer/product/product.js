import React from 'react';
import ProductImage from './productimage';
import ProductDetail from './productdetail';


class Product extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <ProductImage></ProductImage> 
               <ProductDetail name={this.props.children} 
                              price={this.props.price}
                              rating={this.props.rating}>

               </ProductDetail>
                
            </div>
         );
    }
}
 
export default Product;