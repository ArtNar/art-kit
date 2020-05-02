import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';
import { Spin } from '../Spin';

const cn = _cn('button');

const Button = forwardRef(({
    id,
    name,
    type = 'button',
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
        <div
            key="content"
            className={cn('content')}
        >
            { inProgress
                ? (
                    <Spin
                        color={view === 'default' ? 'black' : 'white'}
                        size={size}
                    />
                )
                : (
                    <>
                        { leftAddons && (
                            <span
                                key="left-addons"
                            >
                                { leftAddons }
                            </span>
                        )}
                        { icon && (
                            <span
                                key="icon"
                                className={cn('icon')}
                            >
                                { icon }
                            </span>
                        ) }
                        { (children || text) && (
                            <span
                                key="text"
                                className={cn('text')}
                            >
                                { children || text }
                            </span>
                        ) }
                        { rightAddons && (
                            <span
                                key="right-addons"
                            >
                                { rightAddons }
                            </span>
                        )}
                    </>
                )}
        </div>
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
        // eslint-disable-next-line react/button-has-type
        <button
            {...rest}
            ref={ref}
            type={type}
            className={cx(cn({
                disabled,
                view,
                shape,
                size,
                fluid,
                color,
            }), className)}
            {...buttonProps}
        >
            {buttonContent}
        </button>
    );
});

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.node,
    rightAddons: PropTypes.node,
    leftAddons: PropTypes.node,
    view: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'link']),
    shape: PropTypes.oneOf(['default', 'circle', 'round']),
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    color: PropTypes.oneOf(['white']),
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    inProgress: PropTypes.bool,
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
    size: 'm',
    view: 'default',
};

export default Button;
