import React, {
    useState,
    forwardRef,
    useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = forwardRef(({
    children,
    container,
    disable,
}, ref) => {
    const [mountNode, setMountNode] = useState(null);

    useEffect(() => {
        if (!disable) {
            setMountNode(container || document.body);
        }
    }, [container, disable]);

    if (disable) {
        if (React.isValidElement(children)) {
            return React.cloneElement(children, {
                ref,
            });
        }
        return children;
    }

    return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
});

Portal.propTypes = {
    children: PropTypes.node,
    container: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(React.Component),
        PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
    ]),
    disable: PropTypes.bool,
};


export default Portal;
