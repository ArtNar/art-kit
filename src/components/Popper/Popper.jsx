import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import { Transition } from 'react-transition-group';
import _cn from '../../utils/cn';

import { Portal } from '../Portal';

const cn = _cn('popper');

function flipPlacement(placement) {
    switch (placement) {
    case 'bottom-end':
        return 'bottom-start';
    case 'bottom-start':
        return 'bottom-end';
    case 'top-end':
        return 'top-start';
    case 'top-start':
        return 'top-end';
    default:
        return placement;
    }
}

function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const Popper = forwardRef(({
    anchorEl,
    children,
    container,
    disablePortal,
    closeAfterTransition,
    open,
    placement: initialPlacement = 'bottom',
    popperOptions = {},
    transitionDuration = 200,
}, ref) => {
    const tooltipRef = ref || React.useRef(ref);

    const [exited, setExited] = React.useState(true);

    const hasTransition = closeAfterTransition;

    const rtlPlacement = flipPlacement(initialPlacement);

    const setRef = useCallback((node) => {
        if (!anchorEl) {
            return;
        }

        if (node) {
            createPopper(getAnchorEl(anchorEl), node, {
                placement: rtlPlacement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
                ...popperOptions,
            });
        }

        tooltipRef.current = node;
    }, [anchorEl, popperOptions, rtlPlacement, tooltipRef]);

    if (!open && (!hasTransition || exited)) {
        return null;
    }

    const handleEnter = () => {
        setExited(false);
    };

    const handleExited = () => {
        setExited(true);
    };

    return (
        <Portal disable={disablePortal} container={container}>
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
                        ref={setRef}
                        role="tooltip"
                        className={cn({ transitionState: state })}
                    >
                        {children}
                    </div>
                )}
            </Transition>
        </Portal>
    );
});

Popper.propTypes = {
    anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    disablePortal: PropTypes.bool,
    closeAfterTransition: PropTypes.bool,
    transitionDuration: PropTypes.number,
    open: PropTypes.bool.isRequired,
    placement: PropTypes.oneOf([
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
    ]),
    popperOptions: PropTypes.shape({}),
};

export default Popper;
