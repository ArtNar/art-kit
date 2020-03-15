import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import './style.scss';

const defaultMargin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};

const cn = _cn('container');

const Container = React.forwardRef(({
    className,
    fluid,
    disableGutters,
    maxWidth,
    margin,
    direction,
    justify,
    alignItems,
    ...rest
}, ref) => (
    <div
        ref={ref}
        className={cx(cn({
            fluid,
            disableGutters,
            maxWidth,
            margin: margin && { ...defaultMargin, ...margin },
            direction,
            justify,
            alignItems,
        }), className)}
        {...rest}
    />
));

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    fluid: PropTypes.bool,
    disableGutters: PropTypes.bool,
    maxWidth: PropTypes.number,
    margin: PropTypes.shape({}),
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    justify: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ]),
    alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
};

export default Container;
