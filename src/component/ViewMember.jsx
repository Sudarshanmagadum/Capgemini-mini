import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ViewMemberList from './ViewMemberList';
import './ViewMember.css';
const Member = () => {
    const[blogs, setBlogs] = useState([ ]);

    const handleDelete = ( id ) => {
        const newName = blogs.filter((name) => name.id !== id);
        console.log(newName)
        setBlogs(newName);
        alert('Press Ok To delete a member')
    }

    useEffect(() => {
        fetch(' http://localhost:8000/New_Member')
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
                <div className="member-content">
                    <img src="https://www.kindpng.com/picc/m/130-1300240_round-user-dry-clean-symbol-png-transparent-png.png" alt="" />
                    <div className="member-list mt-3 text-light">
                        <ViewMemberList blogs = {blogs} handleDelete = {handleDelete} />
                    </div>
                    <Link className='back' to="/admin" title='back'><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                </div>
            </div>
        </>
    )
}
export default Member;