import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';
import cx from 'classnames';

import { Transition } from 'react-transition-group';
import { ClickAwayListener } from '../ClickAwayListener';
import { Alert } from '../Alert';

const cn = _cn('snackbar');

const Snackbar = React.forwardRef(({
    className,
    action,
    anchorOrigin: { vertical, horizontal } = { vertical: 'bottom', horizontal: 'center' },
    autoHideDuration = null,
    children,
    message,
    onClose,
    onMouseEnter,
    onMouseLeave,
    type,
    transitionDuration = 200,
    ...rest
}, ref) => {
    const timerAutoHide = React.useRef();
    const [open, setOpen] = React.useState(true);
    const [exited, setExited] = React.useState(true);

    const handleClose = React.useCallback((...args) => {
        setOpen(false);

        if (onClose) {
            onClose(...args);
        }
    }, [onClose]);

    const setAutoHideTimer = React.useCallback((autoHideDurationParam) => {
        if (autoHideDurationParam == null) {
            return;
        }

        clearTimeout(timerAutoHide.current);

        timerAutoHide.current = setTimeout(() => {
            handleClose(null, 'timeout');
        }, autoHideDurationParam);
    }, [timerAutoHide, handleClose]);

    React.useEffect(() => {
        if (open) {
            setAutoHideTimer(autoHideDuration);
        }

        return () => {
            clearTimeout(timerAutoHide.current);
        };
    }, [open, autoHideDuration, setAutoHideTimer]);

    // Pause the timer when the user is interacting with the Snackbar
    // or when the user hide the window.
    const handlePause = () => {
        clearTimeout(timerAutoHide.current);
    };

    // Restart the timer when the user is no longer interacting with the Snackbar
    // or when the window is shown back.
    const handleResume = React.useCallback(() => {
        if (autoHideDuration != null) {
            setAutoHideTimer(autoHideDuration * 0.5);
        }
    }, [autoHideDuration, setAutoHideTimer]);

    const handleMouseEnter = (event) => {
        if (onMouseEnter) {
            onMouseEnter(event);
        }
        handlePause();
    };

    const handleMouseLeave = (event) => {
        if (onMouseLeave) {
            onMouseLeave(event);
        }
        handleResume();
    };

    const handleClickAway = (event) => {
        if (onClose) {
            onClose(event, 'clickAway');
        }
    };

    const handleExited = () => {
        setExited(true);
    };

    const handleEnter = () => {
        setExited(false);
    };

    const renderContent = () => (
        <Alert
            action={action}
            type={type}
            ref={ref}
            onClose={handleClose}
        >
            <div>{message}</div>
        </Alert>
    );

    React.useEffect(() => {
        if (open) {
            window.addEventListener('focus', handleResume);
            window.addEventListener('blur', handlePause);

            return () => {
                window.removeEventListener('focus', handleResume);
                window.removeEventListener('blur', handlePause);
            };
        }

        return undefined;
    }, [handleResume, open]);

    if (!open && exited) {
        return null;
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div
                className={cx(cn({
                    vertical,
                    horizontal,
                }), className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={ref}
                {...rest}
            >
                <Transition
                    appear
                    in={open}
                    timeout={{
                        enter: 1,
                        exit: transitionDuration,
                    }}
                    onExited={handleExited}
                    onEnter={handleEnter}
                >
                    {children || renderContent()}
                </Transition>
            </div>
        </ClickAwayListener>
    );
});

Snackbar.propTypes = {
    className: PropTypes.string,
    action: PropTypes.node,
    anchorOrigin: PropTypes.shape({
        horizontal: PropTypes.oneOf(['left', 'center']).isRequired,
        vertical: PropTypes.oneOf(['bottom']).isRequired,
    }),
    autoHideDuration: PropTypes.number,
    children: PropTypes.element,
    message: PropTypes.node,
    onClose: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    open: PropTypes.bool,
    transitionDuration: PropTypes.number,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default Snackbar;
