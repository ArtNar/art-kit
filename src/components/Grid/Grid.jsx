import React from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import './style.scss';

const types = [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getClassName = (props) => Object.keys(props)
    .reduce((className, key) => (props[key] ? `${className} col-${key}-${props[key]}`.trim() : className), '');

const cn = _cn('grid');

const Grid = React.forwardRef(({
    lg = false,
    md = false,
    sm = false,
    xl = false,
    xs = false,
    spacing = 0,
    container,
    direction = 'row',
    justify = 'flex-start',
    alignItems = 'stretch',
    item,
    ...rest
}, ref) => (
    <div
        ref={ref}
        className={cx(
            item
                ? getClassName({
                    lg,
                    md,
                    sm,
                    xl,
                    xs,
                })
                : 'row',
            cn({
                lg,
                md,
                sm,
                xl,
                xs,
                spacing,
                container,
                direction,
                justify,
                alignItems,
                item,
            }),
        )}
        {...rest}
    />
));

Grid.propTypes = {
    children: PropTypes.node,
    container: PropTypes.bool,
    item: PropTypes.bool,
    lg: PropTypes.oneOf(types),
    md: PropTypes.oneOf(types),
    sm: PropTypes.oneOf(types),
    xl: PropTypes.oneOf(types),
    xs: PropTypes.oneOf(types),
    spacing: PropTypes.number,
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

export default Grid;
