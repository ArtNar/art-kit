import React from 'react';
import PropTypes from 'prop-types';

import { Popper } from '../Popper';
import { MenuList } from '../MenuList';
import { ClickAwayListener } from '../ClickAwayListener';

const Menu = React.forwardRef(({
    autoFocus = true,
    anchorEl,
    children,
    onClose,
    open,
    closeAfterTransition = true,
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
                ref={ref}
                open={open}
                anchorEl={anchorEl}
                popperOptions={popperOptions}
                placement={popperPlacement}
                closeAfterTransition={closeAfterTransition}
            >
                <MenuList
                    {...rest}
                    ref={menuRef}
                    autoFocus={autoFocus}
                    onKeyDown={handleListKeyDown}
                >
                    {children}
                </MenuList>
            </Popper>
        </ClickAwayListener>
    );
});

Menu.propTypes = {
    anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    autoFocus: PropTypes.bool,
    closeAfterTransition: PropTypes.bool,
    children: PropTypes.node,
    popperPlacement: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    popperOptions: PropTypes.shape({}),
};

export default Menu;
