import React, {
    useEffect,
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { Portal } from '../Portal';

const cn = _cn('modal');

const Modal = (({
    children,
    className,
    center,
    container,
    hideBackdrop,
    closeAfterTransition = true,
    onBackdropClick,
    onRequestClose,
    onClose,
    onEscapeKeyDown,
    isOpen,
    transitionDuration = 300,
    props = {},
    ...rest
}) => {
    const [exited, setExited] = useState(true);

    const hasTransition = closeAfterTransition;

    const handleBackdropClick = useCallback((event) => {
        if (event.target !== event.currentTarget) {
            return;
        }

        if (onBackdropClick) {
            onBackdropClick(event);
        }

        if (onRequestClose) {
            onRequestClose(event, 'backdropClick');
        }
    }, [onRequestClose, onBackdropClick]);

    const handleKeyDown = useCallback((event) => {
        if (event.key !== 'Escape') {
            return;
        }

        event.stopPropagation();

        if (onEscapeKeyDown) {
            onEscapeKeyDown(event);
        }

        if (onRequestClose) {
            onRequestClose(event, 'escapeKeyDown');
        }
    }, [onRequestClose, onEscapeKeyDown]);

    const handleEnter = () => {
        setExited(false);
    };

    const handleExited = () => {
        setExited(true);

        if (closeAfterTransition && onClose) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const getChildComponent = () => {
        if (!React.isValidElement(children)) {
            return children;
        }

        return React.cloneElement(children, { ...props });
    };

    if (!isOpen && (!hasTransition || exited)) {
        return null;
    }

    return (
        <Portal container={container}>
            <div
                {...rest}
                className={cx(cn({ center }), className)}
                role="presentation"
            >
                <Transition
                    in={isOpen}
                    timeout={{
                        enter: 1,
                        exit: transitionDuration,
                    }}
                    onExited={handleExited}
                    onEnter={handleEnter}
                    appear
                >
                    {(state) => (
                        <>
                            {!hideBackdrop && (
                                <div
                                    className={cn('backdrop', { transitionState: state })}
                                    onClick={handleBackdropClick}
                                    role="presentation"
                                />
                            )}
                            <div className={cn('dialog', { transitionState: state })}>
                                {getChildComponent()}
                            </div>
                        </>
                    )}
                </Transition>
            </div>
        </Portal>
    );
});

Modal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    center: PropTypes.bool,
    container: PropTypes.shape({}),
    hideBackdrop: PropTypes.bool,
    closeAfterTransition: PropTypes.bool,
    onBackdropClick: PropTypes.func,
    onRequestClose: PropTypes.func,
    onClose: PropTypes.func,
    onEscapeKeyDown: PropTypes.func,
    isOpen: PropTypes.bool,
    transitionDuration: PropTypes.number,
    props: PropTypes.shape({}),
};

export default Modal;
