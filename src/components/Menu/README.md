```jsx static
import { Menu } from 'artn-kit/components';
```

Menu:
```jsx
import { useState } from 'react';
import { Button } from '../Button';
import { MenuItem } from '../MenuItem';
import { MenuList } from '../MenuList';
import { HomeIcon } from '../Icons';

const [buttonEl, setButtonEl] = useState(null);

<>
    <Button
        onClick={(event) => setButtonEl(buttonEl ? null : event.currentTarget)}
    >
        Show Menu
    </Button>
    <Menu
        anchorEl={buttonEl}
        placement="bottom-start"
        open={Boolean(buttonEl)}
        onClose={() => setButtonEl(null)}
    >
        <MenuList title="Group title">
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
        <MenuList title="Group title">
            {[...Array(3).fill()].map((_, i) => (
                <MenuItem
                    key={i}
                >
                    {`Menu item ${i + 1}`}
                </MenuItem>
                )
            )}
        </MenuList>
    </Menu>
</>

```
