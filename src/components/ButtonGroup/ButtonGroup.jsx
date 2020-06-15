import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('button-group');

const ButtonGroup = React.forwardRef(({
    children,
    className,
    type,
    disabled,
    fluid,
    size,
    ...rest
}, ref) => (
    <div
        ref={ref}
        className={cx(cn({ fluid }), className)}
        role="group"
        {...rest}
    >
        {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
                return null;
            }

            return (
                <div className={cn('item')}>
                    {React.cloneElement(child, {
                        disabled: child.props.disabled || disabled,
                        type: child.props.type || type,
                        size: child.props.size || size,
                    })}
                </div>
            );
        })}
    </div>
));

ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
    ]),
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ButtonGroup;
