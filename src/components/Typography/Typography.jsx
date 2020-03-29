import * as React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('typography');

const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'h6',
    body: 'p',
};

const Typography = React.forwardRef(({
    className,
    align,
    color,
    component,
    display,
    gutterBottom,
    paragraph,
    variant = 'body',
    ...rest
}, ref) => {
    const Component = component || defaultVariantMapping[variant];

    return (
        <Component
            className={cx(cn({
                align,
                display,
                color,
                gutterBottom,
                paragraph,
            }), className)}
            ref={ref}
            {...rest}
        />
    );
});

Typography.propTypes = {
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    children: PropTypes.node,
    color: PropTypes.oneOf([
        'initial',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
    ]),
    className: PropTypes.string,
    component: PropTypes.elementType,
    display: PropTypes.oneOf(['initial', 'block', 'inline']),
    gutterBottom: PropTypes.bool,
    paragraph: PropTypes.bool,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle',
        'body',
    ]),
};

export default Typography;
