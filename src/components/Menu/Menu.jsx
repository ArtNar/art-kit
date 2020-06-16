import React from 'react';
import PropTypes from 'prop-types';

import { Popper } from '../Popper';
import { Paper } from '../Paper';
import { ClickAwayListener } from '../ClickAwayListener';

const Menu = React.forwardRef(({
    anchorEl,
    children,
    onClose,
    open,
    closeAfterTransition = true,
    popperOptions = {},
    popperPlacement,
}, ref) => {
    const menuRef = ref || React.useRef(null);

    const handleClose = () => open && onClose && onClose();

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Popper
                ref={menuRef}
                open={open}
                anchorEl={anchorEl}
                popperOptions={popperOptions}
                placement={popperPlacement}
                closeAfterTransition={closeAfterTransition}
            >
                <Paper
                    padded={false}
                    elevation={1}
                >
                    {children}
                </Paper>
            </Popper>
        </ClickAwayListener>
    );
});

Menu.propTypes = {
    anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    closeAfterTransition: PropTypes.bool,
    children: PropTypes.node,
    popperPlacement: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    popperOptions: PropTypes.shape({}),
};

export default Menu;
