import React from 'react';
import TextLight from '../TextLight';


import {skills, items, image } from './Skills.module.scss';

const Skills = ({text, image}) => {
    return (
        <div className={skills}>
            <div className={items}>
              <img className={image} src={image} alt={text} height="50%" />
              <TextLight text={text} fontsize="3vh" />
            </div>
        </div>
    )
};

export default Skills;