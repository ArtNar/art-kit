import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('typography');

const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    p1: 'p1',
    p2: 'p2',
    p3: 'p3',
    p4: 'p4',
};

const Typography = React.forwardRef(({
    className,
    color,
    paragraph,
    type = 'p2',
    ...rest
}, ref) => {
    const Component = defaultVariantMapping[type];

    return (
        <Component
            className={cx(cn({
                color,
                type,
            }), className)}
            ref={ref}
            {...rest}
        />
    );
});

Typography.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
    ]),
    className: PropTypes.string,
    paragraph: PropTypes.bool,
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'p1',
        'p2',
        'p3',
        'p4',
    ]),
};

export default Typography;
