import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import AuthorForm from './AuthorForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const {initialFirstName, initialLastName, onSubmitProp} = props
    const { id } = useParams(); 
    // const [author,setAuthor] = useState({})
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [loaded, setLoaded]=useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                // setAuthor(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/edit/' + id,{firstName,lastName})
            .then((res) => {
                console.log(res);
                navigate("/author"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <button type="submit" className="btn btn-info mt-3">Create Person</button>
            </form> 
            
            
            {/* <AuthorForm 
                        onSubmitProp={updateAuthor} 
                        author={author} 
                        />
                    <DeleteButton authorId={author._id} successCallback={()=> navigate('/')}/> */}
        </div>
    )
}
export default Update;