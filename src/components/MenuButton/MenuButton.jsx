import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

const cn = _cn('menu-button');

const MenuButton = React.forwardRef(({
    className,
    onClick,
    open,
    children,
}, ref) => {
    const handleClick = (e) => onClick && onClick(e);

    return (
        <div
            ref={ref}
            className={cx(cn(), className)}
            onClick={handleClick}
            onKeyDown={handleClick}
            role="button"
            tabIndex={0}
        >
            <div className={cn('label')}>{children}</div>
            <span className={cn('arrow', { open })} />
        </div>
    );
});

MenuButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    open: PropTypes.bool,
    children: PropTypes.node,
};

export default MenuButton;
