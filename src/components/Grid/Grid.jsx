import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const types = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const cn = _cn('grid');

const Grid = React.forwardRef(({
    className,
    children,
    xs,
    sm,
    md,
    lg,
    xl,
    padded,
    type,
    center,
    ...rest
}, ref) => (
    <div
        {...rest}
        ref={ref}
        className={cx(cn({
            xs,
            sm,
            md,
            lg,
            xl,
            type,
            center,
        }), className)}
    >
        {children}
    </div>
));

Grid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    padded: PropTypes.bool,
    center: PropTypes.bool,
    type: PropTypes.oneOf(['container', 'column']),
    lg: PropTypes.oneOf(types),
    md: PropTypes.oneOf(types),
    sm: PropTypes.oneOf(types),
    xl: PropTypes.oneOf(types),
    xs: PropTypes.oneOf(types),
};

export default Grid;
