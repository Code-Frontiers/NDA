import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={`container ${sticky ? "dark-nav" : "transparent-nav"}`}>
            {/* <div> */}
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            {/* </div> */}
            <ul className={`${mobileMenu ? "" : "hide-mobile-menu"}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <Link to="/products">Products</Link>
                    <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                        <li>
                            <Link to="/single-part-dispensing">Single Part Dispensing</Link>
                        </li>
                        <li>
                            <Link to="/two-part-dispensing">Two Part Dispensing</Link>
                        </li>
                        <li>
                            <Link to="/dispensing-robots">Dispensing Robots</Link>
                        </li>
                        <li>
                            <Link to="/piston-pumps">Piston Pumps</Link>
                        </li>
                        <li>
                            <Link to="/industrial-automations">Industrial Automations</Link>
                        </li>
                        <li>
                            <Link to="/pressurized-fluid-tanks">Pressurized Fluid Tanks</Link>
                        </li>
                        <li>
                            <Link to="/pidilite-industrial-bonding">
                                Pidilite Industrial Bonding Solutions
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/our-subsidiary">Our Subsidiary</Link>
                </li>
                <li>
                    <Link to="/success-stories">Success Stories</Link>
                </li>
                <li>
                    <Link to="/contact" className="btn">
                        Contact us
                    </Link>
                </li>
            </ul>
            <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
