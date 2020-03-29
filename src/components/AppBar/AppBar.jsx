import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { Paper } from '../Paper';

const cn = _cn('app-bar');

const AppBar = React.forwardRef(({
    className,
    position = 'fixed',
    ...rest
}, ref) => (
    <header
        position={position}
        className={cx(cn({ position }), className)}
    >
        <Paper
            elevation={4}
            square
            ref={ref}
            {...rest}
        />
    </header>
));

AppBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
};

export default AppBar;
