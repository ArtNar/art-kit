import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import './style.scss';

const cn = _cn('spin');

const Spin = ({
    size,
    color = 'black',
    visible,
    className,
    id,
}) => (
    <span
        id={id}
        className={cx(cn({ size, color, visible }), className)}
    >
        <span />
    </span>
);

Spin.propTypes = {
    visible: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    color: PropTypes.oneOf(['black', 'white']),
    id: PropTypes.string,
    className: PropTypes.string,
};

Spin.defaultProps = {
    visible: true,
    size: 'm',
};

export default Spin;
