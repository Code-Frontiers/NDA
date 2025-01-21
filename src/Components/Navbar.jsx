import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import menu_icon from "../assets/menu-icon.png";
import { Link } from "react-router-dom";

const Navbar = ({ isHome }) => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);
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
        setOverlayActive(!overlayActive);
    };

    const closeMenu = () => {
        setMobileMenu(false);
        setOverlayActive(false);
    };

    const navClass = isHome
        ? sticky
            ? "dark-nav"
            : "transparent-nav"
        : "dark-nav";

    // Navigation links array
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/about" },
        {
            name: "Products",
            path: "/products",
            isDropdown: true,
            dropdownItems: [
                { name: "Single Part Dispensing", path: "/products/single-part-dispensing" },
                { name: "Two Part Dispensing", path: "/products/two-part-dispensing" },
                { name: "Dispensing Robots", path: "/products/dispensing-robots" },
                { name: "Piston Pumps", path: "/products/piston-pumps" },
                { name: "Industrial Automations", path: "/products/industrial-automations" },
                { name: "Pressurized Fluid Tanks", path: "/products/pressurized-fluid-tanks" },
                { name: "Pidilite Industrial Bonding Solutions", path: "/products/pidilite-industrial-bonding" },
            ],
        },
        { name: "Our Subsidiary", path: "/subsidiary" },
        { name: "Success Stories", path: "/success-stories" },
        { name: "Contact us", path: "/contact-us", isButton: true },
    ];

    return (
        <>
            {overlayActive && <div className="overlay" onClick={closeMenu}></div>}
            <nav className={`container ${navClass}`}>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <ul className={`${mobileMenu ? "" : "hide-mobile-menu"}`}>
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={link.isDropdown ? "dropdown" : ""}
                            onMouseEnter={() => link.isDropdown && setDropdownOpen(true)}
                            onMouseLeave={() => link.isDropdown && setDropdownOpen(false)}
                        >
                            <Link to={link.path} className={link.isButton ? "btn" : ""}>
                                {link.name}
                            </Link>
                            {link.isDropdown && (
                                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                                    {link.dropdownItems.map((item, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <img src={menu_icon} alt="Menu" className="hamburger-icon" onClick={toggleMenu} />
            </nav>
        </>
    );
};

export default Navbar;
