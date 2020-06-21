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
    p1: 'p',
    p2: 'p',
    p3: 'p',
    p4: 'p',
    s1: 'span',
    s2: 'span',
    s3: 'span',
    s4: 'span',
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
        's1',
        's2',
        's3',
        's4',
    ]),
};

export default Typography;
