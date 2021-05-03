import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { navbar, li, link, linkdeco, button } from './NavbarDark.module.scss'

import EyeDark from './../../assets/EyeDark.png'

const NavbarDark = () => {

    const [colorMode, setColorMode] = useState('dark');

    useEffect(() => {
        setColorMode('light');
    }, [colorMode]);

    const handleColorMode = () => {
        if(colorMode === 'dark') {
            setColorMode('light')
        }
        setColorMode('light');
        console.log(colorMode);
        window.location.reload();
        localStorage.setItem("colorMode", colorMode);
    } 

    return (
        <div>
            <nav className={navbar}>
                <ul className={li}>
                    <li className={link}><Link className={linkdeco} to='/'>Home</Link></li>
                    <li className={link}><Link className={linkdeco} to='/about'>About</Link></li>
                    <li className={link}><Link className={linkdeco} to='/projects'>Projects</Link></li>
                    <li className={link}><Link className={linkdeco} to='/contact'>Contact</Link></li>
                    <li className={link}><button className={button} type='button' onClick={handleColorMode}><img src={EyeDark} alt="Eye Closed" height="30px"/></button></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavbarDark