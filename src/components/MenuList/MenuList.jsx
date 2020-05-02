import React from 'react';
import PropTypes from 'prop-types';
import _cn from '../../utils/cn';

import { List } from '../List';
import { Paper } from '../Paper';

function nextItem(list, item, disableListWrap) {
    if (list === item) {
        return list.firstChild;
    }
    if (item && item.nextElementSibling) {
        return item.nextElementSibling;
    }
    return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
    if (list === item) {
        return disableListWrap ? list.firstChild : list.lastChild;
    }
    if (item && item.previousElementSibling) {
        return item.previousElementSibling;
    }
    return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
        return true;
    }
    let text = nextFocus.innerText;
    if (text === undefined) {
    // jsdom doesn't support innerText
        text = nextFocus.textContent;
    }
    text = text.trim().toLowerCase();
    if (text.length === 0) {
        return false;
    }
    if (textCriteria.repeating) {
        return text[0] === textCriteria.keys[0];
    }
    return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, traversalFunction, textCriteria) {
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

    while (nextFocus) {
    // Prevent infinite loop.
        if (nextFocus === list.firstChild) {
            if (wrappedOnce) {
                return false;
            }
            wrappedOnce = true;
        }
        // Move to the next element.
        if (!nextFocus.hasAttribute('tabindex')
            || nextFocus.disabled
            || nextFocus.getAttribute('aria-disabled') === 'true'
            || !textCriteriaMatches(nextFocus, textCriteria)) {
            nextFocus = traversalFunction(list, nextFocus, disableListWrap);
        } else {
            nextFocus.focus();
            return true;
        }
    }

    return false;
}

const cn = _cn('menu-list');

const MenuList = React.forwardRef(({
    autoFocus,
    children,
    onKeyDown,
    disableListWrap,
}, ref) => {
    const listRef = ref || React.useRef(null);

    React.useEffect(() => {
        if (autoFocus) {
            listRef.current.focus();
        }
    }, [autoFocus, listRef]);

    const handleKeyDown = (event) => {
        const list = listRef.current;
        const { key } = event;

        const currentFocus = document.activeElement;

        if (key === 'ArrowDown') {
            event.preventDefault();
            moveFocus(list, currentFocus, disableListWrap, nextItem);
        } else if (key === 'ArrowUp') {
            event.preventDefault();
            moveFocus(list, currentFocus, disableListWrap, previousItem);
        } else if (key === 'Home') {
            event.preventDefault();
            moveFocus(list, null, disableListWrap, nextItem);
        } else if (key === 'End') {
            event.preventDefault();
            moveFocus(list, null, disableListWrap, previousItem);
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return (
        <Paper
            ref={listRef}
            className={cn()}
            role="menu"
            onKeyDown={handleKeyDown}
            padded={false}
            elevation={1}
        >
            <List>
                {children}
            </List>
        </Paper>
    );
});

MenuList.propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    disableListWrap: PropTypes.bool,
    onKeyDown: PropTypes.func,
};

export default MenuList;
