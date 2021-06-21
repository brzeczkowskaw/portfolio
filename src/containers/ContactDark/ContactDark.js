/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import NavbarDark from '../../components/NavbarDark';
import FooterDark from '../../components/FooterDark';
import BigPicture from '../../components/BigPicture';
import HeaderDark from '../../components/HeaderDark';
import Button from '../../components/Button';

import {main, container, header, getcv, sendemail, linkedin, github, image} from './ContactDark.module.scss';

import ContactMe from '../../assets/ContactMe.png';
import GitHub from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.png';

const ContactDark = () => {
    return (
        <div className={main}>
        <NavbarDark />
        <div className={container}>
            <div className={header}>
                <HeaderDark text="Contact me" fontsize='50px' />
            </div>
            <div className={getcv}>
                <a href='https://res.cloudinary.com/ded5al291/image/upload/v1619807344/Weronika_Brz%C4%99czkowska-Kuzianik_-_CV_djeeur.pdf' target='_blank'>
                    <Button text='CV' />
                </a>
            </div>
            <div className={sendemail}>
                <a href='mailto:brzeczkowska.w@gmail.com'>
                    <Button text='Send e-mail' />
                </a>
            </div>
            <div className={linkedin}>
                <a href='https://www.linkedin.com/in/weronika-brzeczkowska-kuzianik-a95281113/' target = '_blank'>
                    <img src={LinkedIn} alt='LinkedIn' />
                </a>
            </div>
            <div className={github}>
                <a href='https://github.com/brzeczkowskaw' target = '_blank'>
                    <img src={GitHub} alt='Github' />
                </a>
            </div>
            <div className={image}>
                <BigPicture image={ContactMe} />
            </div>
        </div>
        <FooterDark />
      </div>
    )
}

export default ContactDark;