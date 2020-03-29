import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('badge');

const Badge = React.forwardRef(({
    anchorOrigin = {
        vertical: 'top',
        horizontal: 'right',
    },
    className,
    badgeContent,
    children,
    color,
    invisible: invisibleProp,
    max = 99,
    showZero = false,
    variant = 'standard',
    ...rest
}, ref) => {
    let invisible = invisibleProp;

    if (invisibleProp == null
        && ((badgeContent === 0 && !showZero) || (badgeContent == null && variant !== 'dot'))) {
        invisible = true;
    }

    let displayValue = '';

    if (variant !== 'dot') {
        displayValue = badgeContent > max ? `${max}+` : badgeContent;
    }

    return (
        <span
            ref={ref}
            className={cx(cn(), className)}
            {...rest}
        >
            {children}
            <span
                className={cn('value', {
                    invisible,
                    color,
                    horizontal: anchorOrigin.horizontal,
                    vertical: anchorOrigin.vertical,
                })}
            >
                {displayValue}
            </span>
        </span>
    );
});

Badge.propTypes = {
    anchorOrigin: PropTypes.shape({
        horizontal: PropTypes.oneOf(['left', 'right']).isRequired,
        vertical: PropTypes.oneOf(['bottom', 'top']).isRequired,
    }),
    className: PropTypes.string,
    badgeContent: PropTypes.node,
    children: PropTypes.node,
    color: PropTypes.oneOf(['default', 'error', 'primary', 'secondary']),
    component: PropTypes.elementType,
    invisible: PropTypes.bool,
    max: PropTypes.number,
    overlap: PropTypes.oneOf(['circle', 'rectangle']),
    showZero: PropTypes.bool,
    variant: PropTypes.oneOf(['dot', 'standard']),
};

export default Badge;
