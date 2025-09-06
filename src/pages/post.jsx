import React from 'react';
import {useParams} from "react-router-dom"


const Psot = () => {
    const {id} = useParams();
    return ( 
        <h1>Post id :{id}</h1>

    );
}
 
export default Psot;