import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token != null) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }, []);
    return (
        <div >
            <div  className="nav">
                <div className=" navbar">

                    <div className="links">
                        <Link to="/" className="link">
                            Home
                        </Link>
                        <Link to="/about" className="link">
                            About
                        </Link>
                        <Link to="/services" className="link">
                            Services
                        </Link>
                        <Link to="/contact" className="link">
                            Contact
                        </Link>

                    </div>
                    <div>{!login ? (
                        <Link to="/login" className="link">
                            Login
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => {
                                localStorage.removeItem("token");
                            }} className="logout-link link"
                        >
                            Logout
                        </Link>
                    )}</div>
                    {open ? (
                        <MdClose
                            size={30}
                            className="burger-icon"
                            onClick={() => {
                                setOpen(!open);
                            }}

                        />
                    ) : (
                        <MdOutlineMenu
                            size={30}
                            className="burger-icon"
                            onClick={() => {
                                setOpen(!open);
                            }}
                        />
                    )}

                </div>
            </div>
            {open ? (
                <div className="navbar-mobile">

                    <Link to="/" className="link">Home</Link>
                    <Link to="/about" className="link">
                        About
                    </Link>
                    <Link to="/services" className="link">
                        Services
                    </Link>
                    <Link to="/contact" className="link">
                        Contact
                    </Link>
                    {!login ? (
                        <Link to="/login">
                        Login
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => {
                                localStorage.removeItem("token");
                            }}  className="logout-link link"
                        >
                            Logout
                        </Link>
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Navbar;
