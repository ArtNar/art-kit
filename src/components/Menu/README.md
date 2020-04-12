```jsx static
import { Menu } from 'artn-kit/components';
```

Menu:
```jsx
import { useState } from 'react';
import { Button } from '../Button';
import { MenuItem } from '../MenuItem';

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
        <MenuItem>
            Menu item 1
        </MenuItem>
        <MenuItem>
            Menu item 2
        </MenuItem>
        <MenuItem>
            Menu item 3
        </MenuItem>
    </Menu>
</>

```
