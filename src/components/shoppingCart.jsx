import React, { Component } from 'react';
import Product from './product';

class ShonppingCart extends Component {
    // constructor(props){
    //     super(props);
    //     console.log("Constructor => from Shopping Cart");
    // }


    ///the best to call backend
    // componentDidMount(){
    //     console.log("componentDidMount  => from Shopping Cart");
    // }
    
    // componentDidUpdate(prevProps,prevState){
    //     console.log("componentDidUpdate  => from Shopping Cart");
    //     console.log(prevProps);
    //     console.log(prevState);
    // }

    
    render() { 
        //console.log("render => from Shopping Cart");
        return (
            
            <React.Fragment>
                <h1>Shopping Cart</h1>
                <button className='btn btn-warning m-2' onClick={this.props.Rest}>Rest</button>
                {this.props.products.map(product=>(
                    // <Product key={product.id} product={product}/>
                    <Product key={product.id} product={product} OnDelete={this.props.OnDelete} OnAdd={this.props.OnAdd} OnDecrease={this.props.OnDecrease}>
                        <h3>{product.name}</h3>
                    </Product>
                ))}
                
            </React.Fragment>
        );
    }
}
 
export default ShonppingCart;