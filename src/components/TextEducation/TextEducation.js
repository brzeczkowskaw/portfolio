import React from 'react';
import PropTypes from 'prop-types';
import { paragraph } from './TextEducation.module.scss';

const TextEducation = ({ text, fontsize}) => (
    <p className={paragraph} style={{ fontSize: fontsize}}>{text}</p>
);

TextEducation.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.string.isRequired
};

export default TextEducation;