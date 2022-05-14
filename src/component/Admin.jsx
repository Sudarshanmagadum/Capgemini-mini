import { Link } from 'react-router-dom';
import './Admin.css';
const Admin = () => {
  return (
    <>
      <div className="container-fluid main">
        <div className="admin-content">
          <h1 className="text-secondary">Admin Portal</h1>
          <div className="row mt-4">
            <div className="col-6">
              <Link className="btn btn-outline-light btn-sm mb-2" to="/books">Books</Link>
              <br />
              <Link className="btn btn-outline-light btn-sm mb-2" to="/addbooks">Add Books</Link>
            </div>
            <div className="col-6">
              <Link className="btn btn-outline-light btn-sm mb-2" to="/newmember">New Member</Link>
              <br />
              <Link className="btn btn-outline-light btn-sm mb-2" to="/viewmember">View Member</Link>
            </div>

            <Link to="/"><i class="fa fa-chevron-left" aria-hidden="true"></i></Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Admin;