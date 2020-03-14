import React from 'react';
import PropTypes from 'prop-types';

const Spin = ({
    size,
    color = 'black',
    visible,
    className,
    id,
}) => (
    <span
        id={id}
        className={className}
        styledProps={{
            size,
            visible,
            color,
        }}
    >
        <span
            styledProps={{
                size,
                visible,
                color,
            }}
        />
    </span>
);

Spin.propTypes = {
    visible: PropTypes.bool,
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    color: PropTypes.oneOf(['black', 'white']),
    id: PropTypes.string,
    className: PropTypes.string,
};

Spin.defaultProps = {
    visible: true,
    size: 'm',
};

export default Spin;
