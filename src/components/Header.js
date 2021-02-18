import React from 'react';
import "boxicons";
import "../main";

const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bxs-grid'/>
                </div>
                <a href="#" className="nav__logo red">Roby</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#featured" className="nav__link">Featured</a></li>
                        <li className="nav__item"><a href="#women" className="nav__link">Women</a></li>
                        <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
                        <li className="nav__item"><a href="#shop" className="nav__link">Shop</a></li>
                    </ul>
                </div>
                <div className="nav__shop">
                    <i className='bx bx-shopping-bag'/>
                </div>
            </nav>
        </header>
    )
}

export default Header;

