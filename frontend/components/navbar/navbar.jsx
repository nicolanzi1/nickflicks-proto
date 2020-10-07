import React, { useState, useEffect } from 'react';
import logo from '../../../app/assets/images/nickflicks.png';
import avatar from '../../../app/assets/images/avatar.png'

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    
    return (
        <div className={`navbar ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src={logo}
                alt="Nickflicks Logo"
            />

            <img
                className="nav-avatar"
                src={avatar}
                alt="Nickflicks Avatar"
            />
        </div>
    )
}

export default Navbar;
