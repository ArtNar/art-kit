import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';

const cn = _cn('input-helper-text');

const InputHelperText = React.forwardRef(({
    disabled,
    error,
    children,
    ...rest
}, ref) => (
    <p
        {...rest}
        ref={ref}
        className={cn({
            disabled,
            error,
        })}
    >
        {children === ' ' ? (
            // eslint-disable-next-line react/no-danger
            <span dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
        ) : (
            children
        )}
    </p>
));

InputHelperText.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
};

export default InputHelperText;
