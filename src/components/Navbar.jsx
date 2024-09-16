import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Navbar() {
    const total = 25000;
    const token = false; 


    const formattedTotal = new Intl.NumberFormat('en-US').format(total);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link nav-btn home-btn" href="#">🍕 Home</a>
                        </li>

                        {token ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link nav-btn profile-btn" href="#">🔓 Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-btn logout-btn" href="#">🔒 Logout</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link nav-btn login-btn" href="#">🔐 Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-btn register-btn" href="#">🔐 Register</a>
                                </li>
                            </>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-btn total-btn" href="#">🛒 Total: ${formattedTotal}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;