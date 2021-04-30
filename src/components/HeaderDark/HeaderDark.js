import React from 'react';
import PropTypes from 'prop-types';
import { header } from './HeaderDark.module.scss';

const HeaderDark = ({ text, fontsize}) => (
    <h1 className={header} style={{ fontSize: fontsize}}>{text}</h1>
);

HeaderDark.propTypes = {
    text: PropTypes.string.isRequired,
    fontsize: PropTypes.string.isRequired
};

export default HeaderDark;