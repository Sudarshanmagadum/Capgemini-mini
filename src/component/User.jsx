import { Link } from 'react-router-dom';
import './User.css';
const User = () => {
  return (
    <>
      <div className="container-fluid main">
        <div className="user-content">
            <form className='form-content m-auto' action="">
              <input className="form-control mb-2" type="text" placeholder="Enter email address"/>
              <input className="form-control" type="number" placeholder="Password"/>
              <button className='btn btn-outline-light btn-sm mt-3 mb-2'>Log In</button><br />
              <Link to="/"><i class="fa fa-chevron-left" aria-hidden="true"></i></Link>
            </form>
        </div>
      </div>
    </>
  )
}

export default User;