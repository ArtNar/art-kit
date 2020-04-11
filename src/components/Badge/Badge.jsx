import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

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
    showZero,
    ...rest
}, ref) => {
    let invisible = invisibleProp;

    if (invisibleProp === null && ((badgeContent === 0 && !showZero) || badgeContent === null)) {
        invisible = true;
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
                {badgeContent > max ? `${max}+` : badgeContent}
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
    badgeContent: PropTypes.number,
    children: PropTypes.node,
    color: PropTypes.oneOf(['default', 'error', 'primary', 'secondary']),
    invisible: PropTypes.bool,
    max: PropTypes.number,
    showZero: PropTypes.bool,
};

export default Badge;
