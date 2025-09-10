import React, { Component } from 'react';
import {BrowserRouter ,Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from 'react-router-dom'
// import Product from './product';
import ShonppingCart from './components/shoppingCart';
import NavBar from './components/Navbar';
import Counter from './components/counter';
import Counters from './components/counters';
import Timer from './components/timer';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error404';
import Psot from './pages/post';
import ProtectedRoute from './components/protectedRoute';
import Lgoin from './components/login';
import axios from 'axios';
import Posts from './pages/posts';

// const user = null;
const user = {name: 'Abdullah'}
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RouteLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={
                <ProtectedRoute user={user}>
                    <About/>
                </ProtectedRoute>
                
            }/>
            <Route path='/post/:id' element={<Psot/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/login' element={<Lgoin/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
    )
);

function RouteLayout(){
    return(
        <>
            <NavBar />
            <Outlet/>
        </>
    );
}
class App extends Component {
    state = { 
        products:[
            {id:1,name:"Burger", count:3},
            {id:2,name:"Fries", count:1},
            {id:3,name:"cola", count:2},
        ],
    };

    async componentDidMount(){

        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(data);
    //    const promise =  fetch("https://jsonplaceholder.typicode.com/posts");
    //    const result = promise.then(response => response.json());
    //    result.then(data =>console.log(data));
    }
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
            <RouterProvider router={router}/>
            // <BrowserRouter>
            //     <NavBar count={this.state.products.filter(p => p.count>0).length}/>
            //     <Routes>
            //         <Route path='/' element={<Home/>}/>
            //         <Route path='/about' element={<About/>}/>
            //     </Routes>
            // </BrowserRouter>
            // <React.Fragment>
            //     <RouterProvider router={router}/>
            //     {/* <NavBar count={this.state.products.filter(p => p.count>0).length}/> */}
            //     <ShonppingCart products={this.state.products} OnDelete={this.DeleteItem} OnAdd={this.AddItem} OnDecrease={this.decreaseItem} Rest={this.Rest}/>
            //     <Counter/>
            //     <Counters/>
            //     <Timer/>
            // </React.Fragment>
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