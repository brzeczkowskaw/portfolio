import React from 'react';
import PropTypes from 'prop-types';
import { paragraph } from './TextDark.module.scss';

const TextDark = ({ text, fontsize}) => (
    <p className={paragraph} style={{ fontSize: fontsize}}>{text}</p>
);

TextDark.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.string.isRequired
};

export default TextDark;