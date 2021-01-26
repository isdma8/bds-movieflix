import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {

    return (
        <nav className="main-nav bg-primary">
            <div className="col-6 p-0 pt-1">
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>
            </div>
            <div className="col-6 text-right">

            </div>

        </nav>
    );
}


export default Navbar;