import React , {useState,useEffect} from 'react';

const Timer = () => {
    const [time,setTime] = useState(0);

    

    useEffect(()=>{
        const increment =()=>{
            setTime(time+1);
        }
        const timeInterval = setInterval(increment,1000);
        return (()=>{
            clearInterval(timeInterval);
        })
    },[time]);
    return ( 
        <React.Fragment>
            <h1>Timer: <span>{time}</span></h1>
        </React.Fragment>
     );
}
 
export default Timer;