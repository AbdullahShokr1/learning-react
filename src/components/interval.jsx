import React, {useEffect} from 'react';

const Interval = () => {
    useEffect(()=>{

        const interval = setInterval(()=>{
            console.log("interval from Interval Ccomponent");
        },1000);

        //clean function
        return (()=>{
            clearInterval(interval);
        })
    });
    return ( 
        <h1>Interval</h1>
    );
}
 
export default Interval;