import React from 'react';
import PropTypes from 'prop-types';

const getEventName = (eventProp) => eventProp.substring(2).toLowerCase();

const ClickAwayListener = ({
    children,
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',
    onClickAway,
}) => {
    const childrenRef = React.useRef(null);

    const handleClickAway = React.useCallback((event) => {
        if (!childrenRef || !childrenRef.current) {
            return;
        }

        if (document.documentElement
            && document.documentElement.contains(event.target)
            && !childrenRef.current.contains(event.target)) {
            onClickAway(event);
        }
    }, [onClickAway]);

    React.useEffect(() => {
        if (touchEvent !== false) {
            const mappedTouchEvent = getEventName(touchEvent);

            document.addEventListener(mappedTouchEvent, handleClickAway);

            return () => {
                document.removeEventListener(mappedTouchEvent, handleClickAway);
            };
        }

        return undefined;
    }, [handleClickAway, touchEvent]);

    React.useEffect(() => {
        if (mouseEvent !== false) {
            const mappedMouseEvent = getEventName(mouseEvent);

            document.addEventListener(mappedMouseEvent, handleClickAway);

            return () => {
                document.removeEventListener(mappedMouseEvent, handleClickAway);
            };
        }

        return undefined;
    }, [handleClickAway, mouseEvent]);

    return (
        <>
            {React.cloneElement(children, { ref: childrenRef })}
        </>
    );
};

ClickAwayListener.propTypes = {
    children: PropTypes.node.isRequired,
    onClickAway: PropTypes.func.isRequired,
    mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
    touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false]),
};

export default ClickAwayListener;
