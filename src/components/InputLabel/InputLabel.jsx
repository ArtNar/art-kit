import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';

const cn = _cn('input-label');

const InputLabel = React.forwardRef(({
    children,
    color,
    disabled,
    error,
    focused,
    shrink,
    variant,
    htmlFor,
    ...rest
}, ref) => (
    <label
        className={cn({
            color,
            disabled,
            error,
            focused,
            shrink,
            variant,
        })}
        ref={ref}
        htmlFor={htmlFor}
        {...rest}
    >
        {children}
    </label>
));

InputLabel.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'secondary']),
    htmlFor: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    focused: PropTypes.bool,
    shrink: PropTypes.bool,
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default InputLabel;
