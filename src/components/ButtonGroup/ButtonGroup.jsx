import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('button-group');

const ButtonGroup = React.forwardRef(({
    children,
    className,
    color,
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

            return React.cloneElement(child, {
                disabled: child.props.disabled || disabled,
                color: child.props.color || color,
                size: child.props.size || size,
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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ButtonGroup;
