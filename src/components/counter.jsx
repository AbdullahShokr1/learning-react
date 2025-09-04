import React, { useState } from 'react';


const Counter = () => {
    const [state,setState] = useState({count:0,name:"Abdullah"});
    const increment=()=>{
        setState({...state ,count : state.count +1});
    }
    const decrement =()=>{
        setState({...state ,count : state.count -1});
    }
    const addByValue = (value) =>{
        for (let i = 0; i < value; i++) {
            setState((prevState)=> ({...state,count: prevState.count +1}) ); 
        }
    }
    return ( 
        <React.Fragment>
            <h1>My counter Component</h1>
            <span>Count:{state.count}</span><br/>
            <span>Name:{state.name}</span><br/>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={()=>addByValue(5)}>+5</button>
        </React.Fragment>
        
    );
}
 
export default Counter;