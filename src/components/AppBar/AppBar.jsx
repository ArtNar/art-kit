import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('app-bar');

const AppBar = React.forwardRef(({
    className,
    position = 'fixed',
    children,
}, ref) => (
    <header
        ref={ref}
        position={position}
        className={cx(cn({ position }), className)}
    >
        {children}
    </header>
));

AppBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf([
        'absolute',
        'fixed',
        'relative',
        'static',
        'sticky',
    ]),
};

export default AppBar;
