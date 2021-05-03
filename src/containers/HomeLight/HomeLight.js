import React from 'react';
import NavbarLight from '../../components/NavbarLight';
import FooterLight from '../../components/FooterLight';
import BigPicture from '../../components/BigPicture';
import HeaderLight from '../../components/HeaderLight';
import TextLight from '../../components/TextLight';

import {main, container, photo, hello, text} from './HomeLight.module.scss';

import Main from '../../assets/Main.png';

const headerText = 'Hello!';
const firstLine = 'My name is Weronika.';
const secondLine = 'I am Front-End Developer.';
const thirdLine = 'Based in Vianen, the Netherlands.';
const mainText = firstLine + "\r\n" + secondLine + "\r\n" + thirdLine;


const HomeLight = () => {
    return (
        <div className={main}>
          <NavbarLight />
          <div className={container}>
            <div className={photo}>
                <BigPicture image={Main} />
            </div>
            <div className={hello}>
                <HeaderLight text={headerText} fontsize="7vh" />
            </div>
            <div className={text}>
                <TextLight text={mainText} fontsize="4vh" />
            </div>
          </div>
          <FooterLight />
        </div>
    )
};

export default HomeLight;