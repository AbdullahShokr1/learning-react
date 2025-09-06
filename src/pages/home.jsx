import React, { Component } from 'react';
import ShonppingCart from '../components/shoppingCart';
import Counter from '../components/counter';
import Counters from '../components/counters';
import Timer from '../components/timer';


class Home extends Component {
    state = { 
        products:[
            {id:1,name:"Burger", count:3},
            {id:2,name:"Fries", count:1},
            {id:3,name:"cola", count:2},
        ],
    };
    DeleteItem = (product) => {
        const products = this.state.products.filter(p=> p.id !== product.id)
        this.setState({products});
    };
    Rest = ()=>{
        let products = [...this.state.products];
        products = products.map((p)=>{
            p.count = 0 ;
            return p;
        });
        this.setState({products});
    };
    AddItem= (product)=>{
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] ={...products[index]};
        products[index].count++;
        this.setState({products});
    }
    decreaseItem = (product)=>{
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].count > 0 && products[index].count--;
        this.setState({products});
    } 
    render() { 
        return (
            <React.Fragment>
                <ShonppingCart products={this.state.products} OnDelete={this.DeleteItem} OnAdd={this.AddItem} OnDecrease={this.decreaseItem} Rest={this.Rest}/>
                {/* <Counter/> */}
                {/* <Counters/> */}
                {/* <Timer/> */}
            </React.Fragment>
        );
    }
}
 
export default Home;