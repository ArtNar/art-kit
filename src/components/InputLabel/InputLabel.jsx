import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';

const cn = _cn('input-label');

const InputLabel = React.forwardRef(({
    children,
    disabled,
    error,
    htmlFor,
    ...rest
}, ref) => (
    <label
        {...rest}
        ref={ref}
        htmlFor={htmlFor}
        className={cn({
            disabled,
            error,
        })}
    >
        {children}
    </label>
));

InputLabel.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
};

export default InputLabel;
