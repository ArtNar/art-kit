import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import './style.scss';

const cn = _cn('paper');

const Paper = React.forwardRef(({
    className,
    elevation,
    square,
    fluid,
    variant = 'filled',
    ...rest
}, ref) => (
    <div
        ref={ref}
        className={cx(cn({
            elevation,
            fluid,
            square,
            variant,
        }), className)}
        {...rest}
    />
));

Paper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    elevation: PropTypes.number,
    square: PropTypes.bool,
    fluid: PropTypes.bool,
    variant: PropTypes.oneOf(['filled', 'outlined']),
};

export default Paper;
