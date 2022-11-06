import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then( res => {
            console.log(res.data);
            setAuthor(res.data);
            })
        .catch( err => console.log(err) );
    }, [id]);
    return (
        <div>
            <h3>First Name: {author.firstName}</h3><br/>
            <h3>Last Name: {author.lastName}</h3>
            {/* <Link to={"/product/edit/" + product._id}>Edit</Link> 
            <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button> */}
        </div>
    );
}
export default Detail;