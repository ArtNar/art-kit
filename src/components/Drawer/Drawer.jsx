import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import _cn from '../../utils/cn';
import cx from 'classnames';

import { Modal } from '../Modal';
import { Paper } from '../Paper';

const oppositeDirection = {
    left: 'right',
    top: 'down',
};

const cn = _cn('drawer');

const Drawer = React.forwardRef(({
    className,
    anchor = 'left',
    size = 250,
    children,
    elevation = 16,
    onClose,
    open = false,
    transitionDuration = 300,
    margin = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    ...rest
}, ref) => {
    const drawerRef = ref || React.useRef(null);

    return (
        <Modal
            ref={ref}
            open={open}
            onClose={onClose}
            transitionDuration={transitionDuration}
            closeAfterTransition
            {...rest}
        >
            <Transition
                in={open}
                timeout={{
                    enter: 1,
                    exit: transitionDuration,
                }}
                appear
            >
                {(state) => (
                    <div
                        className={cx(cn({
                            transitionState: state,
                            direction: oppositeDirection[anchor],
                            size,
                            margin,
                        }), className)}
                        ref={drawerRef}
                    >
                        <Paper
                            elevation={elevation}
                            square
                        >
                            {children}
                        </Paper>
                    </div>
                )}
            </Transition>
        </Modal>
    );
});

Drawer.propTypes = {
    className: PropTypes.string,
    anchor: PropTypes.oneOf(['left', 'top']),
    children: PropTypes.node,
    elevation: PropTypes.number,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    transitionDuration: PropTypes.number,
    size: PropTypes.number,
    margin: PropTypes.shape({
        top: PropTypes.number,
        bottom: PropTypes.number,
        right: PropTypes.number,
        left: PropTypes.number,
    }),
};

export default Drawer;
