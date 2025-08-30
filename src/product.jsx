import React, { Component } from 'react';

class Product extends Component {
    state={
        name:"burger",
        count:2,
        list:["fish","meet","chekin","drinks"]
    };

    getClasses(){
        return this.state.count >=1 ? "btn btn-primary position-relative":"btn btn-warning position-relative";
    };
    add = ()=>{
        this.setState({count: this.state.count+1});
    };
    render(){
        return (
            <div className="m-3">
                <span className={this.getClasses()}>
                {this.state.name}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {this.state.count}
                    </span>
                </span>
                <ul>
                    {this.state.list.map(menu => <li key={menu}>{menu}</li>)}
                </ul>
                <button className='btn btn-primary' onClick={this.add}>+</button>
            </div>
        );
    }
}
    
export default Product;