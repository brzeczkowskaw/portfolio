import React from 'react';
import PropTypes from 'prop-types';
import { paragraph } from './TextLight.module.scss';

const TextLight = ({ text, fontsize}) => (
    <p className={paragraph} style={{ fontSize: fontsize}}>{text}</p>
);

TextLight.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.string.isRequired
};

export default TextLight;