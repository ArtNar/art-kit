/* eslint-disable react/button-has-type */
import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import _cn from 'utils/cn';
import cx from 'classnames';
import { Spin } from '../Spin';
import keyboardCode from '../lib/keyboard-code';
import './style.scss';

const cn = _cn('button');

const Button = forwardRef(({
    id,
    tag,
    name,
    type,
    title,
    tabIndex,
    disabled,
    className,
    leftAddons,
    rightAddons,
    children,
    text,
    icon,
    view,
    shape,
    size,
    fluid,
    color,
    inProgress,
    checked,
    highlighted,
    padded,
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
}, ref) => {
    const isButton = tag !== 'span';

    const [pressed, setPressed] = useState();
    const [focused, setFocused] = useState();
    const [hovered, setHovered] = useState();

    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }
    };

    const handleFocus = (event) => {
        if (pressed) {
            return;
        }

        setFocused(true);

        if (onFocus) {
            onFocus(event);
        }
    };

    const handleBlur = (event) => {
        setFocused(false);

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleMouseEnter = (event) => {
        if (!disabled) {
            setHovered(true);
        }

        if (onMouseEnter) {
            onMouseEnter(event);
        }
    };

    const handleMouseLeave = (event) => {
        if (!disabled) {
            setHovered(false);
        }

        if (onMouseLeave) {
            onMouseLeave(event);
        }
    };

    const handleMouseDown = (event) => {
        if (!disabled) {
            setPressed(true);
        }

        if (onMouseDown) {
            onMouseDown(event);
        }
    };

    const handleMouseUp = (event) => {
        if (!disabled) {
            setPressed(false);
        }

        if (onMouseUp) {
            onMouseUp(event);
        }
    };

    const handleMouseOut = (event) => {
        if (!disabled) {
            setPressed(false);
        }

        if (onMouseOut) {
            onMouseOut(event);
        }
    };

    const handleKeyDown = (event) => {
        if ((event.which === keyboardCode.ENTER || event.which === keyboardCode.SPACE)
            && !disabled) {
            setPressed(true);
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    const handleKeyUp = (event) => {
        if ((event.which === keyboardCode.ENTER || event.which === keyboardCode.SPACE)
            && !disabled) {
            setPressed(false);
        }

        if (onKeyUp) {
            onKeyUp(event);
        }
    };

    const buttonContent = [
        leftAddons && (
            <span
                key="left-addons"
                className={cn('left-addons')}
            >
                { leftAddons }
            </span>
        ),
        (children || text || icon) && (
            <span
                key="content"
                className={cn('content')}
            >
                { !inProgress && icon && (
                    <span
                        key="icon"
                        className={cn('icon')}
                    >
                        { icon }
                    </span>
                ) }
                { !inProgress && (children || text) && (
                    <span
                        key="text"
                        className={cn('text', { highlighted })}
                    >
                        { children || text }
                    </span>
                ) }
                { inProgress && (
                    <Spin
                        color={view === 'default' ? 'black' : 'white'}
                        size={size}
                    />
                ) }
            </span>
        ),
        (rightAddons) && (
            <span
                key="right-addons"
                className={cn('right-addons')}
            >
                { rightAddons }
            </span>
        ),
    ];

    const buttonProps = {
        id,
        name,
        title,
        type,
        tabIndex,
        disabled,
        onClick: handleClick,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseOut: handleMouseOut,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
    };

    const styleProps = {
        disabled,
        view,
        shape,
        size,
        fluid,
        focused,
        hovered,
        pressed,
        checked,
        padded,
        color,
    };

    const renderButton = () => (
        (children || text)
            ? (
                <button
                    ref={ref}
                    className={cx(cn({
                        ...styleProps,
                    }), className)}
                    {...buttonProps}
                >
                    {buttonContent}
                </button>
            )
            : (
                <button
                    ref={ref}
                    key="icon"
                    className={cx(cn({
                        ...styleProps,
                    }), className)}
                    {...buttonProps}
                >
                    {icon}
                </button>
            )
    );

    return isButton ? (
        renderButton()
    ) : (
        <span
            ref={ref}
            className={cx(cn({
                ...styleProps,
            }), className)}
            {...buttonProps}
        >
            {buttonContent}
        </span>
    );
});

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.node,
    rightAddons: PropTypes.node,
    leftAddons: PropTypes.node,
    view: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'link']),
    shape: PropTypes.oneOf(['default', 'circle', 'round']),
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    tag: PropTypes.oneOf(['button', 'span']),
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    color: PropTypes.oneOf(['white']),
    fluid: PropTypes.bool,
    padded: PropTypes.bool,
    disabled: PropTypes.bool,
    inProgress: PropTypes.bool,
    focused: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    tabIndex: PropTypes.number,
    highlighted: PropTypes.bool,
    checked: PropTypes.bool,
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
    type: 'button',
    tag: 'button',
    size: 'm',
    view: 'default',
};

export default Button;
