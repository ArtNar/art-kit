import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('svg-icon');

const SvgIcon = React.forwardRef(({
    className,
    children,
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24',
    ...rest
}, ref) => (
    <svg
        className={cx(cn(), className)}
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
};

SvgIcon.muiName = 'SvgIcon';

export default SvgIcon;
