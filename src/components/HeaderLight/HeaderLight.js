import React from 'react';
import PropTypes from 'prop-types';
import { header } from './HeaderLight.module.scss';

const HeaderLight = ({ text, fontsize}) => (
    <h1 className={header} style={{ fontSize: fontsize}}>{text}</h1>
);

HeaderLight.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.string.isRequired
};

export default HeaderLight;