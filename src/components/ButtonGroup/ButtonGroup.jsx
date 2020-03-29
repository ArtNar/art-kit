import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

const cn = _cn('button-group');

const ButtonGroup = React.forwardRef(({
    children,
    className,
    color,
    disabled,
    fluid,
    orientation,
    size,
    variant,
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

            return React.cloneElement(child, {
                disabled: child.props.disabled || disabled,
                color: child.props.color || color,
                orientation,
                size: child.props.size || size,
                variant: child.props.variant || variant,
            });
        })}
    </div>
));

ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

export default ButtonGroup;
