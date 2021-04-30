import React from 'react';
import PropTypes from 'prop-types';
import TextEducation from '../TextEducation';
import TextLight from '../TextLight';

import {education, items, logo, years, description} from './Education.module.scss';

const Education = ({image, year, text}) => {
    return (
        <div className={education}>
            <div className={items}>
                <div className={logo}>
                    <img src={image} alt='logo' />
                </div>
                <div className={years}>
                    <TextLight text={year} fontsize='30px' />
                </div>
                <div className={description}>
                    <TextEducation text={text} fontsize='3.9vh' />
                </div>
            </div>
        </div>
    )
};

Education.propTypes = {
    image: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Education;