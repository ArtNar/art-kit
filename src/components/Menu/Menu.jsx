import React from 'react';
import PropTypes from 'prop-types';

import { Popper } from '../Popper';
import { MenuList } from '../MenuList';
import { ClickAwayListener } from '../ClickAwayListener';

const Menu = React.forwardRef(({
    autoFocus = true,
    anchorEl,
    children,
    MenuListProps = {},
    onClose,
    open,
    closeAfterTransition,
    popperOptions = {},
    popperPlacement,
    ...rest
}, ref) => {
    const menuRef = ref || React.useRef(null);

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();

            if (onClose) {
                onClose(event, 'tabKeyDown');
            }
        }
    };

    const handleClose = () => open && onClose && onClose();

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Popper
                anchorEl={anchorEl}
                popperOptions={popperOptions}
                placement={popperPlacement}
                closeAfterTransition={closeAfterTransition}
                open={open}
                ref={ref}
                {...rest}
            >
                <MenuList
                    onKeyDown={handleListKeyDown}
                    autoFocus={autoFocus}
                    ref={menuRef}
                    {...MenuListProps}
                >
                    {children}
                </MenuList>
            </Popper>
        </ClickAwayListener>
    );
});

Menu.propTypes = {
    anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    autoFocus: PropTypes.bool,
    closeAfterTransition: PropTypes.bool,
    children: PropTypes.node,
    MenuListProps: PropTypes.shape({}),
    popperPlacement: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    popperOptions: PropTypes.shape({}),
};

export default Menu;
