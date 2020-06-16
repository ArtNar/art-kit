import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _cn from '../../utils/cn';

import { Popper } from '../Popper';
import { Paper } from '../Paper';
import { ClickAwayListener } from '../ClickAwayListener';

const cn = _cn('menu');

const Menu = React.forwardRef(({
    anchorEl,
    children,
    className,
    onClose,
    open,
    square,
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
                    className={cx(cn({
                        square,
                    }), className)}
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
    className: PropTypes.string,
    popperPlacement: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    square: PropTypes.bool,
    popperOptions: PropTypes.shape({}),
};

export default Menu;
