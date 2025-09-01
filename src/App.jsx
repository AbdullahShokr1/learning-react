import React, { Component } from 'react';
// import Product from './product';
import ShonppingCart from './components/shoppingCart';
import NavBar from './components/Navbar';


class App extends Component {
    state = { 
        products:[
            {id:1,name:"Burger", count:3},
            {id:2,name:"Fries", count:1},
            {id:3,name:"cola", count:2},
        ],
    };
    DeleteItem = (product) => {
        // //clone & Edit
        // const newProducts = this.state.products.filter(p=> p.id !== product.id)
        // // Set state
        // this.setState({products:newProducts});
        ///other way 
        //clone & Edit
        const products = this.state.products.filter(p=> p.id !== product.id)
        // Set state
        this.setState({products});
    };
    Rest = ()=>{
        //clone
        let products = [...this.state.products];
        //Edit
        products = products.map((p)=>{
            p.count = 0 ;
            return p;
        });
        //Set state
        this.setState({products});
    };
    AddItem= (product)=>{
        // //clone & Edit
        // let products = this.state.products.map((p) => {
        //     if (p.id === product.id) {
        //         return { ...p, count: p.count + 1 };
        //     }
        //     return p;
        // });
        // // Set state
        // this.setState({products});
        //clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] ={...products[index]};
        //Edit
        products[index].count++;
        //Set state
        this.setState({products});
    }
    decreaseItem = (product)=>{
        //colne
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        ///Edit
        products[index].count > 0 && products[index].count--;
        //Set state
        this.setState({products});
    } 
    render() { 
        return (
            <React.Fragment>
                <NavBar count={this.state.products.filter(p => p.count>0).length}/>
                <ShonppingCart products={this.state.products} OnDelete={this.DeleteItem} OnAdd={this.AddItem} OnDecrease={this.decreaseItem} Rest={this.Rest}/>
            </React.Fragment>
        );
    }
}
 
export default App;
// const App=()=>{
//     return (
//         <React.Fragment>
//             <NavBar/>
//             <ShonppingCart />
//         </React.Fragment>
//     );

// }

// export default App;