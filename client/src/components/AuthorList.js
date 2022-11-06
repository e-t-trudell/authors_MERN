import React, {useEffect,useState} from 'react'
import {Link,useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const AuthorList = (props) => {
    const {removeFromDom,author, setAuthor} = props;
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/author")
    	.then((res)=>{
	        console.log(res.data);
            setAuthor(res.data);
	    })
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);
    const deleteAuthor = (authorId)=>{
        axios.delete(`http://localhost:8000/api/author/delete/${authorId}`)
        .then((res) => {
            removeFromDom(authorId)
            
            console.log("ProductList Delete Successful")
            navigate("/author");
        })
        .catch(err => console.log(err))
    }
    // const removeFromDom = authorId=>{
    //     setAuthor(author.filter(author => author._id !== authorId))
    // }
    return (
        <div>
            {
            author.map((author, index)=>{
                return (<div key={index}>
                <Link to={`/author/${author._id}`}>{author.firstName} {author.lastName}'s Page!</Link> 
                |
                <Link to={`/author/edit/${author._id}` }>Edit</Link>
                |
                {/* <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/> */}
                <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                </div>)
            })
            }
        </div>
    )
}
export default AuthorList;