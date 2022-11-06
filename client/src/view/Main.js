import {useState} from 'react'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = () => {
    const [author, setAuthor] = useState([])
    const removeFromDom = authorId=>{
        setAuthor(author.filter(author => author._id !== authorId));
    }
  return (
    <div>
        <AuthorForm author={author} setAuthor={setAuthor}/>
        <hr/>
        <AuthorList author={author} setAuthor={setAuthor} removeFromDom = {removeFromDom}/>
    </div>
  )
}

export default Main