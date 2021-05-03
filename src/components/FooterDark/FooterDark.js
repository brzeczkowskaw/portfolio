import React from 'react';
import {copyright, footer} from './FooterDark.module.scss';

const FooterDark = () => {
    return (
      <footer className={footer}>
        <p className={copyright}>©Weronika Brzęczkowska-Kuzianik, Vianen 2021</p>
      </footer>
    );
  };
  
  export default FooterDark;