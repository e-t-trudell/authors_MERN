import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { personId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}
export default DeleteButton;