import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddBooks.css';


const AddBooks = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const addBooks = { name, author }
        fetch('http://localhost:8000/Add_Books', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addBooks)
        })
            .then(() => {
                alert('New Book Added')
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="addbooks-content">
                    <img src="https://www.kindpng.com/picc/m/62-622823_logo-biblia-png-book-logo-png-hd-transparent.png" alt="" />
                    <div className="books-list mt-2 text-light">
                        <form onSubmit={handleSubmit}>
                            <input className='input-form mb-1' type="text" placeholder='Enter a Book Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input className='input-form mb-2' type="text" placeholder='Enter a Author Name' value={author} onChange={(e) => setAuthor(e.target.value)} />
                            <br />
                            <button type='submit' className='btn btn-outline-success btn-sm'>Add Book</button>
                        </form>
                    </div>
                    <Link to="/admin"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                </div>
            </div>
        </>
        
    )
}
export default AddBooks;