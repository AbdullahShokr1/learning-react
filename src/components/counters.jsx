import React ,{useState,useEffect} from 'react';
import Interval from './interval';

const Counters = () => {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    const [show,setShow] = useState(true);

    useEffect(()=>{
        //console.log("hi");
    });
    return ( 
        <React.Fragment>
            
            { show && <Interval/> }
            <button onClick={()=>setShow(!show)}>Show/hide</button>
            <h1>Counters</h1>
            <div>Counter 1 :<span>{count1}</span></div> 
            <div>
                <button onClick={()=>setCount1(count1+1)}>+</button>
            </div>
            <div>Counter 2 :<span>{count2}</span></div>
            <div>
                <button onClick={()=>setCount2(count2+1)}>+</button>
            </div>
        </React.Fragment>
    );
}
 
export default Counters;