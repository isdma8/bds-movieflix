import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {

    return (
        <nav className="main-nav bg-primary">
            <div className="col-6 p-0 pt-1">
                <Link to="/" className="nav-logo-text">
                    <h3>MovieFlix</h3>
                </Link>
            </div>
            <div className="col-6 text-right">
                Logout
            </div>

        </nav>
    );
}


export default Navbar;