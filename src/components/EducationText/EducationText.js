import React from 'react';
import PropTypes from 'prop-types';
import { paragraph } from './EducationText.module.scss';

const EducationText = ({ text, fontsize}) => (
    <p className={paragraph} style={{ fontSize: fontsize}}>{text}</p>
);

EducationText.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.string.isRequired
};

export default EducationText;