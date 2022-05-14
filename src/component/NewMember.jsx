import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewMember.css';


const NewMember = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newMember = { name, number }
        fetch('http://localhost:8000/New_Member', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMember)
        })
            .then(() => {
                alert('New Member Added')
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="newMember-content">
                    <img src="https://www.kindpng.com/picc/m/130-1300240_round-user-dry-clean-symbol-png-transparent-png.png" alt="" />
                    <div className="newMember-list mt-2 text-light">
                        <form onSubmit={handleSubmit}>
                            <input className='input-form mb-1' type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input className='input-form mb-2' type="text" placeholder='number' value={number} onChange={(e) => setNumber(e.target.value)} />
                            <br />
                            <button type='submit' className='btn btn-outline-success btn-sm'>Add Member</button>
                        </form>
                    </div>
                    <Link to="/admin"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                </div>
            </div>
        </>
        
    )
}
export default NewMember;