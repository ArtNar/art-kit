import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { Modal } from '../Modal';
import { Paper } from '../Paper';

const DIRECTION_RIGHT = 'right';
const DIRECTION_DOWN = 'down';

const oppositeDirection = {
    left: DIRECTION_RIGHT,
    top: DIRECTION_DOWN,
};

const cn = _cn('drawer');

const Drawer = React.forwardRef(({
    className,
    anchor = 'left',
    children,
    onClose,
    open,
    size = 250,
    transitionDuration = 300,
    ...rest
}, ref) => {
    const drawerRef = ref || React.useRef(null);
    const direction = oppositeDirection[anchor];

    const getDrawerStyles = (state) => {
        const entered = state === 'entered';

        switch (direction) {
        case DIRECTION_RIGHT:
            return {
                height: '100%',
                transform: entered ? 'translate(0, 0)' : `translateX(-${size}px)`,
                width: size,
            };
        case DIRECTION_DOWN:
            return {
                width: '100%',
                transform: entered ? 'translate(0, 0)' : `translateY(-${size}px)`,
                height: size,
            };
        default:
            return {};
        }
    };

    return (
        <Modal
            {...rest}
            ref={ref}
            open={open}
            onClose={onClose}
            transitionDuration={transitionDuration}
            closeAfterTransition
        >
            <Transition
                in={open}
                timeout={{
                    enter: 1,
                    exit: transitionDuration,
                }}
                appear
            >
                {(state) => {
                    const styles = getDrawerStyles(state);

                    return (
                        <div
                            ref={drawerRef}
                            className={cx(cn(), className)}
                            style={styles}
                        >
                            <Paper
                                square
                                fluid
                            >
                                {children}
                            </Paper>
                        </div>
                    );
                }}
            </Transition>
        </Modal>
    );
});

Drawer.propTypes = {
    className: PropTypes.string,
    anchor: PropTypes.oneOf(['left', 'top']),
    children: PropTypes.node,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    size: PropTypes.number,
    transitionDuration: PropTypes.number,
};

export default Drawer;
