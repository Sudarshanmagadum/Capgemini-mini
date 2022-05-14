import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import './Books.css';
const Books = () => {
    const[blogs, setBlogs] = useState([ ]);

    const handleDelete = ( id ) => {
        const newName = blogs.filter((name) => name.id !== id);
        console.log(newName)
        setBlogs(newName);
        alert('Press Ok To delete a File')
    }

    useEffect(() => {
        fetch('http://localhost:8000/Add_Books')
    .then( res => {
        return res.json()
    })
    .then( data => {
        setBlogs( data )
    })
    
},[]);

    return(
        <>
            <div className="container-fluid">
                <div className="books-content">
                    <img src="https://www.kindpng.com/picc/m/62-622823_logo-biblia-png-book-logo-png-hd-transparent.png" alt="" />
                    <div className="books-list mt-3 text-light">
                        <BookList blogs = {blogs} handleDelete = {handleDelete} />
                    </div>
                    <Link className='back' to="/admin" title='back'><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                </div>
            </div>
        </>
    )
}
export default Books;