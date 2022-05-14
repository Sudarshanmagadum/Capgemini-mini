import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import './LoginPage.css';
const LoginPage = () => {
    return (
        <>
            <div className="container-fluid main">
                <div className="logpage-content">
                    <div className="side1">
                        <img className="logo" src={logo} alt="" />
                        <p className='text-light'>Library Management System </p>
                        <div className="buttons">
                            <Link className=' btn btn-outline-primary text-white text-decoration-none' to="/admin">Admin</Link>
                            <Link className=' btn btn-outline-success text-white text-decoration-none' to="/user">User</Link>
                        </div>
                    </div>
                    <div className="side2">

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;