import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { navbar, li, link, linkdeco, button } from './NavbarLight.module.scss'

import EyeLight from './../../assets/EyeLight.png'

const NavbarLight = () => {

    const [colorMode, setColorMode] = useState('light');

    useEffect(() => {
        setColorMode('dark');
     }, [colorMode]);

    const handleColorMode = () => {
        if(colorMode === 'dark') {
            setColorMode('light')
        }
        setColorMode('light');
        console.log(colorMode);
        localStorage.setItem("colorMode", colorMode);
        window.location.reload()
    } 


    return (
        <div>
            <nav className={navbar}>
                <ul className={li}>
                    <li className={link}><Link className={linkdeco} to='/'>Home</Link></li>
                    <li className={link}><Link className={linkdeco} to='/about'>About</Link></li>
                    <li className={link}><Link className={linkdeco} to='/projects'>Projects</Link></li>
                    <li className={link}><Link className={linkdeco} to='/contact'>Contact</Link></li>
                    <li className={link}><button className={button} type='button' onClick={handleColorMode}><img src={EyeLight} alt="Eye Open" height="30px"/></button></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavbarLight