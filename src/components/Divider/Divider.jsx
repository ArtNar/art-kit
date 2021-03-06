import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('divider');

const Divider = React.forwardRef(({
    className,
    fullWidth,
    ...rest
}, ref) => (
    <hr
        className={cx(cn({ fullWidth }), className)}
        ref={ref}
        {...rest}
    />
));

Divider.propTypes = {
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default Divider;
