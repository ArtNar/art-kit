import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('paper');

const Paper = React.forwardRef(({
    className,
    elevation,
    square,
    fluid,
    padded = true,
    outlined,
    ...rest
}, ref) => (
    <div
        ref={ref}
        className={cx(cn({
            elevation,
            fluid,
            square,
            outlined,
            padded,
        }), className)}
        {...rest}
    />
));

Paper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    elevation: PropTypes.number,
    square: PropTypes.bool,
    padded: PropTypes.bool,
    fluid: PropTypes.bool,
    outlined: PropTypes.bool,
};

export default Paper;
