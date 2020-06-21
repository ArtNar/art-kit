```jsx static
import { MenuButton } from 'artn-kit/components';
```

MenuButton:
```jsx
import { useState } from 'react';
import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { MenuList } from '../MenuList';
import { HomeIcon } from '../Icons';

const [buttonEl, setButtonEl] = useState(null);

<>
    <MenuButton
        open={Boolean(buttonEl)}
        onClick={(event) => setButtonEl(buttonEl ? null : event.currentTarget)}
    >
        Show Menu
    </MenuButton>
    <Menu
        anchorEl={buttonEl}
        placement="bottom-start"
        open={Boolean(buttonEl)}
        onClose={() => setButtonEl(null)}
    >
        <MenuList>
            {[...Array(3).fill()].map((_, i) => (
                <MenuItem
                    key={i}
                    icon={<HomeIcon />}
                >
                    {`Menu item ${i + 1}`}
                </MenuItem>
                )
            )}
        </MenuList>
    </Menu>
</>
