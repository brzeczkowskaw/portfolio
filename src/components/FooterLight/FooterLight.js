import React from 'react';
import {copyright, footer} from './FooterLight.module.scss';

const FooterLight = () => {
    return (
      <footer className={footer}>
        <p className={copyright}>©Weronika Brzęczkowska-Kuzianik, Vianen 2021</p>
      </footer>
    );
  };
  
  export default FooterLight;