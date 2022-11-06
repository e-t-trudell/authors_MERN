import { useEffect,useState} from 'react'
import axios from 'axios';
const AuthorForm = (props)=>{
    const {initialFirstName, initialLastName, onSubmitProp, author, setAuthor} = props
    const [message, setMessage]= useState('Loading...')
    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')

    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        .catch(err=>console.log(err))
    },[])
    
    const onSubmitHandler = (e)=> {
        e.preventDefault();
        // onSubmitProp({firstName,lastName});
        // DONT FORGET YOUR // in the url
        axios.post('http://localhost:8000/api/author/',{firstName,lastName})
        .then(res =>{
            console.log(res);
            console.log(res.data);
            setAuthor([...author,res.data]);
        })
        .catch(err=>console.log({msg:'Posting Error',err:err}))
    }
    return (
        <form className="col-6 mx-auto" onSubmit={onSubmitHandler}>
            <p>
                <label className="form-label">First Name</label><br/>
                <input className="form-control" type="text" name='firstname' value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label className="form-label">Last Name</label><br/>
                <input className="form-control" type="text" name='lastname' value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            {/* <Link to={"/product/edit/" + product._id}>Edit</Link> 
            <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button> */}
            <button type="submit" className="btn btn-info mt-3">Create Person</button>
        </form>
        
    )
}
export default AuthorForm;