import React from 'react';
import Product from './product';

class AllProducts extends React.Component {
   
    render() { 
        return (  
            <div>
                All products will be listed here!
                <Product price='10' rating='10'>Note 10</Product>
                <Product price='15' rating='8'>VR Glass</Product>
                <Product price='2' rating='6'>RFID Reader</Product>
                <Product price='40' rating='20'>Mac Book Pro</Product>
                <Product price='8' rating='10'>Tab 12</Product>
                <Product price='25' rating='5'>Micro Cam</Product>
                <hr></hr>
                <ol>
                    <li>Props: immutable - parent component use it to pass info/variables to child components!</li>
                    <li>States: mutable - component level variables!</li>
                </ol>
            </div>
        );
    }
}
 
export default AllProducts;