import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('divider');

const Divider = React.forwardRef(({
    className,
    absolute,
    flexItem,
    light,
    visibility,
    orientation = 'horizontal',
    variant,
    ...rest
}, ref) => (
    <hr
        className={cx(cn({
            absolute,
            flexItem,
            light,
            visibility,
            orientation,
            variant,
        }), className)}
        ref={ref}
        {...rest}
    />
));

Divider.propTypes = {
    absolute: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.elementType,
    flexItem: PropTypes.bool,
    role: PropTypes.string,
    light: PropTypes.bool,
    visibility: PropTypes.oneOf(['visible', 'hidden']),
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
};

export default Divider;
