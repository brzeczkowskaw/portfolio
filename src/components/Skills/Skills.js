import React from 'react';
import TextLight from '../TextLight';


import {skills, items} from './Skills.module.scss';

const Skills = ({text, image}) => {
    return (
        <div className={skills}>
            <div className={items}>
              <img  src={image} alt={text} height="50%" />
              <TextLight text={text} fontsize="1.3em" />
            </div>
        </div>
    )
};

export default Skills;