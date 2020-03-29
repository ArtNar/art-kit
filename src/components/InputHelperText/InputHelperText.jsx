import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('input-helper-text');

const InputHelperText = React.forwardRef(({
    disabled,
    error,
    ...rest
}, ref) => (
    <p
        className={cx(cn({
            disabled,
            error: !!error,
        }))}
        ref={ref}
        {...rest}
    >
        {error === ' ' ? (
            // eslint-disable-next-line react/no-danger
            <span dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
        ) : (
            error
        )}
    </p>
));

InputHelperText.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
};

export default InputHelperText;
