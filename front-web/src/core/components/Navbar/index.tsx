import { isAuthenticated, logout } from 'core/utils/auth';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';


type LocationState = {
    from: string;
}

const Navbar = () => {

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    const location = useLocation<LocationState>();

    return (
        <nav className="main-nav bg-primary">
            <div className="col-6 p-0 pt-1">
                <Link to="/movies" className="nav-logo-text">
                    <h3>MovieFlix</h3>
                </Link>
            </div>
            <div className="col-6">     
                {!(location.pathname == "/") &&
                <Link to="/" className="nav-logout-text" onClick={handleLogout}>
                    sair
                </Link>
                }
            </div>

        </nav>
    );
}


export default Navbar;