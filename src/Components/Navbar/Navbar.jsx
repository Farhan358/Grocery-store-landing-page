import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [open, isOpen] = useState(false);


    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth
    })

    const handleOpen = (event) => {
        event.preventDefault();
        isOpen(!open);
    };



    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,

        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])






    return (
        <>
            <header className={`header ${screenSize.dynamicWidth >= 600 ? "" : "mobile"}`}>
                {/* logo section start */}
                <div className='logo'>
                    <div className='logoImg'>
                        <img src="/images/logo/logo.png" alt="logo" />
                    </div>

                    <div className='logoText'>
                        <span>Grocery</span>
                        <br />
                        <span>mart</span>
                    </div>
                </div>


                {/* logo section end */}


                {/* hamburger  section start*/}
                <div className='parent'  >
                    <a className='hamburger' href="" onClick={handleOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                {/* hamburger  section end*/}


                {/* Navbar setion start */}
                <div className='navbar'>
                    <nav>
                        <ul className={open ? "open" : ""}>
                            <li>Home</li>
                            <li>Categories</li>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Special</li>
                            <li>Trending</li>
                            <li>Testomonial</li>
                            <li>QnA</li>
                        </ul>
                    </nav>
                </div>
                {/* Navbar setion end */}


            </header>
        </>
    )
}

export default Navbar