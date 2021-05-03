import React from 'react';
import PropTypes from 'prop-types';
import {picture} from './BigPicture.module.scss';

const BigPicture = ({ image }) => (
    <figure>
        <img className={picture} src={image} alt="" />
    </figure>
);

BigPicture.propTypes = { image: PropTypes.string.isRequired };

export default BigPicture