/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import TextEducation from '../TextEducation';
import TextLight from '../TextLight';
import Button from '../Button';
import SmallPicture from '../SmallPicture';

import {projects, items, logo, titleClass, technologiesClass, descriptionClass, buttons} from './Projects.module.scss';

const Projects = ({image, title, description, technologies, code, demo}) => {
    return (
        <div className={projects}>
            <div className={items}>
                <div className={logo}>
                    <SmallPicture image={image} />
                </div>
                <div className={titleClass}>
                    <TextLight text={title} fontsize='5vh' />
                </div>
                <div className={descriptionClass}>
                    <TextEducation text='Description' fontsize='3.5vh' />
                    <TextEducation text={description} fontsize='3vh' />
                </div>
                <div className={technologiesClass}>
                    <TextEducation text='Technologies' fontsize='3.5vh' />
                    <TextEducation text={technologies} fontsize='3vh' />
                </div>
                <div className={buttons}>
                    <a href={code} target='_blank'>
                        <Button text='Code' />
                    </a>
                    <a href={demo} target='_blank'>
                        <Button text='Demo' />
                    </a>
                </div>
            </div>
        </div>
    )
};

Projects.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired, 
    technologies: PropTypes.string.isRequired
} 

export default Projects;