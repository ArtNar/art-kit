import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import _cn from '../../utils/cn';
import cx from 'classnames';
import { Portal } from '../Portal';

const cn = _cn('modal');

const Modal = React.forwardRef(({
    children,
    className,
    container,
    hideBackdrop,
    closeAfterTransition,
    onBackdropClick,
    onClose,
    onEscapeKeyDown,
    open,
    transitionDuration = 300,
    ...rest
}, ref) => {
    const modalRef = ref || React.useRef(null);
    const [exited, setExited] = React.useState(true);

    const hasTransition = closeAfterTransition;

    if (!open && (!hasTransition || exited)) {
        return null;
    }

    const handleBackdropClick = (event) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        if (onBackdropClick) {
            onBackdropClick(event);
        }

        if (onClose) {
            onClose(event, 'backdropClick');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key !== 'Escape') {
            return;
        }

        event.stopPropagation();

        if (onEscapeKeyDown) {
            onEscapeKeyDown(event);
        }

        if (onClose) {
            onClose(event, 'escapeKeyDown');
        }
    };

    const handleEnter = () => {
        setExited(false);
    };

    const handleExited = () => {
        setExited(true);

        if (closeAfterTransition && onClose) {
            onClose();
        }
    };

    return (
        <Portal container={container}>
            <div
                className={cx(cn(), className)}
                ref={modalRef}
                onKeyDown={handleKeyDown}
                role="presentation"
                {...rest}
            >
                {
                    hideBackdrop
                        ? null
                        : (
                            <Transition
                                in={open}
                                timeout={{
                                    enter: 1,
                                    exit: transitionDuration,
                                }}
                                onExited={handleExited}
                                onEnter={handleEnter}
                                appear
                            >
                                {(state) => (
                                    <div
                                        className={cn('backdrop', { transitionState: state })}
                                        onClick={handleBackdropClick}
                                        role="presentation"
                                    />
                                )}
                            </Transition>
                        )
                }
                {children}
            </div>
        </Portal>
    );
});

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    hideBackdrop: PropTypes.bool,
    closeAfterTransition: PropTypes.bool,
    onBackdropClick: PropTypes.func,
    onClose: PropTypes.func,
    onEscapeKeyDown: PropTypes.func,
    open: PropTypes.bool.isRequired,
    transitionDuration: PropTypes.number,
};

export default Modal;
