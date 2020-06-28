/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { Spin } from '../Spin';

const cn = _cn('button');

const Button = forwardRef(({
    id,
    name,
    className,
    disabled,
    leftAddons,
    rightAddons,
    children,
    icon,
    onlyIcon,
    color,
    type = 'button',
    shape,
    size,
    fluid,
    outlined,
    inProgress,
    tabIndex,
    onClick,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    onMouseOut,
    onKeyDown,
    onKeyUp,
    ...rest
}, ref) => {
    const buttonContent = (
        <>
            { leftAddons && (
                <span
                    key="left-addons"
                    className={cn('item')}
                >
                    {React.isValidElement(leftAddons)
                        ? React.cloneElement(leftAddons, {
                            size: leftAddons.props?.size || size,
                        })
                        : leftAddons}
                </span>
            )}
            { children && (
                <span
                    key="text"
                    className={cn('item')}
                >
                    {React.isValidElement(children)
                        ? React.cloneElement(children, {
                            size: children.props?.size || size,
                        })
                        : children}
                </span>
            ) }
            { rightAddons && (
                <span
                    key="right-addons"
                    className={cn('item')}
                >
                    {React.isValidElement(rightAddons)
                        ? React.cloneElement(rightAddons, {
                            size: rightAddons.props?.size || size,
                        })
                        : rightAddons}
                </span>
            )}
        </>
    );

    const buttonProps = {
        id,
        name,
        tabIndex,
        disabled,
        onClick,
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
        onMouseOut,
        onKeyDown,
        onKeyUp,
    };

    return (
        <button
            {...rest}
            ref={ref}
            type={type}
            className={cx(cn({
                disabled,
                color,
                shape,
                size,
                fluid,
                outlined,
                icon,
                'only-icon': onlyIcon,
            }), className)}
            {...buttonProps}
        >
            <div
                key="content"
                className={cn('content')}
            >
                {inProgress
                    ? (
                        <Spin
                            className={cn('spin')}
                            size={size}
                        />
                    )
                    : buttonContent}
            </div>
        </button>
    );
});

Button.propTypes = {
    icon: PropTypes.bool,
    onlyIcon: PropTypes.bool,
    rightAddons: PropTypes.node,
    leftAddons: PropTypes.node,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'link',
    ]),
    shape: PropTypes.oneOf(['round', 'circle']),
    size: PropTypes.oneOf(['s', 'm', 'l']),
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    inProgress: PropTypes.bool,
    outlined: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    tabIndex: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseOut: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
};

Button.defaultProps = {
    shape: 'round',
    size: 's',
    color: 'primary',
};

export default Button;
