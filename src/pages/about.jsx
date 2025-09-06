import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const Navigate = useNavigate();

    const clickHandel = ()=>{
        Navigate('/');
    }
    return ( 
        <>
            <h1>About Us Page</h1>
            <button onClick={clickHandel}>Home page</button>
        </>
        
    );
}
 
export default About;