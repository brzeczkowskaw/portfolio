import React from 'react';
import NavbarDark from '../../components/NavbarDark';
import FooterDark from '../../components/FooterDark';
import BigPicture from '../../components/BigPicture';
import HeaderDark from '../../components/HeaderDark';
import TextDark from '../../components/TextDark';

import {main, container, photo, hello, text} from './HomeDark.module.scss';

import Main from '../../assets/Main.png';

const headerText = 'Hello!';
const firstLine = 'My name is Weronika.';
const secondLine = 'I am Front-End Developer.';
const thirdLine = 'Based in Vianen, the Netherlands.';
const mainText = firstLine + "\r\n" + secondLine + "\r\n" + thirdLine;


const HomeDark = () => {
    return (
        <div className={main}>
          <NavbarDark />
          <div className={container}>
            <div className={photo}>
                <BigPicture image={Main} />
            </div>
            <div className={hello}>
                <HeaderDark text={headerText} fontsize="7vh" />
            </div>
            <div className={text}>
                <TextDark text={mainText} fontsize="4vh" />
            </div>
          </div>
          <FooterDark />
        </div>
    )
};

export default HomeDark
