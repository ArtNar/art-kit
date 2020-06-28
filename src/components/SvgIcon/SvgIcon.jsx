import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('svg-icon');

const SvgIcon = React.forwardRef(({
    className,
    size = 's',
    children,
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24',
    ...rest
}, ref) => (
    <svg
        className={cx(cn({ size }), className)}
        focusable="false"
        viewBox={viewBox}
        color={htmlColor}
        aria-hidden={titleAccess ? undefined : 'true'}
        role={titleAccess ? 'img' : 'presentation'}
        ref={ref}
        {...rest}
    >
        {children}
        {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
));

SvgIcon.propTypes = {
    children: PropTypes.node,
    htmlColor: PropTypes.string,
    className: PropTypes.string,
    titleAccess: PropTypes.string,
    viewBox: PropTypes.string,
    size: PropTypes.oneOf(['s', 'm', 'l']),
};

SvgIcon.muiName = 'SvgIcon';

export default SvgIcon;
